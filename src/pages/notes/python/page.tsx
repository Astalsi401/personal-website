import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const data = {
  table: [
    { mode: "r", meaning: "open for reading (default)" },
    { mode: "w", meaning: "open for writing, truncating the file first" },
    { mode: "a", meaning: "open for writing, appending to the end of the file if it exists" },
    { mode: "b", meaning: "binary mode" },
    { mode: "t", meaning: "text mode (default)" },
    { mode: "+", meaning: "updating (reading and writing)" },
    { mode: "x", meaning: "exclusive creation, failing if file exists" },
  ],
  format: [
    { fm: "%d", des: "日期，1 ~ 31" },
    { fm: "%m", des: "月份，1 ~ 12" },
    { fm: "%Y", des: "四個數字的年分，如2022" },
    { fm: "%y", des: "兩個數字的年分，如21, 22" },
    { fm: "%A", des: "星期全稱，Monday、Tuesday" },
    { fm: "%a", des: "星期簡稱，Mon、Tue" },
    { fm: "%B", des: "月份全稱，June、March" },
    { fm: "%b", des: "月份簡稱，Mar、Jun" },
    { fm: "%H", des: "24小時制，01 ~ 23" },
    { fm: "%I", des: "12小時制，01 ~ 12" },
    { fm: "%M", des: "分，00 ~ 59" },
    { fm: "%S", des: "秒，00 ~ 59" },
    { fm: "%f", des: "微秒，000000 ~ 999999" },
    { fm: "%p", des: "上午/下午，AM/PM" },
    { fm: "%c", des: "Returns a locale’s appropriate date and time representation" },
    { fm: "%x", des: "Returns a locale’s appropriate date representation" },
    { fm: "%X", des: "Returns a locale’s appropriate time representation" },
    { fm: "%z", des: "Return the UTC offset in the form ±HHMM[SS[.ffffff]] (empty string if the object is naive)." },
    { fm: "%Z", des: "Return the Time zone name (empty string if the object is naive)." },
    { fm: "%j", des: "Returns the day of the year from 01 to 366" },
    { fm: "%w", des: "Returns weekday as a decimal number, where 0 is Sunday and 6 is Saturday." },
    { fm: "%U", des: "Returns the week number of the year (Sunday as the first day of the week) from 00 to 53" },
    { fm: "%W", des: "Returns the week number of the year (Monday as the first day of the week) from 00 to 53" },
  ],
};

const Sections: SectionsProps = () => [
  {
    title: "pip",
    content: (
      <>
        儲存已安裝的libraries清單為requirements.txt
        <CodeChunk code={"pip freeze > requirements.txt"} />
        儲存當前專案中的libraries清單為requirements.txt
        <CodeChunk code={"pip install pipreqs"} />
        <CodeChunk code={"pipreqs ."} />
        重新安裝儲存於requirements.txt的libraries
        <CodeChunk code={"pip install -r requirements.txt"} />
      </>
    ),
  },
  {
    title: "讀取檔案",
    content: (
      <>
        <table>
          <thead>
            <tr>
              <th>Mode</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((d) => (
              <tr key={d.mode}>
                <td>{d.mode}</td>
                <td>{d.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    title: "pandas",
    content: (
      <>
        <ul>
          <li>在function中對column資料進行處理，並回傳新資料</li>
          <CodeChunk code="series.map(function)" lang="py" />
        </ul>
      </>
    ),
  },
  {
    title: "日期格式",
    content: (
      <>
        <ul>
          {data.format.map((d) => (
            <li key={d.fm}>
              <code>{d.fm}</code>：{d.des}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

export default Sections;
