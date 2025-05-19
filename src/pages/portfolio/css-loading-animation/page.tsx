import { Subsection, SubsectionTitle } from "@ui/subsection";
import { CodeChunk, DemoFrame, type DemoFrameProps } from "@/components";
import type { SectionsProps } from "@/types";

const theme: Partial<DemoFrameProps> = { template: "grid-center", bgColor: "#213547" };

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "neon circle",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame3/neon-circle.html`} scssHref={`${demoPath}/frame3/neon-circle.scss`} {...theme} />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame3/neon-circle.html`} lang="html" />
      </>
    ),
  },
  {
    title: "squares gradient border",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame4/gradient-border2.html`} scssHref={`${demoPath}/frame4/gradient-border2.scss`} {...theme} />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame4/gradient-border2.html`} lang="html" />
      </>
    ),
  },
  {
    title: "loading bar",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame5/loading-bar.html`} scssHref={`${demoPath}/frame5/loading-bar.scss`} {...theme} />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame5/loading-bar.html`} lang="html" />
      </>
    ),
  },
  {
    title: "shape transform ",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/shape-transform.html`} scssHref={`${demoPath}/frame1/shape-transform.scss`} {...theme} />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/shape-transform.html`} lang="html" />
      </>
    ),
  },
  {
    title: "basic gradient bolrder",
    content: (
      <>
        <Subsection>
          <SubsectionTitle>type 1</SubsectionTitle>
          <DemoFrame html={`${demoPath}/frame2/gradient-bolrder.html`} scssHref={`${demoPath}/frame2/gradient-bolrder-1.scss`} {...theme} />
          <CodeChunk path={`${demoPath}/frame2/gradient-bolrder-1.scss`} lang="scss" />
          <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.html`} lang="html" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>type 2</SubsectionTitle>
          <DemoFrame html={`${demoPath}/frame2/gradient-bolrder.html`} scssHref={`${demoPath}/frame2/gradient-bolrder-2.scss`} {...theme} />
          <CodeChunk path={`${demoPath}/frame2/gradient-bolrder-2.scss`} lang="scss" />
          <CodeChunk path={`${demoPath}/frame2/gradient-bolrder.html`} lang="html" />
        </Subsection>
      </>
    ),
  },
];
