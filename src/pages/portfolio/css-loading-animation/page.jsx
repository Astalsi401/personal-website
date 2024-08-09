import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "loading1",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/loadingAnimation1.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/loadingAnimation1.html`} lang="html" />
      </>
    ),
  },
  {
    title: "loading2",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame2.html`} />
        <CodeChunk path={`${demoPath}/frame2/loadingAnimation2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/loadingAnimation2.html`} lang="html" />
      </>
    ),
  },
  {
    title: "loading3",
    content: (
      <>
        <DemoFrame src={`${demoPath}/frame3.html`} />
        <CodeChunk path={`${demoPath}/frame3/loadingAnimation3.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/loadingAnimation3.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
