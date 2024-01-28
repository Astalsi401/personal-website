import{j as e}from"./index-LtAfG_2p.js";import{C as a}from"./codeChunk-8Pie1Zmn.js";import{Z as d}from"./zoomImage-8qZONL8f.js";const l=[{title:"常態分配曲線",content:e.jsxs(e.Fragment,{children:[e.jsx(a,{code:`twoway (function y=normalden(x) , range(-4 4)        ///
        droplines(-2 -1 0 1 2)),                       ///
        title("常態分配曲線")                         ///
        plotregion(margin(zero))                       ///
        yscale(off) ylabel(, nogrid)                   ///
        xlabel(-4 -3 -2 -1 0 1 2 3 4, format(%4.2f))       ///
        xtitle("Standard deviations") 
graph export "normal curve.png", replace`,lang:"stata"}),e.jsx(a,{code:`. twoway (function y=normalden(x) , range(-4 4)        ///
>         droplines(-2 -1 0 1 2)),                       ///
>         title("常態分配曲線")                         ///
>         plotregion(margin(zero))                       ///
>         yscale(off) ylabel(, nogrid)                   ///
>         xlabel(-4 -3 -2 -1 0 1 2 3 4, format(%4.2f))       ///
>         xtitle("Standard deviations") 

. graph export "normal curve.png", replace
(file normal curve.png written in PNG format)`,lang:"output"}),e.jsx(d,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/normal-curve.png"}),e.jsxs("div",{className:"c-my-2",children:[e.jsx("p",{children:e.jsx("b",{children:"Kernel density estimation"})}),e.jsx("p",{children:"利用迴圈快速建立規律的資料檔"}),e.jsx(a,{code:`cd "C:/Users/misti/Documents/Stata/unify/temp"
clear
input s3
1
2
3
4
5
6
end

save d0, replace

forv x = 0/5 {
    forv i = 1/6 {
        clear
        use d\`x'
        cap drop s2
        g s2 = \`i'
        save d\`i', replace
    }
}

use d1
forvalues i = 2 (1) 6 {
    append using d\`i'
}

save d0, replace
forv x = 0/5 {
    forv i = 1/6 {
        clear
        use d\`x'
        cap drop s1
        g s1 = \`i'
        save d\`i', replace
    }
}

use d1

forvalues i = 2 (1) 6 {
    append using d\`i'
}


cd "C:/Users/misti/Documents/Stata/unify"

egen mean=rowmean(s1 s2 s3)
tabplot mean
graph export "tabplot01.png", replace
kdensity mean, normal
graph export "kdnesity01.png", replace`,lang:"stata"}),e.jsx(a,{code:`. cd "C:/Users/misti/Documents/Stata/unify/temp"
C:\\Users\\misti\\Documents\\Stata\\unify\\temp

. clear

. input s3

     s3
  1. 1
  2. 2
  3. 3
  4. 4
  5. 5
  6. 6
  7. end

. save d0, replace
file d0.dta saved

. 
. forv x = 0/5 {
  2.         forv i = 1/6 {
  3.                 clear
  4.                 use d\`x'
  5.                 cap drop s2
  6.                 g s2 = \`i'
  7.                 save d\`i', replace
  8.         }
  9. }
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
. use d1

. forvalues i = 2 (1) 6 {
  2.         append using d\`i'
  3. }

. save d0, replace
file d0.dta saved

. 
. forv x = 0/5 {
  2.         forv i = 1/6 {
  3.                 clear
  4.                 use d\`x'
  5.                 cap drop s1
  6.                 g s1 = \`i'
  7.                 save d\`i', replace
  8.         }
  9. }
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved
file d1.dta saved
file d2.dta saved
file d3.dta saved
file d4.dta saved
file d5.dta saved
file d6.dta saved

. use d1

. forvalues i = 2 (1) 6 {
  2.         append using d\`i'
  3. }

. 
        . cd "C:/Users/misti/Documents/Stata/unify"
C:\\Users\\misti\\Documents\\Stata\\unify

. egen mean=rowmean(s1 s2 s3)

. tabplot mean

. graph export "tabplot01.png", replace
(file tabplot01.png written in PNG format)

. kdensity mean, normal

. graph export "kdnesity01.png", replace
(file kdnesity01.png written in PNG format)`,lang:"output"}),e.jsxs("div",{className:"row",children:[e.jsx(d,{className:"col-md-6 px-md-1",src:"/personal-website/assets/images/tabplot01.png"}),e.jsx(d,{className:"col-md-6 px-md-1",src:"/personal-website/assets/images/kdnesity01.png"})]})]})]})},{title:"t score",content:e.jsxs(e.Fragment,{children:[e.jsx(a,{code:`clear
input x freq
1 21
2 32 
3 22
4 17
5 13
6 8
7 4
8 3
end

expand freq
su x, d

sca se=r(sd)/sqrt(r(N))
*95% CI
sca tscore95=invttail(120-1, 0.05/2)
sca ME95=tscore95*se
di r(mean)-ME95
di r(mean)+ME95
*99% CI
sca tscore99=invttail(120-1, 0.01/2)
sca ME99=tscore99*se
di r(mean)-ME99
di r(mean)+ME99`,lang:"stata"}),e.jsx(a,{code:`. clear

. input x freq

    x freq
 1. 1 21
 2. 2 32 
 3. 3 22
 4. 4 17
 5. 5 13
 6. 6 8
 7. 7 4
 8. 8 3
 9. end

. expand freq
(112 observations created)

. su x, d

                              x
-------------------------------------------------------------
      Percentiles      Smallest
 1%            1              1
 5%            1              1
10%            1              1       Obs                 120
25%            2              1       Sum of Wgt.         120

50%            3                      Mean                3.2
                                Largest       Std. Dev.      1.813117
75%            4              7
90%            6              8       Variance       3.287395
95%            7              8       Skewness       .7536421
99%            8              8       Kurtosis       2.838571

. sca se=r(sd)/sqrt(r(N))

. *95% CI
. sca tscore95=invttail(120-1, 0.05/2)

. sca ME95=tscore95*se

. di r(mean)-ME95
2.8722653

. di r(mean)+ME95
3.5277347

. *99% CI
. sca tscore99=invttail(120-1, 0.01/2)

. sca ME99=tscore99*se

. di r(mean)-ME99
2.7667208

. di r(mean)+ME99
3.6332792`,lang:"output"})]})},{title:"zcalc的使用方法",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"建立亂數成績資料"}),e.jsx(a,{code:`clear
set obs 100000
set seed 1
g grade = int(floor((101)*runiform()+0))
su grade, d`,lang:"stata"}),e.jsx(a,{code:`. clear

. set obs 100000
number of observations (_N) was 0, now 100,000

. set seed 1 

. g grade = int(floor((101)*runiform()+0))

. su grade, d

                            grade
-------------------------------------------------------------
      Percentiles      Smallest
 1%            0              0
 5%            5              0
10%           10              0       Obs             100,000
25%           25              0       Sum of Wgt.     100,000

50%           50                      Mean           50.10906
                        Largest       Std. Dev.      29.11979
75%           75            100
90%           90            100       Variance       847.9622
95%           95            100       Skewness      -.0053086
99%           99            100       Kurtosis        1.80178`,lang:"output"}),e.jsx("p",{children:e.jsxs("b",{children:["求70分者高於多少人?",e.jsx("code",{children:"zcalc X mean sd"})]})}),e.jsx(a,{code:`zcalc 70 50.10906 29.11979
di 100000*(1-normal(.68))
/*
di normal(.68) = .75174777  求出由-∞ 到Z=0.68的累積面積（機率）=75.17
di invnormal(.75174777) = .68  求出累積機率為0.75174777時的Z分數
*/`,lang:"stata"}),e.jsx(a,{code:`. zcalc 70 50.10906 29.11979

z-score for sample observations

      (X - m)       (70 - 50.10906)
 z = ---------  =  ------------------  =  0.68
         s              29.11979

. di 100000*(1-normal(.68))
24825.223

. /*
> di normal(.68) = .75174777  求出由-∞ 到Z=0.68的累積面積（機率）=75.17
> di invnormal(.75174777) = .68  求出累積機率為0.75174777時的Z分數
> */`,lang:"output"})]})}];export{l as default};
