import { useNavigation } from "react-router";

export const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useNavigation();
  return state === "loading" ? <LoadingAnimation /> : children;
};

export const LoadingComponent: React.FC<{ className?: string; size?: number }> = ({ className = "position-relative", size = 50 }) => (
  <div className={className} style={{ height: size, "--size": size * 0.4, minWidth: size } as React.CSSProperties}>
    <LoadingAnimation />
  </div>
);

export const LoadingAnimation: React.FC = () => (
  <div className="loading position-absolute">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={`loading-line-${i}`} className="line position-absolute" style={{ "--i": i } as React.CSSProperties} />
    ))}
  </div>
);
