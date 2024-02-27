import Prism from "prismjs";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-scss.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-stata.min";
import "prismjs/components/prism-r.min";
import "prismjs/components/prism-ini.min";
import "prismjs/components/prism-shell-session.min";
import "prismjs/components/prism-yaml.min";
import "prismjs/themes/prism-okaidia.min.css";
import { useState, useEffect } from "react";
import { isActive } from "./functions";

export function CodeChunk({ code, lang, path }) {
  const [codeTxt, setCodeTxt] = useState(code);
  const [active, setActive] = useState(false);
  const [fileName, setFileName] = useState(null);
  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(codeTxt);
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };
  const fetchCode = async () => {
    const data = await fetch(path).then((res) => res.text());
    setFileName(path.split("/").pop());
    setCodeTxt(data);
  };
  useEffect(() => {
    if (path) fetchCode();
  }, [path]);
  useEffect(() => {
    Prism.highlightAll();
  }, [codeTxt]);
  return (
    <pre className="my-2 p-2 pt-4 position-relative">
      {fileName && <span className="position-absolute ps-1 top-0 start-0 text-small text-gray">{fileName}</span>}
      <a href="#" className={`copy-btn d-block position-absolute text-black ${isActive(active)}`} onClick={copy}>
        <svg viewBox="0 0 10 10">
          <path fill="none" d="M4.5 1 L7.5 1 Q8.5 1,8.5 2 L8.5 6 Q8.5 7,7.5 7 L4.5 7 Q3.5 7,3.5 6 L3.5 2 Q3.5 1,4.5 1" />
          <path fill="none" d="M2.5 3 L5.5 3 Q6.5 3,6.5 4 L6.5 8 Q6.5 9,5.5 9 L2.5 9 Q1.5 9,1.5 8 L1.5 4 Q1.5 3,2.5 3" />
        </svg>
      </a>
      <code children={codeTxt} className={`lang-${lang} d-block overflow-auto`} />
    </pre>
  );
}
