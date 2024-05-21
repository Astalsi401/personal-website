import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/donut-wheel-arrow.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/donut-wheel-arrow.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
