type LabelProps = {
  label?: string;
  name?: string;
  type?: string;
  step?: string;
  min?: string;
  max?: string;
  placeholder?: string;
  value?: string;
  fuc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Label: React.FC<LabelProps> = ({ label, name, type, step, min, max, placeholder, value, fuc }) => (
  <label className="my-2 w-100">
    {label && <div>{label}：</div>}
    <input className="p-1" name={name} type={type} step={step} min={min} max={max} placeholder={placeholder} value={value} onChange={fuc} />
  </label>
);
