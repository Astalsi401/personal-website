import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/d3js-basic-chart`;
const sections = [
  {
    title: "生醫非主管員工薪資",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/graph/js/非主管員工薪資-plot.js`} lang="js" />
        <CodeChunk path={`${demoPath}/graph/style/graph.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/html/graph-plot1.html`} lang="html" />
      </>
    ),
  },
  {
    title: "上市各類股非主管員工平均薪資",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/graph/js/非主管員工薪資-bar.js`} lang="js" />
        <CodeChunk path={`${demoPath}/graph/style/graph.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/graph/html/graph-bar1.html`} lang="html" />
      </>
    ),
  },
];
export default sections;
