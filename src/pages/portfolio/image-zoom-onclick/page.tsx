import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "原版",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/image-zoom.html`} scssHref={`${demoPath}/frame1/image-zoom.scss`} js={[`${demoPath}/frame1/image-zoom.js`]} />
        <CodeChunk path={`${demoPath}/frame1/image-zoom.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom.html`} lang="html" />
      </>
    ),
  },
  {
    title: "針對grid進行修改",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/image-zoom-grid.html`} scssHref={`${demoPath}/frame2/image-zoom-grid.scss`} js={[`${demoPath}/frame2/image-zoom-grid.js`]} />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/image-zoom-grid.html`} lang="html" />
      </>
    ),
  },
];
