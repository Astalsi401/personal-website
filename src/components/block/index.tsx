import { useEffect, useRef } from "react";
import store, { updateStore, RootState, useAppDispatch } from "@store";
import { clsx } from "@functions";
import type { BlockProps } from "@/types";

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
    const controller = new AbortController();
    window.addEventListener("scroll", handleCurrentSection, { signal: controller.signal });
    return () => controller.abort();
  }, []);
  return (
    <section className={clsx("my-4", className)}>
      {title && (
        <h3 ref={ref} id={id} className={clsx("mt-3 mb-1", titleClass)}>
          {title}
        </h3>
      )}
      {children}
    </section>
  );
};
