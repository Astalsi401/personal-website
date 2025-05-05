import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Td, Th } from "@ui/table";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";
import { data } from "./data";

export const Sections: SectionsProps = () => [
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
              <Th>Mode</Th>
              <Th>Meaning</Th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((d) => (
              <tr key={d.mode}>
                <Td>{d.mode}</Td>
                <Td>{d.meaning}</Td>
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
        <Ul>
          <Li>在function中對column資料進行處理，並回傳新資料</Li>
          <CodeChunk code="series.map(function)" lang="py" />
        </Ul>
      </>
    ),
  },
  {
    title: "日期格式",
    content: (
      <>
        <Ul>
          {data.format.map((d) => (
            <Li key={d.fm}>
              <InlineCode>{d.fm}</InlineCode>：{d.des}
            </Li>
          ))}
        </Ul>
      </>
    ),
  },
];
