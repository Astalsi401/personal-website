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
import type { CodeChunkProps, CodeInfo } from "@/types";

export const CodeChunk: React.FC<CodeChunkProps> = ({ code, lang, path }) => {
  const [{ code: codeTxt, fileName, loading }, setCodeInfo] = useState<CodeInfo>({ code, loading: false, fileName: "" });
  const fetchCode = async ({ signal }: AbortController) => {
    if (!path) return;
    setCodeInfo((prev) => ({ ...prev, loading: true }));
    const fileName = path.split("/").pop() as string;
    const code = await fetch(path, { signal })
      .then((res) => res.text())
      .catch(() => "Request Aborted!");
    setCodeInfo({ code, fileName, loading: false });
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
