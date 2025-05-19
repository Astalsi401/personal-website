import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Css Neon Arc",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/neon-arc.html`} scssHref={`${demoPath}/frame1/neon-arc.css`} bgColor="#000" />
        <CodeChunk path={`${demoPath}/frame1/neon-arc.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/neon-arc.html`} lang="html" />
      </>
    ),
  },
];
