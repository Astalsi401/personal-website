import { useState, useRef, useEffect, useMemo } from "react";
import { clsx, isActive } from "@functions";
import { imgGallaryHeight, updateStore, useAppDispatch, useAppSelector } from "@store";
import type { ZoomImageProps } from "@/types";

export const ZoomImage: React.FC<ZoomImageProps> = ({ id, className, src, alt }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<null | HTMLImageElement>(null);
  const [active, setActive] = useState<boolean>(false);
  const imgGalarySrc = useAppSelector((state) => state.imgGalarySrc);
  const imgSty = useMemo(() => {
    const elem = ref.current && ref.current.getBoundingClientRect();
    const height = window.innerHeight - imgGallaryHeight;
    const scale = elem ? Math.min(window.innerWidth / elem.width, height / elem.height) : 1;
    const translate = elem ? `${(window.innerWidth / 2 - elem.x) / scale - elem.width / 2}px, ${(height / 2 - elem.y) / scale - elem.height / 2}px` : "0,0";
    return { transform: active ? `scale(${scale}) translate(${translate})` : "scale(1) translate(0)" };
  }, [active]);
  const zoom = () => {
    setActive((prev) => {
      const newState = !prev;
      const overflow = document.querySelector(".overflow-auto"); // 檢查圖片是否在overflow的元素內
      if (ref.current && overflow && overflow.contains(ref.current)) ref.current.style.position = newState ? "absolute" : "relative";
      document.body.style.overflowY = newState ? "hidden" : "auto";
      return newState;
    });
  };
  const handleResize = () => {
    setActive(false);
    dispatch(updateStore({ imgGalaryActive: false, imgGalarySrc: "" }));
  };
  useEffect(() => {
    dispatch(updateStore({ imgGalaryActive: active, imgGalarySrc: active ? src : "" }));
  }, [active]);
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("resize", handleResize, { signal: controller.signal });
    return () => controller.abort();
  }, []);
  return (
    <>
      <div id={id && id} className={clsx(className ? className : "my-2", "img-block", isActive(active))} onClick={zoom}>
        <img ref={ref} className={clsx("w-100 position-relative", isActive((imgGalarySrc.match(src) || []).length > 0))} loading="lazy" src={src} alt={alt && alt} style={imgSty} />
      </div>
      {active && <div className="modal-bg" style={{ "--img-galary-height": `${imgGallaryHeight}px` } as React.CSSProperties} onClick={zoom} />}
    </>
  );
};
