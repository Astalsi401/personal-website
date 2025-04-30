import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/progress-ring.html`} cssHref={`${demoPath}/frame1/progress-ring.css`} js={[`${demoPath}/frame1/progress-ring.js`]} />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/progress-ring.html`} lang="html" />
      </>
    ),
  },
];

export default Sections;
