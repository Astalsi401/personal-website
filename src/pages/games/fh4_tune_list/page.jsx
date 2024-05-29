import { useState, useEffect } from "react";
import { ZoomImage } from "../../../components/zoomImage";
import { Block } from "../../../components/block";
import { LoadingAnimation } from "../../../components/loading";

const TuneListRow = ({ data }) => {
  const [active, setActive] = useState(false);
  const showImg = (e) => {
    if (["IMG", "DIV"].includes(e.target.tagName)) return;
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

const TuneList = () => {
  const [{ isload, tuneList, asc, ascCol }, setStatus] = useState({ isload: false, tuneList: [], search: "", asc: false, ascCol: "" });
  const keys = [
    { key: "tunner", type: "調教者" },
    { key: "tuneName", type: "調教名稱" },
    { key: "score", type: "性能分" },
    { key: "carType", type: "車型" },
    { key: "preferance", type: "特性" },
    { key: "shareCode", type: "分享代碼" },
  ];
  const abortItem = new AbortController();
  const search = ({ target: { value } }) => {
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
        active: Object.keys(d)
          .map((key) => (key === "shareCode" ? d[key].replace(/\s/g, "") : d[key]))
          .join("|")
          .match(new RegExp(re, "gi")),
      })),
    }));
  };
  const sort = (type) => setStatus((prev) => ({ ...prev, tuneList: prev.tuneList.sort((a, b) => (a[type] < b[type] ? (prev.asc ? 1 : -1) : a[type] > b[type] ? (prev.asc ? -1 : 1) : 0)), asc: !prev.asc, ascCol: type }));
  const fetchTable = async () => {
    const data = await fetch(`${import.meta.env.BASE_URL}/assets/json/tuneList.json`, { signal: abortItem.signal }).then((res) => res.json());
    setStatus((prev) => ({ ...prev, isload: true, tuneList: data.map((d) => ({ ...d, active: true })) }));
  };
  useEffect(() => {
    fetchTable();
    return () => abortItem.abort();
  }, []);
  return (
    <>
      <Block className="py-2 bg-white tuneSearch">
        <div className="row">
          <input type="search" className="bg-main-bg text-main-text d-block col-md-6 mx-auto p-2" placeholder="請輸入關鍵字" onChange={search} />
        </div>
      </Block>
      <Block>
        <div className={`row overflow-auto py-4`}>
          {isload ? (
            <table className="mx-auto text-center text-small">
              <thead>
                <tr>
                  {keys.map(({ key, type }) => (
                    <th key={key} className="pointer" onClick={() => sort(key)} style={{ minWidth: "80px" }}>
                      {type}
                      <span className={`trangle ${asc && "asc"} ${ascCol === key && "active"}`}></span>
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

const Sections = (demoPath) => [
  {
    title: "",
    content: <TuneList />,
  },
];

export default Sections;
