import { useState, useEffect, useRef } from "react";
import { isActive } from "@functions";

export const DemoFrame: React.FC<{ src: string }> = ({ src }) => {
  const iframeRef = useRef<null | HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [fullPage, setFullPage] = useState<boolean>(false);
  const handleMessage = ({ data, source }: MessageEvent) => source === iframeRef.current?.contentWindow && data.height && setHeight(data.height);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      <a href="#" className={`full-page mb-1 ps-2 pe-4 d-block position-relative float-end text-small text-primary ${isActive(fullPage)}`} onClick={handleClick}>
        {fullPage ? "Close" : "Full Page"}
      </a>
      <iframe className={`w-100 ${isActive(fullPage)}`} style={{ height: height }} src={src} ref={iframeRef} />
    </div>
  );
};
