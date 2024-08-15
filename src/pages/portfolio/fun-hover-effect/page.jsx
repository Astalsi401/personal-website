import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/hover-effect.html`} cssHref={`${demoPath}/frame1/hover-effect.min.css`} js={[`${demoPath}/frame1/hover-effect.js`]} lib="jquery" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
