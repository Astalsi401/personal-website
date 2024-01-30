import { useState, useRef, useEffect } from "react";
import { toggleActive } from "./functions";

export function ZoomImage({ id, className, src, alt }) {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const zoom = ({ target }) =>
    setActive((prev) => {
      let newState = !prev;
      let overflow = document.querySelector(".overflow-auto");
      if (overflow && overflow.contains(target)) target.style.position = newState ? "absolute" : "relative";
      document.body.style.overflowY = newState ? "hidden" : "auto";
      return newState;
    });
  const handleResize = () => setActive(false);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let elem = ref.current && ref.current.getBoundingClientRect();
  let scale = elem ? Math.min(window.innerWidth / elem.width, window.innerHeight / elem.height) : 1;
  let translate = elem ? `${(window.innerWidth / 2 - elem.x) / scale - elem.width / 2}px, ${(window.innerHeight / 2 - elem.y) / scale - elem.height / 2}px` : "0,0";
  let imgSty = { transform: active ? `scale(${scale}) translate(${translate})` : "scale(1) translate(0)" };
  return (
    <div id={id && id} className={`${className ? className : ""} img-block ${toggleActive(active)}`}>
      <img ref={ref} className="w-100 position-relative" loading="lazy" src={src} alt={alt && alt} style={imgSty} onClick={zoom} />
    </div>
  );
}
