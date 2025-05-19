import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Css Neon Radial Gradient",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/css-radial-gradient.html`} scssHref={`${demoPath}/frame1/css-radial-gradient.css`} bgColor="#000" />
        <CodeChunk path={`${demoPath}/frame1/css-radial-gradient.css`} lang="css" />
      </>
    ),
  },
];
