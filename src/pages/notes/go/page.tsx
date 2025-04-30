import { CodeChunk } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
  {
    title: "Go指令",
    content: (
      <>
        <ul>
          <li>
            enable dependency tracking
            <br />
            <code>example/hello</code>可在<code>import</code>時使用
            <CodeChunk code="go mod init example/hello" lang="bash" />
          </li>
          <li>
            在開發環境下引用其他目錄的module
            <CodeChunk code="go mod edit -replace example/hello=../hello" lang="bash" />
          </li>
          <li>
            安裝<code>import</code>的modules
            <CodeChunk code="go mod tidy" lang="bash" />
          </li>
          <li>
            運行
            <CodeChunk code="go run ." lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "go tips",
    content: (
      <>
        <ul>
          <li>
            <code>:=</code>：賦值同時定義type
          </li>
          <li>
            每個go檔案總是以<code>package</code>開頭，<code>package main</code>代表App，<code>package module_name</code>代表module
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "常用modules",
    content: (
      <>
        <ul>
          <li>
            <code>fmt</code>：格式化輸出
          </li>
          <li>
            <code>errors</code>：error處理
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "儲存時自動打包 - air",
    content: (
      <>
        air:{" "}
        <a href="https://github.com/air-verse/air/blob/master/README-zh_tw.md" target="_blank" rel="noopener noreferrer">
          https://github.com/air-verse/air/blob/master/README-zh_tw.md
        </a>
        <ul>
          <li>
            安裝:
            <CodeChunk code="go install github.com/air-verse/air@latest" lang="bash" />
          </li>
          <li>
            初始化:
            <CodeChunk code="air init" lang="bash" />
          </li>
          <li>
            運行:
            <CodeChunk code="air -c .air.toml" lang="bash" />
            或
            <CodeChunk code="air" lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "其他",
    content: (
      <>
        <ul>
          <li>
            修改vscode <code>settings.json</code>，避免存檔時刪除未使用的<code>import</code>，導致無法使用<code>go mod tidy</code>安裝modules
            <CodeChunk code={`"[go]": {\n  "editor.codeActionsOnSave": {\n    "source.organizeImports": "never"\n  }\n}`} lang="json" />
          </li>
        </ul>
      </>
    ),
  },
];
export default Sections;
