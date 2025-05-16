import { CodeChunk, DemoFrame } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { P } from "@ui/paragraph";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Hover arrows",
    content: (
      <>
        <P>
          有趣的<InlineCode>box-shadow</InlineCode>用法
        </P>
        <DemoFrame html={`${demoPath}/frame1/hover-arrows.html`} scssHref={`${demoPath}/frame1/hover-arrows.scss`} />
        <CodeChunk path={`${demoPath}/frame1/hover-arrows.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/hover-arrows.html`} lang="html" />
      </>
    ),
  },
  {
    title: "flexible button",
    content: (
      <>
        <P>
          <InlineCode>transition-delay</InlineCode>的應用
        </P>
        <DemoFrame html={`${demoPath}/frame2/flexible-button.html`} scssHref={`${demoPath}/frame2/flexible-button.scss`} />
        <CodeChunk path={`${demoPath}/frame2/flexible-button.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/flexible-button.html`} lang="html" />
      </>
    ),
  },
  {
    title: "neon btn",
    content: (
      <>
        <P>
          <InlineCode>rotate</InlineCode>的應用
        </P>
        <DemoFrame html={`${demoPath}/frame3/neon-btn.html`} scssHref={`${demoPath}/frame3/neon-btn.scss`} />
        <CodeChunk path={`${demoPath}/frame3/neon-btn.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/neon-btn.html`} lang="html" />
      </>
    ),
  },
  {
    title: "growing arrow",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame4/growing-arrow.html`} scssHref={`${demoPath}/frame4/growing-arrow.scss`} />
        <CodeChunk path={`${demoPath}/frame4/growing-arrow.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame4/growing-arrow.html`} lang="html" />
      </>
    ),
  },
  {
    title: "hide siblings",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame5/hide-siblings.html`} scssHref={`${demoPath}/frame5/hide-siblings.scss`} />
        <CodeChunk path={`${demoPath}/frame5/hide-siblings.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame5/hide-siblings.html`} lang="html" />
      </>
    ),
  },
];
