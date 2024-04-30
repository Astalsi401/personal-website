import { useState, useEffect } from "react";
import { ZoomImage } from "../../../components/zoomImage";
import { Block } from "../../../components/block";

function TuneListRow({ data }) {
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
}

function TuneList() {
  const [status, setStatus] = useState({ isload: false, tuneList: [], search: "", res: [], asc: false, ascCol: "" });
  const keys = [
    { key: "tunner", type: "調教者" },
    { key: "tuneName", type: "調教名稱" },
    { key: "score", type: "性能分" },
    { key: "carType", type: "車型" },
    { key: "preferance", type: "特性" },
    { key: "shareCode", type: "分享代碼" },
  ];
  const search = (e) => {
    let re = e.target.value
      .split(" ")
      .map((d) => `(?=.*${d.replace(/^\s|\s$/g, "")})`)
      .filter((d) => d !== "(?=.*)")
      .join("");
    setStatus((prev) => ({ ...prev, search: e.target.value, res: status.tuneList.filter((d) => [d.tunner, d.tuneName, d.score, d.carType, d.preferance, d.shareCode.replace(/\s/g, "")].join("|").match(new RegExp(re, "gi"))) }));
  };
  const sort = (type) => setStatus((prev) => ({ ...prev, res: prev.res.sort((a, b) => (a[type] < b[type] ? (prev.asc ? 1 : -1) : a[type] > b[type] ? (prev.asc ? -1 : 1) : 0)), asc: !prev.asc, ascCol: type }));
  const fetchTable = async () => {
    const res = await fetch(`${import.meta.env.BASE_URL}/assets/json/tuneList.json`);
    const data = await res.json();
    setStatus((prev) => ({ ...prev, tuneList: data, res: data }));
  };
  useEffect(() => {
    fetchTable();
  }, []);
  return (
    <>
      <Block className="py-2 bg-white tuneSearch">
        <div className="row">
          <input type="search" className="bg-main-bg text-main-text d-block col-md-6 mx-auto p-2" placeholder="請輸入關鍵字" onChange={search} />
        </div>
      </Block>
      <Block>
        <div className="row overflow-auto py-4">
          <table className="mx-auto text-center text-small">
            <thead>
              <tr>
                {keys.map((d) => (
                  <th key={d.key} className="pointer" onClick={() => sort(d.key)} style={{ minWidth: "80px" }}>
                    {d.type}
                    <span className={`trangle ${status.asc && "asc"} ${status.ascCol === d.key && "active"}`}></span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {status.res.map((d) => (
                <TuneListRow key={d.shareCode} data={d} />
              ))}
            </tbody>
          </table>
        </div>
      </Block>
    </>
  );
}

const sections = [
  {
    title: "",
    content: <TuneList />,
  },
];

export default sections;
