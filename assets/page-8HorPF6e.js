import{j as e}from"./index-qcyeJB5t.js";import{C as a}from"./codeChunk-Yfye9mg1.js";const d=[{title:"",content:e.jsx("p",{children:"大多數剛匯入的資料並不適合直接分析，為了讓資料更符合符合我們的需求，需要對資料進行整理，以下介紹幾個整理資料經常用到的指令。"})},{title:"整理資料常用指令",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"載入資料"}),e.jsx(a,{code:`cd "C:/Users/misti/Documents/Stata/unify/data"
ls
use 2012_063Q1xia.dta, clear
cd ..`,lang:"stata"}),e.jsx(a,{code:`. cd "C:/Users/misti/Documents/Stata/unify/data"
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. ls
  <dir>  11/20/20 21:16  .                 
  <dir>  11/20/20 21:16  ..                
  11.3M   5/31/18 10:37  2012_063Q1xia.dta 
   0.2k   3/29/18 11:14  data1b.csv        
  33.0k   3/29/18 11:14  data2b.xlsx       
2272.7k   4/26/18 12:18  tscs131.dta       

. use 2012_063Q1xia.dta, clear

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify`,lang:"output"}),e.jsxs("p",{children:["以表格呈現資料中的學歷變項（",e.jsx("code",{children:"v11"}),"）。"]}),e.jsx("p",{children:"通常下載下來的資料會有一份codebook，裡面有每個問題的代號，以及選項的編碼方式。"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:e.jsx("b",{children:e.jsx("code",{children:"describe varname"})})})}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("b",{children:e.jsx("code",{children:"tabulate varname"})})}),e.jsx(a,{code:`d v11   /*d: describe的縮寫，也可以寫成des，檢視該份資料的屬性*/
ta v11  /*ta: tabulate的縮寫，以表格呈現，也能寫為tab*/`,lang:"stata"}),e.jsx(a,{code:`. d v11   /*d: describe的縮寫，也可以寫成des，檢視該份資料的屬性*/

              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
v11             byte    %30.0g     V11        v11 請問您的教育程度是:(提示卡1)

. ta v11  /*ta: tabulate的縮寫，以表格呈現，也能寫為tab*/

                   v11 |
        請問您的教育程 |
        度是:(提示卡1) |      Freq.     Percent        Cum.
-----------------------+-----------------------------------
     無/不識字(跳答14) |        101        4.73        4.73
自修/識字/私塾(跳答14) |         13        0.61        5.34
          小學(跳答13) |        305       14.29       19.63
      國(初)中(跳答13) |        241       11.29       30.93
          初職(跳答13) |          5        0.23       31.16
    高中普通科(跳答13) |         84        3.94       35.10
    高中職業科(跳答13) |         68        3.19       38.28
          高職(跳答13) |        391       18.32       56.61
      士官學校(跳答13) |          6        0.28       56.89
                  五專 |         70        3.28       60.17
                  二專 |        148        6.94       67.10
                  三專 |         22        1.03       68.13
          軍警校專修班 |          5        0.23       68.37
          軍警校專科班 |          4        0.19       68.56
         空中行專/商專 |          7        0.33       68.88
              空中大學 |          9        0.42       69.31
        軍警官校或大學 |         16        0.75       70.06
         技術學院,科大 |        177        8.29       78.35
                  大學 |        316       14.81       93.16
                  碩士 |        131        6.14       99.30
                  博士 |         11        0.52       99.81
          其他(請說明) |          4        0.19      100.00
-----------------------+-----------------------------------
                 Total |      2,134      100.00`,lang:"output"}),e.jsxs("p",{children:["從",e.jsx("code",{children:"d v11"}),"這個指令可以知道v11的value label是V11"]})]}),e.jsxs("li",{children:[e.jsx("p",{children:e.jsx("b",{children:e.jsx("code",{children:"numlabel varname, add"})})}),e.jsxs("p",{children:["利用",e.jsx("code",{children:"numlabel V11, add"}),"可以檢視各個選項的編號。"]}),e.jsxs("p",{children:[e.jsx("code",{children:"numlabel _all, add"}),"可以一次處理所有變項，但資料較大時可能要等它運行幾秒鐘。"]}),e.jsx(a,{code:`numlabel V11, add
ta v11`,lang:"stata"}),e.jsx(a,{code:`. numlabel V11, add

. ta v11

                      v11 |
         請問您的教育程度 |
             是:(提示卡1) |      Freq.     Percent        Cum.
--------------------------+-----------------------------------
     1. 無/不識字(跳答14) |        101        4.73        4.73
2. 自修/識字/私塾(跳答14) |         13        0.61        5.34
          3. 小學(跳答13) |        305       14.29       19.63
      4. 國(初)中(跳答13) |        241       11.29       30.93
          5. 初職(跳答13) |          5        0.23       31.16
    6. 高中普通科(跳答13) |         84        3.94       35.10
    7. 高中職業科(跳答13) |         68        3.19       38.28
          8. 高職(跳答13) |        391       18.32       56.61
      9. 士官學校(跳答13) |          6        0.28       56.89
                 10. 五專 |         70        3.28       60.17
                 11. 二專 |        148        6.94       67.10
                 12. 三專 |         22        1.03       68.13
         13. 軍警校專修班 |          5        0.23       68.37
         14. 軍警校專科班 |          4        0.19       68.56
        15. 空中行專/商專 |          7        0.33       68.88
             16. 空中大學 |          9        0.42       69.31
       17. 軍警官校或大學 |         16        0.75       70.06
        18. 技術學院,科大 |        177        8.29       78.35
                 19. 大學 |        316       14.81       93.16
                 20. 碩士 |        131        6.14       99.30
                 21. 博士 |         11        0.52       99.81
         22. 其他(請說明) |          4        0.19      100.00
--------------------------+-----------------------------------
                    Total |      2,134      100.00`,lang:"output"})]})]})]})},{title:"定義遺漏值",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"將編號22的「其他」設為遺漏值，可以發現「22. 其他」消失了"}),e.jsx(a,{code:`preserve
mvdecode v11, mv(22)
ta v11
restore`,lang:"stata"}),e.jsx(a,{code:`. preserve

. mvdecode v11, mv(22)
         v11: 4 missing values generated

. ta v11

                      v11 |
         請問您的教育程度 |
             是:(提示卡1) |      Freq.     Percent        Cum.
--------------------------+-----------------------------------
     1. 無/不識字(跳答14) |        101        4.74        4.74
2. 自修/識字/私塾(跳答14) |         13        0.61        5.35
          3. 小學(跳答13) |        305       14.32       19.67
      4. 國(初)中(跳答13) |        241       11.31       30.99
          5. 初職(跳答13) |          5        0.23       31.22
    6. 高中普通科(跳答13) |         84        3.94       35.16
    7. 高中職業科(跳答13) |         68        3.19       38.36
          8. 高職(跳答13) |        391       18.36       56.71
      9. 士官學校(跳答13) |          6        0.28       57.00
                 10. 五專 |         70        3.29       60.28
                 11. 二專 |        148        6.95       67.23
                 12. 三專 |         22        1.03       68.26
         13. 軍警校專修班 |          5        0.23       68.50
         14. 軍警校專科班 |          4        0.19       68.69
        15. 空中行專/商專 |          7        0.33       69.01
             16. 空中大學 |          9        0.42       69.44
       17. 軍警官校或大學 |         16        0.75       70.19
        18. 技術學院,科大 |        177        8.31       78.50
                 19. 大學 |        316       14.84       93.33
                 20. 碩士 |        131        6.15       99.48
                 21. 博士 |         11        0.52      100.00
--------------------------+-----------------------------------
                    Total |      2,130      100.00

. restore`,lang:"output"}),e.jsx("p",{children:"將編號18、22設為遺漏值"}),e.jsx(a,{code:`preserve
mvdecode v11, mv(18=.\\22=.)
ta v11
restore`,lang:"stata"}),e.jsx(a,{code:`. preserve

. mvdecode v11, mv(18=.\\22=.)
         v11: 181 missing values generated

. ta v11

                      v11 |
         請問您的教育程度 |
             是:(提示卡1) |      Freq.     Percent        Cum.
--------------------------+-----------------------------------
     1. 無/不識字(跳答14) |        101        5.17        5.17
2. 自修/識字/私塾(跳答14) |         13        0.67        5.84
          3. 小學(跳答13) |        305       15.62       21.45
      4. 國(初)中(跳答13) |        241       12.34       33.79
          5. 初職(跳答13) |          5        0.26       34.05
    6. 高中普通科(跳答13) |         84        4.30       38.35
    7. 高中職業科(跳答13) |         68        3.48       41.83
          8. 高職(跳答13) |        391       20.02       61.85
      9. 士官學校(跳答13) |          6        0.31       62.16
                 10. 五專 |         70        3.58       65.75
                 11. 二專 |        148        7.58       73.32
                 12. 三專 |         22        1.13       74.45
         13. 軍警校專修班 |          5        0.26       74.71
         14. 軍警校專科班 |          4        0.20       74.91
        15. 空中行專/商專 |          7        0.36       75.27
             16. 空中大學 |          9        0.46       75.73
       17. 軍警官校或大學 |         16        0.82       76.55
                 19. 大學 |        316       16.18       92.73
                 20. 碩士 |        131        6.71       99.44
                 21. 博士 |         11        0.56      100.00
--------------------------+-----------------------------------
                    Total |      1,953      100.00

. restore`,lang:"output"}),e.jsx("p",{children:"將編號18至22全部設為遺漏值"}),e.jsx(a,{code:`preserve
mvdecode v11, mv(18//22=.)
ta v11
restore`,lang:"stata"}),e.jsx(a,{code:`. preserve

. mvdecode v11, mv(18//22=.)
         v11: 639 missing values generated

. ta v11

                      v11 |
         請問您的教育程度 |
             是:(提示卡1) |      Freq.     Percent        Cum.
--------------------------+-----------------------------------
     1. 無/不識字(跳答14) |        101        6.76        6.76
2. 自修/識字/私塾(跳答14) |         13        0.87        7.63
          3. 小學(跳答13) |        305       20.40       28.03
      4. 國(初)中(跳答13) |        241       16.12       44.15
          5. 初職(跳答13) |          5        0.33       44.48
    6. 高中普通科(跳答13) |         84        5.62       50.10
    7. 高中職業科(跳答13) |         68        4.55       54.65
          8. 高職(跳答13) |        391       26.15       80.80
      9. 士官學校(跳答13) |          6        0.40       81.20
                 10. 五專 |         70        4.68       85.89
                 11. 二專 |        148        9.90       95.79
                 12. 三專 |         22        1.47       97.26
         13. 軍警校專修班 |          5        0.33       97.59
         14. 軍警校專科班 |          4        0.27       97.86
        15. 空中行專/商專 |          7        0.47       98.33
             16. 空中大學 |          9        0.60       98.93
       17. 軍警官校或大學 |         16        1.07      100.00
--------------------------+-----------------------------------
                    Total |      1,495      100.00

. restore`,lang:"output"}),e.jsxs("p",{children:["若codebook中已經標明遺漏值（通常為999），那也可以使用",e.jsx("code",{children:"mvdecode _all, mv(999)"}),"來一次定義資料中所有變項的遺漏值，不過視需求而定，某些變項有可能需要個別調整。"]})]})},{title:"重新編碼",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"將各個選項重新編碼為教育年數，如：選項1.無/不識字=0年"}),e.jsx("p",{children:"這裡有兩種不同的方式，各有其用處，會在不同地方派上用場"}),e.jsxs("div",{className:"my-2",children:[e.jsxs("div",{className:"text-bold text-large",children:["第一種方式：",e.jsx("code",{children:"recode"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"recode"}),"是針對單一變項重新編碼，指令較簡短，常常會遇到有些資料需要進行反項編碼才能讓人更容易理解，此時適合使用這種方式。"]}),e.jsx(a,{code:`cap drop edyear  /*如過有edyear這個變項就先拋棄，如過沒有則不做動作。*/
/*
因為下一條指令會建立名為edyear的變項，而STATA不能同時存在同名的變項
，若重複執行這條指令會出現錯誤，因此用cap drop先把edyear拋棄。
*/
recode v11 (1=0) (2=3) (3=6) (4/5=9) (6/9=12) (10/11 13/15 =14) /// /*代碼過長時可用///換行*/
           (12=15) (16/19=16) (20=18) (21=22) (22=.), g(edyear)
ta edyear`,lang:"stata"}),e.jsx(a,{code:`. cap drop edyear  /*如過有edyear這個變項就先拋棄，如過沒有則不做動作。*/

. /*
> 因為下一條指令會建立名為edyear的變項，而STATA不能同時存在同名的變項
> ，若重複執行這條指令會出現錯誤，因此用cap drop先把edyear拋棄。
> */
. recode v11 (1=0) (2=3) (3=6) (4/5=9) (6/9=12) (10/11 13/15 =14) /// /*代碼過長時可用///換行*/
>            (12=15) (16/19=16) (20=18) (21=22) (22=.), g(edyear)
(2121 differences between v11 and edyear)

. ta edyear

  RECODE of |
   v11 (v11 |
     請問您 |
     的教育 |
   程度是:( |
   提示卡1) |
          ) |      Freq.     Percent        Cum.
------------+-----------------------------------
          0 |        101        4.74        4.74
          3 |         13        0.61        5.35
          6 |        305       14.32       19.67
          9 |        246       11.55       31.22
         12 |        549       25.77       57.00
         14 |        234       10.99       67.98
         15 |         22        1.03       69.01
         16 |        518       24.32       93.33
         18 |        131        6.15       99.48
         22 |         11        0.52      100.00
------------+-----------------------------------
      Total |      2,130      100.00`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsxs("div",{className:"text-bold text-large",children:["第二種方式：",e.jsx("code",{children:"replace"})]}),e.jsxs("p",{children:[e.jsx("code",{children:"replace"}),"是一一指定新變項中obs的條件，雖然較繁複，但好處是可以將多個變項中的obs整合進同一個變項中。"]}),e.jsx(a,{code:`cap drop edyear
g edyear = .  /*g: generate的縮寫，建立變項，也能寫為gen。建立一個名為edyear，裡面沒有任何obs的變項*/
replace edyear = 0  if v11 == 1
replace edyear = 3  if v11 == 2
replace edyear = 6  if v11 == 3
replace edyear = 9  if v11 == 4 | v11 == 5
replace edyear = 12 if v11 >= 6 & v11 <= 9
replace edyear = 14 if v11 == 10 | v11 == 11 | v11 >= 13 & v11 <= 15
replace edyear = 15 if v11 == 12
replace edyear = 16 if v11 >= 16 & v11 <= 19
replace edyear = 18 if v11 == 20
replace edyear = 22 if v11 == 21
replace edyear = .  if v11 == 22
ta edyear`,lang:"stata"}),e.jsx(a,{code:`. cap drop edyear

. g edyear = .  /*g: generate的縮寫，建立變項，也能寫為gen。建立一個名為edyear，裡面沒有任何obs的變項*/
(2,134 missing values generated)

. replace edyear = 0  if v11 == 1
(101 real changes made)

. replace edyear = 3  if v11 == 2
(13 real changes made)

. replace edyear = 6  if v11 == 3
(305 real changes made)

. replace edyear = 9  if v11 == 4 | v11 == 5
(246 real changes made)

. replace edyear = 12 if v11 >= 6 & v11 <= 9
(549 real changes made)

. replace edyear = 14 if v11 == 10 | v11 == 11 | v11 >= 13 & v11 <= 15
(234 real changes made)

. replace edyear = 15 if v11 == 12
(22 real changes made)

. replace edyear = 16 if v11 >= 16 & v11 <= 19
(518 real changes made)

. replace edyear = 18 if v11 == 20
(131 real changes made)

. replace edyear = 22 if v11 == 21
(11 real changes made)

. replace edyear = .  if v11 == 22
(0 real changes made)

. ta edyear

     edyear |      Freq.     Percent        Cum.
------------+-----------------------------------
          0 |        101        4.74        4.74
          3 |         13        0.61        5.35
          6 |        305       14.32       19.67
          9 |        246       11.55       31.22
         12 |        549       25.77       57.00
         14 |        234       10.99       67.98
         15 |         22        1.03       69.01
         16 |        518       24.32       93.33
         18 |        131        6.15       99.48
         22 |         11        0.52      100.00
------------+-----------------------------------
      Total |      2,130      100.00`,lang:"output"})]})]})},{title:"職業地位計算（EGP Class Scheme）",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("a",{href:"https://www.jstor.org/stable/589632?seq=1",target:"_blank",children:"EGP Class Scheme"}),"是一種職業地位的分類方法，在STATA中可以利用",e.jsx("code",{children:"iscoegp"}),"進行分類。"]}),e.jsxs("p",{children:["以",e.jsx("code",{children:"iscoegp"}),"計算職業地位需要先獲取以下資訊："]}),e.jsxs("ol",{children:[e.jsx("li",{children:"職業編碼：isco88碼（在以下範例資料中為v34b5）"}),e.jsx("li",{children:"在哪裡工作？為誰工作？"}),e.jsx("li",{children:"工作的公司/機構大約雇有多少員工？"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"是否受雇"}),e.jsx(a,{code:`cap drop sempnow 
recode v36 (1 3/99=0) (2=1), g(sempnow)
lab var sempnow "自雇"`,lang:"stata"}),e.jsx(a,{code:`. cap drop sempnow 

. recode v36 (1 3/99=0) (2=1), g(sempnow)
(2134 differences between v36 and sempnow)

. lab var sempnow "自雇"`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"工作單位規模"}),e.jsx(a,{code:`cap drop suvpnow
g suvpnow=.
replace suvpnow=v37 if v37<10
replace suvpnow=0 if v37>9 & v37<100
lab var suvpnow "工作單位規模"`,lang:"stata"}),e.jsx(a,{code:`. cap drop suvpnow

. g suvpnow=.
(2,134 missing values generated)

. replace suvpnow=v37 if v37<10
(1,531 real changes made)

. replace suvpnow=0 if v37>9 & v37<100
(603 real changes made)

. lab var suvpnow "工作單位規模"`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"計算社經地位"}),e.jsx(a,{code:`cap drop _egpnow
iskoegp _egpnow,  isko(v34b5) sempl(sempnow) supvis(suvpnow)
cap drop egpnow
recode _egpnow (1=1 "Mangement") (2/3=2 "whiteC") (4/5=3 "PetitiB") ///
               (7/9=4 "BWorer") (10/11=5 "Farmer"), g(egpnow)
lab var egpnow "職業地位"`,lang:"stata"}),e.jsx(a,{code:`. cap drop _egpnow

. iskoegp _egpnow,  isko(v34b5) sempl(sempnow) supvis(suvpnow)

. 
. cap drop egpnow

. recode _egpnow (1=1 "Mangement") (2/3=2 "whiteC") (4/5=3 "PetitiB") ///
>                (7/9=4 "BWorer") (10/11=5 "Farmer"), g(egpnow)
(1104 differences between _egpnow and egpnow)

. lab var egpnow "職業地位"`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"定義遺漏值"}),e.jsx(a,{code:`list v34b5 egpnow if egpnow==. & v34b5<9997
replace egpnow=1 if (v34b5==1114 | v34b5==1124) & egpnow==.
replace egpnow=3 if (v34b5==3341 | v34b5==3343) & egpnow==.
replace egpnow=4 if  v34b5==8410                & egpnow==.`,lang:"stata"}),e.jsx(a,{code:`. list v34b5 egpnow if egpnow==. & v34b5<9997

      +----------------------------------------+
      |                         v34b5   egpnow |
      |----------------------------------------|
  11. |         國,高中升學補習班老師        . |
 116. | 成人語文補習班,各種才藝班老師        . |
 135. |         國,高中升學補習班老師        . |
 147. | 成人語文補習班,各種才藝班老師        . |
 247. |         國,高中升學補習班老師        . |
      |----------------------------------------|
 305. | 成人語文補習班,各種才藝班老師        . |
 454. |         國,高中升學補習班老師        . |
 479. |         國,高中升學補習班老師        . |
 514. |                鄉鎮市民意代表        . |
 527. |         國,高中升學補習班老師        . |
      |----------------------------------------|
 582. | 成人語文補習班,各種才藝班老師        . |
 606. | 成人語文補習班,各種才藝班老師        . |
 659. |         國,高中升學補習班老師        . |
 670. |         國,高中升學補習班老師        . |
 774. |         國,高中升學補習班老師        . |
      |----------------------------------------|
 951. | 成人語文補習班,各種才藝班老師        . |
 995. | 成人語文補習班,各種才藝班老師        . |
1136. |         國,高中升學補習班老師        . |
1209. |         國,高中升學補習班老師        . |
1461. | 成人語文補習班,各種才藝班老師        . |
      |----------------------------------------|
1712. |              公立高中(職)校長        . |
1780. |         國,高中升學補習班老師        . |
1803. | 成人語文補習班,各種才藝班老師        . |
1857. |                其他半技術工人        . |
1908. | 成人語文補習班,各種才藝班老師        . |
      |----------------------------------------|
2085. | 成人語文補習班,各種才藝班老師        . |
2130. |         國,高中升學補習班老師        . |
      +----------------------------------------+

. replace egpnow=1 if (v34b5==1114 | v34b5==1124) & egpnow==.
(2 real changes made)

. replace egpnow=3 if (v34b5==3341 | v34b5==3343) & egpnow==.
(24 real changes made)

. replace egpnow=4 if  v34b5==8410                & egpnow==.
(1 real change made)`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"職業分類建立完成"}),e.jsx(a,{code:"table egpnow, c(mean edyear sd edyear n edyear) format(%9.2f) row",lang:"stata"}),e.jsx(a,{code:`. table egpnow, c(mean edyear sd edyear n edyear) format(%9.2f) row

----------------------------------------------------
 職業地位 | mean(edyear)    sd(edyear)     N(edyear)
----------+-----------------------------------------
Mangement |        16.83          2.79            71
   whiteC |        13.88          3.16           940
  PetitiB |        15.07          2.90            30
   BWorer |        10.09          3.96           848
   Farmer |         5.69          4.87           143
          | 
    Total |        11.84          4.48         2,032
----------------------------------------------------`,lang:"output"})]})]})},{title:"其他技巧",content:e.jsxs(e.Fragment,{children:[e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"egen miny = min(y), by(x)"}),"："]}),e.jsxs("p",{children:["依據變項",e.jsx("code",{children:"x"}),"分類建立最小值，命名為",e.jsx("code",{children:"miny"}),"。"]}),e.jsxs("li",{children:[e.jsx("code",{children:"by varname: g count = _N"}),"："]}),e.jsx("p",{children:"計算重複變項的數量。"}),e.jsxs("li",{children:[e.jsx("code",{children:"by varname: g count = _n"}),"："]}),e.jsx("p",{children:"為重複變項編號。"}),e.jsx("li",{children:e.jsx("code",{children:"nrow"})}),e.jsx("p",{children:"將第一列作為變項名稱"}),e.jsx("li",{children:e.jsx("code",{children:'replace x = subinstr(x, ",", "", .)'})}),e.jsx("p",{children:"將變項x中的逗號替換掉"}),e.jsx("li",{children:e.jsx("code",{children:'g y = "a" if strmatch(x, "*a*")'})}),e.jsxs("p",{children:["如果",e.jsx("code",{children:"x"}),'包含字母"a"，建立變項',e.jsx("code",{children:'y = "a"'})]}),e.jsx("li",{children:e.jsx("code",{children:'g y = usubstr("abcde", 2, 2)'})}),e.jsxs("p",{children:["從字串",e.jsx("code",{children:"abcde"}),"的第2個字開始，往後數2個字母，建立",e.jsx("code",{children:"y"}),"變項，在本範例中",e.jsx("code",{children:'y = "bc"'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"preserve"}),"、",e.jsx("code",{children:"restore"})]}),e.jsx("p",{children:"建立還原點、回到還原點"}),e.jsx("li",{children:e.jsx("code",{children:'split strvar, p("/") g(a)'})}),e.jsxs("p",{children:["依據字符",e.jsx("code",{children:"/"}),"分割文字變項",e.jsx("code",{children:"strvar"}),"為",e.jsx("code",{children:"a1"}),"、",e.jsx("code",{children:"a2"}),"、",e.jsx("code",{children:"a3"}),"..."]}),e.jsx("li",{children:e.jsx("code",{children:"char(10)"})}),e.jsx("p",{children:"ASCII編碼中的換行符，可插入字串中"}),e.jsxs("li",{children:["stata if/else用法，",e.jsx("code",{children:"var"})," = 變項名稱"]})]}),e.jsx(a,{code:'local varType: type var  /*獲取變項類型*/if substr("`varType\'", 1, 3) == "str" {  如果變項類型為文字(str) do some stata code...} else {  some stata code...}',lang:"stata"})]})}];export{d as default};
