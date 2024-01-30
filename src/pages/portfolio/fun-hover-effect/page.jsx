import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/fun-hover-effect`;
const sections = [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.html`} lang="html" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.js`} lang="js" />
      </>
    ),
  },
];
export default sections;
