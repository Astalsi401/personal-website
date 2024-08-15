import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/heatmap.html`} cssHref={`${demoPath}/frame1/heatmap.min.css`} js={["https://d3js.org/d3.v7.min.js", `${demoPath}/frame1/heatmap.js`]} />
        <CodeChunk path={`${demoPath}/frame1/heatmap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/heatmap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/heatmap.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
