import { CodeChunk, DemoFrame } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { P } from "@ui/paragraph";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "",
    content: <P>本頁將介紹兩種能將Stata執行結果加上文字說明輸出為html檔的方法。</P>,
  },
  {
    title: "dyndoc",
    content: (
      <>
        <P>
          <InlineCode>dyndoc</InlineCode>的do檔格式如下：
        </P>
        <CodeChunk code={`將Markdown語法的文字輸入在這裡，ex:\n\n#標題\n\n##標題2\n\n - A\n\n - B\n\n - C\n\n~~~~\n<<dd_do>>\n/*將Stata code輸入在這裡, ex:*/\ncd "D:/Documents/Stata/Stata/data"\nuse us_birth_rate, clear\nlist in 1/8\ncd "D:/Documents/Git/stata/other/02"\n<</dd_do>>\n~~~~\n\n另一段Markdown....\n\n~~~~\n<<dd_do>>\n/*另一段Stata code....*/\n<</dd_do>>\n~~~~`} lang="md" />
        <P>
          以<InlineCode>dyndoc 檔名.do, replace</InlineCode>將檔案與執行結果輸出為html，輸出檔案如下：
        </P>
        <DemoFrame src={`${demoPath}/example1.html`} />
      </>
    ),
  },
  {
    title: "webdoc",
    content: (
      <>
        <P>
          <InlineCode>webdoc</InlineCode>的do檔案看起來如下：
        </P>
        <Ul>
          <Li>
            <InlineCode>head()</InlineCode>代表html中&lt;head&gt;標籤內的資訊
          </Li>
          <Li>
            <InlineCode>w(800px)</InlineCode>:頁面寬度800px
          </Li>
          <Li>
            <InlineCode>t("example2")</InlineCode>:html頁面的名稱，不需要跟檔名相同
          </Li>
          <Li>
            <InlineCode>st(ocean cbf)</InlineCode>:主題為ocean（海藍色），cbf代表Stata輸入指令為粗體字
          </Li>
        </Ul>
        <CodeChunk code={`clear\ncd "D:/Documents/Git/stata/other/02"  /*要匯出的do檔所在的工作目錄*/\nwebdoc init example2, replace logall /// /*example2: 檔案名*/\n       head(w(800px) t("example2") st(ocean cbf))\n\n/***\n將Html語法的文字輸入在這裡，ex:\n\n<h1>標題</h1>\n<h2>標題2</h2>\n<Ul>\n	<Li>A</Li>\n	<Li>B</Li>\n	<Li>C</Li>\n</Ul>\n***/\n\n/*將Stata code輸入在這裡, ex:*/\ncd "D:/Documents/Stata/Stata/data"\nuse us_birth_rate, clear\nlist in 1/8\ncd "D:/Documents/Git/stata/other/02"\n\n/***\n另一段Html....\n***/\n\n/*另一段Stata code....*/`} lang="html" />
        <P>
          以<InlineCode>webdoc do 檔名.do, replace</InlineCode>將檔案輸出為html，結果如下：
        </P>
        <DemoFrame src={`${demoPath}/example2.html`} />
        <P>
          本網站也是使用<InlineCode>webdoc</InlineCode>製作，不過在輸出後又手動對html檔進行編輯，本站中所有頁面的html檔，以及style設定檔都能在<a href="https://github.com/Astalsi401/Astalsi401.github.io">我的github</a>找到。
        </P>
      </>
    ),
  },
];
