import * as sass from "sass";
import { useState, useEffect, useRef } from "react";
import { clsx, isActive } from "@functions";
import { LoadingComponent } from "@ui/loading";

export type DemoFrameProps = { src?: string; html?: string; scssHref?: string; js?: string[]; lib?: "react" | "d3js" | "jquery" | "leaflet"; template?: "grid-center" | "flex-center"; bgColor?: string };

export const DemoFrame: React.FC<DemoFrameProps> = ({ src, html, scssHref, js, lib, template, bgColor = "none" }) => {
  const iframeRef = useRef<null | HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [rendered, setRendered] = useState<boolean>(false);
  const [fullPage, setFullPage] = useState<boolean>(false);
  const handleMessage = async ({ data, source }: MessageEvent) => {
    if (source !== iframeRef.current?.contentWindow || src) return;
    if (data.load) {
      const { css } = scssHref ? await sass.compileStringAsync(await fetch(scssHref).then((res) => res.text())) : { css: "" };
      const templateCss = template ? await fetch(`${import.meta.env.BASE_URL}/assets/demo-files/templates/${template}.css`).then((res) => res.text()) : null;
      iframeRef.current.contentWindow?.postMessage({ html, css, js, templateCss, bgColor });
    } else if (data.rendered) {
      setRendered(data.rendered);
      setHeight(data.height);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setFullPage((prev) => {
      document.body.style.overflowY = !prev ? "hidden" : "auto";
      return !prev;
    });
  };
  const handleSrcIframe = () => {
    if (!src) return;
    setRendered(true);
    setHeight(200);
  };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    iframeRef.current?.addEventListener("load", handleSrcIframe, { once: true, signal });
    window.addEventListener("message", handleMessage, { signal });
    return () => controller.abort();
  }, []);
  return (
    <div className="demo-frame my-2 p-2 pt-0 position-relative rounded-1 border-solid border-1 bd-primary-300">
      <a href="#" className={clsx("full-page mb-1 ps-2 pe-4 d-block position-relative float-end text-small text-primary text-decoration-none w-max", isActive(fullPage))} onClick={handleClick}>
        {fullPage ? "Close" : "Full Page"}
      </a>
      {!rendered && <LoadingComponent className="mt-5" />}
      <iframe className={clsx("w-100 border-0 bg-code-text", isActive(fullPage))} style={{ height }} src={src ? src : `${import.meta.env.BASE_URL}/assets/demo-files/index-${lib ? lib : ""}.html`} ref={iframeRef} loading="lazy" />
    </div>
  );
};
