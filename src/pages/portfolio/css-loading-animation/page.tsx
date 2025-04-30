import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "shape transform ",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/shape-transform.html`} cssHref={`${demoPath}/frame1/shape-transform.min.css`} />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.html`} lang="html" />
      </>
    ),
  },
  {
    title: "gradient bolrder",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/gradient-bolrder.html`} cssHref={`${demoPath}/frame2/gradient-bolrder.min.css`} />
        <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.html`} lang="html" />
      </>
    ),
  },
  {
    title: "neon circle",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame3/neon-circle.html`} cssHref={`${demoPath}/frame3/neon-circle.min.css`} />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.html`} lang="html" />
      </>
    ),
  },
  {
    title: "gradient border 2",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame4/gradient-border2.html`} cssHref={`${demoPath}/frame4/gradient-border2.min.css`} />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.html`} lang="html" />
      </>
    ),
  },
  {
    title: "loading bar",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame5/loading-bar.html`} cssHref={`${demoPath}/frame5/loading-bar.min.css`} />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.html`} lang="html" />
      </>
    ),
  },
];
