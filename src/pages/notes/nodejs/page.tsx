import { CodeChunk } from "@/components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
  {
    title: "Run test",
    content: <CodeChunk code={`node --watch --trace-warnings index.js`} lang="bash" />,
  },
  {
    title: "Debugger",
    content: (
      <>
        <CodeChunk code={`"scripts": {\n    "dev": "vite",`} />
        <CodeChunk code={`npm --node-options --inspect run dev`} lang="bash" />
      </>
    ),
  },
];

export default Sections;
