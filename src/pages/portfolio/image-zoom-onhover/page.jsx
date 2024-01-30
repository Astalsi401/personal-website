import { CodeChunk } from "../../../components/codeChunk";
import { DemoFrame } from "../../../components/demoFrame";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/image-zoom-onhover`;
const sections = [
  {
    title: "",
    content: (
      <>
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <DemoFrame src={`${demoPath}/frame1.html`} />
          </div>
        </div>
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.js`} lang="js" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/image-zoom-onhover.html`} lang="html" />
      </>
    ),
  },
];
export default sections;
