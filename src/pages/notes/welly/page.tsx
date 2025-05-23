import { CodeChunk, DemoFrame } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "1. JavaScript: 字串反轉",
    content: <CodeChunk path={`${demoPath}/question/01.js`} lang="js" />,
  },
  {
    title: "2. JavaScript: 陣列過濾",
    content: (
      <>
        問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。
        <br />
        範例：
        <CodeChunk path={`${demoPath}/question/02.js`} lang="js" />
      </>
    ),
  },
  {
    title: "3. JavaScript: 重構",
    content: (
      <>
        問題：重構這段程式碼並說明原因
        <CodeChunk path={`${demoPath}/question/03.js`} lang="js" />
      </>
    ),
  },
  {
    title: "4. React: 條件渲染",
    content: (
      <>
        問題：在React中，如何根據條件渲染兩種不同的內容？
        <br />
        範例：
        <CodeChunk path={`${demoPath}/question/04.js`} lang="jsx" />
      </>
    ),
  },
  {
    title: "5. React: 組件",
    content: (
      <>
        問題：使用React創建一個簡單的計數器組件，具有增加和減少計數的按鈕。
        <CodeChunk path={`${demoPath}/question/05.js`} lang="jsx" />
        <DemoFrame src={`${demoPath}/frame1.html`} />
      </>
    ),
  },
];
