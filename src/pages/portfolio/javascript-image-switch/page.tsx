import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "fade in/out",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/index.html`} cssHref={`${demoPath}/frame1/index.min.css`} js={[`${demoPath}/frame1/index.js`]} />
        <CodeChunk path={`${demoPath}/frame1/index.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/index.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/index.html`} lang="html" />
      </>
    ),
  },
  {
    title: "blocks",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/index.html`} cssHref={`${demoPath}/frame2/index.min.css`} js={[`${demoPath}/frame2/index.js`]} />
        <CodeChunk path={`${demoPath}/frame2/index.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/index.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/index.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
