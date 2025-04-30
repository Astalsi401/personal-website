import { useEffect, useState } from "react";

export const ProgressBar: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const handleScroll = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    setPercent(Number(((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2)));
  };
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener("load", handleScroll, { signal: controller.signal });
    window.addEventListener("scroll", handleScroll, { signal: controller.signal });
    return () => controller.abort();
  }, []);
  return <div className="progress w-100 position-relative" style={{ "--percent": percent } as React.CSSProperties} />;
};
