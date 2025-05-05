import { clsx } from "@functions";

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
export const P: React.FC<ParagraphProps> = ({ children, className, ...props }) => (
  <p className={clsx("mb-1", className)} {...props}>
    {children}
  </p>
);
