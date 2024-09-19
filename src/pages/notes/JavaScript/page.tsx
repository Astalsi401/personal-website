import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
  {
    title: "fetch獲取儲存於github的檔案",
    content: (
      <>
        <CodeChunk path={`${import.meta.env.BASE_URL}/assets/demo-files/notes/JavaScript/fetchFromGithub.js`} lang="js" />
        原文：
        <a href="https://betterprogramming.pub/how-to-fetch-files-from-github-in-javascript-e0ed2c72aeb4" target="_blank">
          How to Fetch Files From GitHub in JavaScript
        </a>
      </>
    ),
  },
];

export default Sections;
