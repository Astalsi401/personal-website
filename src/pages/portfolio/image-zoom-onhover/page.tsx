import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/image-zoom-onhover.html`} scssHref={`${demoPath}/frame1/image-zoom-onhover.scss`} js={[`${demoPath}/frame1/image-zoom-onhover.js`]} />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.html`} lang="html" />
      </>
    ),
  },
];
