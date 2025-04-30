import type { LabelProps } from "@/types";

export const Label: React.FC<LabelProps> = ({ label, name, type, step, min, max, placeholder, value, fuc }) => (
  <label className="my-2 w-100">
    {label && <div>{label}：</div>}
    <input className="p-1 shadow-1 border-0" name={name} type={type} step={step} min={min} max={max} placeholder={placeholder} value={value} onChange={fuc} />
  </label>
);
