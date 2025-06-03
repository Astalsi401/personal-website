import { Link } from "react-router";
import { CodeChunk } from "@/components";
import { P } from "@ui/paragraph";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "fetch 獲取儲存於 github 的檔案",
    content: (
      <>
        <CodeChunk path={`${demoPath}/fetchFromGithub.ts`} lang="ts" />
        原文：
        <a href="https://betterprogramming.pub/how-to-fetch-files-from-github-in-javascript-e0ed2c72aeb4" target="_blank">
          How to Fetch Files From GitHub in JavaScript
        </a>
      </>
    ),
  },
  {
    title: "Rate Limit",
    content: (
      <>
        <Ul>
          <Li>60 requests / hour / ip</Li>
        </Ul>
        <P>在本站中，為了避免 github api 到達使用上限，我使用了 localStorage 來存儲已獲取的檔案。</P>
        <P>
          關於 custom hook useLocalStroage 可以參考<Link to={`${import.meta.env.BASE_URL}/portfolio/react-custom-hook-localstorage`}>這篇文章</Link>。
        </P>
      </>
    ),
  },
];
