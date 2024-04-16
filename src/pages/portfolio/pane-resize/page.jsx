import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/pane-resize`;
function OPLink({ href }) {
  return (
    <>
      <br />
      <a href={href} target="_blank">
        {href}
      </a>
    </>
  );
}
const sections = [
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
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/pane-resize.js`} lang="js" />
        <CodeChunk path={`${demoPath}/pane-resize.css`} lang="css" />
        <CodeChunk path={`${demoPath}/pane-resize.html`} lang="html" />
      </>
    ),
  },
];

export default sections;
