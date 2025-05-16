import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/image-scroll-onhover.html`} scssHref={`${demoPath}/frame1/image-scroll-onhover.css`} />
        <CodeChunk path={`${demoPath}/frame1/image-scroll-onhover.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/image-scroll-onhover.html`} lang="html" />
      </>
    ),
  },
];
