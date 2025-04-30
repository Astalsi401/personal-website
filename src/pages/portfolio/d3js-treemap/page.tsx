import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/treemap.html`} cssHref={`${demoPath}/frame1/treemap.min.css`} js={[`${demoPath}/frame1/treemap.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/treemap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/treemap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/treemap.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
