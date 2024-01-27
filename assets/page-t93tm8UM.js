import{r as s,j as e,t as n}from"./index-xh2kQ6lE.js";import{C as i}from"./codeChunk-7ohDiSGw.js";function r({src:h}){const d=s.useRef(null),[m,x]=s.useState(0),[l,u]=s.useState(!1),c=({data:t,source:a})=>{a===d.current.contentWindow&&t.height&&x(t.height)},p=t=>{t.preventDefault(),u(a=>{let o=!a;return document.body.style.overflowY=o?"hidden":"auto",o})};return s.useEffect(()=>(window.addEventListener("message",c),()=>window.removeEventListener("message",c)),[]),e.jsxs("div",{className:"demo-frame my-2 p-2 pt-0",children:[e.jsx("a",{href:"#",className:`full-page mb-1 ps-1 pe-3 d-block position-relative float-end text-small text-primary ${n(l)}`,onClick:p,children:l?"Close":"Full Page"}),e.jsx("iframe",{className:`w-100 bg-main-bg ${n(l)}`,style:{height:m},src:h,ref:d})]})}const g=[{title:"",content:e.jsx("p",{children:"本頁將介紹兩種能將Stata執行結果加上文字說明輸出為html檔的方法。"})},{title:"dyndoc",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"dyndoc"}),"的do檔格式如下："]}),e.jsx(i,{code:`將Markdown語法的文字輸入在這裡，ex:

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
~~~~`,lang:"md"}),e.jsxs("p",{children:["以",e.jsx("code",{children:"dyndoc 檔名.do, replace"}),"將檔案與執行結果輸出為html，輸出檔案如下："]}),e.jsx(r,{src:"/personal-website/assets/iframes/stata/other_02-html/example1.html"})]})},{title:"webdoc",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("code",{children:"webdoc"}),"的do檔案看起來如下："]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"head()"}),"代表html中<head>標籤內的資訊"]}),e.jsxs("li",{children:[e.jsx("code",{children:"w(800px)"}),":頁面寬度800px"]}),e.jsxs("li",{children:[e.jsx("code",{children:'t("example2")'}),":html頁面的名稱，不需要跟檔名相同"]}),e.jsxs("li",{children:[e.jsx("code",{children:"st(ocean cbf)"}),":主題為ocean（海藍色），cbf代表Stata輸入指令為粗體字"]})]}),e.jsx(i,{code:`clear
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

/*另一段Stata code....*/`,lang:"html"}),e.jsxs("p",{children:["以",e.jsx("code",{children:"webdoc do 檔名.do, replace"}),"將檔案輸出為html，結果如下："]}),e.jsx(r,{src:"/personal-website/assets/iframes/stata/other_02-html/example2.html"}),e.jsxs("p",{children:["本網站也是使用",e.jsx("code",{children:"webdoc"}),"製作，不過在輸出後又手動對html檔進行編輯，本站中所有頁面的html檔，以及style設定檔都能在",e.jsx("a",{href:"https://github.com/Astalsi401/Astalsi401.github.io",children:"我的github"}),"找到。"]})]})}];export{g as default};
