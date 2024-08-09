import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "How to create a triangle on the top of a square?",
    content: (
      <>
        OP links:
        <a href="https://stackoverflow.com/q/78650084" target="_blank">
          https://stackoverflow.com/q/78650084
        </a>
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/triangle-on-top-of-square.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/triangle-on-top-of-square.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
