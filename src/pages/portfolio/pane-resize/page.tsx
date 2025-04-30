import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

const OPLink: React.FC<{ href: string }> = ({ href }) => (
  <>
    <br />
    <a href={href} target="_blank">
      {href}
    </a>
  </>
);
export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "How to add a panel, in Javascript, that resize vertically inside another panel?",
    content: (
      <>
        OP links:
        {["https://stackoverflow.com/q/77730121", "https://stackoverflow.com/q/77776758", "https://stackoverflow.com/q/77796720"].map((href) => (
          <OPLink key={href} href={href} />
        ))}
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/pane-resize.html`} cssHref={`${demoPath}/frame1/pane-resize.css`} js={[`${demoPath}/frame1/pane-resize.js`]} />
        <CodeChunk path={`${demoPath}/frame1/pane-resize.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/pane-resize.css`} lang="css" />
        <CodeChunk path={`${demoPath}/frame1/pane-resize.html`} lang="html" />
      </>
    ),
  },
];
