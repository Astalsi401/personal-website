import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/choropleth-map.html`} scssHref={`${demoPath}/frame1/choropleth-map.scss`} js={[`${demoPath}/frame1/choropleth-map.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/choropleth-map.html`} lang="html" />
      </>
    ),
  },
];
