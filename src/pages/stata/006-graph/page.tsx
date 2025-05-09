import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { P } from "@ui/paragraph";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "",
    content: (
      <>
        <P>輸入資料</P>
        <CodeChunk code={`clear\nquietly input str14 state ur \ncap drop ur0  /*如果有ur0的話就拋棄，沒有則不做動作*/\nrecode ur (2.0/3.9=1 "2.0-3.9") (4.0/5.9=2 "4.0-5.9") /// \n          (6.0/7.9=3 "6.0-7.9") (8.0/9.9=4 "8.0-9.9") ,generate(ur0)   /*將ur重新編碼為ur0*/\nlab var ur0 "class interval"\ntab ur0`} lang="stata" />
        <CodeChunk code={`. clear\n. quietly input str14 state ur \n. \n. cap drop ur0  /*如果有ur0的話就拋棄，沒有則不做動作*/\n. recode ur (2.0/3.9=1 "2.0-3.9") (4.0/5.9=2 "4.0-5.9") /// \n>           (6.0/7.9=3 "6.0-7.9") (8.0/9.9=4 "8.0-9.9") ,generate(ur0)   /*將ur重新編碼為ur0*/\n(34 differences between ur and ur0)\n\n. lab var ur0 "class interval"\n\n. tab ur0\n\n      class |\n   interval |      Freq.     Percent        Cum.\n------------+-----------------------------------\n    2.0-3.9 |          5       14.71       14.71\n    4.0-5.9 |         20       58.82       73.53\n    6.0-7.9 |          8       23.53       97.06\n    8.0-9.9 |          1        2.94      100.00\n------------+-----------------------------------\n      Total |         34      100.00`} lang="output" />
      </>
    ),
  },
  {
    title: "折線圖",
    content: (
      <>
        <CodeChunk code={`preserve /*建立保存點*/\ncollapse (count) ur, by (ur0)\nlab def ur0 1 "2.0-3.9" 2 "4.0-5.9" 3 "6.0-7.9" 4 "8.0-9.9", modify\nlab val ur0 ur0\nlab var ur "Frequency"\nlab var ur0 "Class Interval"\nlist\ntwoway (sca ur ur0, c(1)), xlabel(1(1)4, valuelabel angle(0))\ngraph export "line01.png", replace\nrestore /*回到保存點*/`} lang="stata" />
        <CodeChunk code={`. preserve /*建立保存點*/\n. collapse (count) ur, by (ur0)\n. lab def ur0 1 "2.0-3.9" 2 "4.0-5.9" 3 "6.0-7.9" 4 "8.0-9.9", modify\n. lab val ur0 ur0\n. lab var ur "Frequency"\n. lab var ur0 "Class Interval"\n. list\n     +--------------+\n     |     ur0   ur |\n     |--------------|\n  1. | 2.0-3.9    5 |\n  2. | 4.0-5.9   20 |\n  3. | 6.0-7.9    8 |\n  4. | 8.0-9.9    1 |\n     +--------------+\n. twoway (sca ur ur0, c(1)), xlabel(1(1)4, valuelabel angle(0))\n(note:  named style 1 not found in class connectstyle, default attributes used)\n. graph export "line01.png", replace\n(file line01.png written in PNG format)\n. restore /*回到保存點*/`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/line01.png`} />
      </>
    ),
  },
  {
    title: "柱狀圖",
    content: (
      <>
        <CodeChunk code={`graph bar (count) ur, over(ur0, label(angle(45))) /// /*將count換成percent就會變為百分比*/\n      ylabel(0(5)20, angle(0)) nofill ///\n      ytitle("Frequency") b1title("Class Interval") ///\n      blabel(bar, format(%4.0f)) legend(off)\ngraph export "bar01.png", replace`} lang="stata" />
        <CodeChunk code={`. graph bar (count) ur, over(ur0, label(angle(45))) /// /*將count換成percent就會變為百分比*/\n>       ylabel(0(5)20, angle(0)) nofill ///\n>       ytitle("Frequency") b1title("Class Interval") ///\n>       blabel(bar, format(%4.0f)) legend(off)\n. graph export "bar01.png", replace\n(file bar01.png written in PNG format)`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/bar01.png`} />
        <Ul>
          <Li>
            更多範例：<a href="https://journals.sagepub.com/doi/pdf/10.1177/1536867X1101100310">Highlighting specific bars</a>
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "圓餅圖",
    content: (
      <>
        <CodeChunk code={`graph pie, over(ur0) plabel(_all percent) title(Class Interval) legend(cols(4))\ngraph export "pie01.png", replace`} lang="stata" />
        <CodeChunk code={`. graph pie, over(ur0) plabel(_all percent) title(Class Interval) legend(cols(4))\n. graph export "pie01.png", replace\n(file pie01.png written in PNG format)`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/pie01.png`} />
      </>
    ),
  },
  {
    title: "散點圖",
    content: (
      <>
        <CodeChunk code={`clear\ninput year crate\n1987 612.5\n1988 640.6\n1989 666.9\n1990 729.6\n1991 758.2\n1992 757.7\n1993 747.1\n1994 713.6\n1995 684.5\n1996 636.6\n1997 611.0\n1998 567.6\n1999 523.0\n2000 506.5\n2001 504.5\n2002 494.4\n2003 475.8\n2004 463.2\n2005 469.0\n2006 479.3\n2007 471.8\n2008 458.6\n2009 431.9\n2010 403.6\nend\nlab var year "Year"\ntwoway (scatter crate year, c(l)), /// /*c(l) 用線將點連起來*/\n   ylabel(, angle(0))              ///\n   ytitle("Violent Crime Rate")\ngraph export "sca01.png", replace`} lang="stata" />
        <CodeChunk code={`. clear\n. input year crate\n      year crate\n   1. 1987 612.5\n   2. 1988 640.6\n   3. 1989 666.9\n   4. 1990 729.6\n   5. 1991 758.2\n   6. 1992 757.7\n   7. 1993 747.1\n   8. 1994 713.6\n   9. 1995 684.5\n  10. 1996 636.6\n  11. 1997 611.0\n  12. 1998 567.6\n  13. 1999 523.0\n  14. 2000 506.5\n  15. 2001 504.5\n  16. 2002 494.4\n  17. 2003 475.8\n  18. 2004 463.2\n  19. 2005 469.0\n  20. 2006 479.3\n  21. 2007 471.8\n  22. 2008 458.6\n  23. 2009 431.9\n  24. 2010 403.6\n  25. end\n. lab var year "Year"\n. twoway (scatter crate year, c(l)), /// /*c(l) 用線將點連起來*/\n>    ylabel(, angle(0))              ///\n>    ytitle("Violent Crime Rate")\n.  graph export "sca01.png", replace\n(file sca01.png written in PNG format)`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sca01.png`} />
      </>
    ),
  },
  {
    title: "盒狀圖",
    content: (
      <>
        <CodeChunk code={`clear\ninput gender x\n0 5\n0 2\n0 7\n0 9\n0 3\n0 4\n0 3\n0 1\n0 3\n0 8\n1 3\n1 5\n1 7\n1 4\n1 5\n1 6\n1 7\n1 6\n1 5\n1 4\nend\nlab var gender "gender"\nlab def gender 0 "Male" 1 "Female", modify\nlab val gender gender\ngraph box x, over (gender) ytitle("抽菸次數/週") b1title("性別") \n                          /*b1title: b1=下排第一層*/\ngraph export "box01.png", replace`} lang="stata" />
        <CodeChunk code={`. clear\n. input gender x\n    gender x\n 1. 0 5\n 2. 0 2\n 3. 0 7\n 4. 0 9\n 5. 0 3\n 6. 0 4\n 7. 0 3\n 8. 0 1\n 9. 0 3\n10. 0 8\n11. 1 3\n12. 1 5\n13. 1 7\n14. 1 4\n15. 1 5\n16. 1 6\n17. 1 7\n18. 1 6\n19. 1 5\n20. 1 4\n21. end\n. lab var gender "gender"\n. lab def gender 0 "Male" 1 "Female", modify\n. lab val gender gender\n. graph box x, over (gender) ytitle("抽菸次數/週") b1title("性別") \n.                           /*b1title: b1=下排第一層*/\n. graph export "box01.png", replace\n(file box01.png written in PNG format)`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/box01.png`} />
      </>
    ),
  },
  {
    title: "其他繪圖技巧",
    content: (
      <>
        <Ol>
          <Li>
            添加更多座標軸
            <br />
            <InlineCode>twoway (,yaxis(2))</InlineCode>：為該圖形應用第二條座標軸，一張圖最多可有9條座標軸。
          </Li>
          <Li>
            設定圖的尺寸
            <br />
            <InlineCode>xsize(10)</InlineCode>、<InlineCode>ysize(5)</InlineCode>：寬度為10英吋，高度為5英吋。
          </Li>
          <Li>
            添加文字
            <br />
            <InlineCode>text(1 3 "abc", place(w) color(red))</InlineCode>：在y=1,x=3的地方加入文字「abc」，<InlineCode>place(w)</InlineCode>代表文字靠左，靠右為<InlineCode>e</InlineCode>，詳細可至此
            <a href="https://www.stata.com/manuals/g-3added_text_options.pdf" target="_blank">
              此處（<i>added_text_options</i>）
            </a>
            查看。
          </Li>
          <Li>
            標題
            <Ul>
              <Li>
                <InlineCode>title("")</InlineCode>：表格主標題
                <br />
              </Li>
              <Li>
                <InlineCode>subtitle("")</InlineCode>：副標題
              </Li>
              <Li>
                <InlineCode>xtitle("")</InlineCode>：X軸標題
                <br />
              </Li>
              <Li>
                <InlineCode>ytitle("")</InlineCode>：Y軸標題
                <br />
              </Li>
              <Li>
                <InlineCode>ytitle("", orientation(horizontal))</InlineCode>：橫向標題
                <br />
              </Li>
              <Li>
                <InlineCode>ytitle("", height(-60))</InlineCode>：Y軸標題區塊高度-60，區塊變短，文字會向上移動
                <br />
              </Li>
              <Li>
                <InlineCode>ytitle("", placement(nw))</InlineCode>：移動標題位置，<InlineCode>nw</InlineCode>代表左上角(north, west)，詳細位置看
                <a href="https://www.stata.com/manuals/g-3added_text_options.pdf#g-3added_text_optionsOptions" target="_blank">
                  Options for adding text to twoway graphs
                </a>
              </Li>
            </Ul>
          </Li>
          <Li>
            設定刻度
            <Ul>
              <Li>
                <InlineCode>xlabel(0(1)10)</InlineCode>、<InlineCode>ylabel(0(1)10)</InlineCode>：X或Y軸由0~10，每隔1畫一個刻度。
                <br />
              </Li>
              <Li>
                <InlineCode>xlabel(1 "a" 2 "b")</InlineCode>：定義刻度名稱，在X=1的地方加上刻度，刻度名稱為a，在X=2加上刻度，刻度名稱為b。Y軸設定方法同上。
              </Li>
              <Li>
                <InlineCode>xlabel(, angle(45))</InlineCode>：旋轉刻度值45度，用於Y軸只須改為<InlineCode>ylable</InlineCode>。<br />
              </Li>
              <Li>
                <InlineCode>ylabel(, axis(2))</InlineCode>：表示第二條座標軸適用這些設定。
              </Li>
            </Ul>
          </Li>
          <Li>
            設定圖例
            <Ul>
              <Li>
                <InlineCode>legend(off)</InlineCode>：隱藏圖例
              </Li>
              <Li>
                <InlineCode>legend(label(1 "分類1") label(2 "分類2"))</InlineCode>：設定圖例名稱，Y變項有多個分類時可用，此處的1並非資料檔中的分類編碼，而是製作圖表時畫上去的順序。
              </Li>
              <Li>
                <InlineCode>legend(c(2))</InlineCode>：圖例內容兩兩並排(column = 2)，也可使用<InlineCode>r(#)</InlineCode># = 正整數
              </Li>
              <Li>
                <InlineCode>legend(pos(6))</InlineCode>：代表圖例出現的位置，以時鐘上的數字為方向。
              </Li>
              <Li>
                <InlineCode>legend(symx(*0.25))</InlineCode>：圖例尺寸，<InlineCode>*0.25</InlineCode>代表0.25倍。
              </Li>
            </Ul>
          </Li>
          <Li>
            繪圖區域(bar)
            <Ul>
              <Li>
                <InlineCode>blabel()</InlineCode>：添加bar標籤
              </Li>
              <Li>
                <InlineCode>bar(#, bfcolor(navy))</InlineCode>：變更x軸第#種類別的顏色
              </Li>
              <Li>
                <InlineCode>over(var1, sort(var2) descending)</InlineCode>：依據var1分類，依據var2遞減排序
              </Li>
              <Li>
                <InlineCode>graphregion(fcolor(white))</InlineCode>：圖表區域背景色白色
              </Li>
            </Ul>
          </Li>
          <Li>
            其他
            <Ul>
              <Li>
                <InlineCode>separate var1, by(var2 == 1)</InlineCode>：依據條件分割var1
              </Li>
              <Li>
                <InlineCode>scale(*.8)</InlineCode>：字體大小
              </Li>
            </Ul>
          </Li>
        </Ol>
      </>
    ),
  },
];
