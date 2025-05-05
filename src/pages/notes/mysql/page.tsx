import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "設定",
    content: (
      <>
        <Ol>
          <Li>安裝後，新增路徑至環境變數 &gt; 系統變數 &gt; PATH</Li>
          <Li>
            新增my.ini至安裝目錄，內容為
            <CodeChunk path={`${demoPath}/my.ini`} lang="ini" />
          </Li>
          <Li>
            初始化數據庫，執行後將輸出默認密碼
            <CodeChunk code="mysqld --initialize --console" />
          </Li>
          <Li>
            安裝
            <CodeChunk code="mysqld install" />
          </Li>
          <Li>
            啟動
            <CodeChunk code="net start mysql" />
          </Li>
          <Li>
            登錄數據庫
            <CodeChunk code="mysql -h 主機名 -u 用戶名 -p" />
          </Li>
          <Li>
            登錄本機數據庫
            <CodeChunk code="mysql -u root -p" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "常用指令",
    content: (
      <>
        <Ol>
          <Li>
            mysql啟動時使用系統指令需加上<InlineCode>system</InlineCode>，例如：
            <CodeChunk code="system pwd" />
          </Li>
        </Ol>
      </>
    ),
  },
];
