import{j as e}from"./index-LtAfG_2p.js";import{C as o}from"./codeChunk-8Pie1Zmn.js";const s=[{title:"",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"測試不同教育程度（大學 vs. 高中或以下）是否會影響生理健康狀況"}),e.jsx(o,{code:`
clear
use "C:/Users/misti/Documents/Stata/社會一/社會統計/統計2-02/GSS2010.dta"
set more off

capture drop college
recode educ (0/12=0 "high school and below") ///
            (13/20=1 "College and beyond"), gen(college)
tab educ college, m
ttest physhlth , by(college)`,lang:"stata"}),e.jsx(o,{code:`. clear

. use "C:/Users/misti/Documents/Stata/社會一/社會統計/統計2-02/GSS2010.dta"

. set more off

. capture drop college

. recode educ (0/12=0 "high school and below") ///
>             (13/20=1 "College and beyond"), gen(college)
(2034 differences between educ and college)

. tab educ college, m

   HIGHEST |
   YEAR OF |   RECODE of educ (HIGHEST YEAR OF SCHOOL
    SCHOOL |                 COMPLETED)
 COMPLETED | high scho  College a         .b         .c |     Total
-----------+--------------------------------------------+----------
         0 |         5          0          0          0 |         5 
         1 |         1          0          0          0 |         1 
         2 |         5          0          0          0 |         5 
         3 |         4          0          0          0 |         4 
         4 |         9          0          0          0 |         9 
         5 |         6          0          0          0 |         6 
         6 |        30          0          0          0 |        30 
         7 |        12          0          0          0 |        12 
         8 |        45          0          0          0 |        45 
         9 |        55          0          0          0 |        55 
        10 |        66          0          0          0 |        66 
        11 |       108          0          0          0 |       108 
        12 |       558          0          0          0 |       558 
        13 |         0        186          0          0 |       186 
        14 |         0        229          0          0 |       229 
        15 |         0        109          0          0 |       109 
        16 |         0        334          0          0 |       334 
        17 |         0         71          0          0 |        71 
        18 |         0        101          0          0 |       101 
        19 |         0         33          0          0 |        33 
        20 |         0         72          0          0 |        72 
        dk |         0          0          1          0 |         1 
        .c |         0          0          0          4 |         4 
-----------+--------------------------------------------+----------
     Total |       904      1,135          1          4 |     2,044 


. ttest physhlth , by(college)

Two-sample t test with equal variances
------------------------------------------------------------------------------
   Group |     Obs        Mean    Std. Err.   Std. Dev.   [95% Conf. Interval]
---------+--------------------------------------------------------------------
high sch |     421    3.315914    .3454995    7.089057    2.636791    3.995038
 College |     733    2.837653    .2296183     6.21668    2.386865    3.288442
---------+--------------------------------------------------------------------
combined |   1,154    3.012132    .1927969    6.549421     2.63386    3.390404
---------+--------------------------------------------------------------------
    diff |             .478261    .4004354               -.3074034    1.263925
------------------------------------------------------------------------------
    diff = mean(high sch) - mean(College)                         t =   1.1944
Ho: diff = 0                                     degrees of freedom =     1152

    Ha: diff < 0                 Ha: diff != 0                 Ha: diff > 0
Pr(T < t) = 0.8837         Pr(|T| > |t|) = 0.2326          Pr(T > t) = 0.1163`,lang:"output"}),e.jsx("code",{children:"t value = 1.1944, P value>0.05"}),e.jsx("p",{children:"支持虛無假設，兩群體間沒有差異"})]})}];export{s as default};
