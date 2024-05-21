import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
