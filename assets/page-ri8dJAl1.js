import{j as e}from"./index-ghIOUYFc.js";import{C as a}from"./codeChunk-c8OkEgZA.js";import{Z as s}from"./zoomImage-j9ZW51o-.js";const r=[{title:"單因子變異數分析（One-way Anova）",content:e.jsxs(e.Fragment,{children:[e.jsxs("ol",{children:[e.jsx("li",{children:"分析的目的是檢驗各組平均值是否相等，而判斷的準則是透過變異數的比較。"}),e.jsx("li",{children:"在下例中，在同一班中，樣本的觀測值是不同的，由於這是隨機抽取的案例，因此其中的差異可視為隨機的差異，也稱為隨機誤差。在進行分析時，此類誤差的推算稱之為組內變異數。"}),e.jsx("li",{children:"在下例中，各班之間的觀測值也不同。這種差異可能是由於抽樣的隨機性所造成，也可能是由於各班的差異（如老師的教學方法、按學業成績分班的結果）。在此，我們將各班的差異視為系統性的誤差。在進行分析時，此類誤差的推算稱之為組間變異數。"}),e.jsx("li",{children:"換句話說，組間變異數（組別效應）愈大，而組內變異數（隨機誤差效應）愈小的話，則F值就愈大，意味著虛無假設被排斥的可能性就愈大。"}),e.jsx("li",{children:"當只有兩組時，t 分配與Anova的結果是一樣的。即F test比T test更容易拒絕虛無假設，因為t test虛無假設之條件只有兩個，而f test的虛無假設之條件有多個。"})]}),e.jsx("p",{children:e.jsx("code",{children:"di invFtail(組間df, 組內df, CI)"})}),e.jsx("p",{children:e.jsx("code",{children:"di Ftail(組間df, 組內df, F值)"})}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例1：不同班級的成績是否有影響"}),e.jsx(a,{code:`clear
input class score
1 70
1 75
1 80
2 75
2 80
2 85
3 80
3 85
3 90
end

lab var class "班級別"
lab def class 1 "A班" 2 "B班" 3 "C班"
lab val class class
lab var score "考試成績"
anova score class`,lang:"stata"}),e.jsx(a,{code:`. clear

. input class score

   class      score
  1. 1 70
  2. 1 75
  3. 1 80
  4. 2 75
  5. 2 80
  6. 2 85
  7. 3 80
  8. 3 85
  9. 3 90
 10. end

. lab var class "班級別"

. lab def class 1 "A班" 2 "B班" 3 "C班"

. lab val class class

. lab var score "考試成績"

. anova score class

                         Number of obs =          9    R-squared     =  0.5000
                         Root MSE      =          5    Adj R-squared =  0.3333

                  Source | Partial SS         df         MS        F    Prob>F
              -----------+----------------------------------------------------
                   Model |        150          2          75      3.00  0.1250
                         |
                   class |        150          2          75      3.00  0.1250
                         |
                Residual |        150          6          25  
              -----------+----------------------------------------------------
                   Total |        300          8        37.5`,lang:"output"}),e.jsx("p",{children:"表格解讀："}),e.jsx("p",{children:"若我們設定α=0.05，查F分配表，則在自由度為2, 6的情形下，F分配的數值為5.14"}),e.jsx(a,{code:"di invFtail(2, 6, 0.05)",lang:"stata"}),e.jsx(a,{code:`. di invFtail(2, 6, 0.05)
5.1432528`,lang:"output"}),e.jsx("p",{children:"由於3<5.14，因此不能拒絕虛無假設。對於這個結果，可以有以下的的說法："}),e.jsxs("ol",{children:[e.jsx("li",{children:"應變項（考試分數）上的方差並不會造成組間的差異。"}),e.jsx("li",{children:"班級在考試成績上的差異並不顯著（也就是說，雖然有差異，但差異並不顯著）。"}),e.jsx("li",{children:"就讀的班級與學生的考試成績無顯著關係。"})]})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例2：姓名的性別感覺在求職是否有影響？"}),e.jsx(a,{code:`set more off
clear

input type interest
1 6
1 7
1 8
1 6
1 4
2 2
2 5
2 4
2 3
2 5
3 3
3 2
3 4
3 4
3 3
end

lab var type "姓名性別感覺"
lab def type 1 "男性" 2 "中性" 3 "女性"
lab val type type
lab var interest "感興趣程度"
pwmean interest, over(type) mcompare(tuk) effects`,lang:"stata"}),e.jsx(a,{code:`. set more off

. clear

. input type interest

    type   interest
  1. 1 6
  2. 1 7
  3. 1 8
  4. 1 6
  5. 1 4
  6. 2 2
  7. 2 5
  8. 2 4
  9. 2 3
 10. 2 5
 11. 3 3
 12. 3 2
 13. 3 4
 14. 3 4
 15. 3 3
 16. end

. lab var type "姓名性別感覺"

. lab def type 1 "男性" 2 "中性" 3 "女性"

. lab val type type

. lab var interest "感興趣程度"

. pwmean interest, over(type) mcompare(tuk) effects

Pairwise comparisons of means with equal variances

over         : type

---------------------------
             |    Number of
             |  Comparisons
-------------+-------------
        type |            3
---------------------------

-------------------------------------------------------------------------------
              |                              Tukey                Tukey
     interest |   Contrast   Std. Err.      t    P>|t|     [95% Conf. Interval]
--------------+----------------------------------------------------------------
         type |
 中性 vs 男性 |       -2.4    .783156    -3.06   0.025    -4.489353   -.3106466
 女性 vs 男性 |         -3    .783156    -3.83   0.006    -5.089353   -.9106466
 女性 vs 中性 |        -.6    .783156    -0.77   0.730    -2.689353    1.489353
-------------------------------------------------------------------------------`,lang:"output"}),e.jsx("p",{children:"姓名的性別感覺在求職時無效果的說法是得不到支持的"}),e.jsx("p",{children:"(F ratio=8.22 P value<0.01)"}),e.jsx(a,{code:`oneway interest type, sch  /*只有一個自變項才能用oneway*/
anova interest type
margins type
marginsplot, ylabel(0(2)10, angle(0)) noci
*                   0(2)10  ylabel從0~10排列，每2為一距 
*                           angle調整文字傾斜角度
graph export "anova01.png", replace`,lang:"stata"}),e.jsx(a,{code:`. oneway interest type, sch  /*只有一個自變項才能用oneway*/

Analysis of Variance
Source              SS         df      MS            F     Prob > F
------------------------------------------------------------------------
Between groups        25.2      2         12.6      8.22     0.0056
Within groups         18.4     12   1.53333333
------------------------------------------------------------------------
Total                 43.6     14   3.11428571
                
Bartlett's test for equal variances:  chi2(2) =   1.1517  Prob>chi2 = 0.562
                
Comparison of 感興趣程度 by 姓名性別感覺
(Scheffe)
Row Mean-|
Col Mean |       男性       中性
---------+----------------------
    中性 |       -2.4
         |      0.031
         |
    女性 |         -3        -.6
         |      0.008      0.751
                
. anova interest type
                
Number of obs =         15    R-squared     =  0.5780
Root MSE      =    1.23828    Adj R-squared =  0.5076
                
    Source | Partial SS         df         MS        F    Prob>F
-----------+----------------------------------------------------
     Model |       25.2          2        12.6      8.22  0.0056
           |
      type |       25.2          2        12.6      8.22  0.0056
           |
  Residual |       18.4         12   1.5333333  
-----------+----------------------------------------------------
     Total |       43.6         14   3.1142857  
                
. margins type
                
Adjusted predictions                            Number of obs     =         15
                
Expression   : Linear prediction, predict()
                
------------------------------------------------------------------------------
             |            Delta-method
             |     Margin   Std. Err.      t    P>|t|     [95% Conf. Interval]
-------------+----------------------------------------------------------------
        type |
       男性  |        6.2   .5537749    11.20   0.000     4.993428    7.406572
       中性  |        3.8   .5537749     6.86   0.000     2.593428    5.006572
       女性  |        3.2   .5537749     5.78   0.000     1.993428    4.406572
------------------------------------------------------------------------------
                
. marginsplot, ylabel(0(2)10, angle(0)) noci
                
Variables that uniquely identify margins: type
                
. *                   0(2)10  ylabel從0~10排列，每2為一距 
. *                           angle調整文字傾斜角度
. graph export "anova01.png", replace
(file anova01.png written in PNG format)`,lang:"output"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/anova01.png"})]})]})},{title:"兩因子變異數分析（Twoway Anova）",content:e.jsxs(e.Fragment,{children:[e.jsxs("ol",{children:[e.jsx("li",{children:"兩因子變異數分析的重點"}),e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"ANOVA分析是進入迴歸分析的基礎，不僅可以處理理單一因子多組的平均數分析，更可以處理多因子下多組平均數的分析。"}),e.jsx("li",{children:"本節之分析包括兩個自變項與一個應變項。換言之，因子有兩個，而分析的目的就是探討這兩個因子是否與應變項有關。此處開始涉及到多因素分析。"}),e.jsx("li",{children:"雙因素變異數分析的目的，在於檢驗以下三者："}),e.jsxs("ul",{children:[e.jsx("li",{children:"A因子是否與應變項有關（亦稱為主效應 main effects）。即A因素之間各組的平均數不存在差異。"}),e.jsx("li",{children:"B因⼦是否與應變項有關。即B因素之間各組的平均數不存在差異。"}),e.jsx("li",{children:"AB因子間是否存在交互作用效應（interaction effect）。"})]})]}),e.jsx("li",{children:"用途行顯示兩因子的效應，及其交互作用"}),e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"A和B因子均無效應："}),e.jsx("p",{children:"顯示無論有沒有使用到A因子，心率⼀直停留在60bps(Beats per minutes) "}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova01.png"}),e.jsx("li",{children:"只有A因子有效應："}),e.jsx("p",{children:"顯示在無論有沒有使用到B因子的情況下，若使用到A因子，則心率會從60bps增加到80bps。"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova02.png"}),e.jsx("li",{children:"只有B因子有效應："}),e.jsx("p",{children:"顯示在無論有沒有使用到A因子的情況下，若沒有使用到B因子，則心率會一直停留在60bps，但若使用了B因子時，則⼼率增加到70bps。"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova03.png"}),e.jsx("li",{children:"A因子和B因子之間不存在交互作用："}),e.jsx("p",{children:"當沒使用到A因子時，若沒使用B因子，則心跳停留在60bps，而一旦使用到B因子時，則心率增加到70bps。換言之，在沒使用到A因子的狀況下，使用B因子，則心跳會增加10bps。"}),e.jsx("p",{children:"當沒使用到A因子時，若沒使用B因子，則⼼跳停留在80bps，而一旦使用到B因子時，則心率增加到90bps。換言之，即是使用了A因子，使用B因子與否的效應也僅是10bps。和前面沒使用A因⼦時一樣。"}),e.jsx("p",{children:"因此，A與B之間沒有交互影響。"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova04.png"}),e.jsx("li",{children:"A因子和B因子之間存在交互作用，但主要效應僅在B因子上："}),e.jsx("p",{children:"這裡心率增加的15bps是A與B交互作用的效應。另外，我們也可以說A因子是沒有效應的，但⼀旦增加了B因⼦後，我們不但看到了B因子的效應，也看到了A和B合起來的效應。"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova05.png"}),e.jsx("li",{children:"A和B都存在著主效應，並且交互作用的效應也存在。"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova06.png"})]})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例：電影內容與獲得評分"}),e.jsx(a,{code:`clear
input violent sexual score
0 0 8
0 0 10
0 0 7
0 0 9
0 1 9
0 1 5
0 1 7
0 1 7
1 0 6
1 0 4
1 0 8
1 0 6
1 1 2
1 1 1
1 1 1
1 1 2
end

lab var violent "電影是否暴力"
lab var sexual "電影是否色情"
lab var score "Empathy Scores"
lab def violent 0 "無暴力" 1 "有暴力"
lab def sexual 0 "無色情" 1 "有色情"
lab val violent violent
lab val sexual sexual

anova score violent sexual violent#sexual
margins violent sexual violent#sexual
marginsplot, ylabel(0(2)10) noci
graph export "twoway anova07.png", replace

table violent sexual, c(mean score n score) row col format(%8.2f)`,lang:"stata"}),e.jsx(a,{code:`. clear

. input violent sexual score

violent sexual score
 1. 0 0 8
 2. 0 0 10
 3. 0 0 7
 4. 0 0 9
 5. 0 1 9
 6. 0 1 5
 7. 0 1 7
 8. 0 1 7
 9. 1 0 6
10. 1 0 4
11. 1 0 8
12. 1 0 6
13. 1 1 2
14. 1 1 1
15. 1 1 1
16. 1 1 2
17. end

. lab var violent "電影是否暴力"

. lab var sexual "電影是否色情"

. lab var score "Empathy Scores"

. lab def violent 0 "無暴力" 1 "有暴力"

. lab def sexual 0 "無色情" 1 "有色情"

. lab val violent violent

. lab val sexual sexual

. anova score violent sexual violent#sexual

Number of obs =  16 R-squared = 0.8321
 Root MSE =  1.35401 Adj R-squared = 0.7901

        Source | Partial SS    df          MS        F      Prob>F
---------------+----------------------------------------------------
         Model |        109     3   36.333333    19.82      0.0001
               |
       violent |         64     1          64    34.91      0.0001
        sexual |         36     1          36    19.64      0.0008
violent#sexual |          9     1           9     4.91      0.0468
               |
      Residual |         22    12   1.8333333 
---------------+----------------------------------------------------
         Total |        131    15   8.7333333 

. margins violent sexual violent#sexual

Predictive margins Number of obs =  16

Expression : Linear prediction, predict()

--------------------------------------------------------------------------------
               | Delta-method
               | Margin Std.      Err.        t    P>|t|   [95% Conf. Interval]
---------------+----------------------------------------------------------------
       violent |
        無暴力 |        7.75    .47871    16.19    0.000     6.706973 8.793027
        有暴力 |        3.75  .4787136     7.83    0.000     2.706973 4.793027
               |
        sexual |
        無色情 |        7.25  .4787136    15.14    0.000     6.206973 8.293027
        有色情 |        4.25  .4787136     8.88    0.000     3.206973 5.293027
               |
violent#sexual |
 無暴力#無色情 |         8.5  .6770032    12.56    0.000     7.024937 9.975063
 無暴力#有色情 |           7  .6770032    10.34    0.000     5.524937 8.475063
 有暴力#無色情 |           6  .6770032     8.86    0.000     4.524937 7.475063
 有暴力#有色情 |         1.5  .6770032     2.22    0.047     .0249367 2.975063
--------------------------------------------------------------------------------

. marginsplot, ylabel(0(2)10) noci

Variables that uniquely identify margins: violent sexual

. graph export "twoway anova07.png", replace
(file twoway anova07.png written in PNG format)

. table violent sexual, c(mean score n score) row col format(%8.2f)

----------------------------------
 電影是否 | 電影是否色情
     暴力 | 無色情  有色情  Total
----------+-----------------------
   無暴力 |   8.50    7.00   7.75
          |      4       4      8
          |
   有暴力 |   6.00    1.50   3.75
          |      4       4      8
          |
    Total |   7.25    4.25   5.75
          |      8       8     16
----------------------------------`,lang:"output"}),e.jsx(s,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/twoway-anova07.png"})]})]})}];export{r as default};
