import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "how to make an arc in span in css?",
    content: (
      <>
        OP link:
        <br />
        <a href="https://stackoverflow.com/q/77212899" target="_blank">
          https://stackoverflow.com/q/77212899
        </a>
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/arc.html`} scssHref={`${demoPath}/frame1/arc.css`} template="grid-center" />
        <CodeChunk path={`${demoPath}/frame1/arc.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/arc.html`} lang="html" />
      </>
    ),
  },
  {
    title: "Another solution using trigonometric functions",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame2/arc.html`} scssHref={`${demoPath}/frame2/arc.scss`} template="grid-center" />
        <CodeChunk path={`${demoPath}/frame2/arc.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame2/arc.html`} lang="html" />
      </>
    ),
  },
];
