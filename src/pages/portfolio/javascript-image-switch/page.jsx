import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const Sections = (demoPath) => [
  {
    title: "1.",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/image-switch.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-switch.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-switch.html`} lang="html" />
      </>
    ),
  },
  {
    title: "2.",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/image-switch2.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/image-switch2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/image-switch2.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
