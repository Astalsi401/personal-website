import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/image-zoom-onhover.html`} cssHref={`${demoPath}/frame1/image-zoom-onhover.min.css`} js={[`${demoPath}/frame1/image-zoom-onhover.js`]} />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
