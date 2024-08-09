import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "SNQ認證地圖",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/snq-map.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/snq-map.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
