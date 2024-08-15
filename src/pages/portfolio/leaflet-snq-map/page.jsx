import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "SNQ認證地圖",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/snq-map.html`} cssHref={`${demoPath}/frame1/snq-map.css`} js={[`${demoPath}/frame1/snq-map.js`]} lib="leaflet" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
