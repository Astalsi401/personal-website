import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/choropleth-map.html`} cssHref={`${demoPath}/frame1/choropleth-map.min.css`} js={[`${demoPath}/frame1/choropleth-map.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
