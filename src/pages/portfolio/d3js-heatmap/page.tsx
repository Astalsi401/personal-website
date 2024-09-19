import { CodeChunk, DemoFrame } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/heatmap.html`} cssHref={`${demoPath}/frame1/heatmap.min.css`} js={[`${demoPath}/frame1/heatmap.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/heatmap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/heatmap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/heatmap.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
