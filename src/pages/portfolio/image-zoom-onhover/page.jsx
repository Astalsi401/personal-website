import { CodeChunk, DemoFrame } from "@components";

const Sections = (imagePath, demoPath) => [
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
export default Sections;
