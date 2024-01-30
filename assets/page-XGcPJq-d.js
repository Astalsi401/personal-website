import{j as e}from"./index-ghIOUYFc.js";import{C as s}from"./codeChunk-c8OkEgZA.js";const n=[{id:"常用符號",title:"常用符號",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"以下簡單介紹Stata中常用的符號："}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"=="}),"：等號，以連續兩個等號代表數值的相等。"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"="}),"：賦值符號，以一個等號為一批資料或某個數值賦予名稱。"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"&"}),"：與、和，同時滿足提到條件的含意。"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"|"}),"：或，只要滿足其中一個條件。"]})}),e.jsx("li",{children:e.jsxs("p",{children:[e.jsx("code",{children:"/* some text... */"}),"：加入註解"]})})]})]})},,{id:"資料輸入",title:"資料輸入",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["輸入",e.jsx("code",{children:"case"}),"、",e.jsx("code",{children:"response"}),"、",e.jsx("code",{children:"freq"}),"三個變項。"]}),e.jsx(s,{code:`clear
input case response freq
1 1 9
1 2 18
1 3 42
1 4 51
1 5 30
2 1 6
2 2 12
2 3 28
2 4 34
2 5 20
end`,lang:"stata"}),e.jsxs("p",{children:["利用",e.jsx("code",{children:"describe"}),"查看變項資訊。"]}),e.jsx(s,{code:"describe",lang:"stata"}),e.jsx(s,{code:`Contains data
obs: 10 
vars: 3 
size: 120 
---------------------------------------------------------------------------------------------
storage display value
variable name type format label variable label
---------------------------------------------------------------------------------------------
case  float %9.0g
response  float %9.0g
freq  float %9.0g
---------------------------------------------------------------------------------------------
Sorted by:
 Note: Dataset has changed since last saved.`,lang:"output"}),e.jsxs("p",{children:["定義名為",e.jsx("code",{children:"react"}),"的",e.jsx("code",{children:"value label"}),"，並為1~5加上標籤。"]}),e.jsxs("p",{children:["將",e.jsx("code",{children:"react"}),"與",e.jsx("code",{children:"response"}),"連結。"]}),e.jsxs("p",{children:["將",e.jsx("code",{children:"response"}),"的",e.jsx("code",{children:"variable label"}),"命名為",e.jsx("code",{children:'"Agr of Onset"'})]}),e.jsx(s,{code:`label def react 1 "70-79" 2 "60-69" 3 "50-59" 4 "40-49" 5 "30-39"
lab val response react
lab var response "Agr of Onset"`,lang:"stata"}),e.jsxs("p",{children:["再次利用",e.jsx("code",{children:"describe"}),"查看變項資訊，可發現",e.jsx("code",{children:"response"}),"的欄位已發生變化。"]}),e.jsx(s,{code:"describe",lang:"stata"}),e.jsx(s,{code:`Contains data
obs: 10 
vars: 3 
size: 120 
---------------------------------------------------------------------------------------------
storage display value
variable name type format label variable label
---------------------------------------------------------------------------------------------
case  float %9.0g
response  float %9.0g react Agr of Onset
freq  float %9.0g
---------------------------------------------------------------------------------------------
Sorted by:
 Note: Dataset has changed since last saved.`,lang:"output"}),e.jsx("p",{children:"對case進行相同的步驟。"}),e.jsx(s,{code:`lab def case 1 "f" 2 "%", modify
lab val case case`,lang:"stata"})]})},{id:"輸出表格",title:"輸出表格",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"第一種方法:"}),' 將加權變項中的數值視為"個案數"，然後增加"n-1"個案數。以此資料為例，第一列為一個個案，但由於freq＝9，因此當執行完',e.jsx("code",{children:"expandfreq"}),'後，這資料會增加9-1＝8列的"1 1 9"的個案']}),e.jsx(s,{code:`preserve
expand freq
tab response case, freq
restore`,lang:"stata"}),e.jsx(s,{code:`. preserve
. expand freq
(240 observations created)
. tab response case, freq

Agr of     | case
Onset      | f  %                 | Total
-----------+----------------------+----------
70-79      | 9  6                 | 15 
60-69      | 18 12                | 30 
50-59      | 42 28                | 70 
40-49      | 51 34                | 85 
30-39      | 30 20                | 50 
-----------+----------------------+----------
Total      | 150 100              | 250 
. restore`,lang:"output"}),e.jsxs("p",{children:[e.jsx("b",{children:"第二種方法:"})," 將freq視為加權的變項"]}),e.jsx(s,{code:"ta response case [fw=freq], freq",lang:"stata"}),e.jsx(s,{code:`. ta response case [fw=freq], freq

Agr of     | case
Onset      | f  %                 | Total
-----------+----------------------+----------
70-79      | 9  6                 | 15 
60-69      | 18 12                | 30 
50-59      | 42 28                | 70 
40-49      | 51 34                | 85 
30-39      | 30 20                | 50 
-----------+----------------------+----------
Total      | 150 100              | 250 `,lang:"output"})]})},{id:"表格範例2",title:"表格範例2",content:e.jsxs(e.Fragment,{children:[e.jsx(s,{code:`clear
input x y freq
x y freq
0 0 15
1 0 10
0 1 5
1 1 10
end

lab var x "political orientation"
lab var y "government perference"
lab def x 0 "liberal" 1 "conservative", modify
lab def y 0 "large" 1 "small", modify
lab val x x
lab val y y
tab y x [fw=freq], chi`,lang:"stata"}),e.jsx(s,{code:`. clear
. input x y freq
x y freq
1. 0 0 15
2. 1 0 10
3. 0 1 5
4. 1 1 10
5. end
. 
. lab var x "political orientation"
. lab var y "government perference"
. lab def x 0 "liberal" 1 "conservative", modify
. lab def y 0 "large" 1 "small", modify
. lab val x x
. lab val y y
. tab y x [fw=freq], chi

government | political orientation
perference | liberal    conservat | Total
-----------+----------------------+----------
large      | 15         10        | 25 
small      | 5          10        | 15 
-----------+----------------------+----------
Total      | 20 20                | 40 
Pearson chi2(1) =  2.6667  Pr = 0.102`,lang:"output"})]})},{id:"建立亂數(Stata Random Number)",title:"建立亂數(Stata Random Number)",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"各種建立亂數的指令"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"runiform():"})," generates rectangularly (uniformly) distributed random number over [0,1]."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rbeta(a,b):"})," generates beta-distribution beta(a, b) random numbers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rbinomial(n,p):"})," generates binomial(n, p) random numbers, where n is the number of trials and p the probability of a success."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rchi2(df):"})," generates χ2 with df degrees of freedom random numbers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rgamma(a,b):"})," generates Γ(a, b) random numbers, where a is the shape parameter and b, the scale parameter."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rhypergeometric(N,K,n):"})," generates hypergeometric random numbers, where N is the population size, K is the number of in the population having the attribute of interest, and n is the sample size."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rnbinomial(n,p):"})," generates negative binomial — the number of failures before the nth success — random numbers, where p is the probability of a success. (n can also be noninteger.)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"rnormal(μ,σ):"})," generates Gaussian normal random numbers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rpoisson(m):"})," generates Poisson(m) random numbers."]}),e.jsxs("li",{children:[e.jsx("code",{children:"rt(df):"})," generates Student’s t(df) random numbers."]})]}),e.jsx(s,{code:`clear
set obs 100000
set seed 123456789
g x = int(floor((101)*runiform()+0))
* 100-0+1 a
* b -a a
* max min
*int=整數
*0~100有101個整數
*runiform=平均分布

su x, d
sort x`,lang:"stata"}),e.jsx(s,{code:`. clear
. set obs 100000
number of observations (_N) was 0, now 100,000
. set seed 123456789 
. g x = int(floor((101)*runiform()+0))
. * 100-0+1 a
. * b -a a
. * max min 
. *int=整數
. *0~100有101個整數
. *runiform=平均分布
. su x, d
                              x
-------------------------------------------------------------
      Percentiles      Smallest
  1%           0              0
  5%           4              0
 10%          10              0      Obs              100,000
 25%          25              0      Sum of Wgt.      100,000
 50%          50                     Mean            50.00145
                        Largest      Std. Dev.       29.18721
 75%          75            100
 90%          90            100      Variance         851.893
 95%          95            100      Skewness       -.0033492
 99%          99            100      Kurtosis         1.79898
. sort x`,lang:"output"})]})}];export{n as default};
