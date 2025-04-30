import { useState, useEffect, useRef } from "react";
import { clsx, isActive } from "@functions";
import type { DemoFrameProps } from "@/types";

export const DemoFrame: React.FC<DemoFrameProps> = ({ src, html, cssHref, js, lib }) => {
  const iframeRef = useRef<null | HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [fullPage, setFullPage] = useState<boolean>(false);
  const handleMessage = ({ data, source }: MessageEvent) => {
    if (source !== iframeRef.current?.contentWindow) return;
    data.height && setHeight(data.height);
    !src && data.load && iframeRef.current.contentWindow?.postMessage({ html, cssHref, js });
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setFullPage((prev) => {
      document.body.style.overflowY = !prev ? "hidden" : "auto";
      return !prev;
    });
  };
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("message", handleMessage, { signal: controller.signal });
    return () => controller.abort();
  }, []);
  return (
    <div className="demo-frame my-2 p-2 pt-0 position-relative rounded-1 border-solid border-1 bd-primary-300">
      <a href="#" className={clsx("full-page mb-1 ps-2 pe-4 d-block position-relative float-end text-small text-primary text-decoration-none w-max", isActive(fullPage))} onClick={handleClick}>
        {fullPage ? "Close" : "Full Page"}
      </a>
      <iframe className={clsx("w-100 border-0 bg-code-text", isActive(fullPage))} style={{ height }} src={src ? src : `${import.meta.env.BASE_URL}/assets/demo-files/index-${lib ? lib : ""}.html`} ref={iframeRef} loading="lazy" />
    </div>
  );
};
