import { CodeChunk, DemoFrame } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
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
];
export default Sections;
