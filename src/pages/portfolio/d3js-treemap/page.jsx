import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/graph/js/treemap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/graph/css/graph.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/css/treemap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/html/treemap.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
