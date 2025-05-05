import { useState } from "react";
import { ZoomImage } from "@/components";
import { Td } from "@ui/table";

export type TuneData = {
  tunner: string;
  tuneName: string;
  score: string;
  carType: string;
  preferance: string[];
  shareCode: string;
  pic: string;
  active?: boolean;
  [key: string]: any;
};

export const TuneListRow: React.FC<{ data: TuneData }> = ({ data }) => {
  const [active, setActive] = useState(false);
  const showImg = (e: React.MouseEvent<HTMLElement>) => {
    const { tagName } = e.target as HTMLElement;
    if (["IMG", "DIV"].includes(tagName)) return;
    setActive((prev) => !prev);
  };
  return (
    <tr onClick={showImg}>
      <Td>{data.tunner}</Td>
      <Td>{data.tuneName}</Td>
      <Td>{data.score}</Td>
      <Td>
        {data.carType}
        <ZoomImage className={active ? "d-block" : "d-none"} src={`${import.meta.env.BASE_URL}${data.pic}`} />
      </Td>
      <Td>{data.preferance.join(" ")}</Td>
      <Td>{data.shareCode}</Td>
    </tr>
  );
};
