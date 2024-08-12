import { useState, useRef, useEffect } from "react";
import { isActive } from "@functions";

type ZoomImageProps = {
  id?: string;
  className?: string;
  src: string;
  alt?: string;
};

export const ZoomImage: React.FC<ZoomImageProps> = ({ id, className, src, alt }) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<null | HTMLImageElement>(null);
  const zoom = () =>
    setActive((prev) => {
      const newState = !prev;
      const overflow = document.querySelector(".overflow-auto"); // 檢查圖片是否在overflow的元素內
      if (ref.current && overflow && overflow.contains(ref.current)) ref.current.style.position = newState ? "absolute" : "relative";
      document.body.style.overflowY = newState ? "hidden" : "auto";
      return newState;
    });
  const handleResize = () => setActive(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const elem = ref.current && ref.current.getBoundingClientRect();
  const scale = elem ? Math.min(window.innerWidth / elem.width, window.innerHeight / elem.height) : 1;
  const translate = elem ? `${(window.innerWidth / 2 - elem.x) / scale - elem.width / 2}px, ${(window.innerHeight / 2 - elem.y) / scale - elem.height / 2}px` : "0,0";
  const imgSty = { transform: active ? `scale(${scale}) translate(${translate})` : "scale(1) translate(0)" };
  return (
    <>
      <div id={id && id} className={`${className ? className : ""} img-block ${isActive(active)}`} onClick={zoom}>
        <img ref={ref} className="w-100 position-relative" loading="lazy" src={src} alt={alt && alt} style={imgSty} />
      </div>
      <div className="modal-bg" onClick={zoom}></div>
    </>
  );
};
