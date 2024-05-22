import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const Sections = (demoPath) => [
  {
    title: "how to make an arc in span in css?",
    content: (
      <>
        OP link:
        <br />
        <a href="https://stackoverflow.com/q/77212899" target="_blank">
          https://stackoverflow.com/q/77212899
        </a>
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/arc.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/arc.html`} lang="html" />
      </>
    ),
  },
  {
    title: "Another solution using trigonometric functions",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/arc.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/arc.html`} lang="html" />
      </>
    ),
  },
];

export default Sections;
