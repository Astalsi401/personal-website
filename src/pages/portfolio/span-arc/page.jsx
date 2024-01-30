import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/span-arc`;
const sections = [
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
        <CodeChunk path={`${demoPath}/arc.html`} lang="html" />
        <CodeChunk path={`${demoPath}/arc.css`} lang="css" />
      </>
    ),
  },
];

export default sections;
