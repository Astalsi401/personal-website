import { clsx } from "@functions";
import { InputHTMLAttributes } from "react";

interface InputProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  elemRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
}
export const Input: React.FC<InputProps> = ({ className, elemRef, ...props }) => <input ref={elemRef} className={clsx("p-1 shadow-1 border-0", className)} {...props} />;

type LabelProps = { label?: string } & InputProps;
export const Label: React.FC<LabelProps> = ({ label, ...props }) => (
  <label className="my-2 w-100">
    {label && <div>{label}：</div>}
    <Input {...props} />
  </label>
);
