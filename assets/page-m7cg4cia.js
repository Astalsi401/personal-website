import{j as e}from"./index-TXvsTRDK.js";import{C as l}from"./codeChunk-l5uJ8eZi.js";import{Z as r}from"./zoomImage-sd5kA6BT.js";const t=[{title:"",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"輸入資料"}),e.jsx(l,{code:`clear
quietly input str14 state ur 
cap drop ur0  /*如果有ur0的話就拋棄，沒有則不做動作*/
recode ur (2.0/3.9=1 "2.0-3.9") (4.0/5.9=2 "4.0-5.9") /// 
          (6.0/7.9=3 "6.0-7.9") (8.0/9.9=4 "8.0-9.9") ,generate(ur0)   /*將ur重新編碼為ur0*/
lab var ur0 "class interval"
tab ur0`,lang:"stata"}),e.jsx(l,{code:`. clear
. quietly input str14 state ur 
. 
. cap drop ur0  /*如果有ur0的話就拋棄，沒有則不做動作*/
. recode ur (2.0/3.9=1 "2.0-3.9") (4.0/5.9=2 "4.0-5.9") /// 
>           (6.0/7.9=3 "6.0-7.9") (8.0/9.9=4 "8.0-9.9") ,generate(ur0)   /*將ur重新編碼為ur0*/
(34 differences between ur and ur0)

. lab var ur0 "class interval"

. tab ur0

      class |
   interval |      Freq.     Percent        Cum.
------------+-----------------------------------
    2.0-3.9 |          5       14.71       14.71
    4.0-5.9 |         20       58.82       73.53
    6.0-7.9 |          8       23.53       97.06
    8.0-9.9 |          1        2.94      100.00
------------+-----------------------------------
      Total |         34      100.00`,lang:"output"})]})},{title:"折線圖",content:e.jsxs(e.Fragment,{children:[e.jsx(l,{code:`preserve /*建立保存點*/
collapse (count) ur, by (ur0)
lab def ur0 1 "2.0-3.9" 2 "4.0-5.9" 3 "6.0-7.9" 4 "8.0-9.9", modify
lab val ur0 ur0
lab var ur "Frequency"
lab var ur0 "Class Interval"
list
twoway (sca ur ur0, c(1)), xlabel(1(1)4, valuelabel angle(0))
graph export "line01.png", replace
restore /*回到保存點*/`,lang:"stata"}),e.jsx(l,{code:`. preserve /*建立保存點*/
. collapse (count) ur, by (ur0)
. lab def ur0 1 "2.0-3.9" 2 "4.0-5.9" 3 "6.0-7.9" 4 "8.0-9.9", modify
. lab val ur0 ur0
. lab var ur "Frequency"
. lab var ur0 "Class Interval"
. list
     +--------------+
     |     ur0   ur |
     |--------------|
  1. | 2.0-3.9    5 |
  2. | 4.0-5.9   20 |
  3. | 6.0-7.9    8 |
  4. | 8.0-9.9    1 |
     +--------------+
. twoway (sca ur ur0, c(1)), xlabel(1(1)4, valuelabel angle(0))
(note:  named style 1 not found in class connectstyle, default attributes used)
. graph export "line01.png", replace
(file line01.png written in PNG format)
. restore /*回到保存點*/`,lang:"output"}),e.jsx(r,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/line01.png"})]})},{title:"柱狀圖",content:e.jsxs(e.Fragment,{children:[e.jsx(l,{code:`graph bar (count) ur, over(ur0, label(angle(45))) /// /*將count換成percent就會變為百分比*/
      ylabel(0(5)20, angle(0)) nofill ///
      ytitle("Frequency") b1title("Class Interval") ///
      blabel(bar, format(%4.0f)) legend(off)
graph export "bar01.png", replace`,lang:"stata"}),e.jsx(l,{code:`. graph bar (count) ur, over(ur0, label(angle(45))) /// /*將count換成percent就會變為百分比*/
>       ylabel(0(5)20, angle(0)) nofill ///
>       ytitle("Frequency") b1title("Class Interval") ///
>       blabel(bar, format(%4.0f)) legend(off)
. graph export "bar01.png", replace
(file bar01.png written in PNG format)`,lang:"output"}),e.jsx(r,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/bar01.png"}),e.jsx("ul",{children:e.jsxs("li",{children:["更多範例：",e.jsx("a",{href:"https://journals.sagepub.com/doi/pdf/10.1177/1536867X1101100310",children:"Highlighting specific bars"})]})})]})},{title:"圓餅圖",content:e.jsxs(e.Fragment,{children:[e.jsx(l,{code:`graph pie, over(ur0) plabel(_all percent) title(Class Interval) legend(cols(4))
graph export "pie01.png", replace`,lang:"stata"}),e.jsx(l,{code:`. graph pie, over(ur0) plabel(_all percent) title(Class Interval) legend(cols(4))
. graph export "pie01.png", replace
(file pie01.png written in PNG format)`,lang:"output"}),e.jsx(r,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/pie01.png"})]})},{title:"散點圖",content:e.jsxs(e.Fragment,{children:[e.jsx(l,{code:`clear
input year crate
1987 612.5
1988 640.6
1989 666.9
1990 729.6
1991 758.2
1992 757.7
1993 747.1
1994 713.6
1995 684.5
1996 636.6
1997 611.0
1998 567.6
1999 523.0
2000 506.5
2001 504.5
2002 494.4
2003 475.8
2004 463.2
2005 469.0
2006 479.3
2007 471.8
2008 458.6
2009 431.9
2010 403.6
end
lab var year "Year"
twoway (scatter crate year, c(l)), /// /*c(l) 用線將點連起來*/
   ylabel(, angle(0))              ///
   ytitle("Violent Crime Rate")
graph export "sca01.png", replace`,lang:"stata"}),e.jsx(l,{code:`. clear
. input year crate
      year crate
   1. 1987 612.5
   2. 1988 640.6
   3. 1989 666.9
   4. 1990 729.6
   5. 1991 758.2
   6. 1992 757.7
   7. 1993 747.1
   8. 1994 713.6
   9. 1995 684.5
  10. 1996 636.6
  11. 1997 611.0
  12. 1998 567.6
  13. 1999 523.0
  14. 2000 506.5
  15. 2001 504.5
  16. 2002 494.4
  17. 2003 475.8
  18. 2004 463.2
  19. 2005 469.0
  20. 2006 479.3
  21. 2007 471.8
  22. 2008 458.6
  23. 2009 431.9
  24. 2010 403.6
  25. end
. lab var year "Year"
. twoway (scatter crate year, c(l)), /// /*c(l) 用線將點連起來*/
>    ylabel(, angle(0))              ///
>    ytitle("Violent Crime Rate")
.  graph export "sca01.png", replace
(file sca01.png written in PNG format)`,lang:"output"}),e.jsx(r,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/sca01.png"})]})},{title:"盒狀圖",content:e.jsxs(e.Fragment,{children:[e.jsx(l,{code:`clear
input gender x
0 5
0 2
0 7
0 9
0 3
0 4
0 3
0 1
0 3
0 8
1 3
1 5
1 7
1 4
1 5
1 6
1 7
1 6
1 5
1 4
end
lab var gender "gender"
lab def gender 0 "Male" 1 "Female", modify
lab val gender gender
graph box x, over (gender) ytitle("抽菸次數/週") b1title("性別") 
                          /*b1title: b1=下排第一層*/
graph export "box01.png", replace`,lang:"stata"}),e.jsx(l,{code:`. clear
. input gender x
    gender x
 1. 0 5
 2. 0 2
 3. 0 7
 4. 0 9
 5. 0 3
 6. 0 4
 7. 0 3
 8. 0 1
 9. 0 3
10. 0 8
11. 1 3
12. 1 5
13. 1 7
14. 1 4
15. 1 5
16. 1 6
17. 1 7
18. 1 6
19. 1 5
20. 1 4
21. end
. lab var gender "gender"
. lab def gender 0 "Male" 1 "Female", modify
. lab val gender gender
. graph box x, over (gender) ytitle("抽菸次數/週") b1title("性別") 
.                           /*b1title: b1=下排第一層*/
. graph export "box01.png", replace
(file box01.png written in PNG format)`,lang:"output"}),e.jsx(r,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/box01.png"})]})},{title:"其他繪圖技巧",content:e.jsx(e.Fragment,{children:e.jsxs("ol",{children:[e.jsxs("li",{children:["添加更多座標軸",e.jsx("br",{}),e.jsx("code",{children:"twoway (,yaxis(2))"}),"：為該圖形應用第二條座標軸，一張圖最多可有9條座標軸。"]}),e.jsxs("li",{children:["設定圖的尺寸",e.jsx("br",{}),e.jsx("code",{children:"xsize(10)"}),"、",e.jsx("code",{children:"ysize(5)"}),"：寬度為10英吋，高度為5英吋。"]}),e.jsxs("li",{children:["添加文字",e.jsx("br",{}),e.jsx("code",{children:'text(1 3 "abc", place(w) color(red))'}),"：在y=1,x=3的地方加入文字「abc」，",e.jsx("code",{children:"place(w)"}),"代表文字靠左，靠右為",e.jsx("code",{children:"e"}),"，詳細可至此",e.jsxs("a",{href:"https://www.stata.com/manuals/g-3added_text_options.pdf",target:"_blank",children:["此處（",e.jsx("i",{children:"added_text_options"}),"）"]}),"查看。"]}),e.jsxs("li",{children:["標題",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:'title("")'}),"：表格主標題",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'subtitle("")'}),"：副標題"]}),e.jsxs("li",{children:[e.jsx("code",{children:'xtitle("")'}),"：X軸標題",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'ytitle("")'}),"：Y軸標題",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'ytitle("", orientation(horizontal))'}),"：橫向標題",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'ytitle("", height(-60))'}),"：Y軸標題區塊高度-60，區塊變短，文字會向上移動",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'ytitle("", placement(nw))'}),"：移動標題位置，",e.jsx("code",{children:"nw"}),"代表左上角(north, west)，詳細位置看",e.jsx("a",{href:"https://www.stata.com/manuals/g-3added_text_options.pdf#g-3added_text_optionsOptions",children:"Options for adding text to twoway graphs"})]})]})]}),e.jsxs("li",{children:["設定刻度",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"xlabel(0(1)10)"}),"、",e.jsx("code",{children:"ylabel(0(1)10)"}),"：X或Y軸由0~10，每隔1畫一個刻度。",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:'xlabel(1 "a" 2 "b")'}),"：定義刻度名稱，在X=1的地方加上刻度，刻度名稱為a，在X=2加上刻度，刻度名稱為b。Y軸設定方法同上。"]}),e.jsxs("li",{children:[e.jsx("code",{children:"xlabel(, angle(45))"}),"：旋轉刻度值45度，用於Y軸只須改為",e.jsx("code",{children:"ylable"}),"。",e.jsx("br",{})]}),e.jsxs("li",{children:[e.jsx("code",{children:"ylabel(, axis(2))"}),"：表示第二條座標軸適用這些設定。"]})]})]}),e.jsxs("li",{children:["設定圖例",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"legend(off)"}),"：隱藏圖例"]}),e.jsxs("li",{children:[e.jsx("code",{children:'legend(label(1 "分類1") label(2 "分類2"))'}),"：設定圖例名稱，Y變項有多個分類時可用，此處的1並非資料檔中的分類編碼，而是製作圖表時畫上去的順序。"]}),e.jsxs("li",{children:[e.jsx("code",{children:"legend(c(2))"}),"：圖例內容兩兩並排(column = 2)，也可使用",e.jsx("code",{children:"r(#)"}),"# = 正整數"]}),e.jsxs("li",{children:[e.jsx("code",{children:"legend(pos(6))"}),"：代表圖例出現的位置，以時鐘上的數字為方向。"]}),e.jsxs("li",{children:[e.jsx("code",{children:"legend(symx(*0.25))"}),"：圖例尺寸，",e.jsx("code",{children:"*0.25"}),"代表0.25倍。"]})]})]}),e.jsxs("li",{children:["繪圖區域(bar)",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"blabel()"}),"：添加bar標籤"]}),e.jsxs("li",{children:[e.jsx("code",{children:"bar(#, bfcolor(navy))"}),"：變更x軸第#種類別的顏色"]}),e.jsxs("li",{children:[e.jsx("code",{children:"over(var1, sort(var2) descending)"}),"：依據var1分類，依據var2遞減排序"]}),e.jsxs("li",{children:[e.jsx("code",{children:"graphregion(fcolor(white))"}),"：圖表區域背景色白色"]})]})]}),e.jsxs("li",{children:["其他",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"separate var1, by(var2 == 1)"}),"：依據條件分割var1"]}),e.jsxs("li",{children:[e.jsx("code",{children:"scale(*.8)"}),"：字體大小"]})]})]})]})})}];export{t as default};
