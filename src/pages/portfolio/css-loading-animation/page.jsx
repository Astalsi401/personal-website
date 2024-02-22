import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/css-loading-animation`;
const sections = [
  {
    title: "loading1",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/loadingAnimation1.html`} lang="html" />
        <CodeChunk path={`${demoPath}/frame1/loadingAnimation1.scss`} lang="scss" />
      </>
    ),
  },
  {
    title: "loading2",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/loadingAnimation2.html`} lang="html" />
        <CodeChunk path={`${demoPath}/frame2/loadingAnimation2.scss`} lang="scss" />
      </>
    ),
  },
  {
    title: "loading3",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame3.html`} />
        <CodeChunk path={`${demoPath}/frame3/loadingAnimation3.html`} lang="html" />
        <CodeChunk path={`${demoPath}/frame3/loadingAnimation3.scss`} lang="scss" />
      </>
    ),
  },
];
export default sections;
