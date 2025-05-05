import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = () => [
  {
    title: "Go指令",
    content: (
      <>
        <Ul>
          <Li>
            enable dependency tracking
            <br />
            <InlineCode>example/hello</InlineCode>可在<InlineCode>import</InlineCode>時使用
            <CodeChunk code="go mod init example/hello" lang="bash" />
          </Li>
          <Li>
            在開發環境下引用其他目錄的module
            <CodeChunk code="go mod edit -replace example/hello=../hello" lang="bash" />
          </Li>
          <Li>
            安裝<InlineCode>import</InlineCode>的modules
            <CodeChunk code="go mod tidy" lang="bash" />
          </Li>
          <Li>
            運行
            <CodeChunk code="go run ." lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "go tips",
    content: (
      <>
        <Ul>
          <Li>
            <InlineCode>:=</InlineCode>：賦值同時定義type
          </Li>
          <Li>
            每個go檔案總是以<InlineCode>package</InlineCode>開頭，<InlineCode>package main</InlineCode>代表App，<InlineCode>package module_name</InlineCode>代表module
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "常用modules",
    content: (
      <>
        <Ul>
          <Li>
            <InlineCode>fmt</InlineCode>：格式化輸出
          </Li>
          <Li>
            <InlineCode>errors</InlineCode>：error處理
          </Li>
        </Ul>
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
        <Ul>
          <Li>
            安裝:
            <CodeChunk code="go install github.com/air-verse/air@latest" lang="bash" />
          </Li>
          <Li>
            初始化:
            <CodeChunk code="air init" lang="bash" />
          </Li>
          <Li>
            運行:
            <CodeChunk code="air -c .air.toml" lang="bash" />
            或
            <CodeChunk code="air" lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "其他",
    content: (
      <>
        <Ul>
          <Li>
            修改vscode <InlineCode>settings.json</InlineCode>，避免存檔時刪除未使用的<InlineCode>import</InlineCode>，導致無法使用<InlineCode>go mod tidy</InlineCode>安裝modules
            <CodeChunk code={`"[go]": {\n  "editor.codeActionsOnSave": {\n    "source.organizeImports": "never"\n  }\n}`} lang="json" />
          </Li>
        </Ul>
      </>
    ),
  },
];
