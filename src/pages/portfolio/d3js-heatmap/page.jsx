import { CodeChunk, DemoFrame } from "@components";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/graph/js/heatmap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/graph/css/graph.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/css/heatmap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/html/heatmap.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
