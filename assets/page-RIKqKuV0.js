import{j as s}from"./index-xh2kQ6lE.js";import{C as d}from"./codeChunk-7ohDiSGw.js";const a=[{title:"",content:s.jsxs(s.Fragment,{children:[s.jsx("p",{children:"輸入資料"}),s.jsx(d,{code:`clear
input str9 name iq /*str9: 空出9個字元的長度*/
"Gene"    125
"Steve"    92
"Bob"      72
"Michael" 126
"Joan"    120
"Jim"      99
"Jane"    130
"Mary"    100
"Kevin"   120
end`,lang:"stata"}),s.jsx(d,{code:`. clear
. input str9 name iq /*str9: 空出9個字元的長度*/

     name     iq
 1. "Gene"    125
 2. "Steve"    92
 3. "Bob"      72
 4. "Michael" 126
 5. "Joan"    120
 6. "Jim"      99
 7. "Jane"    130
 8. "Mary"    100
 9. "Kevin"   120
10. end`,lang:"output"}),s.jsx("p",{children:"檢視資料信息"}),s.jsx(d,{code:`su iq, d
/*su:summarize的縮寫，大致呈現一份資料的分配狀況，d代表detail，可以看到更詳細的信息。*/`,lang:"stata"}),s.jsx(d,{code:`. su iq, d
/*su:summarize的縮寫，大致呈現一份資料的分配狀況，d代表detail，可以看到更詳細的信息。*/
                             iq
-------------------------------------------------------------
      Percentiles      Smallest
 1%           72             72
 5%           72             92
10%           72             99       Obs                   9
25%           99            100       Sum of Wgt.           9

50%          120                      Mean           109.3333
                        Largest       Std. Dev.      19.57677
75%          125            120
90%          130            125       Variance         383.25
95%          130            126       Skewness      -.6967588
99%          130            130       Kurtosis       2.295479`,lang:"output"}),s.jsx("p",{children:"另一種檢視資料的指令"}),s.jsx(d,{code:"univar iq",lang:"stata"}),s.jsx(d,{code:`. univar iq
                                        -------------- Quantiles --------------
Variable       n     Mean     S.D.      Min      .25      Mdn      .75      Max
-------------------------------------------------------------------------------
      iq       9   109.33    19.58    72.00    99.00   120.00   125.00   130.00
-------------------------------------------------------------------------------`,lang:"output"}),s.jsxs("p",{children:["單獨叫出資料中的某項資訊，需搭配",s.jsx("code",{children:"summarize"}),"一起使用，可將其命名後作為數值代入計算。"]}),s.jsx(d,{code:`g dnp = r(N)    /*樣本數*/
g dns = r(N)-1  /*自由度*/
g mean = r(mean)
di "樣本數:" _col(8) dnp /*在該行8字元後顯示樣本數r(N)*/
di "加總:" _col(6) r(sum)
di "平均:" _col(6) mean
di "中位數:" _col(8) r(p50)
egen mo = mode(iq)
di "眾數:" _col(6) mo
g vd = (iq-mean)^2
su vd
di "母體變異數:" _col(12) r(sum)/dnp
di "樣本變異數:" _col(12) r(sum)/dns /*r(sum)/(r(N)-1)*/
sca sdp = sqrt(r(sum)/dnp)
di "母體標準差:" _col(12) sdp  /*stata會以樣本變異數進行計算 r(sd)*/
sca sds = sqrt(r(sum)/dns)
di "樣本標準差:" _col(12) sds
sca sep = sdp/sqrt(dnp)
di "母體標準誤:" sep
sca ses = sds/sqrt(dnp)
di "樣本標準誤:" ses`,lang:"stata"}),s.jsx(d,{code:`. g dnp = r(N)    /*樣本數*/

. g dns = r(N)-1  /*自由度*/

. g mean = r(mean)

. di "樣本數:" _col(8) dnp /*在該行8字元後顯示樣本數r(N)*/
樣本數:9

. di "加總:" _col(6) r(sum)
加總:984

. di "平均:" _col(6) mean
平均:109.33334

. di "中位數:" _col(8) r(p50)
中位數:120

. egen mo = mode(iq)

. di "眾數:" _col(6) mo
眾數:120

. g vd = (iq-mean)^2

. su vd

    Variable |        Obs        Mean    Std. Dev.       Min        Max
-------------+---------------------------------------------------------
          vd |          9    340.6667    411.2645   87.11116   1393.778

. di "母體變異數:" _col(12) r(sum)/dnp
母體變異數:340.66666

. di "樣本變異數:" _col(12) r(sum)/dns /*r(sum)/(r(N)-1)*/
樣本變異數:383.24999

. sca sdp = sqrt(r(sum)/dnp)

. di "母體標準差:" _col(12) sdp  /*stata會以樣本變異數進行計算 r(sd)*/
母體標準差:18.457157

. sca sds = sqrt(r(sum)/dns)

. di "樣本標準差:" _col(12) sds
樣本標準差:19.576772

. sca sep = sdp/sqrt(dnp)

. di "母體標準誤:" sep
母體標準誤:6.1523858

. sca ses = sds/sqrt(dnp)

. di "樣本標準誤:" ses
樣本標準誤:6.5255906`,lang:"output"})]})}];export{a as default};
