import { useNavigation } from "react-router-dom";

export default function Loading({ children }) {
  const { state } = useNavigation();
  return state === "loading" ? <LoadingAnimation /> : children;
}

function LoadingAnimation() {
  return (
    <div className="loading">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={`loading-line-${i}`} className="line" style={{ "--i": i }} />
      ))}
    </div>
  );
}
