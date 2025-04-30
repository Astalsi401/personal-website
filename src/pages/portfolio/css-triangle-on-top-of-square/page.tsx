import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "How to create a triangle on the top of a square?",
    content: (
      <>
        OP links:
        <a href="https://stackoverflow.com/q/78650084" target="_blank">
          https://stackoverflow.com/q/78650084
        </a>
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/triangle-on-top-of-square.html`} cssHref={`${demoPath}/frame1/triangle-on-top-of-square.css`} />
        <CodeChunk path={`${demoPath}/frame1/triangle-on-top-of-square.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/triangle-on-top-of-square.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
