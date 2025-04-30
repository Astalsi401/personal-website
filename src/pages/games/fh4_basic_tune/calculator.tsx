import { useState } from "react";
import { Label } from "@/components";

export const Calculator: React.FC = () => {
  const [status, setStatus] = useState({ ratio: "", max: "", min: "", type: 0 });
  const tuneformula = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setStatus((prev) => ({ ...prev, [name]: value }));
  let front,
    category,
    ratio = Number(status.ratio),
    max = Number(status.max),
    min = Number(status.min),
    type = Number(status.type),
    diff = max - min,
    rear = diff * (1 - ratio) + (max <= 65 ? min : 0);
  if (max > 65) {
    category = "彈簧";
    front = diff * ratio;
  } else if (max < 21) {
    category = "阻尼";
    front = diff * ratio + min;
  } else {
    category = "防傾桿";
    front = diff * (ratio + type) + min;
  }
  return (
    <form className="my-3 mx-auto calculator">
      <fieldset className="border-0">
        <Label label="重量比" name="ratio" type="number" step="0.01" placeholder="0~1間的小數" value={status.ratio} fuc={tuneformula} />
        {ratio > 1 || ratio < 0 ? <div className="text-warn">請輸入0~1間的小數</div> : null}
        <Label label="最大值" name="max" type="number" value={status.max} fuc={tuneformula} />
        <Label label="最小值" name="min" type="number" value={status.min} fuc={tuneformula} />
        <label className="my-2 w-100">
          <div>驅動方式：</div>
          <select className="p-1 shadow-1 border-0" name="type" value={status.type} onChange={tuneformula}>
            <option value={0}>前置四驅</option>
            <option value={0.02}>中置四驅</option>
            <option value={0.06}>後驅</option>
            <option value={-0.08}>前驅</option>
          </select>
        </label>
      </fieldset>
      <fieldset className="border-0">
        {[
          { k: "前", v: front },
          { k: "後", v: rear },
        ].map((d) => (
          <label key={d.k} className="my-2 w-100">
            <output>
              {d.k}
              {category}：{d.v.toFixed(2)}
            </output>
          </label>
        ))}
      </fieldset>
    </form>
  );
};
