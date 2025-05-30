import { CodeChunk, DemoFrame } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Subsection } from "@ui/subsection";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <Subsection>
          資料來源：
          <a href="https://youtu.be/B_n4YONte5A?si=D5iH7jq3Em-8c8sz" target="_blank" rel="noopener noreferrer">
            The simple trick to transition from height 0 to auto with CSS - By Kevin Powell
          </a>
        </Subsection>
        <Subsection>
          <InlineCode>height: auto;</InlineCode>無法使用transition製作動畫效果，然而可以將<InlineCode>grid-template-rows</InlineCode>修改為<InlineCode>0fr</InlineCode>、<InlineCode>1fr</InlineCode>來達成auto hight transition
        </Subsection>
        <Subsection>
          <DemoFrame html={`${demoPath}/frame1/css-auto-height.html`} scssHref={`${demoPath}/frame1/css-auto-height.scss`} />
          <CodeChunk path={`${demoPath}/frame1/css-auto-height.scss`} lang="scss" />
          <CodeChunk path={`${demoPath}/frame1/css-auto-height.html`} lang="html" />
        </Subsection>
      </>
    ),
  },
];
