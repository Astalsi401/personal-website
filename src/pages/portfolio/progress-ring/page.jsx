import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.html`} lang="html" />
      </>
    ),
  },
];

export default Sections;
