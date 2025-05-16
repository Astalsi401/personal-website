import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "SNQ認證地圖",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/snq-map.html`} scssHref={`${demoPath}/frame1/snq-map.css`} js={[`${demoPath}/frame1/snq-map.js`]} lib="leaflet" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.html`} lang="html" />
      </>
    ),
  },
];
