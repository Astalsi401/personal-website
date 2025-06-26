import { clsx } from "@functions";

const defaultClassName = "ms-3";
export const Ul: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <ul className={clsx(defaultClassName, className)}>{children}</ul>
);
export const Ol: React.FC<{
  children?: React.ReactNode;
  className?: string;
  type?: "a" | "A" | "i" | "I";
}> = ({ children, className, type }) => (
  <ol type={type} className={clsx(defaultClassName, className)}>
    {children}
  </ol>
);
export const Li: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <li className="my-1">{children}</li>
);
