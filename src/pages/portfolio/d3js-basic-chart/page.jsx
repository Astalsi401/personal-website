import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "生醫非主管員工薪資",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/d3js-bar.html`} cssHref={`${demoPath}/frame1/d3js-bar.min.css`} js={["https://d3js.org/d3.v7.min.js", `${demoPath}/frame1/d3js-bar.js`]} />
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
        <DemoFrame html={`${demoPath}/frame2/d3js-plot.html`} cssHref={`${demoPath}/frame2/d3js-plot.min.css`} js={["https://d3js.org/d3.v7.min.js", `${demoPath}/frame2/d3js-plot.js`]} />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/d3js-plot.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
