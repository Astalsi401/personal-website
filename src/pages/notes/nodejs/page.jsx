import { CodeChunk } from "../../../components/codeChunk";

const Sections = (demoPath) => [
  {
    title: "Run test",
    content: (
      <>
        <CodeChunk code={`node --watch --trace-warnings index.js`} />
      </>
    ),
  },
];

export default Sections;
