import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/donut-wheel-arrow.html`} cssHref={`${demoPath}/frame1/donut-wheel-arrow.min.css`} />
        <CodeChunk path={`${demoPath}/frame1/donut-wheel-arrow.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/donut-wheel-arrow.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
