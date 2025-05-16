import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/treemap.html`} scssHref={`${demoPath}/frame1/treemap.scss`} js={[`${demoPath}/frame1/treemap.js`]} lib="d3js" />
        <CodeChunk path={`${demoPath}/frame1/treemap.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/treemap.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/treemap.html`} lang="html" />
      </>
    ),
  },
];
