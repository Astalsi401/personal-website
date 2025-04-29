import { useEffect, useState } from "react";

export const ProgressBar: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const handleScroll = () => {
    const { clientHeight, scrollTop, scrollHeight } = document.documentElement;
    setPercent(Number(((scrollTop / (scrollHeight - clientHeight)) * 100).toFixed(2)));
  };
  useEffect(() => {
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className="progress w-100 position-relative" style={{ "--percent": percent } as React.CSSProperties} />;
};
