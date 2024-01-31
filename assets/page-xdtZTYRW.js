import{j as e}from"./index-t9TkrohJ.js";import{C as a}from"./codeChunk-RNcgW44A.js";import{Z as t}from"./zoomImage-CxwNh6VD.js";const n=[{title:"Odds Ratio",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"在logistic analysis分析中，應變項必須是0或者1（有/無、是/否），自變項可以使用類別變項，也可以使用連續變項。所得到的結果更可以轉換成為機率（Odds Ratio）的概念解讀。"}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例："}),e.jsx(a,{code:`cd data
use "tracking.dta", clear
cd ..
ta college atrack`,lang:"stata"}),e.jsx(a,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. use "tracking.dta", clear

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify

. ta college atrack

            |  Tracks in High Sch
    College | Non-acade  Academic  |     Total
------------+----------------------+----------
Non-college |        15          6 |        21 
    College |         3          8 |        11 
------------+----------------------+----------
      Total |        18         14 |        32`,lang:"output"}),e.jsx("p",{children:"若詢問：升學班的人上大學大學的機率是其他人的幾倍？"}),e.jsx(a,{code:`cap drop acad
g acad = (8/6)/(3/15)
di acad "倍"`,lang:"stata"}),e.jsx(a,{code:`. cap drop acad

. g acad = (8/6)/(3/15)

. di acad "倍"
6.6666665倍`,lang:"output"}),e.jsx("p",{children:"相對的，非升學班上大學的機率是："}),e.jsx(a,{code:`cap drop nadac
g nadac = (3/15)/(8/6)
di "0" nadac "倍"`,lang:"stata"}),e.jsx(a,{code:`. cap drop nadac

. g nadac = (3/15)/(8/6)

. di "0" nadac "倍"
0.15000001倍`,lang:"output"}),e.jsx("p",{children:"由此我們可知："}),e.jsxs("ul",{children:[e.jsx("li",{children:"Odds Ratio一定大於0"}),e.jsx("li",{children:"當Odds Ratio<1，失敗機具較高"}),e.jsx("li",{children:"當Odds Ratio=1，成功與失敗機率各半"}),e.jsx("li",{children:"當Odds Ratio>1，成功機率較高"}),e.jsxs("li",{children:["Odds Ratio值域沒有上限",e.jsx("p",{children:"當遇到較廣闊的值域時，習慣轉換成對數"}),e.jsx(a,{code:`/*從Odds Ratio轉換成對數*/
di log(6.6666665)

/*從對數轉為Odds Ratio*/
di exp(1.89712)`,lang:"stata"}),e.jsx(a,{code:`. /*從Odds Ratio轉換成對數*/
. di log(6.6666665)
1.89712

. 
. /*從對數轉為Odds Ratio*/
. di exp(1.89712)
6.6666668`,lang:"output"})]})]})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"計算機率"}),e.jsxs("ol",{type:"i",children:[e.jsxs("li",{children:["在執行",e.jsx("code",{children:"logit"}),"分析後輸入",e.jsx("code",{children:"predict prob, pr"}),e.jsx(a,{code:`logit college atrack
predict prob, pr
ta prob`,lang:"stata"}),e.jsx(a,{code:`. logit college atrack

Iteration 0:   log likelihood =  -20.59173  
Iteration 1:   log likelihood = -17.721515  
Iteration 2:   log likelihood = -17.670932  
Iteration 3:   log likelihood = -17.670815  
Iteration 4:   log likelihood = -17.670815  

Logistic regression                             Number of obs     =         32
                                                LR chi2(1)        =       5.84
                                                Prob > chi2       =     0.0156
Log likelihood = -17.670815                     Pseudo R2         =     0.1418

------------------------------------------------------------------------------
     college |      Coef.   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
      atrack |    1.89712    .831665     2.28   0.023     .2670865    3.527153
       _cons |  -1.609438   .6324555    -2.54   0.011    -2.849028   -.3698478
------------------------------------------------------------------------------

. predict prob, pr

. ta prob

Pr(college) |      Freq.     Percent        Cum.
------------+-----------------------------------
   .1666667 |         18       56.25       56.25
   .5714286 |         14       43.75      100.00
------------+-----------------------------------
      Total |         32      100.00`,lang:"output"})]}),e.jsxs("li",{children:[e.jsx("code",{children:"margins"}),e.jsx("p",{children:"也適用於ordinal logistic"}),e.jsx(a,{code:"margins, at(atrack=(0 1))",lang:"stata"}),e.jsx(a,{code:`. margins, at(atrack=(0 1))

Adjusted predictions                            Number of obs     =         32
Model VCE    : OIM

Expression   : Pr(college), predict()

1._at        : atrack          =           0

2._at        : atrack          =           1

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .1666667    .087841     1.90   0.058    -.0054986     .338832
          2  |   .5714286     .13226     4.32   0.000     .3122037    .8306534
------------------------------------------------------------------------------`,lang:"output"})]})]})]})]})},{title:"二元邏輯迴歸（Logistic Regression）",content:e.jsxs(e.Fragment,{children:[e.jsx(a,{code:`logit college atrack male gpa chinese, or  /*or:以odds ratio顯示，預設為對數*/
/*Pseudo R2: 可解釋的改變量*/`,lang:"stata"}),e.jsx(a,{code:`. logit college atrack male gpa chinese, or  /*or:以odds ratio顯示，預設為對數*/

Iteration 0:   log likelihood =  -20.59173  
Iteration 1:   log likelihood = -13.063015  
Iteration 2:   log likelihood =  -12.63741  
Iteration 3:   log likelihood = -12.627923  
Iteration 4:   log likelihood = -12.627905  
Iteration 5:   log likelihood = -12.627905  

Logistic regression                             Number of obs     =         32
                                                LR chi2(4)        =      15.93
                                                Prob > chi2       =     0.0031
Log likelihood = -12.627905                     Pseudo R2         =     0.3867

------------------------------------------------------------------------------
     college | Odds Ratio   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
      atrack |   10.90221   11.57428     2.25   0.024     1.360942    87.33516
        male |   2.068618   2.206442     0.68   0.496     .2557213    16.73377
         gpa |   17.48493   22.27269     2.25   0.025     1.440074    212.2967
     chinese |   1.038946    .049211     0.81   0.420     .9468358    1.140017
       _cons |   6.66e-07   3.61e-06    -2.62   0.009     1.60e-11     .027769
------------------------------------------------------------------------------
Note: _cons estimates baseline odds.

. /*Pseudo R2: 可解釋的改變量*/`,lang:"output"}),e.jsx("p",{children:"從表中可知，控制性別、班級、成績、中文成績之後，升學班進入大學的機率比非升學班高10.90221倍，其餘數值依此類推。"}),e.jsx(a,{code:`margins, at(gpa=(2(.5)4) atrack=(0 1)) atmeans /*繪圖*/
marginsplot, ylabel(0(.2)1, angle(0)) noci`,lang:"stata"}),e.jsx(a,{code:`. margins, at(gpa=(2(.5)4) atrack=(0 1)) atmeans /*繪圖*/

Adjusted predictions                            Number of obs     =         32
Model VCE    : OIM

Expression   : Pr(college), predict()

1._at        : atrack          =           0
               male            =      .46875 (mean)
               gpa             =           2
               chinese         =       72.75 (mean)

2._at        : atrack          =           0
               male            =      .46875 (mean)
               gpa             =         2.5
               chinese         =       72.75 (mean)

3._at        : atrack          =           0
               male            =      .46875 (mean)
               gpa             =           3
               chinese         =       72.75 (mean)

4._at        : atrack          =           0
               male            =      .46875 (mean)
               gpa             =         3.5
               chinese         =       72.75 (mean)

5._at        : atrack          =           0
               male            =      .46875 (mean)
               gpa             =           4
               chinese         =       72.75 (mean)

6._at        : atrack          =           1
               male            =      .46875 (mean)
               gpa             =           2
               chinese         =       72.75 (mean)

7._at        : atrack          =           1
               male            =      .46875 (mean)
               gpa             =         2.5
               chinese         =       72.75 (mean)

8._at        : atrack          =           1
               male            =      .46875 (mean)
               gpa             =           3
               chinese         =       72.75 (mean)

9._at        : atrack          =           1
               male            =      .46875 (mean)
               gpa             =         3.5
               chinese         =       72.75 (mean)

10._at       : atrack          =           1
               male            =      .46875 (mean)
               gpa             =           4
               chinese         =       72.75 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .0045911   .0087693     0.52   0.601    -.0125964    .0217786
          2  |   .0189213    .025328     0.75   0.455    -.0307205    .0685632
          3  |   .0746271   .0637606     1.17   0.242    -.0503414    .1995956
          4  |   .2521792   .1525833     1.65   0.098    -.0468785     .551237
          5  |    .585076   .2733759     2.14   0.032     .0492692    1.120883
          6  |   .0478766   .0726943     0.66   0.510    -.0946015    .1903547
          7  |   .1737331   .1517106     1.15   0.252    -.1236142    .4710804
          8  |   .4678624   .1764073     2.65   0.008     .1221105    .8136143
          9  |   .7861616   .1404999     5.60   0.000     .5107868    1.061536
         10  |   .9389238   .0749068    12.53   0.000     .7921092    1.085738
------------------------------------------------------------------------------

. marginsplot, ylabel(0(.2)1, angle(0)) noci

  Variables that uniquely identify margins: gpa atrack`,lang:"output"}),e.jsx(t,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/logit01.png"})]})},{title:"順序邏輯迴歸（Ordinal Logistic Regression）",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"可用於Ordinal Scale的應變項。"}),e.jsx(a,{code:`cd data
use "GSS2012.dta", clear
cd ..
ta healthre
ologit healthre i.maritals age educ i.male`,lang:"stata"}),e.jsx(a,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. use "GSS2012.dta", clear

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify

. ta healthre

  CONDITION |
 OF HEALTH, |
     health |      Freq.     Percent        Cum.
------------+-----------------------------------
       Poor |         83        6.36        6.36
       Fair |        275       21.06       27.41
       Good |        598       45.79       73.20
  Excellent |        350       26.80      100.00
------------+-----------------------------------
      Total |      1,306      100.00

. ologit healthre i.maritals age educ i.male

Iteration 0:   log likelihood = -1579.4068  
Iteration 1:   log likelihood = -1513.1681  
Iteration 2:   log likelihood = -1512.4624  
Iteration 3:   log likelihood = -1512.4617  
Iteration 4:   log likelihood = -1512.4617  

Ordered logistic regression                     Number of obs     =      1,300
                                                LR chi2(4)        =     133.89
                                                Prob > chi2       =     0.0000
Log likelihood = -1512.4617                     Pseudo R2         =     0.0424

------------------------------------------------------------------------------------
          healthre |      Coef.   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------------+----------------------------------------------------------------
          maritals |
Currently Married  |   .5140615   .1058075     4.86   0.000     .3066826    .7214404
               age |  -.0193044   .0030486    -6.33   0.000    -.0252795   -.0133293
              educ |   .1344697   .0172595     7.79   0.000     .1006417    .1682976
                   |
              male |
             Male  |   .0564658    .104827     0.54   0.590    -.1489912    .2619229
-------------------+----------------------------------------------------------------
             /cut1 |  -1.699642   .2976496                     -2.283024   -1.116259
             /cut2 |   .1263807   .2863167                     -.4347897    .6875511
             /cut3 |   2.259722   .2937011                      1.684078    2.835365
------------------------------------------------------------------------------------`,lang:"output"}),e.jsx("p",{children:"繪圖"}),e.jsxs("p",{children:[e.jsx("code",{children:"forvalue i=1/4"}),"：healthre有四個選項，需要分別計算"]}),e.jsxs("p",{children:[e.jsx("code",{children:"age=(20(5)60)"}),"：x軸為年齡，從20開始，5歲為一單位，到60歲為止"]}),e.jsxs("p",{children:[e.jsx("code",{children:"educ=(6)"}),"：這張圖中只包含educ=6的樣本"]}),e.jsxs("p",{children:[e.jsx("code",{children:"predict"}),"：計算應變項（healthre）"]}),e.jsx(a,{code:`forvalue i=1/4{
    margins, at(age=(20(5)60) educ=(6)) atmeans predict(outcome(\`i'))
    matrix b\`i'=r(b)'  /*建立名為b1~b4的矩陣以儲存healthre中的資料*/
}
mat eastA=b1, b2, b3, b4   /*將b1~b4合併為一個矩陣，命名為eastA*/
cap drop eastA1 eastA2 eastA3 eastA4 xlab
svmat eastA, name(eastA)
list eastA1 eastA2 eastA3 eastA4 in 1/9 , noobs clean
gen xlab=_n
twoway (sca eastA1 xlab if xlab<10, c(l) lpattern(dash)) ///
       (sca eastA2 xlab if xlab<10, c(l) msymbol(+)) ///
       (sca eastA3 xlab if xlab<10, c(l) msymbol(-)) ///
       (sca eastA4 xlab if xlab<10, c(l)), ///
       legend(label(1 "Poor") label(2 "Fair") label(3 "Good") label(4 "Excellent")) ///
       ylabel(0(.1).5, angle(0)) xtitle("年齡") ///
       xlabel(0(1)10 0 " " 1 "20" 2 "25" 3 "30" 4 "35" 5 "40" 6 "45" 7 "50" 8 "55" 9 "60" 10 " ") ///
       saving(logit02.png, replace)`,lang:"stata"}),e.jsx(a,{code:`. forvalue i=1/4{
  2.         margins, at(age=(20(5)60) educ=(6)) atmeans predict(outcome(\`i'))
  3.         matrix b\`i'=r(b)'  /*建立名為b1~b4的矩陣以儲存healthre中的資料*/
  4. }

Adjusted predictions                            Number of obs     =      1,300
Model VCE    : OIM

Expression   : Pr(healthre==1), predict(outcome(1))

1._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          20
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

2._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          25
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

3._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          30
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

4._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          35
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

5._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          40
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

6._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          45
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

7._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          50
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

8._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          55
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

9._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          60
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .0842305   .0147358     5.72   0.000     .0553489    .1131121
          2  |   .0919808   .0153189     6.00   0.000     .0619563    .1220053
          3  |   .1003661   .0159621     6.29   0.000     .0690809    .1316513
          4  |   .1094237   .0166886     6.56   0.000     .0767147    .1421327
          5  |   .1191904   .0175256     6.80   0.000     .0848409    .1535399
          6  |   .1297019   .0185041     7.01   0.000     .0934346    .1659692
          7  |    .140992   .0196569     7.17   0.000     .1024652    .1795188
          8  |    .153092   .0210169     7.28   0.000     .1118996    .1942844
          9  |   .1660297   .0226146     7.34   0.000      .121706    .2103535
------------------------------------------------------------------------------

Adjusted predictions                            Number of obs     =      1,300
Model VCE    : OIM

Expression   : Pr(healthre==2), predict(outcome(2))

1._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          20
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

2._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          25
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

3._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          30
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

4._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          35
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

5._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          40
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

6._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          45
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

7._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          50
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

8._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          55
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

9._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          60
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .2792741   .0280229     9.97   0.000     .2243502    .3341979
          2  |   .2941363   .0271285    10.84   0.000     .2409655    .3473072
          3  |   .3088659   .0262899    11.75   0.000     .2573387    .3603931
          4  |   .3233314   .0255421    12.66   0.000     .2732698    .3733931
          5  |    .337395   .0249092    13.55   0.000     .2885739     .386216
          6  |   .3509141   .0243991    14.38   0.000     .3030927    .3987356
          7  |   .3637447   .0240029    15.15   0.000     .3166999    .4107895
          8  |   .3757433   .0236954    15.86   0.000     .3293011    .4221855
          9  |   .3867706   .0234415    16.50   0.000      .340826    .4327151
------------------------------------------------------------------------------

Adjusted predictions                            Number of obs     =      1,300
Model VCE    : OIM

Expression   : Pr(healthre==3), predict(outcome(3))

1._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          20
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

2._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          25
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

3._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          30
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

4._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          35
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

5._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          40
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

6._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          45
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

7._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          50
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

8._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          55
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

9._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          60
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .4647285   .0199403    23.31   0.000     .4256463    .5038107
          2  |   .4554157   .0208452    21.85   0.000       .41456    .4962715
          3  |   .4447525   .0215809    20.61   0.000     .4024547    .4870503
          4  |   .4328588   .0221839    19.51   0.000     .3893792    .4763384
          5  |   .4198658   .0227071    18.49   0.000     .3753606     .464371
          6  |    .405913   .0232102    17.49   0.000     .3604219    .4514041
          7  |   .3911457   .0237489    16.47   0.000     .3445988    .4376927
          8  |   .3757126   .0243672    15.42   0.000     .3279537    .4234714
          9  |   .3597622   .0250908    14.34   0.000     .3105851    .4089393
------------------------------------------------------------------------------

Adjusted predictions                            Number of obs     =      1,300
Model VCE    : OIM

Expression   : Pr(healthre==4), predict(outcome(4))

1._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          20
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

2._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          25
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

3._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          30
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

4._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          35
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

5._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          40
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

6._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          45
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

7._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          50
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

8._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          55
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

9._at        : 0.maritals      =    .5315385 (mean)
               1.maritals      =    .4684615 (mean)
               age             =          60
               educ            =           6
               0.male          =    .5569231 (mean)
               1.male          =    .4430769 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |    .171767   .0246675     6.96   0.000     .1234196    .2201144
          2  |   .1584671   .0222366     7.13   0.000     .1148842      .20205
          3  |   .1460155   .0201097     7.26   0.000     .1066012    .1854299
          4  |   .1343861   .0182736     7.35   0.000     .0985704    .1702017
          5  |   .1235489   .0167089     7.39   0.000     .0907999    .1562978
          6  |    .113471   .0153908     7.37   0.000     .0833055    .1436365
          7  |   .1041176   .0142903     7.29   0.000     .0761092     .132126
          8  |   .0954521   .0133754     7.14   0.000     .0692368    .1216674
          9  |   .0874375   .0126138     6.93   0.000     .0627148    .1121601
------------------------------------------------------------------------------

. mat eastA=b1, b2, b3, b4   /*將b1~b4合併為一個矩陣，命名為eastA*/

. cap drop eastA1 eastA2 eastA3 eastA4 xlab

. svmat eastA, name(eastA)

. list eastA1 eastA2 eastA3 eastA4 in 1/9 , noobs clean

      eastA1     eastA2     eastA3     eastA4  
    .0842305   .2792741   .4647285    .171767  
    .0919808   .2941363   .4554157   .1584671  
    .1003661   .3088659   .4447525   .1460155  
    .1094237   .3233314   .4328588   .1343861  
    .1191904    .337395   .4198658   .1235489  
    .1297019   .3509142    .405913    .113471  
     .140992   .3637447   .3911457   .1041176  
     .153092   .3757433   .3757126   .0954521  
    .1660297   .3867706   .3597622   .0874375  

. gen xlab=_n

. twoway (sca eastA1 xlab if xlab<10, c(l) lpattern(dash)) ///
>        (sca eastA2 xlab if xlab<10, c(l) msymbol(+)) ///
>        (sca eastA3 xlab if xlab<10, c(l) msymbol(-)) ///
>            (sca eastA4 xlab if xlab<10, c(l)), ///
>        legend(label(1 "Poor") label(2 "Fair") label(3 "Good") label(4 "Excellent")) ///
>            ylabel(0(.1).5, angle(0)) xtitle("年齡") ///
>            xlabel(0(1)10 0 " " 1 "20" 2 "25" 3 "30" 4 "35" 5 "40" 6 "45" 7 "50" 8 "55" 9 "60" 10 " ") ///
>            saving(logit02.png, replace)
(note:  named style - not found in class symbol, default attributes used)
(file logit02.png saved)`,lang:"output"}),e.jsx(t,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/logit02.png"})]})},{title:"多分類邏輯迴歸（Multinomial Logistic Regression）",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"可用於Nominal Scale"}),e.jsxs("p",{children:[e.jsx("b",{children:"注意："}),"在",e.jsx("code",{children:"mlogit"}),"中須使用relative-risk ratio，代碼為",e.jsx("code",{children:"rrr"}),"，而非odds ratio的",e.jsx("code",{children:"or"})]}),e.jsx(a,{code:`cd data
use "nomocc2.dta", clear
cd ..
numlabel _all, add
ta occ

mlogit occ white ed exper, base(5) nolog rrr /*以occ的第五項（Prof）作為比較對項*/`,lang:"stata"}),e.jsx(a,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. use "nomocc2.dta", clear
(1982 General Social Survey)

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify

. numlabel _all, add

. ta occ

 Occupation |      Freq.     Percent        Cum.
------------+-----------------------------------
  1. Menial |         31        9.20        9.20
 2. BlueCol |         69       20.47       29.67
   3. Craft |         84       24.93       54.60
4. WhiteCol |         41       12.17       66.77
    5. Prof |        112       33.23      100.00
------------+-----------------------------------
      Total |        337      100.00

. 
. mlogit occ white ed exper, base(5) nolog rrr /*以occ的第五項（Prof）作為比較對項*/

Multinomial logistic regression                 Number of obs     =        337
                                                LR chi2(12)       =     166.09
                                                Prob > chi2       =     0.0000
Log likelihood = -426.80048                     Pseudo R2         =     0.1629

------------------------------------------------------------------------------
         occ |        RRR   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
1__Menial    |
       white |    .169601    .128058    -2.35   0.019     .0386123    .7449581
          ed |   .4589326   .0526071    -6.79   0.000     .3665863    .5745417
       exper |   .9649771   .0174053    -1.98   0.048     .9314593     .999701
       _cons |     100542   185937.9     6.23   0.000     2680.234     3771571
-------------+----------------------------------------------------------------
2__BlueCol   |
       white |   .5840301   .4669924    -0.67   0.501     .1218461     2.79936
          ed |   .4154983   .0417761    -8.74   0.000     .3411816    .5060029
       exper |   .9695438   .0139698    -2.15   0.032     .9425465    .9973143
       _cons |   210989.6   351961.2     7.35   0.000     8022.948     5548662
-------------+----------------------------------------------------------------
3__Craft     |
       white |   .2719974   .1760954    -2.01   0.044     .0764686    .9674893
          ed |   .5040718   .0450134    -7.67   0.000     .4231365     .600488
       exper |   .9920646   .0126046    -0.63   0.531      .967665    1.017079
       _cons |   33758.18      51243     6.87   0.000     1723.071    661385.6
-------------+----------------------------------------------------------------
4__WhiteCol  |
       white |   .8163426   .7096525    -0.23   0.815     .1485651    4.485678
          ed |    .653316   .0602483    -4.62   0.000     .5452883    .7827453
       exper |   .9989455   .0143431    -0.07   0.941     .9712254    1.027457
       _cons |   196.3154   330.5962     3.14   0.002     7.236457    5325.773
-------------+----------------------------------------------------------------
5__Prof      |  (base outcome)
------------------------------------------------------------------------------
Note: _cons estimates baseline relative risk for each outcome.`,lang:"output"}),e.jsx("p",{children:"繪圖"}),e.jsx(a,{code:`margins, at(ed=(3(1)20) white=(0 1)) atmeans predict(outcome(1))   /* atmeans:沒有出現在這便的變項全部採用平均值 */
marginsplot, noci title("種族與成為低階工人的機率") ///
             xlabel(3(1)20) ylabel(0(0.1)0.4, angle(0))
graph export logit03.png, replace     `,lang:"stata"}),e.jsx(a,{code:`. margins, at(ed=(3(1)20) white=(0 1)) atmeans predict(outcome(1))   /* atmeans:沒有出現在這便的變項全部採用平
> 均值 */

Adjusted predictions                            Number of obs     =        337
Model VCE    : OIM

Expression   : Pr(occ==1__Menial), predict(outcome(1))

1._at        : white           =           0
               ed              =           3
               exper           =    20.50148 (mean)

2._at        : white           =           0
               ed              =           4
               exper           =    20.50148 (mean)

3._at        : white           =           0
               ed              =           5
               exper           =    20.50148 (mean)

4._at        : white           =           0
               ed              =           6
               exper           =    20.50148 (mean)

5._at        : white           =           0
               ed              =           7
               exper           =    20.50148 (mean)

6._at        : white           =           0
               ed              =           8
               exper           =    20.50148 (mean)

7._at        : white           =           0
               ed              =           9
               exper           =    20.50148 (mean)

8._at        : white           =           0
               ed              =          10
               exper           =    20.50148 (mean)

9._at        : white           =           0
               ed              =          11
               exper           =    20.50148 (mean)

10._at       : white           =           0
               ed              =          12
               exper           =    20.50148 (mean)

11._at       : white           =           0
               ed              =          13
               exper           =    20.50148 (mean)

12._at       : white           =           0
               ed              =          14
               exper           =    20.50148 (mean)

13._at       : white           =           0
               ed              =          15
               exper           =    20.50148 (mean)

14._at       : white           =           0
               ed              =          16
               exper           =    20.50148 (mean)

15._at       : white           =           0
               ed              =          17
               exper           =    20.50148 (mean)

16._at       : white           =           0
               ed              =          18
               exper           =    20.50148 (mean)

17._at       : white           =           0
               ed              =          19
               exper           =    20.50148 (mean)

18._at       : white           =           0
               ed              =          20
               exper           =    20.50148 (mean)

19._at       : white           =           1
               ed              =           3
               exper           =    20.50148 (mean)

20._at       : white           =           1
               ed              =           4
               exper           =    20.50148 (mean)

21._at       : white           =           1
               ed              =           5
               exper           =    20.50148 (mean)

22._at       : white           =           1
               ed              =           6
               exper           =    20.50148 (mean)

23._at       : white           =           1
               ed              =           7
               exper           =    20.50148 (mean)

24._at       : white           =           1
               ed              =           8
               exper           =    20.50148 (mean)

25._at       : white           =           1
               ed              =           9
               exper           =    20.50148 (mean)

26._at       : white           =           1
               ed              =          10
               exper           =    20.50148 (mean)

27._at       : white           =           1
               ed              =          11
               exper           =    20.50148 (mean)

28._at       : white           =           1
               ed              =          12
               exper           =    20.50148 (mean)

29._at       : white           =           1
               ed              =          13
               exper           =    20.50148 (mean)

30._at       : white           =           1
               ed              =          14
               exper           =    20.50148 (mean)

31._at       : white           =           1
               ed              =          15
               exper           =    20.50148 (mean)

32._at       : white           =           1
               ed              =          16
               exper           =    20.50148 (mean)

33._at       : white           =           1
               ed              =          17
               exper           =    20.50148 (mean)

34._at       : white           =           1
               ed              =          18
               exper           =    20.50148 (mean)

35._at       : white           =           1
               ed              =          19
               exper           =    20.50148 (mean)

36._at       : white           =           1
               ed              =          20
               exper           =    20.50148 (mean)

------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
         _at |
          1  |   .2847358   .2012557     1.41   0.157    -.1097182    .6791898
          2  |   .2913794   .1868327     1.56   0.119    -.0748059    .6575647
          3  |   .2961046   .1722289     1.72   0.086    -.0414579    .6336671
          4  |   .2986642   .1578244     1.89   0.058     -.010666    .6079945
          5  |   .2988085   .1440105     2.07   0.038     .0165531    .5810639
          6  |    .296255   .1311881     2.26   0.024      .039131    .5533791
          7  |   .2906284   .1197501     2.43   0.015     .0559226    .5253342
          8  |   .2813532   .1100153     2.56   0.011     .0657272    .4969791
          9  |   .2674968   .1020807     2.62   0.009     .0674224    .4675712
         10  |   .2476236   .0955874     2.59   0.010     .0602758    .4349714
         11  |   .2199241   .0894971     2.46   0.014      .044513    .3953353
         12  |   .1832228   .0820831     2.23   0.026      .022343    .3441026
         13  |   .1392632   .0713996     1.95   0.051    -.0006774    .2792038
         14  |   .0944149   .0566498     1.67   0.096    -.0166167    .2054466
         15  |   .0568969   .0398907     1.43   0.154    -.0212874    .1350812
         16  |   .0310492   .0249947     1.24   0.214    -.0179396     .080038
         17  |    .015794   .0143098     1.10   0.270    -.0122526    .0438406
         18  |    .007688    .007718     1.00   0.319    -.0074391     .022815
         19  |   .1216152    .091663     1.33   0.185     -.058041    .3012714
         20  |   .1280056   .0847663     1.51   0.131    -.0381333    .2941445
         21  |   .1337186   .0768124     1.74   0.082     -.016831    .2842682
         22  |   .1384314   .0679656     2.04   0.042     .0052213    .2716415
         23  |   .1417312   .0584736     2.42   0.015      .027125    .2563374
         24  |   .1430724   .0486995     2.94   0.003     .0476233    .2385216
         25  |   .1417097   .0391864     3.62   0.000     .0649058    .2185136
         26  |   .1366238   .0307624     4.44   0.000     .0763306     .196917
         27  |   .1265451   .0245352     5.16   0.000     .0784571    .1746332
         28  |   .1103664   .0211691     5.21   0.000     .0688758     .151857
         29  |   .0882956   .0195417     4.52   0.000     .0499946    .1265966
         30  |   .0632224   .0175102     3.61   0.000     .0289031    .0975418
         31  |   .0401233   .0141726     2.83   0.005     .0123454    .0679011
         32  |   .0228466   .0101769     2.24   0.025     .0029003    .0427929
         33  |   .0119876   .0065708     1.82   0.068     -.000891    .0248661
         34  |   .0059588   .0039113     1.52   0.128    -.0017072    .0136249
         35  |   .0028659   .0021986     1.30   0.192    -.0014433    .0071752
         36  |    .001352   .0011884     1.14   0.255    -.0009772    .0036812
------------------------------------------------------------------------------

. marginsplot, noci title("種族與成為低階工人的機率") ///
>              xlabel(3(1)20) ylabel(0(0.1)0.4, angle(0))

  Variables that uniquely identify margins: ed white

. graph export logit03.png, replace            
(file logit03.png written in PNG format)`,lang:"output"}),e.jsx(t,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/logit03.png"})]})},{title:"利用Stata製作迴歸表格",content:e.jsxs(e.Fragment,{children:[e.jsx(a,{code:`eststo clear
eststo M1: mlogit occ white, base(5) nolog rrr
eststo M2: mlogit occ white ed exper, base(5) nolog rrr
esttab M1 M2, eform se scalars(ll aic bic) mtitles label legend style(fixed) ///
              varwidth(35) modelwidth(10)   ///
              starlevels(* .05 ** .01 *** 0.001)`,lang:"stata"}),e.jsx(a,{code:`. eststo clear

. eststo M1: mlogit occ white, base(5) nolog rrr

Multinomial logistic regression                 Number of obs     =        337
                                                LR chi2(4)        =       5.31
                                                Prob > chi2       =     0.2566
Log likelihood = -507.18706                     Pseudo R2         =     0.0052

------------------------------------------------------------------------------
         occ |        RRR   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
1__Menial    |
       white |   .3466667    .216727    -1.69   0.090     .1018036    1.180487
       _cons |   .7142857   .4182429    -0.57   0.566     .2267041    2.250529
-------------+----------------------------------------------------------------
2__BlueCol   |
       white |   1.083333   .7002102     0.12   0.901     .3052037    3.845337
       _cons |   .5714286   .3581618    -0.89   0.372     .1672797    1.952004
-------------+----------------------------------------------------------------
3__Craft     |
       white |   .4933333   .2543871    -1.37   0.171     .1795638    1.355383
       _cons |   1.428571   .7040077     0.72   0.469     .5437825    3.753001
-------------+----------------------------------------------------------------
4__WhiteCol  |
       white |        1.3   1.070447     0.32   0.750     .2588488    6.528907
       _cons |   .2857143   .2290811    -1.56   0.118     .0593543    1.375345
-------------+----------------------------------------------------------------
5__Prof      |  (base outcome)
------------------------------------------------------------------------------
Note: _cons estimates baseline relative risk for each outcome.

. eststo M2: mlogit occ white ed exper, base(5) nolog rrr

Multinomial logistic regression                 Number of obs     =        337
                                                LR chi2(12)       =     166.09
                                                Prob > chi2       =     0.0000
Log likelihood = -426.80048                     Pseudo R2         =     0.1629

------------------------------------------------------------------------------
         occ |        RRR   Std. Err.      z    P>|z|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
1__Menial    |
       white |    .169601    .128058    -2.35   0.019     .0386123    .7449581
          ed |   .4589326   .0526071    -6.79   0.000     .3665863    .5745417
       exper |   .9649771   .0174053    -1.98   0.048     .9314593     .999701
       _cons |     100542   185937.9     6.23   0.000     2680.234     3771571
-------------+----------------------------------------------------------------
2__BlueCol   |
       white |   .5840301   .4669924    -0.67   0.501     .1218461     2.79936
          ed |   .4154983   .0417761    -8.74   0.000     .3411816    .5060029
       exper |   .9695438   .0139698    -2.15   0.032     .9425465    .9973143
       _cons |   210989.6   351961.2     7.35   0.000     8022.948     5548662
-------------+----------------------------------------------------------------
3__Craft     |
       white |   .2719974   .1760954    -2.01   0.044     .0764686    .9674893
          ed |   .5040718   .0450134    -7.67   0.000     .4231365     .600488
       exper |   .9920646   .0126046    -0.63   0.531      .967665    1.017079
       _cons |   33758.18      51243     6.87   0.000     1723.071    661385.6
-------------+----------------------------------------------------------------
4__WhiteCol  |
       white |   .8163426   .7096525    -0.23   0.815     .1485651    4.485678
          ed |    .653316   .0602483    -4.62   0.000     .5452883    .7827453
       exper |   .9989455   .0143431    -0.07   0.941     .9712254    1.027457
       _cons |   196.3154   330.5962     3.14   0.002     7.236457    5325.773
-------------+----------------------------------------------------------------
5__Prof      |  (base outcome)
------------------------------------------------------------------------------
Note: _cons estimates baseline relative risk for each outcome.

. esttab M1 M2, eform se scalars(ll aic bic) mtitles label legend style(fixed) ///
>               varwidth(35) modelwidth(10)   ///
>                       starlevels(* .05 ** .01 *** 0.001)

---------------------------------------------------------------
                                           (1)           (2)   
                                            M1            M2   
---------------------------------------------------------------
1__Menial                                                      
Race: 1=white 0=nonwhite                 0.347         0.170*  
                                       (0.217)       (0.128)   

Years of education                                     0.459***
                                                    (0.0526)   

Years of work experience                               0.965*  
                                                    (0.0174)   
---------------------------------------------------------------
2__BlueCol                                                     
Race: 1=white 0=nonwhite                 1.083         0.584   
                                       (0.700)       (0.467)   

Years of education                                     0.415***
                                                    (0.0418)   

Years of work experience                               0.970*  
                                                    (0.0140)   
---------------------------------------------------------------
3__Craft                                                       
Race: 1=white 0=nonwhite                 0.493         0.272*  
                                       (0.254)       (0.176)   

Years of education                                     0.504***
                                                    (0.0450)   

Years of work experience                               0.992   
                                                    (0.0126)   
---------------------------------------------------------------
4__WhiteCol                                                    
Race: 1=white 0=nonwhite                 1.300         0.816   
                                       (1.070)       (0.710)   

Years of education                                     0.653***
                                                    (0.0602)   

Years of work experience                               0.999   
                                                    (0.0143)   
---------------------------------------------------------------
5__Prof                                                        
Race: 1=white 0=nonwhite                     1             1   
                                           (.)           (.)   

Years of education                                         1   
                                                         (.)   

Years of work experience                                   1   
                                                         (.)   
---------------------------------------------------------------
Observations                               337           337   
ll                                      -507.2        -426.8   
aic                                     1030.4         885.6   
bic                                     1060.9         946.7   
---------------------------------------------------------------
Exponentiated coefficients; Standard errors in parentheses
* p<.05, ** p<.01, *** p<0.001`,lang:"output"}),e.jsxs("p",{children:["將以上表格輸出為",e.jsx("code",{children:"mlogit01.rtf"}),"，可用word開啟"]}),e.jsx(a,{code:`esttab M1 M2 using mlogit01.rtf, eform se mtitles legend style(fixed) ///
        varwidth(35) modelwidth(10)  ///
        starlevels(* .05 ** .01 *** 0.001) replace`,lang:"stata"}),e.jsx(a,{code:`. esttab M1 M2 using mlogit01.rtf, eform se mtitles legend style(fixed) ///
>         varwidth(35) modelwidth(10)  ///
>         starlevels(* .05 ** .01 *** 0.001) replace(output written to mlogit01.rtf)`,lang:"output"}),e.jsx("p",{children:"也可輸出為csv檔"}),e.jsx(a,{code:`esttab M1 M2 using mlogit01.csv, eform se mtitles legend style(fixed) ///
        varwidth(35) modelwidth(10)  ///
        starlevels(* .05 ** .01 *** 0.001) replace`,lang:"stata"}),e.jsx(a,{code:`. esttab M1 M2 using mlogit01.csv, eform se mtitles legend style(fixed) ///
>         varwidth(35) modelwidth(10)  ///
>         starlevels(* .05 ** .01 *** 0.001) replace
(output written to mlogit01.csv)`,lang:"output"})]})}];export{n as default};
