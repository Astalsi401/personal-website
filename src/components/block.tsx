import { useEffect, useRef } from "react";
import store, { updateStore, RootState, useAppDispatch } from "@store";
import type { BlockProps } from "@types";

export const Block: React.FC<BlockProps> = ({ className, title, titleClass, id, children }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<null | HTMLDivElement>(null);
  const navHeight: number = 40;
  const handleCurrentSection = () => {
    if (!ref.current) return;
    const { currentPostTitles } = store.getState() as RootState;
    const { top, height } = ref.current.getBoundingClientRect();
    const disToBottom = document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight);
    top - navHeight - height <= 0 && dispatch(updateStore({ currentPostTitles: currentPostTitles.map((s, i) => ({ ...s, active: disToBottom === 0 ? i === currentPostTitles.length - 1 : s.title === title })) }));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleCurrentSection);
    return () => window.removeEventListener("scroll", handleCurrentSection);
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
