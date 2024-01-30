import { useState } from "react";
import { Label } from "../../../components/label";

export default function Calculator() {
  const [status, setStatus] = useState({ ratio: "", max: "", min: "", type: 0 });
  const tuneformula = ({ target: { name, value } }) => setStatus((prev) => ({ ...prev, [name]: value }));
  let front,
    rear,
    category,
    ratio = Number(status.ratio),
    max = Number(status.max),
    min = Number(status.min),
    type = Number(status.type);
  if (max > 65) {
    category = "彈簧";
    front = (max - min) * ratio;
    rear = (max - min) * (1 - ratio);
  } else if (max < 21) {
    category = "阻尼";
    front = (max - min) * ratio + min;
    rear = (max - min) * (1 - ratio) + min;
  } else {
    category = "防傾桿";
    front = (max - min) * (ratio + type) + min;
    rear = (max - min) * (1 - ratio) + min;
  }
  return (
    <form className="my-3 mx-auto calculator">
      <fieldset className="border-0">
        <Label label="重量比" name="ratio" type="number" step="0.01" placeholder="0~1間的小數" value={status.ratio} fuc={tuneformula} />
        {status.ratio > 1 || status.ratio < 0 ? <div className="text-warn">請輸入0~1間的小數</div> : null}
        <Label label="最大值" name="max" type="number" value={status.max} fuc={tuneformula} />
        <Label label="最小值" name="min" type="number" value={status.min} fuc={tuneformula} />
        <label className="my-2 w-100">
          <div>驅動方式：</div>
          <select name="type" value={status.type} onChange={tuneformula}>
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
}
