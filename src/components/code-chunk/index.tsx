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
import { useState, useEffect, useTransition } from "react";
import { CopyCode } from "@ui/button";
import { LoadingComponent } from "@ui/loading";
import { useLocalStorage } from "@/hooks/use-local-storage";

type CodeInfo = { code: string | undefined; fileName: string };
type CodeChunkProps = { code?: string; lang?: string; path?: string };

const abortedMessage = "Request Aborted!";

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
    return abortedMessage;
  }
};
const normalFetch = async (path: string, signal: AbortSignal) =>
  await fetch(path, { signal })
    .then((res) => res.text())
    .catch(() => abortedMessage);

export const CodeChunk: React.FC<CodeChunkProps> = ({ code, lang, path }) => {
  const [isPending, startTransition] = useTransition();
  const [{ code: codeTxt, fileName }, setCodeInfo] = useState<CodeInfo>({ code, fileName: "" });
  const [cachedCode, setCachedCode] = useLocalStorage<string | null>(path || "", null, { expired: 12 * 60 * 60 });
  const fetchCode = async ({ signal }: AbortController) => {
    if (!path) return;
    let res = cachedCode;
    const fileName = path.split("/").pop() || "";
    if (res === null) {
      res = isGitHubPath(path) ? await gitApi(path, signal) : await normalFetch(path, signal);
      setCachedCode(res);
    }
    setCodeInfo({ code: res, fileName });
  };
  useEffect(() => {
    const abortItem = new AbortController();
    startTransition(async () => await fetchCode(abortItem));
    return () => abortItem.abort();
  }, []);
  useEffect(() => {
    codeTxt && codeTxt !== abortedMessage && !isPending && Prism.highlightAll();
  }, [codeTxt, isPending]);
  return (
    <pre className="my-2 p-2 pt-4 position-relative text-small bg-code-bg">
      {fileName.length > 0 && <span className="position-absolute ps-1 top-0 start-0 text-small text-gray">{fileName}</span>}
      <CopyCode action={() => navigator.clipboard.writeText(codeTxt || "")} />
      {isPending ? <LoadingComponent /> : <code children={codeTxt} className={`lang-${lang} d-block overflow-auto py-0 px-1 bg-code-bg`} />}
    </pre>
  );
};
