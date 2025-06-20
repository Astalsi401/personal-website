import { useState } from "react";
import { clsx, isActive } from "@functions";
import { Copy, Home } from "@icons";
import { Link } from "react-router";

type CopyCodeProps = { action?: () => void };
export const CopyCode: React.FC<CopyCodeProps> = ({ action }) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    action && action();
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };
  return (
    <a href="#" className={clsx("copy-btn pointer d-block position-absolute text-code-text", isActive(active))} onClick={onClick}>
      <Copy />
    </a>
  );
};

export const HomePageLink: React.FC = () => (
  <Link to={import.meta.env.BASE_URL} className="home d-block position-absolute">
    <Home />
  </Link>
);

export const Button: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className }) => <button className={clsx("", className)}>{children}</button>;
