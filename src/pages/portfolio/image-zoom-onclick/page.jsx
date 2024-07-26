import { CodeChunk, DemoFrame } from "@components";

const Sections = (demoPath) => [
  {
    title: "原版",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/image-zoom.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-normal.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom.html`} lang="html" />
      </>
    ),
  },
  {
    title: "針對grid進行修改",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
