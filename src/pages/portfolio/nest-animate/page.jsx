import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
  {
    title: "Nest Animate",
    content: (
      <>
        根據
        <a href="https://github.com/hustcc/canvas-nest.js" target="_blank">
          canvas-nest.js
        </a>
        修改
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/frame1/nest-animate.js`} lang="js" />
      </>
    ),
  },
];
export default Sections;
