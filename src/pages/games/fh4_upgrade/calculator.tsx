import { useState } from "react";
import { Label } from "@/components";

type CalculatorStatus = {
  bh: string;
  bw: string;
  ah: string;
  aw: string;
  [key: string]: string;
};

export const Calculator: React.FC = () => {
  const [status, setStatus] = useState<CalculatorStatus>({ bh: "", bw: "", ah: "", aw: "" });
  const whp = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setStatus((prev) => ({ ...prev, [name]: value }));
  let before = (Number(status.bw) / Number(status.bh)).toFixed(2),
    after = (Number(status.aw) / Number(status.ah)).toFixed(2);
  before = isNaN(Number(before)) || !isFinite(Number(before)) ? "__" : before;
  after = isNaN(Number(after)) || !isFinite(Number(after)) ? "__" : after;
  return (
    <form className="row my-3 mx-auto calculator">
      <div className="col-2 p-1 d-flex align-items-center"></div>
      {["前", "後"].map((d) => (
        <div key={d} className="col-5 p-1 d-flex align-items-center text-bold justify-content-center">
          改裝{d}
        </div>
      ))}
      {["bw", "aw", "bh", "ah"].map((name) => (
        <InputLabel key={name} name={name} status={status} whp={whp} />
      ))}
      <div className="col-2 p-1 d-flex align-items-center text-bold">馬力重量比</div>
      {[
        { name: "before", className: before > after ? "text-warn" : before < after ? "text-success" : "", value: before },
        { name: "after", className: before > after ? "text-success" : before < after ? "text-warn" : "", value: after },
      ].map((d) => (
        <div key={d.name} className="col-5 p-1 d-flex align-items-center text-bold justify-content-center">
          <output name="before" className={d.className}>
            {d.value}
          </output>
          kg/hp
        </div>
      ))}
    </form>
  );
};

type InputLabelProps = { name: string; status: CalculatorStatus; whp: (e: React.ChangeEvent<HTMLInputElement>) => void };

const InputLabel: React.FC<InputLabelProps> = ({ name, status, whp }) => (
  <>
    {/b\w$/.test(name) && <div className="col-2 p-1 d-flex align-items-center text-bold">{/\ww$/.test(name) ? "重量" : "馬力"}</div>}
    <div key={name} className="col-5 p-1 d-flex align-items-center">
      <Label name={name} type="number" placeholder={/\ww$/.test(name) ? "kg" : "hp"} value={status[name]} fuc={whp} />
    </div>
  </>
);
