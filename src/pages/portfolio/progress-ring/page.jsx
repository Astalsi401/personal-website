import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/progress-ring`;
const sections = [
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

export default sections;
