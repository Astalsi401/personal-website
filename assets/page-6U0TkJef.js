import{j as a}from"./index-LtAfG_2p.js";import{C as e}from"./codeChunk-8Pie1Zmn.js";import{Z as t}from"./zoomImage-8qZONL8f.js";const i=[{id:"工作目錄",title:"工作目錄",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"匯入資料前最好先確認STATA的工作目錄，這樣可以減少需要輸入的路徑的長度。"}),a.jsxs("p",{children:[a.jsx("code",{children:'cd "路徑"'}),"：直接指定工作目錄"]}),a.jsx(e,{code:'cd "C:\\Users\\misti\\Documents\\Stata\\unify"',lang:"stata"}),a.jsx(e,{code:`. cd "C:\\Users\\misti\\Documents\\Stata\\unify"
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"}),a.jsxs("p",{children:[a.jsx("code",{children:"pwd"}),"：確認當前目錄"]}),a.jsx(e,{code:"pwd",lang:"stata"}),a.jsx(e,{code:`. pwd
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"}),a.jsxs("p",{children:[a.jsx("code",{children:"cd .."}),"：回到上一層目錄"]}),a.jsx(e,{code:"cd ..",lang:"stata"}),a.jsx(e,{code:`. cd ..
C:\\Users\\misti\\Documents\\Stata`,lang:"output"}),a.jsxs("p",{children:[a.jsx("code",{children:"ls"}),"：確認目前工作目錄中有哪些檔案及資料夾"]}),a.jsx(e,{code:"ls",lang:"stata"}),a.jsx(e,{code:`. ls
<dir>  11/18/20 13:42  .                 
<dir>  11/18/20 13:42  ..                
<dir>   6/10/20 14:20  data              
1929.2k  11/18/20 20:40  stata-1.html      
2.4k  11/17/20 21:32  stata.html        
314.7k  11/14/19 13:03  stata快捷.png   
1908.7k  11/17/20 20:13  test.html         
<dir>   6/09/20 11:40  thesis            
<dir>  11/19/20 19:42  unify             
0.2k   4/19/18 12:41  中文編碼轉換.do
<dir>   6/03/20 12:53  天下雜誌-選舉
<dir>  10/29/20 21:31  教學文件      
<dir>   9/23/20 15:36  社會一         
<dir>  10/29/20 21:31  社會三         
<dir>   9/23/20 15:37  社會二         
<dir>   9/23/20 15:50  社會四     `,lang:"output"}),a.jsxs("p",{children:[a.jsx("code",{children:"cd 資料夾名稱"}),"：進入當前目錄中的資料夾，如此處為unify。"]}),a.jsx(e,{code:"cd unify",lang:"stata"}),a.jsx(e,{code:`. cd unify
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"})]})},{id:"資料檔匯入",title:"資料檔匯入",content:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["Txt匯入：",a.jsx("code",{children:"insheet"})]}),a.jsx("p",{children:"直接從指定的目錄匯入，無須變更工作目錄。"}),a.jsx(e,{code:`insheet using "C:\\Users\\misti\\Documents\\Stata\\社會一\\社會統計\\統計1-06\\grade.txt", clear
ta v1`,lang:"stata"}),a.jsx(e,{code:`. insheet using "C:\\Users\\misti\\Documents\\Stata\\社會一\\社會統計\\統計1-06\\grade.txt", clear
(1 var, 34 obs)
. ta v1
         v1 |      Freq.     Percent        Cum.
------------+-----------------------------------
         40 |          5       14.71       14.71
         60 |          2        5.88       20.59
         61 |          2        5.88       26.47
         62 |          1        2.94       29.41
         63 |          1        2.94       32.35
         65 |          1        2.94       35.29
         68 |          1        2.94       38.24
         69 |          1        2.94       41.18
         70 |          2        5.88       47.06
         71 |          1        2.94       50.00
         72 |          1        2.94       52.94
         73 |          2        5.88       58.82
         75 |          1        2.94       61.76
         77 |          1        2.94       64.71
         78 |          1        2.94       67.65
         79 |          1        2.94       70.59
         82 |          1        2.94       73.53
         86 |          2        5.88       79.41
         88 |          2        5.88       85.29
         90 |          1        2.94       88.24
         91 |          1        2.94       91.18
         92 |          1        2.94       94.12
         94 |          1        2.94       97.06
         96 |          1        2.94      100.00
------------+-----------------------------------
      Total |         34      100.00
. /*路徑、檔案與變項名稱請自行更改*/`,lang:"output"})]}),a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["Csv匯入：",a.jsx("code",{children:"insheet"})]}),a.jsx(e,{code:`cd data
insheet using data1b.csv, c n clear  /*c 導入逗點分隔值檔案*/
sort id /*以id排序*/
list in 1/10 /*列出這份資料的前10筆*/`,lang:"stata"}),a.jsx(e,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. insheet using data1b.csv, c n clear  /*c 導入逗點分隔值檔案*/
(3 vars, 30 obs)

. sort id /*以id排序*/

. list in 1/10 /*列出這份資料的前10筆*/

     +--------------------+
     | id   male   score1 |
     |--------------------|
  1. | 31      0       64 |
  2. | 32      0       70 |
  3. | 33      0       61 |
  4. | 34      0       67 |
  5. | 35      0       84 |
     |--------------------|
  6. | 36      0       67 |
  7. | 37      0       63 |
  8. | 38      0       80 |
  9. | 39      0       71 |
 10. | 40      0       52 |
     +--------------------+`,lang:"output"})]}),a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["Excel檔匯入（.Xlsx）：",a.jsx("code",{children:"import"})]}),a.jsx(e,{code:`import exc data2b.xlsx, first clear
/*import exc option
first: first row as var name
sheet("sheetname")*/
sort id
list in 1/10`,lang:"stata"}),a.jsx(e,{code:`. import exc data2b.xlsx, first clear
. /*import exc option
. first: first row as var name
. sheet("sheetname")*/

. sort id

. list in 1/10

     +----------------------------+
     | id   score2   class   dist |
     |----------------------------|
  1. |  1       56       3      3 |
  2. |  2       63       2      3 |
  3. |  3       52       3      5 |
  4. |  4       59       1      4 |
  5. |  5       78       2      1 |
     |----------------------------|
  6. |  6       59       3      5 |
  7. |  7       55       3      5 |
  8. |  8       74       3      5 |
  9. |  9       64       3      4 |
 10. | 10       43       1      1 |
     +----------------------------+`,lang:"output"})]}),a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-bold text-large",children:"匯入有多個分頁的Excel"}),a.jsxs("p",{children:[a.jsx("code",{children:"cellra(A2)"}),": 從A2開始讀取資料"]}),a.jsx(e,{code:'import exc using data2b.xlsx, sh("sheetname") cellra(A2) first clear',lang:"stata"})]}),a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["STATA資料檔匯入（.dta）：",a.jsx("code",{children:"use"})]}),a.jsx(e,{code:`use data1a, clear
