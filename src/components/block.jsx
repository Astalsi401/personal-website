import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStore } from "../assets/store";

export function Block({ className, title, titleClass, id, children }) {
  const dispatch = useDispatch();
  const currentPostTitles = useSelector((state) => state.currentPostTitles);
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const navHeight = 60;
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s) => ({ title: s.title, active: s.title === title })) }));
    });
  };
  const handleResize = () => setHeight(window.innerHeight - navHeight);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 0, rootMargin: `-${navHeight}px 0px -${height}px` });
    ref.current && currentPostTitles.length > 0 && observer.observe(ref.current);
    return () => ref.current && currentPostTitles.length > 0 && observer.disconnect(ref.current);
  }, [ref.current, currentPostTitles.length, height]);
  return (
    <section className={`my-4 ${className ? className : ""}`}>
      {title && (
        <h3 ref={ref} id={id} className={`mt-3 ${titleClass ? titleClass : ""}`}>
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
