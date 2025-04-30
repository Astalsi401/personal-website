import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Image slider with diagonal lines separator",
    content: (
      <>
        OP link:
        <br />
        <a href="https://stackoverflow.com/q/78423699" target="_blank">
          https://stackoverflow.com/q/78423699
        </a>
      </>
    ),
  },
  {
    title: "My solution",
    content: (
      <>
        <DemoFrame html={`${demoPath}/frame1/css-clip-path-image-slider.html`} cssHref={`${demoPath}/frame1/css-clip-path-image-slider.min.css`} js={[`${demoPath}/frame1/css-clip-path-image-slider.js`]} />
        <CodeChunk path={`${demoPath}/frame1/css-clip-path-image-slider.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/css-clip-path-image-slider.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/css-clip-path-image-slider.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
