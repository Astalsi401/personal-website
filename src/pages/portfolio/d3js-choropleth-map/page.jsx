import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/choropleth-map.html`} cssHref={`${demoPath}/frame1/choropleth-map.min.css`} js={["https://unpkg.com/topojson@3", "https://d3js.org/d3.v7.min.js", `${demoPath}/frame1/choropleth-map.js`]} />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
