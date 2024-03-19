import { CodeChunk } from "../../../components/codeChunk";

const sections = [
  {
    title: "Run test",
    content: (
      <>
        <CodeChunk code={`node --watch --trace-warnings index.js`} />
      </>
    ),
  },
];

export default sections;
