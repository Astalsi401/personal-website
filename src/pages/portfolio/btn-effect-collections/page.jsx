import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/btn-effect-collections`;
const sections = [
  {
    title: "Hover arrows",
    content: (
      <>
        <p>
          有趣的<code>box-shadoe</code>用法
        </p>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/css-btn-arrow.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/css-btn-arrow.html`} lang="html" />
      </>
    ),
  },
  {
    title: "btn1",
    content: (
      <>
        <p>
          <code>transition-delay</code>的應用
        </p>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/btn1.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/btn1.html`} lang="html" />
      </>
    ),
  },
  {
    title: "btn2",
    content: (
      <>
        <p>
          <code>rotate</code>的應用
        </p>
        <DemoFrame src={`${demoPath}/frame3.html`} />
        <CodeChunk path={`${demoPath}/frame3/btn2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/btn2.html`} lang="html" />
      </>
    ),
  },
  {
    title: "growing arrow",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame4.html`} />
        <CodeChunk path={`${demoPath}/frame4/growing-arrow.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame4/growing-arrow.html`} lang="html" />
      </>
    ),
  },
  {
    title: "hide siblings",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame5.html`} />
        <CodeChunk path={`${demoPath}/frame5/hide-siblings.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame5/hide-siblings.html`} lang="html" />
      </>
    ),
  },
];

export default sections;
