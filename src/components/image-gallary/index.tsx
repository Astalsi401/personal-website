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
        <div className="img-galary-show position-fixed" style={{ "--img-galary-height": `${imgGallaryHeight}px` } as React.CSSProperties}>
          <img className="d-block w-100 h-100 object-fit-contain" src={imgGalarySrc} alt="" />
        </div>
      )}
      <div className={clsx("img-galary position-fixed bg-white-600 d-flex flex-nowrap g-2 align-items-center overflow-auto", !imgGalaryActive && "d-none")} style={{ "--img-galary-height": `${imgGallaryHeight}px` } as React.CSSProperties}>
        {imgs.map((src) => (
          <div key={src} className="pointer ratio-16by9 flex-shrink-0" style={{ width: 150 }}>
            <img className="d-block w-100 h-100 object-fit-contain" src={src} loading="lazy" onClick={() => handleClick(src)} />
          </div>
        ))}
      </div>
    </>
  );
};