list in 1/5
cd ..`,lang:"stata"}),a.jsx(e,{code:`. use data1a, clear
. list in 1/5
     +--------------------+
     | id   male   score1 |
     |--------------------|
  1. |  1      1       58 |
  2. |  2      1       65 |
  3. |  3      1       55 |
  4. |  4      1       62 |
  5. |  5      1       78 |
     +--------------------+
. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"})]})]})},{id:"資料檔匯出",title:"資料檔匯出",content:a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:[a.jsx("code",{children:"sysuse auto, clear"}),"清除上一筆資料，使用stata內建，名為auto的資料"]}),a.jsx("p",{children:"查看資料中的變項。"}),a.jsx(e,{code:`sysuse auto, clear
des
cd data`,lang:"stata"}),a.jsx(e,{code:`. sysuse auto, clear
(1978 Automobile Data)

. des

Contains data from D:\\Tools\\Stata15\\ado\\base/a/auto.dta
  obs:            74                          1978 Automobile Data
 vars:            12                          13 Apr 2016 17:45
 size:         3,182                          (_dta has notes)
---------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------
make            str18   %-18s                 Make and Model
price           int     %8.0gc                Price
mpg             int     %8.0g                 Mileage (mpg)
rep78           int     %8.0g                 Repair Record 1978
headroom        float   %6.1f                 Headroom (in.)
trunk           int     %8.0g                 Trunk space (cu. ft.)
weight          int     %8.0gc                Weight (lbs.)
length          int     %8.0g                 Length (in.)
turn            int     %8.0g                 Turn Circle (ft.)
displacement    int     %8.0g                 Displacement (cu. in.)
gear_ratio      float   %6.2f                 Gear Ratio
foreign         byte    %8.0g      origin     Car type
---------------------------------------------------------------------------------------------
Sorted by: foreign

