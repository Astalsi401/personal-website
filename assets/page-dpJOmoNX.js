import{j as e}from"./index-ghIOUYFc.js";import{C as s}from"./codeChunk-c8OkEgZA.js";import{Z as i}from"./zoomImage-j9ZW51o-.js";const c=[{title:"",content:e.jsxs(e.Fragment,{children:[e.jsxs("ol",{children:[e.jsxs("li",{children:["參數顯著性檢驗：",e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"母體的分佈是常態分配（或樣本數夠大，使其平均數的分佈也呈現常態分配）"}),e.jsx("li",{children:"測量的尺度是區間（interval）尺度"})]})]}),e.jsxs("li",{children:["非參數顯著性檢驗：",e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"不需要對總體分佈做事先的假定。例如，不需要假定母體分佈呈常態分配。"}),e.jsx("li",{children:"當變項的測量尺度是名目（nominal）或等距（ordinal）尺度。"}),e.jsxs("li",{children:["非參數顯著性檢驗並不是在檢驗平均數是否相等的虛無假設，而是：",e.jsxs("ul",{children:[e.jsx("li",{children:"當變項只有一個時：檢驗變項的分配是否符合某種分配"}),e.jsx("li",{children:"當有兩個變項時：探討變項是否獨立或是否有關聯。"})]})]})]})]}),e.jsxs("li",{children:["非參數顯著性檢驗採用的是卡方分配（Chi Square distribution）",e.jsx(i,{className:"mx-auto w-sm-75",src:"/personal-website/assets/images/chi-square01.png"}),e.jsxs("ol",{type:"i",children:[e.jsx("li",{children:"是右偏的分配。"}),e.jsxs("li",{children:["最小檢定值",e.jsxs("i",{children:["Χ",e.jsx("sup",{children:"2"})]}),"=0，因此統計量不會是負數。"]}),e.jsxs("li",{children:["卡方分配的平均值",e.jsx("i",{children:"μ"}),"及標準差都被自由度（Degree of Freedom, df）所決定。自由度增加時，其分配就愈趨於常態曲線。"]}),e.jsxs("li",{children:[e.jsxs("i",{children:["Χ",e.jsx("sup",{children:"2"})]}),"值愈大，拒絕虛無假設的可能性就愈大。"]}),e.jsxs("li",{children:["以STATA找出分配數值的指令：",e.jsxs("ul",{children:[e.jsxs("li",{children:["若自由度為2，",e.jsxs("i",{children:["Χ",e.jsx("sup",{children:"2"})]}),"=5時，找出右邊分配的機率值",e.jsx(s,{code:"di chi2tail(2, 5)",lang:"stata"}),e.jsx(s,{code:`. di chi2tail(2, 5)
.082085`,lang:"output"})]}),e.jsxs("li",{children:["若自由度為2，右邊機率值為0.082085時，找出",e.jsxs("i",{children:["Χ",e.jsx("sup",{children:"2"})]}),"值",e.jsx(s,{code:"di invchi2tail(2, .082085)",lang:"stata"}),e.jsx(s,{code:`. di invchi2tail(2, .082085)
5`,lang:"output"})]})]})]})]})]}),e.jsxs("li",{children:["One-way Chi-square test：檢驗變項的分配是否符合某種分配",e.jsx("ol",{type:"i",children:e.jsxs("li",{children:["目的就是用於檢驗樣本的分佈是否符合某種理論分佈或某種假設的分佈。",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("i",{children:["H",e.jsx("sub",{children:"1"})]}),"：母體不為某種比例分配"]}),e.jsxs("li",{children:[e.jsxs("i",{children:["H",e.jsx("sub",{children:"0"})]}),"：母體在某性質上呈現某種比例分配"]})]})]})})]}),e.jsxs("li",{children:["計算方式",e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsxs("i",{children:["f",e.jsx("sub",{children:"o"})]}),"=被觀察到的數值"]}),e.jsxs("li",{children:[e.jsxs("i",{children:["f",e.jsx("sub",{children:"e"})]}),"=被期望到的數值"]}),e.jsxs("li",{children:["公式為：",e.jsx("img",{src:"data:image/png;base64,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",widyh:"111",heigh:"48"})]})]})]})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例1："}),e.jsx("p",{children:"在選擇題測驗中，有50個選擇題，每題的答案範圍由A至E，但其中只有一個是標準答案。在考完試後，老師公佈標準答案，其分配如下："}),e.jsxs("table",{className:"mx-auto my-2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"標準答案"}),e.jsx("th",{children:"數量"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"A"}),e.jsx("td",{children:"12"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"B"}),e.jsx("td",{children:"14"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"C"}),e.jsx("td",{children:"9"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"D"}),e.jsx("td",{children:"5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"E"}),e.jsx("td",{children:"10"})]})]})]}),e.jsx("p",{children:"此處的虛無假設是樣本符合母體中各類別之分佈符合平均分配（Pr>0.05）"}),e.jsx(s,{code:"chitesti 12 14 5 9 10  10 10 10 10 10 ",lang:"stata"}),e.jsx(s,{code:`. chitesti 12 14 5 9 10  10 10 10 10 10 

observed frequencies from keyboard; expected frequencies from keyboard

         Pearson chi2(4) =   4.6000   Pr =  0.331
likelihood-ratio chi2(4) =   4.9690   Pr =  0.290

  +-------------------------------------------+
  | observed   expected   obs - exp   Pearson |
  |-------------------------------------------|
  |       12     10.000       2.000     0.632 |
  |       14     10.000       4.000     1.265 |
  |        5     10.000      -5.000    -1.581 |
  |        9     10.000      -1.000    -0.316 |
  |       10     10.000       0.000     0.000 |
  +-------------------------------------------+`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例2："}),e.jsx("p",{children:"輸入資料"}),e.jsx(s,{code:`clear
input x y freq
0 0 15
1 0 10
0 1 5
1 1 10
end

lab variable x "political orientation"
lab var y "government preference"
lab define xlabel 0 "Liberal" 1 "Conservative"
lab define y      0 "Large  " 1 "Small"
lab value x xlabel
lab val   y y

expand freq`,lang:"stata"}),e.jsx(s,{code:`. clear

. input x y freq

             x          y       freq
  1. 0 0 15
  2. 1 0 10
  3. 0 1 5
  4. 1 1 10
  5. end

. 
. lab variable x "political orientation"

. lab var y "government preference"

. lab define xlabel 0 "Liberal" 1 "Conservative"

. lab define y      0 "Large  " 1 "Small"

. lab value x xlabel

. lab val   y y

. expand freq
(36 observations created)
.`,lang:"output"}),e.jsx("p",{children:"自由主義與保守主義對政府的偏好沒有顯著區別（Pr>0.05）。"}),e.jsx(s,{code:`clear
tab x y, chi exp`,lang:"stata"}),e.jsx(s,{code:`. clear
. tab x y, chi exp

+--------------------+
| Key                |
|--------------------|
|     frequency      |
| expected frequency |
+--------------------+

   political | government preference
 orientation |   Large        Small |     Total
-------------+----------------------+----------
     Liberal |        15          5 |        20 
             |      12.5        7.5 |      20.0 
-------------+----------------------+----------
Conservative |        10         10 |        20 
             |      12.5        7.5 |      20.0 
-------------+----------------------+----------
       Total |        25         15 |        40 
             |      25.0       15.0 |      40.0 

          Pearson chi2(1) =   2.6667   Pr = 0.102`,lang:"output"}),e.jsx("p",{children:"也能直接用這種方法"}),e.jsx(s,{code:"tabi 15 5 \\ 10 10, chi exp",lang:"stata"}),e.jsx(s,{code:`. tabi 15 5 \\ 10 10, chi exp

+--------------------+
| Key                |
|--------------------|
|     frequency      |
| expected frequency |
+--------------------+

           |          col
       row |         1          2 |     Total
-----------+----------------------+----------
         1 |        15          5 |        20 
           |      12.5        7.5 |      20.0 
-----------+----------------------+----------
         2 |        10         10 |        20 
           |      12.5        7.5 |      20.0 
-----------+----------------------+----------
     Total |        25         15 |        40 
           |      25.0       15.0 |      40.0 

          Pearson chi2(1) =   2.6667   Pr = 0.102`,lang:"output"})]}),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"text-bold text-large",children:"範例3："}),e.jsx("p",{children:"某校男女生比例相同。現隨機抽取50名學生，其中男生27人，而女生23人。問此一抽樣比例是否符合該校男女生比例？"}),e.jsx("p",{children:"Pr>0.05，符合"}),e.jsx(s,{code:"prtesti 50 .54 .46",lang:"stata"}),e.jsx(s,{code:`. prtesti 50 .54 .46

One-sample test of proportion                      x: Number of obs =       50
------------------------------------------------------------------------------
             |       Mean   Std. Err.                     [95% Conf. Interval]
-------------+----------------------------------------------------------------
           x |        .54    .070484                      .4018538    .6781462
------------------------------------------------------------------------------
    p = proportion(x)                                             z =   1.1350
Ho: p = 0.46

    Ha: p < 0.46                 Ha: p != 0.46                 Ha: p > 0.46
 Pr(Z < z) = 0.8718         Pr(|Z| > |z|) = 0.2564          Pr(Z > z) = 0.1282`,lang:"output"})]})]})}];export{c as default};
