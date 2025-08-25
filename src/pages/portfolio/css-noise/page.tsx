import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Css Noise",
    content: (
      <>
        <DemoFrame
          html={`${demoPath}/frame1/noise.html`}
          scssHref={`${demoPath}/frame1/noise.css`}
          template="flex-center"
        />
        <CodeChunk path={`${demoPath}/frame1/noise.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/noise.html`} lang="html" />
      </>
    ),
  },
];
