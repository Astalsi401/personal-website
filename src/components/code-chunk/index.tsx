import Prism from "prismjs";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-typescript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-tsx.min";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-stata.min";
import "prismjs/components/prism-r.min";
import "prismjs/components/prism-ini.min";
import "prismjs/components/prism-shell-session.min";
import "prismjs/components/prism-yaml.min";
import "prismjs/components/prism-bash.min";
import "prismjs/components/prism-mongodb.min";
import "prismjs/components/prism-go.min";
import "prismjs/components/prism-go-module.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-docker.min";
import "prismjs/themes/prism-okaidia.min.css";
import { useState, useEffect } from "react";
import { CopyCode } from "@ui/button";
import { LoadingComponent } from "@ui/loading";
import { useLocalStorage } from "@/hooks/use-local-storage";

type CodeInfo = { code: string | undefined; loading: boolean; fileName: string };
type CodeChunkProps = { code?: string; lang?: string; path?: string };

const isGitHubPath = (path: string) => path.startsWith("https://github.com/");
const gitApi = async (url: string, signal: AbortSignal) => {
  try {
    const [, , , owner, repo, , , ...pathStr] = url.split("/");
    const path = pathStr.join("/");
    const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const { sha } = await fetch(`${repoUrl}/contents/${path}`, { signal }).then((res) => res.json());
    const { content } = await fetch(`${repoUrl}/git/blobs/${sha}`, { signal }).then((blob) => blob.json());
    return atob(content);
  } catch (error) {
    return "Request Aborted!";
  }
};
const normalFetch = async (path: string, signal: AbortSignal) =>
  await fetch(path, { signal })
    .then((res) => res.text())
    .catch(() => "Request Aborted!");

export const CodeChunk: React.FC<CodeChunkProps> = ({ code, lang, path }) => {
  const [{ code: codeTxt, fileName, loading }, setCodeInfo] = useState<CodeInfo>({ code, loading: false, fileName: "" });
  const [cachedCode, setCachedCode] = useLocalStorage<string | null>(path || "", null, { expired: 12 * 60 * 60 });
  const fetchCode = async ({ signal }: AbortController) => {
    if (!path) return;
    let res = cachedCode;
    setCodeInfo((prev) => ({ ...prev, loading: true }));
    const fileName = path.split("/").pop() as string;
    if (res === null) {
      res = isGitHubPath(path) ? await gitApi(path, signal) : await normalFetch(path, signal);
      setCachedCode(res);
    }
    setCodeInfo({ code: res, fileName, loading: false });
  };
  useEffect(() => {
    const abortItem = new AbortController();
    fetchCode(abortItem);
    return () => abortItem.abort();
  }, []);
  useEffect(() => Prism.highlightAll(), [codeTxt]);
  return (
    <pre className="my-2 p-2 pt-4 position-relative text-small bg-code-bg">
      {fileName.length > 0 && <span className="position-absolute ps-1 top-0 start-0 text-small text-gray">{fileName}</span>}
      <CopyCode action={() => navigator.clipboard.writeText(codeTxt || "")} />
      {loading ? <LoadingComponent /> : <code children={codeTxt} className={`lang-${lang} d-block overflow-auto py-0 px-1 bg-code-bg`} />}
    </pre>
  );
};
