import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Nest Animate",
    content: (
      <>
        根據
        <a href="https://github.com/hustcc/canvas-nest.js" target="_blank">
          canvas-nest.js
        </a>
        修改
        <DemoFrame html={`${demoPath}/frame1/nest-animate.html`} js={[`${demoPath}/frame1/nest-animate.js`]} />
        <CodeChunk path={`${demoPath}/frame1/nest-animate.js`} lang="js" />
      </>
    ),
  },
];
export default Sections;
