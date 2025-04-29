import { useState, useEffect } from "react";
import { imgGallaryHeight, useAppDispatch, useAppSelector, updateStore } from "@store";
import { clsx } from "@functions";

export const ImageGallary: React.FC = () => {
  const [imgs, setImgs] = useState<string[]>([]);
  const imgGalaryActive = useAppSelector((state) => state.imgGalaryActive);
  const imgGalarySrc = useAppSelector((state) => state.imgGalarySrc);
  const dispatch = useAppDispatch();
  const handleClick = (src: string) => dispatch(updateStore({ imgGalarySrc: src }));
  useEffect(() => {
    setImgs([...document.querySelectorAll<HTMLImageElement>(".img-block img")].map((img): string => img.src));
  }, []);
  return (
    <>
      {imgGalaryActive && (
        <div className="img-galary-show" style={{ "--img-galary-height": `${imgGallaryHeight}px` } as React.CSSProperties}>
          <img className="d-block w-100 h-100 object-fit-contain" src={imgGalarySrc} alt="" />
        </div>
      )}
      <div className={clsx("img-galary d-flex flex-nowrap align-items-center overflow-auto", !imgGalaryActive && "d-none")} style={{ "--img-galary-height": `${imgGallaryHeight}px` } as React.CSSProperties}>
        {imgs.map((src) => (
          <div key={src}>
            <img className="d-block w-100 h-100 object-fit-contain" key={src} src={src} loading="lazy" onClick={() => handleClick(src)} />
          </div>
        ))}
      </div>
    </>
  );
};
