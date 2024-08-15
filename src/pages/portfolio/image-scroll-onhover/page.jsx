import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/image-scroll-onhover.html`} cssHref={`${demoPath}/frame1/image-scroll-onhover.css`} />
        <CodeChunk path={`${demoPath}/frame1/image-scroll-onhover.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/image-scroll-onhover.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
