import { CodeChunk, DemoFrame } from "@components";

const Sections = (demoPath) => [
  {
    title: "",
    content: (
      <>
        <div className="my-2">
          資料來源：
          <a href="https://youtu.be/B_n4YONte5A?si=D5iH7jq3Em-8c8sz" target="_blank" rel="noopener noreferrer">
            The simple trick to transition from height 0 to auto with CSS - By Kevin Powell
          </a>
        </div>
        <div className="my-2">
          <code>height: auto;</code>無法使用transition製作動畫效果，然而可以將<code>grid-template-rows</code>修改為<code>0fr</code>、<code>1fr</code>來達成auto hight transition
        </div>
        <DemoFrame src={`${demoPath}/frame1.html`} />
        <CodeChunk path={`${demoPath}/css-auto-height.scss`} lang="scss" />
        <CodeChunk path={`${demoPath}/frame1/css-auto-height.html`} lang="html" />
      </>
    ),
  },
];
export default Sections;
