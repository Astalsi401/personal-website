import { P } from "@ui/paragraph";
import { Subsection } from "@ui/subsection";
import { CodeChunk } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "統一編號檢查",
    content: (
      <div>
        <Subsection>
          詳細檢查邏輯參照財政部官網:{" "}
          <a
            href="https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283"
            target="_blank"
          >
            營利事業統一編號檢查碼邏輯修正說明
          </a>
        </Subsection>
        <Subsection>
          <P>js 範例:</P>
          <CodeChunk path={`${demoPath}/businessIdCheck.js`} />
        </Subsection>
      </div>
    ),
  },
];
