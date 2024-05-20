import { useNavigation } from "react-router-dom";

const Loading = ({ children }) => {
  const { state } = useNavigation();
  return state === "loading" ? <LoadingAnimation /> : children;
};

const LoadingAnimation = () => (
  <div className="loading">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={`loading-line-${i}`} className="line" style={{ "--i": i }} />
    ))}
  </div>
);
export default Loading;
