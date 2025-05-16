import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "shape transform ",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/shape-transform.html`} scssHref={`${demoPath}/frame1/shape-transform.scss`} />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.html`} lang="html" />
      </>
    ),
  },
  {
    title: "gradient bolrder",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/gradient-bolrder.html`} scssHref={`${demoPath}/frame2/gradient-bolrder.scss`} />
        <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.html`} lang="html" />
      </>
    ),
  },
  {
    title: "neon circle",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame3/neon-circle.html`} scssHref={`${demoPath}/frame3/neon-circle.scss`} />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.html`} lang="html" />
      </>
    ),
  },
  {
    title: "gradient border 2",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame4/gradient-border2.html`} scssHref={`${demoPath}/frame4/gradient-border2.scss`} />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.html`} lang="html" />
      </>
    ),
  },
  {
    title: "loading bar",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame5/loading-bar.html`} scssHref={`${demoPath}/frame5/loading-bar.scss`} />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.html`} lang="html" />
      </>
    ),
  },
];