. cd data
D:\\documents\\stata\\stata\\unify\\data`,lang:"output"}),a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-bold text-large",children:"匯出Csv"}),a.jsxs("p",{children:[a.jsx("code",{children:"outfile"}),"匯出"]}),a.jsx(e,{code:'outfile make price rep78 weight length using "1978 Automobile_part.csv", comma replace',lang:"stata"}),a.jsx(e,{code:`. outfile make price rep78 weight length using "1978 Automobile_part.csv", comma replace
(note: file 1978 Automobile_part.csv not found)`,lang:"output"}),a.jsx("p",{children:"或直接全部匯出。"}),a.jsx(e,{code:'outfile using "1978 Automobile.csv", comma replace',lang:"stata"}),a.jsx(e,{code:`. outfile using "1978 Automobile.csv", comma replace
(note: file 1978 Automobile.csv not found)`,lang:"output"}),a.jsxs("p",{children:[a.jsx("code",{children:"outsheet"}),"匯出"]}),a.jsx(e,{code:'outsheet using "1978 Automobile.csv", c n replace',lang:"stata"})]}),a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-bold text-large",children:"匯出Xlsx"}),a.jsx(e,{code:'export exc using 1978 Automobile.xlsx, sh("sheetname") first(var) sheetrep',lang:"stata"})]})]})},{id:"圖表匯入",title:"圖表匯入",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"在STATA中開啟圖表"}),a.jsx(e,{code:'graph use "1978auto.gph',lang:"stata"}),a.jsx(t,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/1978auto_1.png",alt:"1978auto_1.png"})]})},{id:"圖表匯出",title:"圖表匯出",content:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-bold text-large",children:"匯出為png"}),a.jsx(e,{code:`twoway (sca weight length) (qfit weight length), ///
       title("1978 Automobile Data")
