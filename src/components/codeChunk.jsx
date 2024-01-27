import Prism from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-stata";
import "prismjs/themes/prism.min.css";
import { useState, useEffect } from "react";
import { toggleActive } from "./functions";

export default function CodeChunk({ code, lang }) {
  const [active, setActive] = useState(false);
  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };
  useEffect(() => Prism.highlightAll(), []);
  return (
    <pre className="my-2 p-2 position-relative">
      <a href="#" className={`copy-btn d-block position-absolute text-white ${toggleActive(active)}`} onClick={copy}>
        <svg viewBox="0 0 10 10">
          <path stroke="white" fill="none" d="M4.5 1 L7.5 1 Q8.5 1,8.5 2 L8.5 6 Q8.5 7,7.5 7 L4.5 7 Q3.5 7,3.5 6 L3.5 2 Q3.5 1,4.5 1" />
          <path stroke="white" fill="none" d="M2.5 3 L5.5 3 Q6.5 3,6.5 4 L6.5 8 Q6.5 9,5.5 9 L2.5 9 Q1.5 9,1.5 8 L1.5 4 Q1.5 3,2.5 3" />
        </svg>
      </a>
      <code children={code} className={`lang-${lang} d-block overflow-auto`} />
    </pre>
  );
}
