import { CodeChunk, ZoomImage } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "相關係數的公式推導",
    content: (
      <>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor02.svg`} alt="" />
        <p>
          上式中分母部分為X與Y之變異數，而分子部分的<i>Cov(X,Y)</i> 為共變量。我們可以將上述公式推衍為下式：
        </p>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor03.svg`} alt="" />
        <p>
          在上式中，
          <img className="img-invert" src={`${imagePath}/cor04.svg`} alt="" />
          實為X的標準差，即
          <i>
            S<sub>X</sub>
          </i>
          ，而另一個則是
          <i>
            S<sub>Y</sub>
          </i>
          。由此，我們得到下式：
        </p>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor05.svg`} alt="" />
        <p>前面的式子再推衍之，我們得到下式：</p>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor06.svg`} alt="" />
        <p>
          將分子部分的(<i>n</i>-1)<sup>2</sup>移到根號外，得到下式：
        </p>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor07.svg`} alt="" />
        <p>
          抵消分母和分子的<i>n</i>-1後，得到相關係數公式：
        </p>
        <img className="img-invert d-block my-2 mx-auto" src={`${imagePath}/cor08.svg`} alt="" />
      </>
    ),
  },
  {
    title: "相關係數的意義",
    content: (
      <>
        <ul>
          <li>相關係數介於-1到+1之間。</li>
          <li>相關係數若為負數，則代表兩變項為負相關，兩變項之間的關係是此消彼長。</li>
          <li>相關係數若為0，則代表兩變項之間不存在聯動關係。</li>
          <li>相關係數若為正數，則代表兩變項之間是正相關，意即兩變項之間是同時增或減。</li>
          <li>
            相關係數的解釋：
            <ul>
              <li>若在 -0.6與 -1之間，代表程度很強的負相關</li>
              <li>若在 -0.3與 -0.59之間，則代表中度的負相關</li>
              <li>若在 -0.1與 -0.29之間，則代表輕度的負相關</li>
              <li>若為 0.09與-0.09之間，則代表沒有相關，或幾乎沒有關係</li>
              <li>若在 0.1與 0.29之間，則代表輕度的正相關</li>
              <li>若在 0.3與 0.59之間，則代表中度的正相關</li>
              <li>若在 0.6與 1之間，代表程度很強的正相關</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "相關係數的限制",
    content: (
      <>
        <p>相關係數僅適用于直線型的關係中。若兩變項之關係呈曲線狀，例如下圖的案例，年輕人看電視的時間隨著年齡的增長而減少，至40歲左右降至最低點，但隨著年齡的增長，逐漸離開工作崗位，年齡大的人有更多看電視的時間。</p>
        <CodeChunk code={`clear\ninput age tv\n1  9.8\n1  6.8\n3  3.9\n7  5\n9  8.2\n11 7.8\n15 3.5\n20 2\n21 3.6\n28 1.9\n31 2.4\n40 3\n43 2.5\n50 3.8\n52 4\n55 1.8\n60 4.2\n61 2.5\n70 3.2\n71 7.1\n77 6\n78 8.1\n79 4\n86 7.8\n88 9\nend\n\ngen age2=age^2\nreg tv age\n\ntwoway (sca tv age) (qfit tv age), ///\n    yti("Daiky TV Viewing") xti("Age") ///\n    ti("Age and Watching TV")\ngraph export cor01.png, replace\n\ncorr tv age`} lang="stata" />
        <CodeChunk code={`. clear\n\n. input age tv\n\n           age         tv\n  1. 1  9.8\n  2. 1  6.8\n  3. 3  3.9\n  4. 7  5\n  5. 9  8.2\n  6. 11 7.8\n  7. 15 3.5\n  8. 20 2\n  9. 21 3.6\n 10. 28 1.9\n 11. 31 2.4\n 12. 40 3\n 13. 43 2.5\n 14. 50 3.8\n 15. 52 4\n 16. 55 1.8\n 17. 60 4.2\n 18. 61 2.5\n 19. 70 3.2\n 20. 71 7.1\n 21. 77 6\n 22. 78 8.1\n 23. 79 4\n 24. 86 7.8\n 25. 88 9\n 26. end\n\n. gen age2=age^2\n\n. reg tv age\n\n      Source |       SS           df       MS      Number of obs   =        25\n-------------+----------------------------------  F(1, 23)        =      0.07\n       Model |  .429854802         1  .429854802   Prob > F        =    0.7979\n    Residual |  147.255751        23  6.40242396   R-squared       =    0.0029\n-------------+----------------------------------  Adj R-squared   =   -0.0404\n       Total |  147.685606        24  6.15356691   Root MSE        =    2.5303\n\n------------------------------------------------------------------------------\n          tv |      Coef.   Std. Err.      t    P>|t|     [95% Conf. Interval]\n-------------+----------------------------------------------------------------\n         age |   .0045551   .0175796     0.26   0.798     -.031811    .0409212\n       _cons |   4.683411   .8991879     5.21   0.000     2.823299    6.543523\n------------------------------------------------------------------------------\n\n. twoway (sca tv age) (qfit tv age), ///\n>        yti("Daiky TV Viewing") xti("Age") ///\n>        ti("Age and Watching TV")\n\n. graph export cor01.png, replace\n(file cor01.png written in PNG format)\n\n. corr tv age\n(obs=25)\n\n             |       tv      age\n-------------+------------------\n          tv |   1.0000\n         age |   0.0540   1.0000`} lang="output" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/cor01.png`} />
      </>
    ),
  },
  {
    title: "STATA相關係數範例",
    content: (
      <>
        <div className="my-2">
          <div className="text-bold text-large">範例1：</div>
          <CodeChunk code={`clear\ninput str4 child height weight\n"A" 49 81\n"B" 50 88\n"C" 53 87\n"D" 55 99\n"E" 60 91\n"F" 55 89\n"G" 60 95\n"H" 50 90\nend\n\nlab var height "inches"\nlab var weight "lb"\n\ncorr height weight`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input str4 child height weight\n\n         child     height     weight\n  1. "A" 49 81\n  2. "B" 50 88\n  3. "C" 53 87\n  4. "D" 55 99\n  5. "E" 60 91\n  6. "F" 55 89\n  7. "G" 60 95\n  8. "H" 50 90\n  9. end\n\n. lab var height "inches"\n\n. lab var weight "lb"\n\n. corr height weight\n(obs=8)\n\n             |   height   weight\n-------------+------------------\n      height |   1.0000\n      weight |   0.6124   1.0000`} lang="output" />
        </div>
        <div className="my-2">
          <div className="text-bold text-large">範例2：</div>
          <CodeChunk code={`clear\ninput x y\n12 12\n10 8\n6  12\n16 11\n8  10\n9  8\n12 16\n11 15\nend\n. \ncorr x y\n\ncorr x y, cov\n\npwcorr x y, sig star(.05)`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input x y\n\n             x          y\n  1. 12 12\n  2. 10 8\n  3. 6  12\n  4. 16 11\n  5. 8  10\n  6. 9  8\n  7. 12 16\n  8. 11 15\n  9. end\n\n. \n. corr x y\n(obs=8)\n\n             |        x        y\n-------------+------------------\n           x |   1.0000\n           y |   0.2421   1.0000\n\n\n. corr x y, cov\n(obs=8)\n\n             |        x        y\n-------------+------------------\n           x |  9.14286\n           y |  2.14286  8.57143\n\n\n. pwcorr x y, sig star(.05)\n\n             |        x        y\n-------------+------------------\n           x |   1.0000 \n             |\n             |\n           y |   0.2421   1.0000 \n             |   0.5636\n             |`} lang="output" />
        </div>
      </>
    ),
  },
  {
    title: "偏相關係數（Partial Correlation）",
    content: (
      <>
        <p>偏相關指移除掉掉第三個變項在其中的影響後，兩個變項之間的相關。可瞭解兩個變項之間原有的關係會不會因為第三個變項介入其中後，導致改變。</p>
        <div className="my-2">
          <div className="text-bold text-large">偏相關範例：</div>
          <CodeChunk code={`clear\n\ninput group x y\n2 1.1  3.4\n2 1.2  2\n2 3.1  3.1\n2 3.2  4.8\n2 3.15 1.8\n2 3.85 5.85\n2 4.2  3.2\n2 4.9  2.2\n1 4.95 5.2\n1 5.2  7.2\n2 5.7  6.15\n2 5.8  3.9\n2 6.1  8.2\n2 6.25 4.9\n1 6.5  6.4\n1 6.9  7.6\n1 6.95 8.8\n1 7.8  6\n1 7.85 7.2\n1 8.05 8.2\n1 8.15 4.2\n2 8.7  5.7\n1 9.05 6.85\n1 9.2  8.6\n1 9.7  5.7\n1 10   7.15\nend`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input group x y\n\n         group          x          y\n  1. 2 1.1  3.4\n  2. 2 1.2  2\n  3. 2 3.1  3.1\n  4. 2 3.2  4.8\n  5. 2 3.15 1.8\n  6. 2 3.85 5.85\n  7. 2 4.2  3.2\n  8. 2 4.9  2.2\n  9. 1 4.95 5.2\n 10. 1 5.2  7.2\n 11. 2 5.7  6.15\n 12. 2 5.8  3.9\n 13. 2 6.1  8.2\n 14. 2 6.25 4.9\n 15. 1 6.5  6.4\n 16. 1 6.9  7.6\n 17. 1 6.95 8.8\n 18. 1 7.8  6\n 19. 1 7.85 7.2\n 20. 1 8.05 8.2\n 21. 1 8.15 4.2\n 22. 2 8.7  5.7\n 23. 1 9.05 6.85\n 24. 1 9.2  8.6\n 25. 1 9.7  5.7\n 26. 1 10   7.15\n 27. end`} lang="output" />
          <p>計算相關</p>
          <CodeChunk code={`corr y x`} lang="stata" />
          <CodeChunk code={`. corr y x\n(obs=26)\n\n             |        y        x\n-------------+------------------\n           y |   1.0000\n           x |   0.6658   1.0000`} lang="output" />
          <p>計算各組相關</p>
          <CodeChunk code={`corr y x if group==1\ncorr y x if group==2`} lang="stata" />
          <CodeChunk code={`. corr y x if group==1\n(obs=13)\n\n             |        y        x\n-------------+------------------\n           y |   1.0000\n           x |   0.0941   1.0000\n\n\n. corr y x if group==2\n(obs=13)\n\n             |        y        x\n-------------+------------------\n           y |   1.0000\n           x |   0.5825   1.0000`} lang="output" />
          <p>計算偏相關</p>
          <CodeChunk code={`pcorr y x group`} lang="stata" />
          <CodeChunk code={`. pcorr y x group\n(obs=26)\n\nPartial and semipartial correlations of y with\n\n               Partial   Semipartial      Partial   Semipartial   Significance\n   Variable |    Corr.         Corr.      Corr.^2       Corr.^2          Value\n------------+-----------------------------------------------------------------\n          x |   0.4144        0.3194       0.1717        0.1020         0.0394\n      group |  -0.3406       -0.2542       0.1160        0.0646         0.0957`} lang="output" />
          <p>本範例顯示以下幾個特點：</p>
          <ol type="i">
            <li>全體樣本(即group未被排除時)中X與Y的相關係數＝0.67</li>
            <li>
              當group被控制時，
              <ul>
                <li>group 1中，X與Y的相關係數＝0.09</li>
                <li>group 2中，X與Y的相關係數＝0.58</li>
                <li>這裡的關係意味著在不同的group中，X和Y是有變化的。在group 1中，其相關係數為0.09，顯示在group 1，X和Y幾乎是零相關；在group 2中，X和Y的相關係數是0.58，此數值非常接近group未被排除時之相關係數（又稱為zero order correlation between X and Y, that is, r=0.67）。換言之，在group未被排除時，我們看到的相關係數（即， r=0.67）非常類似於group 2中，X與Y的相關係數。</li>
              </ul>
            </li>
            <li>當group被排除時，X與Y的偏相關係數＝0.41</li>
          </ol>
          <CodeChunk code={`twoway (sca  y x if group==2, m(O)) ///\n       (lfit y x if     group==2, lcolor(black)) ///\n       (sca  y x if group==1, m(Oh)) ///\n       (lfit y x if group==1, lcolor(gs12)) ///\n       (lfit y x, lpattern(longdash) lcolor(red)), ///\n       ylab(0(1)10, angle(0)) ///\n       xlab(0(1)11) ///\n       xline(1 2 3 4 5 6 7 8 9 10 11, lcolor(gs12)) ///\n       yline(1 2 3 4 5 6 7 8 9 10, lcolor(gs12)) ///\n       title(Conditional Relatioship) ///\n       text(8.65 2   "全部樣本", place(e) color(red)) ///\n       text(8    2   "相關係數＝0.67", place(e) color(black)) ///\n       text(1    0.5 "Group 2樣本", place(e) color(red)) ///\n       text(0.35 0.5 "相關係數＝0.58", place(e) color(black)) ///\n       text(3    8   "Group 1樣本", place(e) color(red)) ///\n       text(2.35 8   "相關係數＝0.09", place(e) color(black)) ///\n       legend(lab(1 "Group 2") lab(2 "Group 2的迴歸預測線") ///\n       lab(3 "Group 1") lab(4 "Group 1的迴歸預測線") ///\n       lab(5 "全部樣本迴歸預測線"))    \n\ngraph export "sca02.png", replace`} lang="stata" />
          <CodeChunk code={`. twoway (sca  y x if group==2, m(O)) ///\n>        (lfit y x if     group==2, lcolor(black)) ///\n>        (sca  y x if group==1, m(Oh)) ///\n>        (lfit y x if group==1, lcolor(gs12)) ///\n>        (lfit y x, lpattern(longdash) lcolor(red)), ///\n>        ylab(0(1)10, angle(0)) ///\n>        xlab(0(1)11) ///\n>        xline(1 2 3 4 5 6 7 8 9 10 11, lcolor(gs12)) ///\n>        yline(1 2 3 4 5 6 7 8 9 10, lcolor(gs12)) ///\n>        title(Conditional Relatioship) ///\n>        text(8.65 2   "全部樣本", place(e) color(red)) ///\n>        text(8    2   "相關係數＝0.67", place(e) color(black)) ///\n>        text(1    0.5 "Group 2樣本", place(e) color(red)) ///\n>        text(0.35 0.5 "相關係數＝0.58", place(e) color(black)) ///\n>        text(3    8   "Group 1樣本", place(e) color(red)) ///\n>        text(2.35 8   "相關係數＝0.09", place(e) color(black)) ///\n>        legend(lab(1 "Group 2") lab(2 "Group 2的迴歸預測線") ///\n>        lab(3 "Group 1") lab(4 "Group 1的迴歸預測線") ///\n>        lab(5 "全部樣本迴歸預測線"))    \n\n. graph export "sca02.png", replace                                       \n(file sca02.png written in PNG format)`} lang="output" />
          <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sca02.png`} />
        </div>
      </>
    ),
  },
];
