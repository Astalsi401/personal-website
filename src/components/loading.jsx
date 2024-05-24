import { useNavigation } from "react-router-dom";

export const Loading = ({ children }) => {
  const { state } = useNavigation();
  return state === "loading" ? <LoadingAnimation /> : children;
};

export const LoadingAnimation = () => (
  <div className="loading">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={`loading-line-${i}`} className="line" style={{ "--i": i }} />
    ))}
  </div>
);
