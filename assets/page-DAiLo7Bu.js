import{j as e}from"./index-t9TkrohJ.js";import{C as a}from"./codeChunk-RNcgW44A.js";import{Z as o}from"./zoomImage-CxwNh6VD.js";const i=[{title:"步驟",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"因素分析以所觀察到的變項的數據為基礎，找出其中的潛在變項（或一些共同因子），其步驟如下："}),e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"先檢查要觀察的變項內容，並對這些變項做些調整，如：重新編碼、定義遺漏值。"}),e.jsx("li",{children:"檢查要觀察的變項數值，初步瞭解其中的關連。"}),e.jsx("li",{children:"初步因素分析，以確定有幾個潛在因子，并考慮是否要丟掉一些觀察變項。"}),e.jsx("li",{children:"正式分析，並進行座標軸旋轉，以突出潛在因子。"}),e.jsx("li",{children:"建立潛在因子變項。"})]})]})},{title:"範例",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"因素分析 - 會窮的原因（題號e2a-e2i）"}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("b",{children:"先檢查要觀察的變項內容，並對這些變項做些調整。"}),e.jsx(a,{code:`cd data

use "tscs071 v4.dta", clear
cd ..

d e2a-e2i
local i = 1
foreach w in a b c d e f g h i {
    cap drop e2_\`i'
    recode e2\`w' (1=4) (2=3) (95/98=.) (3=2) (4=1), g(e2_\`i')
    local i = \`i'+1
}`,lang:"stata"}),e.jsx(a,{code:`. cd data
C:\\Users\\misti\\Documents\\Stata\\unify\\data

. use "tscs071 v4.dta", clear

. cd ..
C:\\Users\\misti\\Documents\\Stata\\unify

. 
. d e2a-e2i

              storage   display    value
variable name   type    format     label      variable label
---------------------------------------------------------------------------------------------------------------
e2a             byte    %22.0f     e2a        e2a 一個人會窮的原因有很多,您贊不贊成一個人會窮是因為努力不夠
e2b             byte    %22.0f     e2a        e2b 一個人會窮的原因有很多,您贊不贊成一個人會窮是因為命運不好
e2c             byte    %22.0f     e2a        e2c
                                                一個人會窮的原因有很多,您贊不贊成一個人會窮是因為能力,才智不夠
e2d             byte    %22.0f     e2a        e2d 一個人會窮的原因有很多,您贊不贊成一個人會窮是因為隨意用錢
e2e             byte    %22.0f     e2a        e2e 一個人會窮的原因有很多,您贊不贊成一個人會窮是因為身體不好
e2f             byte    %22.0f     e2a        e2f 一個人會窮的原因有很多,您贊不贊成一個人會窮是因為沒有工作機會
e2g             byte    %22.0f     e2a        e2g
                                                一個人會窮的原因有很多,您贊不贊成一個人會窮是因為社會對他(她)不
                                                > 公平
e2h             byte    %22.0f     e2a        e2h
                                                一個人會窮的原因有很多,您贊不贊成一個人會窮是因為他(她)不願意工
                                                > 作
e2i             byte    %22.0f     e2a        e2i
                                                一個人會窮的原因有很多,您贊不贊成一個人會窮是因為他(她)家庭背景
                                                > 不好

. local i = 1

. foreach w in a b c d e f g h i {
  2.         cap drop e2_\`i'
  3.         recode e2\`w' (1=4) (2=3) (95/98=.) (3=2) (4=1), g(e2_\`i')
  4.         local i = \`i'+1
  5. }
(2040 differences between e2a and e2_1)
(2040 differences between e2b and e2_2)
(2040 differences between e2c and e2_3)
(2040 differences between e2d and e2_4)
(2040 differences between e2e and e2_5)
(2040 differences between e2f and e2_6)
(2040 differences between e2g and e2_7)
(2040 differences between e2h and e2_8)
(2040 differences between e2i and e2_9)`,lang:"output"}),e.jsx("p",{children:"重新命名var name"}),e.jsx(a,{code:`lab var e2_1  "e2a 因為努力不夠"
lab var e2_2  "e2b 因為命運不好"
lab var e2_3  "e2c 因為能力,才智不夠"
lab var e2_4  "e2d 因為隨意用錢"
lab var e2_5  "e2e 因為身體不好"
lab var e2_6  "e2f 因為沒有工作機會"
lab var e2_7  "e2g 因為社會對他(她)不公平"
lab var e2_8  "e2h 因為他(她)不願意工作"
lab var e2_9  "e2i 因為他(她)家庭背景不好"`,lang:"stata"}),e.jsx(a,{code:`. lab var e2_1  "e2a 因為努力不夠"

. lab var e2_2  "e2b 因為命運不好"

. lab var e2_3  "e2c 因為能力,才智不夠"

. lab var e2_4  "e2d 因為隨意用錢"

. lab var e2_5  "e2e 因為身體不好"

. lab var e2_6  "e2f 因為沒有工作機會"

. lab var e2_7  "e2g 因為社會對他(她)不公平"

. lab var e2_8  "e2h 因為他(她)不願意工作"

. lab var e2_9  "e2i 因為他(她)家庭背景不好"`,lang:"output"}),e.jsx("p",{children:"查看會有多少樣本會變為遺漏值，若是太嚴重的話，就要進行修補。但由以下情形評斷，只會丟掉44個cases，還算不嚴重（10%左右的遺失值屬於比較嚴重的）。"}),e.jsx(a,{code:"mvpatterns e2_*",lang:"stata"}),e.jsx(a,{code:`. mvpatterns e2_*
Variable     | type     obs   mv   variable label
-------------+---------------------------------------------------------
e2_1         | byte    2022   18   e2a 因為努力不夠
e2_2         | byte    2016   24   e2b 因為命運不好
e2_3         | byte    2013   27   e2c 因為能力,才智不夠
e2_4         | byte    2016   24   e2d 因為隨意用錢
e2_5         | byte    2016   24   e2e 因為身體不好
e2_6         | byte    2017   23   e2f 因為沒有工作機會
e2_7         | byte    2004   36   e2g 因為社會對他(她)不公平
e2_8         | byte    2016   24   e2h 因為他(她)不願意工作
e2_9         | byte    2015   25   e2i 因為他(她)家庭背景不好
-----------------------------------------------------------------------

Patterns of missing values

  +-------------------------+
  |  _pattern   _mv   _freq |
  |-------------------------|
  | +++++++++     0    1996 |
  | .........     9      15 |
  | ++++++.++     1       7 |
  | ++.++++++     1       2 |
  | ++.+++.++     2       2 |
  |-------------------------|
  | +........     8       2 |
  | +++++++.+     1       1 |
  | ++++.++++     1       1 |
  | +.+++++++     1       1 |
  | ++++.+.++     2       1 |
  |-------------------------|
  | +.++++.++     2       1 |
  | +.+.+++++     2       1 |
  | .+++.++++     2       1 |
  | +.++++.+.     3       1 |
  | +++++....     4       1 |
  |-------------------------|
  | +++......     6       1 |
  | ++..+....     6       1 |
  | +...++...     6       1 |
  | +.....++.     6       1 |
  | .+.....++     6       1 |
  |-------------------------|
  | ...+++...     6       1 |
  | ++.......     7       1 |
  +-------------------------+`,lang:"output"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"信度檢驗，alpha若超過0.7，則代表各項目之間一致性很高，但此處不高，意味著有超過一個潛在因子。"}),e.jsx(a,{code:"alpha e2_1-e2_9, d std item label",lang:"stata"}),e.jsx(a,{code:`. alpha e2_1-e2_9, d std item label

Test scale = mean(standardized items)

                          item-test  item-rest  interitem
Item         |  Obs  Sign   corr.      corr.       corr.     alpha   Label
-------------+-------------------------------------------------------------------------------------------
e2_1         | 2022    -    0.1536    -0.1018     0.1358    0.5569   e2a 因為努力不夠
e2_2         | 2016    +    0.5593     0.3451     0.0779    0.4032   e2b 因為命運不好
e2_3         | 2013    +    0.5004     0.2753     0.0861    0.4297   e2c 因為能力,才智不夠
e2_4         | 2016    +    0.3387     0.0917     0.1091    0.4947   e2d 因為隨意用錢
e2_5         | 2016    +    0.5834     0.3778     0.0742    0.3908   e2e 因為身體不好
e2_6         | 2017    +    0.4940     0.2680     0.0869    0.4323   e2f 因為沒有工作機會
e2_7         | 2004    +    0.4939     0.2687     0.0870    0.4325   e2g 因為社會對他(她)不公平
e2_8         | 2016    +    0.2826     0.0324     0.1170    0.5146   e2h 因為他(她)不願意工作
e2_9         | 2015    +    0.5754     0.3674     0.0754    0.3947   e2i 因為他(她)家庭背景不好
-------------+-------------------------------------------------------------------------------------------
Test scale   |                                    0.0944    0.4839   mean(standardized items)
---------------------------------------------------------------------------------------------------------

Interitem correlations (reverse applied) (obs=pairwise, see below)

         e2_1     e2_2     e2_3     e2_4     e2_5     e2_6     e2_7     e2_8     e2_9
e2_1   1.0000
e2_2  -0.0058   1.0000
e2_3  -0.1877   0.2494   1.0000
e2_4  -0.3200   0.0914   0.2139   1.0000
e2_5  -0.0428   0.2094   0.2643   0.2142   1.0000
e2_6   0.1719   0.1208   0.0677  -0.0471   0.1738   1.0000
e2_7   0.1908   0.2108   0.0746  -0.1123   0.1196   0.2742   1.0000
e2_8  -0.3029   0.0410   0.1282   0.3561   0.1578  -0.0423  -0.1569   1.0000
e2_9   0.0943   0.2999   0.1767  -0.0526   0.2227   0.2446   0.3620  -0.0597   1.0000

Pairwise number of observations

      e2_1  e2_2  e2_3  e2_4  e2_5  e2_6  e2_7  e2_8  e2_9
e2_1  2022
e2_2  2014  2016
e2_3  2012  2009  2013
e2_4  2014  2012  2011  2016
e2_5  2015  2010  2009  2013  2016
e2_6  2015  2011  2011  2015  2014  2017
e2_7  2003  2001  2001  2002  2001  2003  2004
e2_8  2014  2011  2010  2013  2011  2014  2003  2016
e2_9  2013  2012  2010  2013  2011  2014  2003  2014  2015`,lang:"output"})]}),e.jsxs("li",{children:[e.jsx("b",{children:"初步因素分析，以確定有幾個潛在因子。"}),e.jsx("p",{children:"STATA所提供的factor analysis包括以下幾類，各有利弊"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["pf : principal-factor; the default",e.jsxs("p",{children:["以R",e.jsx("sup",{children:"2"}),"推算因素間的共同性。"]})]}),e.jsxs("li",{children:["pcf: principal-component factor",e.jsx("p",{children:"共同性假定為1。"})]}),e.jsx("li",{children:"ipf: iterated principal factor"}),e.jsxs("li",{children:["ml : maximum-likelihood factor",e.jsx("p",{children:"不適用一般資料。"})]})]}),e.jsx("p",{children:"proportion：各題的影響量，cumulative：加總影量（由上而下加總）"}),e.jsx("p",{children:"Eigenvalue/factor數量=proportion（2.05887/9=0.2288）"}),e.jsx(a,{code:`factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6 e2_7 e2_8 e2_9, pcf mineigen(0)  
factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6 e2_7 e2_9, pcf mineigen(0)        
factor e2_1 e2_3 e2_4 e2_5 e2_6 e2_7 e2_9, pcf mineigen(0)`,lang:"stata"}),e.jsx(a,{code:`. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6 e2_7 e2_8 e2_9, pcf mineigen(0)  
(obs=1,996)

Factor analysis/correlation                      Number of obs    =      1,996
    Method: principal-component factors          Retained factors =          9
    Rotation: (unrotated)                        Number of params =         36

    Beware: solution is a Heywood case
            (i.e., invalid or boundary values of uniqueness)

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      2.05887      0.09886            0.2288       0.2288
        Factor2  |      1.96001      1.04602            0.2178       0.4465
        Factor3  |      0.91399      0.13856            0.1016       0.5481
        Factor4  |      0.77543      0.02991            0.0862       0.6343
        Factor5  |      0.74551      0.04736            0.0828       0.7171
        Factor6  |      0.69815      0.04341            0.0776       0.7947
        Factor7  |      0.65474      0.04121            0.0727       0.8674
        Factor8  |      0.61354      0.03378            0.0682       0.9356
        Factor9  |      0.57976            .            0.0644       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(36) = 2110.39 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    --------------------------------------------------------------------------------------------------------
        Variable |  Factor1   Factor2   Factor3   Factor4   Factor5   Factor6   Factor7   Factor8   Factor9 
    -------------+------------------------------------------------------------------------------------------
            e2_1 |  -0.0744    0.6901   -0.2049    0.2844    0.3776    0.1229   -0.1379    0.3982    0.2453 
            e2_2 |   0.6138    0.0824   -0.4244    0.1215   -0.4364   -0.4291    0.0518    0.1560    0.1412 
            e2_3 |   0.5021    0.3976   -0.3064   -0.3957    0.4371   -0.1734   -0.0107   -0.3415   -0.0399 
            e2_4 |   0.1427    0.7142    0.1742    0.0839   -0.0647    0.0273    0.5285    0.0914   -0.3735 
            e2_5 |   0.5715    0.2900    0.2967   -0.4790   -0.2502    0.3444   -0.0729    0.1722    0.2358 
            e2_6 |   0.5100   -0.2595    0.6018    0.0851    0.2976   -0.4173   -0.0648    0.1904   -0.0022 
            e2_7 |   0.5802   -0.3964   -0.0154    0.3444    0.1451    0.2920    0.3723   -0.2228    0.3046 
            e2_8 |   0.0467    0.6795    0.3050    0.3393   -0.2121   -0.0505   -0.2922   -0.4310    0.0964 
            e2_9 |   0.6918   -0.1965   -0.1555    0.2139    0.0039    0.2958   -0.3466    0.0668   -0.4481 
    --------------------------------------------------------------------------------------------------------

    ----------------------------
        Variable |   Uniqueness 
    -------------+--------------
            e2_1 |      0.0000  
            e2_2 |      0.0000  
            e2_3 |      0.0000  
            e2_4 |     -0.0000  
            e2_5 |      0.0000  
            e2_6 |     -0.0000  
            e2_7 |     -0.0000  
            e2_8 |      0.0000  
            e2_9 |     -0.0000  
    ----------------------------

. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6 e2_7 e2_9, pcf mineigen(0)        
(obs=1,997)

Factor analysis/correlation                      Number of obs    =      1,997
    Method: principal-component factors          Retained factors =          8
    Rotation: (unrotated)                        Number of params =         28

    Beware: solution is a Heywood case
            (i.e., invalid or boundary values of uniqueness)

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      2.05620      0.39007            0.2570       0.2570
        Factor2  |      1.66612      0.77964            0.2083       0.4653
        Factor3  |      0.88649      0.13000            0.1108       0.5761
        Factor4  |      0.75648      0.04040            0.0946       0.6707
        Factor5  |      0.71608      0.01972            0.0895       0.7602
        Factor6  |      0.69636      0.05554            0.0870       0.8472
        Factor7  |      0.64082      0.05939            0.0801       0.9273
        Factor8  |      0.58144            .            0.0727       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(28) = 1697.06 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    ----------------------------------------------------------------------------------------------
        Variable |  Factor1   Factor2   Factor3   Factor4   Factor5   Factor6   Factor7   Factor8 
    -------------+--------------------------------------------------------------------------------
            e2_1 |  -0.1103    0.7181   -0.1373    0.4904    0.0053   -0.1090    0.3287    0.3047 
            e2_2 |   0.6080    0.1390   -0.4697   -0.2430    0.2457    0.4864    0.0941    0.1594 
            e2_3 |   0.4802    0.4946   -0.1457   -0.0300   -0.6520    0.0242   -0.2623   -0.0903 
            e2_4 |   0.1048    0.7247    0.2630    0.1203    0.4062    0.1186   -0.2980   -0.3350 
            e2_5 |   0.5556    0.3217    0.4178   -0.4582    0.0804   -0.3357    0.1193    0.2644 
            e2_6 |   0.5216   -0.2915    0.5689    0.3049   -0.1501    0.4101    0.1871    0.0257 
            e2_7 |   0.6005   -0.3808   -0.1067    0.3500    0.1788   -0.2308   -0.4465    0.2756 
            e2_9 |   0.7010   -0.1667   -0.2167    0.1270    0.0683   -0.3147    0.3431   -0.4430 
    ----------------------------------------------------------------------------------------------

    ----------------------------
        Variable |   Uniqueness 
    -------------+--------------
            e2_1 |     -0.0000  
            e2_2 |     -0.0000  
            e2_3 |      0.0000  
            e2_4 |     -0.0000  
            e2_5 |      0.0000  
            e2_6 |     -0.0000  
            e2_7 |     -0.0000  
            e2_9 |     -0.0000  
    ----------------------------

. factor e2_1 e2_3 e2_4 e2_5 e2_6 e2_7 e2_9, pcf mineigen(0)
(obs=1,998)

Factor analysis/correlation                      Number of obs    =      1,998
    Method: principal-component factors          Retained factors =          7
    Rotation: (unrotated)                        Number of params =         21

    Beware: solution is a Heywood case
            (i.e., invalid or boundary values of uniqueness)

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.83956      0.19735            0.2628       0.2628
        Factor2  |      1.64221      0.81302            0.2346       0.4974
        Factor3  |      0.82920      0.08273            0.1185       0.6159
        Factor4  |      0.74647      0.03480            0.1066       0.7225
        Factor5  |      0.71167      0.06985            0.1017       0.8242
        Factor6  |      0.64182      0.05276            0.0917       0.9158
        Factor7  |      0.58906            .            0.0842       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1370.31 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    ---------------------------------------------------------------------------------------------------
        Variable |  Factor1   Factor2   Factor3   Factor4   Factor5   Factor6   Factor7 |   Uniqueness 
    -------------+----------------------------------------------------------------------+--------------
            e2_1 |  -0.2948    0.6647    0.2863    0.3996    0.0058    0.3674    0.3076 |     -0.0000  
            e2_3 |   0.3352    0.6089    0.2998   -0.2556   -0.5515   -0.2372   -0.0365 |     -0.0000  
            e2_4 |  -0.0746    0.7370   -0.2600    0.2751    0.2820   -0.3419   -0.3340 |      0.0000  
            e2_5 |   0.4891    0.4836   -0.3875   -0.4419    0.2566    0.1691    0.2952 |     -0.0000  
            e2_6 |   0.6296   -0.1104   -0.4789    0.4288   -0.3917    0.1570   -0.0101 |     -0.0000  
            e2_7 |   0.6921   -0.1998    0.2794    0.2579    0.2442   -0.3952    0.3474 |     -0.0000  
            e2_9 |   0.7212    0.0251    0.3636   -0.0115    0.2215    0.3525   -0.4167 |     -0.0000  
    ---------------------------------------------------------------------------------------------------`,lang:"output"}),e.jsx("p",{children:"到此，可能需要丟掉幾個變項，要丟掉的變項如下："}),e.jsxs("ul",{children:[e.jsx("li",{children:"e2_2 因為命運不好"}),e.jsx("li",{children:"e2_5 因為身體不好"}),e.jsx("li",{children:"e2_8 因為他(她)不願意工作"})]}),e.jsx("p",{children:"但是也可以保留e2_2，因為這涉及這個模型潛在因子的解釋。"}),e.jsx("p",{children:"以上各次測試，均指出似乎有兩個潛在因子，可以用以下方法來看："}),e.jsxs("ol",{type:"i",children:[e.jsxs("li",{children:["碎石圖（scree plot）：主要查看在 1 以上有幾點，就代表有幾個潛在因子",e.jsx(a,{code:`screeplot, scheme(s1color) yline(1) ///
           xaxis (1 2) yaxis (1 2)   ///
           ylabel(, axis(1) nogrid)  ///
           ylabel(, axis(2) nolabel) ///
           xlabel(, axis(2) nolabel) ///
           xsize(4) ///
           xtitle("", axis(2)) ///
           ytitle("", axis(2))`,lang:"stata"}),e.jsx(a,{code:`. screeplot, scheme(s1color) yline(1) ///
>          xaxis (1 2) yaxis (1 2)   ///
>          ylabel(, axis(1) nogrid)  ///
>          ylabel(, axis(2) nolabel) ///
>          xlabel(, axis(2) nolabel) ///
>          xsize(4) ///
>          xtitle("", axis(2)) ///
>          ytitle("", axis(2))`,lang:"output"}),e.jsx(o,{className:"w-lg-50 w-sm-75 mx-auto",src:"/personal-website/assets/images/screePlot.png"})]}),e.jsxs("li",{children:["平行分析",e.jsx(a,{code:`factor e2_1 e2_2 e2_3 e2_4  e2_6 e2_7  e2_9, pcf mineigen(0)
fapara, seed(123456789)   /*parallel analysis用於瞭解有幾個潛在因子*/`,lang:"stata"}),e.jsx(a,{code:`. factor e2_1 e2_2 e2_3 e2_4  e2_6 e2_7  e2_9, pcf mineigen(0)
(obs=1,998)

Factor analysis/correlation                      Number of obs    =      1,998
    Method: principal-component factors          Retained factors =          7
    Rotation: (unrotated)                        Number of params =         21

    Beware: solution is a Heywood case
            (i.e., invalid or boundary values of uniqueness)

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.89911      0.32722            0.2713       0.2713
        Factor2  |      1.57189      0.72761            0.2246       0.4959
        Factor3  |      0.84428      0.12298            0.1206       0.6165
        Factor4  |      0.72131      0.00806            0.1030       0.7195
        Factor5  |      0.71325      0.06779            0.1019       0.8214
        Factor6  |      0.64546      0.04075            0.0922       0.9136
        Factor7  |      0.60471            .            0.0864       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1358.54 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    ---------------------------------------------------------------------------------------------------
        Variable |  Factor1   Factor2   Factor3   Factor4   Factor5   Factor6   Factor7 |   Uniqueness 
    -------------+----------------------------------------------------------------------+--------------
            e2_1 |  -0.3255    0.6750    0.0585    0.3773    0.2359    0.4049    0.2706 |      0.0000  
            e2_2 |   0.5526    0.3845   -0.4215   -0.1909   -0.4956    0.1998    0.2173 |      0.0000  
            e2_3 |   0.2986    0.6550   -0.0428   -0.4576    0.4636   -0.2356    0.0150 |     -0.0000  
            e2_4 |  -0.1539    0.7068    0.3558    0.1675   -0.4008   -0.3292   -0.2303 |      0.0000  
            e2_6 |   0.5801   -0.1153    0.7152   -0.2065   -0.0535    0.2892    0.0976 |      0.0000  
            e2_7 |   0.7117   -0.1251    0.0208    0.4265    0.0933   -0.3893    0.3677 |     -0.0000  
            e2_9 |   0.7294    0.1046   -0.1511    0.2837    0.1579    0.2062   -0.5351 |     -0.0000  
    ---------------------------------------------------------------------------------------------------

. fapara, seed(123456789)   /*parallel analysis用於瞭解有幾個潛在因子*/

PA -- Parallel Analysis for Factor Analysis -- N = 1998
PA Eigenvalues Averaged Over 1 Replication
         FA         PA          Dif
  1.   1.899109    .0717983   1.827311  
  2.   1.571891    .0518209    1.52007  
  3.   .8442826    .0469874   .7972951  
  4.   .7213058    .0103113   .7109945  
  5.   .7132482   -.0395351   .7527833  
  6.   .6454573   -.0541409   .6995983  
  7.   .6047057   -.0679308   .6726365`,lang:"output"})]}),e.jsxs("li",{children:["其他檢查方法",e.jsx(a,{code:"estat kmo",lang:"stata"}),e.jsx(a,{code:`. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.6180 
            e2_2 |  0.6883 
            e2_3 |  0.6473 
            e2_4 |  0.6092 
            e2_6 |  0.7215 
            e2_7 |  0.6916 
            e2_9 |  0.6777 
    -------------+---------
         Overall |  0.6660 
    -----------------------`,lang:"output"}),e.jsx("p",{children:"kmo的評量標準"}),e.jsxs("ul",{children:[e.jsx("li",{children:"0.00 to 0.49 unacceptable 有問題"}),e.jsx("li",{children:"0.50 to 0.59 miserable 還是不太好"}),e.jsx("li",{children:"0.60 to 0.69 mediocre 差強人意"}),e.jsx("li",{children:"0.70 to 0.79 middling 還好"}),e.jsx("li",{children:"0.80 to 0.89 meritorious 很不錯"}),e.jsx("li",{children:"0.90 to 1.00 marvelous 非常好"})]}),e.jsx("p",{children:e.jsx("a",{href:"https://faculty.chass.ncsu.edu/garson/PA765/index.htm",children:"使用KMO的目的："})}),e.jsx("p",{children:"測試哪些變項因多元共線性而須從模型中剔除，KMO整體（overall）必須高於0.6，若不足0.6，則剔除kmo值最低的一項，直到整體高於0.6（有些研究者也會使用0.5作為剔除標準）。"})]})]}),e.jsx("p",{children:"找出潛在變量"}),e.jsx(a,{code:`factor e2_1 e2_2, pcf
estat kmo
rotate, blank(.4)   /* <0.4，空白 */

factor e2_1 e2_2 e2_3, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4 e2_5, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_7, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_8, pcf
estat kmo
rotate, blank(.4)

factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_8 e2_9, pcf
estat kmo
rotate, blank(.4)
loadingplot

factor e2_1 e2_2 e2_3 e2_4 e2_6 e2_7 e2_9, pcf mineigen(0) fa(2)`,lang:"stata"}),e.jsx(a,{code:`. factor e2_1 e2_2, pcf
(obs=2,014)

Factor analysis/correlation                      Number of obs    =      2,014
    Method: principal-component factors          Retained factors =          1
    Rotation: (unrotated)                        Number of params =          1

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.00576      0.01152            0.5029       0.5029
        Factor2  |      0.99424            .            0.4971       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(1)  =    0.07 Prob>chi2 = 0.7961

Factor loadings (pattern matrix) and unique variances

    ---------------------------------------
        Variable |  Factor1 |   Uniqueness 
    -------------+----------+--------------
            e2_1 |   0.7091 |      0.4971  
            e2_2 |   0.7091 |      0.4971  
    ---------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.5000 
            e2_2 |  0.5000 
    -------------+---------
         Overall |  0.5000 
    -----------------------

. rotate, blank(.4)   /* <0.4，空白 */

Factor analysis/correlation                      Number of obs    =      2,014
    Method: principal-component factors          Retained factors =          1
    Rotation: orthogonal varimax (Kaiser off)    Number of params =          1

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.00576            .            0.5029       0.5029
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(1)  =    0.07 Prob>chi2 = 0.7961

Rotated factor loadings (pattern matrix) and unique variances

    ---------------------------------------
        Variable |  Factor1 |   Uniqueness 
    -------------+----------+--------------
            e2_1 |   0.7091 |      0.4971  
            e2_2 |   0.7091 |      0.4971  
    ---------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    -----------------------
                 | Factor1 
    -------------+---------
         Factor1 |  1.0000 
    -----------------------

. 
. factor e2_1 e2_2 e2_3, pcf
(obs=2,008)

Factor analysis/correlation                      Number of obs    =      2,008
    Method: principal-component factors          Retained factors =          1
    Rotation: (unrotated)                        Number of params =          3

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.31474      0.32072            0.4382       0.4382
        Factor2  |      0.99402      0.30277            0.3313       0.7696
        Factor3  |      0.69125            .            0.2304       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(3)  =  203.87 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    ---------------------------------------
        Variable |  Factor1 |   Uniqueness 
    -------------+----------+--------------
            e2_1 |   0.4924 |      0.7575  
            e2_2 |   0.6490 |      0.5788  
            e2_3 |   0.8069 |      0.3490  
    ---------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.4764 
            e2_2 |  0.4866 
            e2_3 |  0.4915 
    -------------+---------
         Overall |  0.4872 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,008
    Method: principal-component factors          Retained factors =          1
    Rotation: orthogonal varimax (Kaiser off)    Number of params =          3

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.31474            .            0.4382       0.4382
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(3)  =  203.87 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    ---------------------------------------
        Variable |  Factor1 |   Uniqueness 
    -------------+----------+--------------
            e2_1 |   0.4924 |      0.7575  
            e2_2 |   0.6490 |      0.5788  
            e2_3 |   0.8069 |      0.3490  
    ---------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    -----------------------
                 | Factor1 
    -------------+---------
         Factor1 |  1.0000 
    -----------------------

. 
. factor e2_1 e2_2 e2_3 e2_4, pcf
(obs=2,007)

Factor analysis/correlation                      Number of obs    =      2,007
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =          6

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.55187      0.48017            0.3880       0.3880
        Factor2  |      1.07170      0.35861            0.2679       0.6559
        Factor3  |      0.71309      0.04976            0.1783       0.8342
        Factor4  |      0.66333            .            0.1658       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(6)  =  480.98 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.6430   -0.5110 |      0.3254  
            e2_2 |   0.4242    0.7640 |      0.2364  
            e2_3 |   0.6808    0.3455 |      0.4171  
            e2_4 |   0.7036   -0.3279 |      0.3975  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.5584 
            e2_2 |  0.5199 
            e2_3 |  0.5894 
            e2_4 |  0.5839 
    -------------+---------
         Overall |  0.5687 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,007
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =          6

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.39475      0.16592            0.3487       0.3487
        Factor2  |      1.22883            .            0.3072       0.6559
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(6)  =  480.98 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.8197           |      0.3254  
            e2_2 |             0.8693 |      0.2364  
            e2_3 |             0.6729 |      0.4171  
            e2_4 |   0.7647           |      0.3975  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.8202   0.5720 
         Factor2 | -0.5720   0.8202 
    --------------------------------

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_5, pcf
(obs=2,005)

Factor analysis/correlation                      Number of obs    =      2,005
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =          9

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.73690      0.60898            0.3474       0.3474
        Factor2  |      1.12792      0.32273            0.2256       0.5730
        Factor3  |      0.80519      0.09251            0.1610       0.7340
        Factor4  |      0.71268      0.09536            0.1425       0.8765
        Factor5  |      0.61732            .            0.1235       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(10) =  731.51 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.4946   -0.6757 |      0.2988  
            e2_2 |   0.4834    0.5827 |      0.4268  
            e2_3 |   0.6909    0.1678 |      0.4945  
            e2_4 |   0.6471   -0.4247 |      0.4009  
            e2_5 |   0.6020    0.3511 |      0.5143  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.5481 
            e2_2 |  0.6289 
            e2_3 |  0.6506 
            e2_4 |  0.6062 
            e2_5 |  0.6359 
    -------------+---------
         Overall |  0.6146 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,005
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =          9

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.47831      0.09180            0.2957       0.2957
        Factor2  |      1.38651            .            0.2773       0.5730
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(10) =  731.51 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |             0.8348 |      0.2988  
            e2_2 |   0.7464           |      0.4268  
            e2_3 |   0.6334           |      0.4945  
            e2_4 |             0.7438 |      0.4009  
            e2_5 |   0.6855           |      0.5143  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.7585          
         Factor2 |  0.6516  -0.7585 
    --------------------------------

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_6, pcf
(obs=2,004)

Factor analysis/correlation                      Number of obs    =      2,004
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =         11

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.74560      0.41256            0.2909       0.2909
        Factor2  |      1.33304      0.47173            0.2222       0.5131
        Factor3  |      0.86131      0.12788            0.1436       0.6567
        Factor4  |      0.73343      0.02377            0.1222       0.7789
        Factor5  |      0.70967      0.09273            0.1183       0.8972
        Factor6  |      0.61694            .            0.1028       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) =  881.90 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.4473   -0.6582 |      0.3667  
            e2_2 |   0.5079    0.3805 |      0.5973  
            e2_3 |   0.6958    0.0623 |      0.5120  
            e2_4 |   0.6216   -0.3930 |      0.4591  
            e2_5 |   0.6283    0.3132 |      0.5072  
            e2_6 |   0.1493    0.7061 |      0.4791  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.5567 
            e2_2 |  0.6587 
            e2_3 |  0.6585 
            e2_4 |  0.6142 
            e2_5 |  0.6392 
            e2_6 |  0.5661 
    -------------+---------
         Overall |  0.6182 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,004
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =         11

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.60926      0.13987            0.2682       0.2682
        Factor2  |      1.46939            .            0.2449       0.5131
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) =  881.90 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |             0.7957 |      0.3667  
            e2_2 |   0.6343           |      0.5973  
            e2_3 |   0.6051           |      0.5120  
            e2_4 |             0.6790 |      0.4591  
            e2_5 |   0.6941           |      0.5072  
            e2_6 |   0.5280   -0.4920 |      0.4791  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.8182          
         Factor2 |  0.5749  -0.8182 
    --------------------------------

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_7, pcf
(obs=1,997)

Factor analysis/correlation                      Number of obs    =      1,997
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =         11

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.74138      0.34157            0.2902       0.2902
        Factor2  |      1.39981      0.59230            0.2333       0.5235
        Factor3  |      0.80750      0.08394            0.1346       0.6581
        Factor4  |      0.72357      0.01290            0.1206       0.7787
        Factor5  |      0.71066      0.09359            0.1184       0.8972
        Factor6  |      0.61707            .            0.1028       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) =  938.60 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.4620   -0.6079 |      0.4170  
            e2_2 |   0.5125    0.4812 |      0.5058  
            e2_3 |   0.6974    0.0953 |      0.5046  
            e2_4 |   0.6244   -0.4122 |      0.4402  
            e2_5 |   0.6155    0.2435 |      0.5618  
            e2_7 |   0.1006    0.7487 |      0.4294  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.5782 
            e2_2 |  0.6391 
            e2_3 |  0.6602 
            e2_4 |  0.6166 
            e2_5 |  0.6506 
            e2_7 |  0.5709 
    -------------+---------
         Overall |  0.6215 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      1,997
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =         11

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.60951      0.07783            0.2683       0.2683
        Factor2  |      1.53168            .            0.2553       0.5235
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) =  938.60 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |             0.7634 |      0.4170  
            e2_2 |   0.7005           |      0.5058  
            e2_3 |   0.6056           |      0.5046  
            e2_4 |             0.7110 |      0.4402  
            e2_5 |   0.6336           |      0.5618  
            e2_7 |   0.5440   -0.5241 |      0.4294  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.7835          
         Factor2 |  0.6213  -0.7835 
    --------------------------------

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_8, pcf
(obs=2,003)

Factor analysis/correlation                      Number of obs    =      2,003
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =         11

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.96003      0.73328            0.3267       0.3267
        Factor2  |      1.22675      0.40938            0.2045       0.5311
        Factor3  |      0.81737      0.06897            0.1362       0.6674
        Factor4  |      0.74840      0.11826            0.1247       0.7921
        Factor5  |      0.63014      0.01284            0.1050       0.8971
        Factor6  |      0.61730            .            0.1029       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) = 1116.80 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.5716   -0.4761 |      0.4466  
            e2_2 |   0.3593    0.6551 |      0.4417  
            e2_3 |   0.5880    0.3865 |      0.5049  
            e2_4 |   0.7032   -0.2553 |      0.4403  
            e2_5 |   0.5262    0.4470 |      0.5233  
            e2_8 |   0.6222   -0.3957 |      0.4563  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.6542 
            e2_2 |  0.6342 
            e2_3 |  0.6750 
            e2_4 |  0.6867 
            e2_5 |  0.6681 
            e2_8 |  0.6812 
    -------------+---------
         Overall |  0.6707 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,003
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =         11

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.69877      0.21076            0.2831       0.2831
        Factor2  |      1.48801            .            0.2480       0.5311
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(15) = 1116.80 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.7428           |      0.4466  
            e2_2 |             0.7401 |      0.4417  
            e2_3 |             0.6611 |      0.5049  
            e2_4 |   0.7166           |      0.4403  
            e2_5 |             0.6727 |      0.5233  
            e2_8 |   0.7354           |      0.4563  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.8023   0.5969 
         Factor2 | -0.5969   0.8023 
    --------------------------------

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_5 e2_8 e2_9, pcf
(obs=2,003)

Factor analysis/correlation                      Number of obs    =      2,003
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =         13

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.98698      0.46855            0.2839       0.2839
        Factor2  |      1.51843      0.70073            0.2169       0.5008
        Factor3  |      0.81770      0.06199            0.1168       0.6176
        Factor4  |      0.75572      0.06347            0.1080       0.7255
        Factor5  |      0.69224      0.06454            0.0989       0.8244
        Factor6  |      0.62770      0.02648            0.0897       0.9141
        Factor7  |      0.60122            .            0.0859       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1438.58 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.5082   -0.4977 |      0.4940  
            e2_2 |   0.4402    0.5434 |      0.5109  
            e2_3 |   0.6231    0.2286 |      0.5595  
            e2_4 |   0.6547   -0.3682 |      0.4359  
            e2_5 |   0.5741    0.3101 |      0.5742  
            e2_8 |   0.5674   -0.4375 |      0.4867  
            e2_9 |   0.2581    0.7071 |      0.4334  
    -------------------------------------------------

. estat kmo

Kaiser-Meyer-Olkin measure of sampling adequacy

    -----------------------
        Variable |     kmo 
    -------------+---------
            e2_1 |  0.6647 
            e2_2 |  0.6673 
            e2_3 |  0.7132 
            e2_4 |  0.6773 
            e2_5 |  0.6922 
            e2_8 |  0.6852 
            e2_9 |  0.6088 
    -------------+---------
         Overall |  0.6744 
    -----------------------

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      2,003
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =         13

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.81112      0.11683            0.2587       0.2587
        Factor2  |      1.69429            .            0.2420       0.5008
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1438.58 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |   0.7066           |      0.4940  
            e2_2 |             0.6992 |      0.5109  
            e2_3 |             0.5624 |      0.5595  
            e2_4 |   0.7430           |      0.4359  
            e2_5 |             0.5969 |      0.5742  
            e2_8 |   0.7165           |      0.4867  
            e2_9 |             0.7170 |      0.4334  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.7904   0.6126 
         Factor2 | -0.6126   0.7904 
    --------------------------------

. loadingplot

. 
. factor e2_1 e2_2 e2_3 e2_4 e2_6 e2_7 e2_9, pcf mineigen(0) fa(2)
(obs=1,998)

Factor analysis/correlation                      Number of obs    =      1,998
    Method: principal-component factors          Retained factors =          2
    Rotation: (unrotated)                        Number of params =         13

    --------------------------------------------------------------------------
         Factor  |   Eigenvalue   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.89911      0.32722            0.2713       0.2713
        Factor2  |      1.57189      0.72761            0.2246       0.4959
        Factor3  |      0.84428      0.12298            0.1206       0.6165
        Factor4  |      0.72131      0.00806            0.1030       0.7195
        Factor5  |      0.71325      0.06779            0.1019       0.8214
        Factor6  |      0.64546      0.04075            0.0922       0.9136
        Factor7  |      0.60471            .            0.0864       1.0000
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1358.54 Prob>chi2 = 0.0000

Factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |  -0.3255    0.6750 |      0.4385  
            e2_2 |   0.5526    0.3845 |      0.5468  
            e2_3 |   0.2986    0.6550 |      0.4819  
            e2_4 |  -0.1539    0.7068 |      0.4767  
            e2_6 |   0.5801   -0.1153 |      0.6502  
            e2_7 |   0.7117   -0.1251 |      0.4778  
            e2_9 |   0.7294    0.1046 |      0.4571  
    -------------------------------------------------`,lang:"output"})]}),e.jsxs("li",{children:["正式分析，並進行座標軸旋轉，以突出潛在因子",e.jsxs("p",{children:["然後就要進行旋轉，關於因素分析的旋轉可以看",e.jsx("a",{href:"https://molecular-service-science.com/2013/06/15/principal-component-analysis-and-factor-analysis/",children:"這裡"})]}),e.jsx("p",{children:"STATA裡 旋轉幾種方式"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["orthogonal（the default）：正角，其中包含",e.jsxs("ul",{children:[e.jsx("li",{children:"varimax ：最大變異法"}),e.jsx("li",{children:"vgpf ：varimax via the GPF algorithm"}),e.jsx("li",{children:"quartimax"}),e.jsx("li",{children:"equamax"}),e.jsx("li",{children:"parsimax"}),e.jsx("li",{children:"entropy"}),e.jsx("li",{children:"tandem1"}),e.jsx("li",{children:"tandem2"})]})]}),e.jsx("li",{children:"oblique：斜角 > promax：斜交旋轉"}),e.jsx("li",{children:"oblimin :最小斜交"}),e.jsx("li",{children:"bentler"}),e.jsx("li",{children:"oblimax"}),e.jsx("li",{children:"quartimin"})]}),e.jsxs("p",{children:["在Stata輸入",e.jsx("code",{children:"h rotate"}),"可以看到簡單的介紹。"]}),e.jsxs("p",{children:["開始前或完成後記得輸入",e.jsx("code",{children:"rotate, clear"}),"，以便清除掉內存的記憶，否則會在前面的資訊上繼續作旋轉，如此則會扭曲其中的關係。"]}),e.jsx(a,{code:`rotate, clear
rotate, blank(.4)
loadingplot  /* 以圖形顯示各變項之座標 */`,lang:"stata"}),e.jsx(a,{code:`. rotate, clear

. rotate, blank(.4)

Factor analysis/correlation                      Number of obs    =      1,998
    Method: principal-component factors          Retained factors =          2
    Rotation: orthogonal varimax (Kaiser off)    Number of params =         13

    --------------------------------------------------------------------------
         Factor  |     Variance   Difference        Proportion   Cumulative
    -------------+------------------------------------------------------------
        Factor1  |      1.89268      0.31435            0.2704       0.2704
        Factor2  |      1.57832            .            0.2255       0.4959
    --------------------------------------------------------------------------
    LR test: independent vs. saturated:  chi2(21) = 1358.54 Prob>chi2 = 0.0000

Rotated factor loadings (pattern matrix) and unique variances

    -------------------------------------------------
        Variable |  Factor1   Factor2 |   Uniqueness 
    -------------+--------------------+--------------
            e2_1 |             0.7139 |      0.4385  
            e2_2 |   0.6011           |      0.5468  
            e2_3 |             0.6066 |      0.4819  
            e2_4 |             0.7214 |      0.4767  
            e2_6 |   0.5582           |      0.6502  
            e2_7 |   0.6871           |      0.4778  
            e2_9 |   0.7368           |      0.4571  
    -------------------------------------------------
    (blanks represent abs(loading)<.4)

Factor rotation matrix

    --------------------------------
                 | Factor1  Factor2 
    -------------+------------------
         Factor1 |  0.9901  -0.1402 
         Factor2 |  0.1402   0.9901 
    --------------------------------

. loadingplot  /* 以圖形顯示各變項之座標 */`,lang:"output"}),e.jsx("p",{children:"建立潛在變項"}),e.jsx(a,{code:"predict noeffort noluck",lang:"stata"}),e.jsx(a,{code:`. predict noeffort noluck
(regression scoring assumed)

Scoring coefficients (method = regression; based on varimax rotated factors)

    ----------------------------------
        Variable |  Factor1   Factor2 
    -------------+--------------------
            e2_1 | -0.10947   0.44918 
            e2_2 |  0.32240   0.20139 
            e2_3 |  0.21408   0.39052 
            e2_4 | -0.01717   0.45659 
            e2_6 |  0.29215  -0.11543 
            e2_7 |  0.35990  -0.13133 
            e2_9 |  0.38959   0.01202 
    ----------------------------------`,lang:"output"}),e.jsx("p",{children:"檢查建立的變項"}),e.jsx(a,{code:"sum  noluck noeffort   /*平均數為0，標準差為1:標準常態分佈*/",lang:"stata"}),e.jsx(a,{code:`. sum  noluck noeffort   /*平均數為0，標準差為1:標準常態分佈*/

    Variable |        Obs        Mean    Std. Dev.       Min        Max
-------------+---------------------------------------------------------
      noluck |      1,998   -8.00e-10           1  -4.454852   3.136954
    noeffort |      1,998    1.42e-09           1  -3.714611   4.112346`,lang:"output"})]})]}),e.jsx("p",{children:"若想建立更好理解的分數，可以有下列幾種方式"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["將屬於同一因子的變項的分數相加得到總分",e.jsx(a,{code:`cap drop noeffort2
cap drop noluck2
g noeffort2   = (e2_1 + e2_4 + e2_8 )/3
g noluck2 = (e2_2 + e2_3 + e2_5 +e2_9)/4

sum  noluck2 noeffort2

list e2_2  e2_6  e2_7  e2_9 noluck2 in 1/5 , noobs clean
list e2_1  e2_3  e2_4  noeffort2 in 1/5 , noobs clean

lab var noluck2 "總加運氣指數"               /* 請注意：這是反向的總分，愈高分代表愈沒有努力 */
lab var noeffort2 "總加個人努力指數"           /* 請注意：這是反向的總分，愈高分代表愈沒有運氣 */

corr noeffort2 noluck2`,lang:"stata"}),e.jsx(a,{code:`. cap drop noeffort2

. cap drop noluck2

. g noeffort2   = (e2_1 + e2_4 + e2_8 )/3
(28 missing values generated)

. g noluck2 = (e2_2 + e2_3 + e2_5 +e2_9)/4
(36 missing values generated)

. 
. sum  noluck2 noeffort2

    Variable |        Obs        Mean    Std. Dev.       Min        Max
-------------+---------------------------------------------------------
     noluck2 |      2,004    2.384481    .3959401          1          4
   noeffort2 |      2,012    2.810968    .4902464          1          4

. 
. list e2_2  e2_6  e2_7  e2_9 noluck2 in 1/5 , noobs clean

    e2_2   e2_6   e2_7   e2_9   noluck2  
       2      2      2      1         2  
       1      4      4      4       2.5  
       1      3      2      2         2  
       3      4      3      4         3  
       3      3      1      1       2.5  

. list e2_1  e2_3  e2_4  noeffort2 in 1/5 , noobs clean

    e2_1   e2_3   e2_4   noeffo~2  
       3      3      4   3.333333  
       4      1      2   2.333333  
       3      2      3          3  
       4      2      4   3.666667  
       2      4      2   2.333333  

. 
. lab var noluck2 "總加運氣指數"               /* 請注意：這是反向的總分，愈高分代表愈沒有努力 */

. lab var noeffort2 "總加個人努力指數"           /* 請注意：這是反向的總分，愈高分代表愈沒有運氣 */

. 
. corr noeffort2 noluck2
(obs=2,003)

             | noeffo~2  noluck2
-------------+------------------
   noeffort2 |   1.0000
     noluck2 |   0.1452   1.0000`,lang:"output"})]}),e.jsxs("li",{children:["將前面用",e.jsx("code",{children:"predict"}),"所建立的潛在變項做轉換，回復到由0-100的分數",e.jsx(a,{code:`g noluck3=100*normal(noluck)
lab var noluck3 "常模運氣指數"

g noeffort3=100*normal(noeffort)
lab var noeffort3 "常模個人努力指數"

sum  noluck3 noeffort3
corr noluck3 noeffort3

list e2_2  e2_6  e2_7  e2_9 noluck3 in 1/20 , noobs clean
list e2_1  e2_3  e2_4  noeffort3 in 1/20 , noobs clean

* 這裡所建立的常模也是反向的，愈高分代表愈沒有努力，或愈沒有運氣

lab var noluck3 "總加運氣指數"
lab var noeffort3 "總加個人努力指數"`,lang:"stata"}),e.jsx(a,{code:`. g noluck3=100*normal(noluck)
(42 missing values generated)

. lab var noluck3 "常模運氣指數"

. 
. g noeffort3=100*normal(noeffort)
(42 missing values generated)

. lab var noeffort3 "常模個人努力指數"

. 
. sum  noluck3 noeffort3

    Variable |        Obs        Mean    Std. Dev.       Min        Max
-------------+---------------------------------------------------------
     noluck3 |      1,998     50.6358     28.6926   .0004198   99.91464
   noeffort3 |      1,998    49.72918    28.03488   .0101758   99.99804

. corr noluck3 noeffort3
(obs=1,998)

             |  noluck3 noeffo~3
-------------+------------------
     noluck3 |   1.0000
   noeffort3 |   0.0076   1.0000


. 
. list e2_2  e2_6  e2_7  e2_9 noluck3 in 1/20 , noobs clean

    e2_2   e2_6   e2_7   e2_9    noluck3  
       2      2      2      1   92.86724  
       1      4      4      4   4.292683  
       1      3      2      2   34.49693  
       3      4      3      4   90.21073  
       3      3      1      1   67.04468  
       2      2      1      3   61.98824  
       2      2      2      2   77.87349  
       2      4      3      2   .6476567  
       3      3      3      3   76.61908  
       2      3      3      3   5.022593  
       3      4      2      2   93.19616  
       2      3      3      3   16.14698  
       3      2      4      3   91.58392  
       2      3      2      2   47.78933  
       2      2      2      2   93.13187  
       2      2      2      3   80.25647  
       2      2      2      2   54.52605  
       2      3      2      3    22.5578  
       2      2      2      2   54.52605  
       2      3      2      2   7.682744  

. list e2_1  e2_3  e2_4  noeffort3 in 1/20 , noobs clean

    e2_1   e2_3   e2_4   noeffo~3  
       3      3      4   11.21454  
       4      1      2   92.51644  
       3      2      3   14.89145  
       4      2      4   98.61098  
       2      4      2    37.8252  
       3      3      2   29.08532  
       3      3      3   28.75189  
       1      2      2   82.31297  
       3      3      3   95.44567  
       2      2      2   83.33516  
       3      3      4   79.34434  
       2      3      2   90.76031  
       3      3      4   96.99076  
       3      2      3   31.16382  
       2      4      4   47.22497  
       2      3      4   57.89925  
       3      2      3   17.89715  
       3      2      2   56.48738  
       3      2      3   17.89715  
       2      2      2   38.02294  

. 
. * 這裡所建立的常模也是反向的，愈高分代表愈沒有努力，或愈沒有運氣
. 
. lab var noluck3 "總加運氣指數"

. lab var noeffort3 "總加個人努力指數"`,lang:"output"})]})]})]})}];export{i as default};