graph save "1978auto.gph", replace  /*將圖表儲存為stata專用的gph格式*/
graph export "1978auto.png", replace   /*將圖表儲存為png格式*/`,lang:"stata"}),a.jsx(e,{code:`. twoway (sca weight length) (qfit weight length), ///
>        title("1978 Automobile Data")
. graph save "1978auto.gph", replace  /*將圖表儲存為stata專用的gph格式*/
(file 1978auto.gph saved)
. graph export "1978auto.png", replace   /*將圖表儲存為png格式*/
(file 1978auto.png written in PNG format)`,lang:"output"})]}),a.jsxs("div",{className:"my-2",children:[a.jsx("div",{className:"text-bold text-large",children:"匯出png至excel"}),a.jsxs("p",{children:[a.jsx("code",{children:"A1"}),"= excel表格位置"]}),a.jsx(e,{code:`putexcel set pathToXlsxFile.xlsx, sheet("xlsxSheetName") modify
putexcel A1 = picture(pathToPngFile.png)`,lang:"stata"})]})]})},{id:"資料檔合併",title:"資料檔合併",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"以下將介紹兩種資料合併的方法："}),a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["方法一：",a.jsx("code",{children:"append"})]}),a.jsxs("p",{children:[a.jsx("code",{children:"append"}),"是將資料b直接添加在資料a的後方，此時兩份資料必須擁有完全相同的變項才能成功合併。"]}),a.jsx("p",{children:"首先匯入資料a（data1a）觀察後可發現，這份資料有3個變項（id、male、score1），樣本數（obs）為30。"}),a.jsx(e,{code:`cd data
use data1a, clear
d /*簡單列出資料檔的資訊*/`,lang:"stata"}),a.jsx(e,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. use data1a, clear

. d /*簡單列出資料檔的資訊*/

Contains data from data1a.dta
  obs:            30                          
 vars:             3                          26 Nov 2020 19:06
 size:           360                          
---------------------------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
id              float   %9.0g                 
male            float   %9.0g                 
score1          float   %9.0g                 
---------------------------------------------------------------------------------------------------------------
Sorted by: id`,lang:"output"}),a.jsx("p",{children:"再來匯入data1b觀察後可發現這份資料與data1a擁有相同的變項，而樣本數則是30。"}),a.jsx(e,{code:`use data1b, clear
d`,lang:"stata"}),a.jsx(e,{code:`. use data1b, clear

. d

Contains data from data1b.dta
  obs:            30                          
 vars:             3                          26 Nov 2020 19:06
 size:            90                          
---------------------------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
id              byte    %8.0g                 
male            byte    %8.0g                 
score1          byte    %8.0g                 
---------------------------------------------------------------------------------------------------------------
Sorted by: id`,lang:"output"}),a.jsxs("p",{children:["現在利用",a.jsx("code",{children:"append"}),"將data1a與data1b合併，然後存檔為data1_all。"]}),a.jsxs("p",{children:["像這樣直接使用",a.jsx("span",{className:"code",children:"save 檔名"}),"存檔，檔案格式為STATA專用的.dta，存檔位置為當前的工作目錄。"]}),a.jsx(e,{code:`append using data1a
sort id  /*以變項id來為合併後的資料排序*/
save data1_all, replace  /*replace: 如果存檔位置已存在同名的檔案，則取代它*/`,lang:"stata"}),a.jsx(e,{code:`. append using data1a
(note: variable id was byte, now float to accommodate using data's values)
(note: variable male was byte, now float to accommodate using data's values)
(note: variable score1 was byte, now float to accommodate using data's values)

. sort id  /*以變項id來為合併後的資料排序*/

. save data1_all, replace  /*replace: 如果存檔位置已存在同名的檔案，則取代它*/
file data1_all.dta saved`,lang:"output"}),a.jsx("p",{children:"現在觀察這份資料可以發現，變項依然是3個，而樣本數則增加到60個。"}),a.jsx(e,{code:"d",lang:"stata"}),a.jsx(e,{code:`. d

Contains data from data1_all.dta
  obs:            60                          
 vars:             3                          27 Nov 2020 21:27
 size:           720                          
---------------------------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
id              float   %8.0g                 
male            float   %8.0g                 
score1          float   %8.0g                 
---------------------------------------------------------------------------------------------------------------
Sorted by: id`,lang:"output"})]}),a.jsxs("div",{className:"my-2",children:[a.jsxs("div",{className:"text-bold text-large",children:["方法二：",a.jsx("code",{children:"merge"})]}),a.jsxs("p",{children:[a.jsx("code",{children:"merge"}),"是將資料2中的變項新增到資料1中，不過這種合併依然要求兩份資料至少有一個變項相同，且該變項的性質必須類似身分證號碼，每個樣本都有其自身的編號，這樣才能成功配對。"]}),a.jsx("p",{children:"匯入data2b，觀察後可發現這份資料中同樣有id這個變項，以及另外3個新變項（score2、class、dist）。"}),a.jsx(e,{code:`use data2b, clear
d`,lang:"stata"}),a.jsx(e,{code:`. use data2b, clear

. d

Contains data from data2b.dta
  obs:            60                          
 vars:             4                          26 Nov 2020 19:07
 size:           240                          
---------------------------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
id              byte    %10.0g                id
score2          byte    %10.0g                score2
class           byte    %10.0g                class
dist            byte    %10.0g                dist
---------------------------------------------------------------------------------------------------------------
Sorted by: id`,lang:"output"}),a.jsx("p",{children:"以id來為data2b、data1_all進行配對，並儲存為data2_all"}),a.jsx(e,{code:`merge 1:1 id using data1_all
cap drop _merge
sort id
save data2_all, replace
cd ..`,lang:"stata"}),a.jsx(e,{code:`. merge 1:1 id using data1_all
(note: variable id was byte, now float to accommodate using data's values)

    Result                           # of obs.
    -----------------------------------------
    not matched                             0
    matched                                60  (_merge==3)
    -----------------------------------------

. cap drop _merge

. sort id

. save data2_all, replace
file data2_all.dta saved

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"}),a.jsx("p",{children:"可以看到data1_all的資料成功與data2b合併，變項增加為6個，而樣本數仍維持20個。"}),a.jsx(e,{code:"d",lang:"stata"}),a.jsx(e,{code:`. d

Contains data from data2_all.dta
  obs:            60                          
 vars:             6                          27 Nov 2020 21:27
 size:           900                          
---------------------------------------------------------------------------------------------------------------
              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
id              float   %10.0g                id
score2          byte    %10.0g                score2
class           byte    %10.0g                class
dist            byte    %10.0g                dist
male            float   %8.0g                 
score1          float   %8.0g                 
---------------------------------------------------------------------------------------------------------------
Sorted by: id`,lang:"output"})]})]})},{id:"資料長寬轉換",title:"資料長寬轉換",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"在這份資料中可以看到score1、score2，利用以下指令，將score合併為一個變項，另外新增exam變項作為兩次分數的區分。"}),a.jsx(e,{code:`reshape long score, i(id) j(exam)
list in 1/10`,lang:"stata"}),a.jsx(e,{code:`. reshape long score, i(id) j(exam)
(note: j = 1 2)

Data                               wide   ->   long
-----------------------------------------------------------------------------
Number of obs.                       60   ->     120
Number of variables                   6   ->       6
j variable (2 values)                     ->   exam
xij variables:
                          score1 score2   ->   score
-----------------------------------------------------------------------------

. list in 1/10

     +-----------------------------------------+
     | id   exam   score   class   dist   male |
     |-----------------------------------------|
  1. |  1      1      58       3      3      1 |
  2. |  1      2      56       3      3      1 |
  3. |  2      1      65       2      3      1 |
  4. |  2      2      63       2      3      1 |
  5. |  3      1      55       3      5      1 |
     |-----------------------------------------|
  6. |  3      2      52       3      5      1 |
  7. |  4      1      62       1      4      1 |
  8. |  4      2      59       1      4      1 |
  9. |  5      1      78       2      1      1 |
 10. |  5      2      78       2      1      1 |
     +-----------------------------------------+`,lang:"output"}),a.jsx("p",{children:"轉回原本格式"}),a.jsx(e,{code:`reshape wide score, i(id) j(exam)  /*或輸入reshape wide也能恢復原本格式*/
list in 1/5`,lang:"stata"}),a.jsx(e,{code:`. reshape wide score, i(id) j(exam)  /*或輸入reshape wide也能恢復原本格式*/
(note: j = 1 2)

Data                               long   ->   wide
-----------------------------------------------------------------------------
Number of obs.                      120   ->      60
Number of variables                   6   ->       6
j variable (2 values)              exam   ->   (dropped)
xij variables:
                                  score   ->   score1 score2
-----------------------------------------------------------------------------

. list in 1/5

     +--------------------------------------------+
     | id   score1   score2   class   dist   male |
     |--------------------------------------------|
  1. |  1       58       56       3      3      1 |
  2. |  2       65       63       2      3      1 |
  3. |  3       55       52       3      5      1 |
  4. |  4       62       59       1      4      1 |
  5. |  5       78       78       2      1      1 |
     +--------------------------------------------+`,lang:"output"})]})}];export{i as default};
