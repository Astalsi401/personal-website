import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/d3js-treemap`;
const sections = [
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
export default sections;
