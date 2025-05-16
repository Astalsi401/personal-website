import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/hover-effect.html`} scssHref={`${demoPath}/frame1/hover-effect.scss`} js={[`${demoPath}/frame1/hover-effect.js`]} lib="jquery" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/hover-effect.html`} lang="html" />
      </>
    ),
  },
];
