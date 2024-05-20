import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import store, { updateStore } from "../assets/store";

export const Block = ({ className, title, titleClass, id, children }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const navHeight = 40;
  const handleScroll = () => {
    if (!ref.current) return;
    const { currentPostTitles } = store.getState();
    const { top, height } = ref.current.getBoundingClientRect();
    top - navHeight - height <= 0 && dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s) => ({ title: s.title, active: s.title === title })) }));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
};
