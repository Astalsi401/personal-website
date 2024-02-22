import{j as e}from"./index-qH6aULIV.js";import{C as t}from"./codeChunk-hvGXkmzs.js";import{D as d}from"./demoFrame-e6pVB4Wd.js";const s="/personal-website/assets/demo-files/stata/other_02-html",o=[{title:"",content:e.jsx("p",{children:"本頁將介紹兩種能將Stata執行結果加上文字說明輸出為html檔的方法。"})},{title:"dyndoc",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"dyndoc"}),"的do檔格式如下："]}),e.jsx(t,{code:`將Markdown語法的文字輸入在這裡，ex:

#標題

##標題2

 - A

 - B

 - C

~~~~
<<dd_do>>
/*將Stata code輸入在這裡, ex:*/
cd "D:/Documents/Stata/Stata/data"
use us_birth_rate, clear
list in 1/8
cd "D:/Documents/Git/stata/other/02"
<</dd_do>>
~~~~

另一段Markdown....

~~~~
<<dd_do>>
/*另一段Stata code....*/
<</dd_do>>
~~~~`,lang:"md"}),e.jsxs("p",{children:["以",e.jsx("code",{children:"dyndoc 檔名.do, replace"}),"將檔案與執行結果輸出為html，輸出檔案如下："]}),e.jsx(d,{src:`${s}/example1.html`})]})},{title:"webdoc",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"webdoc"}),"的do檔案看起來如下："]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"head()"}),"代表html中<head>標籤內的資訊"]}),e.jsxs("li",{children:[e.jsx("code",{children:"w(800px)"}),":頁面寬度800px"]}),e.jsxs("li",{children:[e.jsx("code",{children:'t("example2")'}),":html頁面的名稱，不需要跟檔名相同"]}),e.jsxs("li",{children:[e.jsx("code",{children:"st(ocean cbf)"}),":主題為ocean（海藍色），cbf代表Stata輸入指令為粗體字"]})]}),e.jsx(t,{code:`clear
cd "D:/Documents/Git/stata/other/02"  /*要匯出的do檔所在的工作目錄*/
webdoc init example2, replace logall /// /*example2: 檔案名*/
       head(w(800px) t("example2") st(ocean cbf))

/***
將Html語法的文字輸入在這裡，ex:

<h1>標題</h1>
<h2>標題2</h2>
<ul>
	<li>A</li>
	<li>B</li>
	<li>C</li>
</ul>
***/

/*將Stata code輸入在這裡, ex:*/
cd "D:/Documents/Stata/Stata/data"
use us_birth_rate, clear
list in 1/8
cd "D:/Documents/Git/stata/other/02"

/***
另一段Html....
***/

/*另一段Stata code....*/`,lang:"html"}),e.jsxs("p",{children:["以",e.jsx("code",{children:"webdoc do 檔名.do, replace"}),"將檔案輸出為html，結果如下："]}),e.jsx(d,{src:`${s}/example2.html`}),e.jsxs("p",{children:["本網站也是使用",e.jsx("code",{children:"webdoc"}),"製作，不過在輸出後又手動對html檔進行編輯，本站中所有頁面的html檔，以及style設定檔都能在",e.jsx("a",{href:"https://github.com/Astalsi401/Astalsi401.github.io",children:"我的github"}),"找到。"]})]})}];export{o as default};
