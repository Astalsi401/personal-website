import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "1.",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1`} />
        <CodeChunk path={`${demoPath}/frame1/index.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/index.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/index.html`} lang="html" />
      </>
    ),
  },
  {
    title: "2.",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2`} />
        <CodeChunk path={`${demoPath}/frame2/index.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/index.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/index.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
