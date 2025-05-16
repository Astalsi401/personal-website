import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "生醫非主管員工薪資",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/d3js-bar.html`} scssHref={`${demoPath}/frame1/d3js-bar.scss`} js={[`${demoPath}/frame1/d3js-bar.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/d3js-bar.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/d3js-bar.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/d3js-bar.html`} lang="html" />
      </>
    ),
  },
  {
    title: "上市各類股非主管員工平均薪資",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/d3js-plot.html`} scssHref={`${demoPath}/frame2/d3js-plot.scss`} js={[`${demoPath}/frame2/d3js-plot.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.html`} lang="html" />
      </>
    ),
  },
];
