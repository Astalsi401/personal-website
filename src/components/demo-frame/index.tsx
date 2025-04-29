import { useState, useEffect, useRef } from "react";
import { clsx, isActive } from "@functions";
import type { DemoFrameProps } from "@types";

export const DemoFrame: React.FC<DemoFrameProps> = ({ src, html, cssHref, js, lib }) => {
  const iframeRef = useRef<null | HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [fullPage, setFullPage] = useState<boolean>(false);
  const handleMessage = ({ data, source }: MessageEvent) => source === iframeRef.current?.contentWindow && data.height && setHeight(data.height);
  const iFrameLoad = ({ data, source }: MessageEvent) => !src && source === iframeRef.current?.contentWindow && data.load && iframeRef.current.contentWindow?.postMessage({ html, cssHref, js });
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setFullPage((prev) => {
      const newState = !prev;
      document.body.style.overflowY = newState ? "hidden" : "auto";
      return newState;
    });
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    window.addEventListener("message", iFrameLoad, { signal });
    window.addEventListener("message", handleMessage, { signal });
    return () => controller.abort();
  }, []);
  return (
    <div className="demo-frame my-2 p-2 pt-0">
      <a href="#" className={clsx("full-page mb-1 ps-2 pe-4 d-block position-relative float-end text-small text-primary", isActive(fullPage))} onClick={handleClick}>
        {fullPage ? "Close" : "Full Page"}
      </a>
      <iframe className={clsx("w-100 border-0", isActive(fullPage))} style={{ height }} src={src ? src : `${import.meta.env.BASE_URL}/assets/demo-files/index-${lib ? lib : ""}.html`} ref={iframeRef} loading="lazy" />
    </div>
  );
};
