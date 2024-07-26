import { CodeChunk, DemoFrame } from "@components";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/graph/js/choropleth-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/graph/css/graph.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/css/choropleth-map.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/html/choropleth-map.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
