import { useNavigation } from "react-router-dom";

export const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useNavigation();
  return state === "loading" ? <LoadingAnimation /> : children;
};

export const LoadingComponent: React.FC = () => {
  const minHeight = 50;
  return (
    <div className="position-relative" style={{ minHeight, "--size": minHeight * 0.4 } as React.CSSProperties}>
      <LoadingAnimation />
    </div>
  );
};

export const LoadingAnimation: React.FC = () => (
  <div className="loading">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={`loading-line-${i}`} className="line" style={{ "--i": i } as React.CSSProperties} />
    ))}
  </div>
);
