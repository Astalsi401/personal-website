import React, { useState, useEffect } from "react";
import { Block, ZoomImage } from "@components";
import { LoadingAnimation } from "@ui/loading";
import { clsx, isActive } from "@functions";

type TuneData = {
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

type TuneListProps = {
  isload: boolean;
  tuneList: TuneData[];
  search: string;
  asc: boolean;
  ascCol: string;
};

export const TuneList: React.FC = () => {
  const [{ isload, tuneList, asc, ascCol }, setStatus] = useState<TuneListProps>({ isload: false, tuneList: [], search: "", asc: false, ascCol: "" });
  const keys = [
    { key: "tunner", type: "調教者" },
    { key: "tuneName", type: "調教名稱" },
    { key: "score", type: "性能分" },
    { key: "carType", type: "車型" },
    { key: "preferance", type: "特性" },
    { key: "shareCode", type: "分享代碼" },
  ];

  const search = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const re = value
      .split(" ")
      .map((d) => `(?=.*${d.replace(/^\s|\s$/g, "")})`)
      .filter((d) => d !== "(?=.*)")
      .join("");

    setStatus((prev) => ({
      ...prev,
      search: value,
      tuneList: tuneList.map((d) => ({
        ...d,
        active: new RegExp(re, "gi").test(
          Object.keys(d)
            .map((key) => (key === "shareCode" ? d[key].replace(/\s/g, "") : d[key]))
            .join("|")
        ),
      })),
    }));
  };
  const sort = (type: string) => setStatus((prev) => ({ ...prev, tuneList: prev.tuneList.sort((a, b) => (a[type] < b[type] ? (prev.asc ? 1 : -1) : a[type] > b[type] ? (prev.asc ? -1 : 1) : 0)), asc: !prev.asc, ascCol: type }));
  const fetchTable = async ({ signal }: AbortController) => {
    try {
      const data: TuneData[] = await fetch(`${import.meta.env.BASE_URL}/assets/json/tuneList.json`, { signal }).then((res) => res.json());
      setStatus((prev) => ({ ...prev, isload: true, tuneList: data.map((d) => ({ ...d, active: true })) }));
    } catch ({ name }: any) {
      name === "AbortError" && setStatus((prev) => ({ ...prev, isload: true }));
    }
  };
  useEffect(() => {
    const abortItem = new AbortController();
    fetchTable(abortItem);
    return () => abortItem.abort();
  }, []);
  return (
    <>
      <Block className="py-2 bg-white tuneSearch">
        <div className="row">
          <input type="search" className="bg-main-bg text-main-text d-block col-md-6 mx-auto p-2 shadow-1 border-0" placeholder="請輸入關鍵字" onChange={search} />
        </div>
      </Block>
      <Block>
        <div className="row overflow-auto py-4">
          {isload ? (
            <table className="mx-auto text-center text-small">
              <thead>
                <tr>
                  {keys.map(({ key, type }) => (
                    <th key={key} className="pointer" onClick={() => sort(key)} style={{ minWidth: "80px" }}>
                      {type}
                      <span className={clsx("trangle", asc && "asc", isActive(ascCol === key))}></span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{tuneList.map((d) => d?.active && <TuneListRow key={d.shareCode} data={d} />)}</tbody>
            </table>
          ) : (
            <div>
              <LoadingAnimation />
            </div>
          )}
        </div>
      </Block>
    </>
  );
};

type TuneListRowProps = {
  data: TuneData;
};

const TuneListRow: React.FC<TuneListRowProps> = ({ data }) => {
  const [active, setActive] = useState(false);
  const showImg = (e: React.MouseEvent<HTMLElement>) => {
    const { tagName } = e.target as HTMLElement;
    if (["IMG", "DIV"].includes(tagName)) return;
    setActive((prev) => !prev);
  };
  return (
    <tr onClick={showImg}>
      <td>{data.tunner}</td>
      <td>{data.tuneName}</td>
      <td>{data.score}</td>
      <td>
        {data.carType}
        <ZoomImage className={active ? "d-block" : "d-none"} src={`${import.meta.env.BASE_URL}${data.pic}`} />
      </td>
      <td>{data.preferance.join(" ")}</td>
      <td>{data.shareCode}</td>
    </tr>
  );
};
