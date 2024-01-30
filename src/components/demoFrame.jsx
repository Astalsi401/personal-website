import { useState, useEffect, useRef } from "react";
import { toggleActive } from "./functions";

export function DemoFrame({ src }) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [fullPage, setFullPage] = useState(false);
  const handleMessage = ({ data, source }) => {
    if (source === iframeRef.current.contentWindow && data.height) setHeight(data.height);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setFullPage((prev) => {
      let newState = !prev;
      document.body.style.overflowY = newState ? "hidden" : "auto";
      return newState;
    });
  };
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  return (
    <div className="demo-frame my-2 p-2 pt-0">
      <a href="#" className={`full-page mb-1 ps-1 pe-3 d-block position-relative float-end text-small text-primary ${toggleActive(fullPage)}`} onClick={handleClick}>
        {fullPage ? "Close" : "Full Page"}
      </a>
      <iframe className={`w-100 bg-main-bg ${toggleActive(fullPage)}`} style={{ height: height }} src={src} ref={iframeRef} />
    </div>
  );
}
