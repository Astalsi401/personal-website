import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, [pathname]);
  return null;
};
