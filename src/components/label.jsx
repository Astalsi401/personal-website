export function Label({ label, name, type, step, min, max, placeholder, value, fuc }) {
  return (
    <label className="my-2 w-100">
      {label && <div>{label}：</div>}
      <input className="p-1" name={name} type={type} step={step} min={min} max={max} placeholder={placeholder} value={value} onChange={fuc} />
    </label>
  );
}
