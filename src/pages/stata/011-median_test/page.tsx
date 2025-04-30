import { CodeChunk } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "Mann Whitney U Test",
    content: (
      <>
        <ol>
          <li>適用範圍：</li>
          <ul>
            <li>此檢驗可看作為t test的替代。當後者違反所謂的equal variance時，可用Mann Whitney U Test作為替代。</li>
            <li>此檢驗屬於nonparametric test，不需要假定母體的分佈呈常態分配。</li>
            <li>即令如此，此假定仍然包含樣本來自隨機抽樣的假定。</li>
            <li>適用於ordinal data，比較兩組之間的差距。</li>
          </ul>
          <li>作法：</li>
          <ol type="i">
            <li>先對樣本中的資訊進行排序</li>
            <li>
              在下列公式中找尋較小值的U
              <img className="img-invert d-block my-2" src={`${imagePath}/Mann_Whitney_U_Test-1.svg`} />
              <img className="img-invert d-block my-2" src={`${imagePath}/Mann_Whitney_U_Test-2.svg`} />
              <ul>
                <li>
                  <i>
                    N<sub>1</sub>
                  </i>
                  與
                  <i>
                    N<sub>2</sub>
                  </i>
                  為各組的個案數
                </li>
                <li>
                  &Sigma;
                  <i>
                    R<sub>1</sub>
                  </i>
                  與&Sigma;
                  <i>
                    R<sub>2</sub>
                  </i>
                  為第一組與第二組的排序總和
                </li>
              </ul>
            </li>
            <li>
              取較小的U值，用於下列公式中，去取得Z值
              <img className="img-invert d-block my-2" src={`${imagePath}/Mann_Whitney_U_Test-3.svg`} />
            </li>
            <li>若Z值大於1.96，則意味著虛無假設遭到拒絕，反之，則保留虛無假設</li>
          </ol>
        </ol>
        <div className="my-2">
          <div className="text-bold text-large">範例：</div>
          <CodeChunk code={`clear\ninput g stress rank\n1 12 10\n1 15 11\n1 4  1\n1 7  3\n1 8  5\n1 16 12\n1 20 15\n1 10 8\n1 8  5\n2 23 17\n2 11 9\n2 24 18\n2 18 13.5\n2 18 13.5\n2 6  2  \n2 9  7\n2 8  5\n2 21 16\nend\n\nranksum stress, by(g)`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input g stress rank\n\n             g     stress       rank\n  1. 1 12 10\n  2. 1 15 11\n  3. 1 4  1\n  4. 1 7  3\n  5. 1 8  5\n  6. 1 16 12\n  7. 1 20 15\n  8. 1 10 8\n  9. 1 8  5\n 10. 2 23 17\n 11. 2 11 9\n 12. 2 24 18\n 13. 2 18 13.5\n 14. 2 18 13.5\n 15. 2 6  2  \n 16. 2 9  7\n 17. 2 8  5\n 18. 2 21 16\n 19. end\n\n. \n. ranksum stress, by(g)\n\nTwo-sample Wilcoxon rank-sum (Mann-Whitney) test\n\n           g |      obs    rank sum    expected\n-------------+---------------------------------\n           1 |        9          70        85.5\n           2 |        9         101        85.5\n-------------+---------------------------------\n    combined |       18         171         171\n\nunadjusted variance      128.25\nadjustment for ties       -0.66\n                     ----------\nadjusted variance        127.59\n\nHo: stress(g==1) = stress(g==2)\n             z =  -1.372\n    Prob > |z| =   0.1700`} lang="output" />
        </div>
      </>
    ),
  },
  {
    title: "Kruskal-Wallis Test",
    content: (
      <>
        <ol>
          <li>
            適用範圍：
            <ul>
              <li>此檢驗可看作為ANOVA的替代。當後者違反所謂的equal variance時，可用Kruskal-Wallis Test作為替代。</li>
              <li>此檢驗屬於nonparametric test，不需要假定母體的分佈呈常態分配。</li>
              <li>即令如此，此假定仍然包含樣本來自隨機抽樣的假定。</li>
              <li>適用於ordinal data，比較三組或以上組別之間的差距。</li>
            </ul>
          </li>
          <li>
            做法：
            <ol type="i">
              <li>先對樣本中的資訊進行排序</li>
              <li>
                在下列公式中找尋較小值的H
                <img className="img-invert d-block my-2" src={`${imagePath}/Mann_Whitney_U_Test-4.svg`} />
                <ul>
                  <li>
                    <i>N</i>為個案總數
                  </li>
                  <li>
                    <i>
                      n<sub>i</sub>
                    </i>
                    為各組的個案數
                  </li>
                  <li>
                    &Sigma;(
                    <i>
                      R<sub>i</sub>
                    </i>
                    )<sup>2</sup>是各組排序的總和
                  </li>
                </ul>
              </li>
              <li>若H值大於1.96，則意味著虛無假設遭到拒絕，反之則保留虛無假設</li>
            </ol>
          </li>
        </ol>
        <div className="my-2">
          <div className="text-bold text-large">範例：</div>
          <CodeChunk code={`clear\ninput g reward\n1 20\n1 15\n1 17\n1 13\n1 18\n1 16\n2 14\n2 8\n2 11\n2 10\n2 6\n2 9\n3 12\n3 11\n3 9\n3 5\n3 6\n3 7\nend`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input g reward\n\n             g     reward\n  1. 1 20\n  2. 1 15\n  3. 1 17\n  4. 1 13\n  5. 1 18\n  6. 1 16\n  7. 2 14\n  8. 2 8\n  9. 2 11\n 10. 2 10\n 11. 2 6\n 12. 2 9\n 13. 3 12\n 14. 3 11\n 15. 3 9\n 16. 3 5\n 17. 3 6\n 18. 3 7\n 19. end`} lang="output" />
          <p>Stata算出H=11.038</p>
          <CodeChunk code={`kwallis reward, by(g)`} lang="stata" />
          <CodeChunk code={`. kwallis reward, by(g)\n\nKruskal-Wallis equality-of-populations rank test\n\n  +--------------------+\n  | g | Obs | Rank Sum |\n  |---+-----+----------|\n  | 1 |   6 |    92.00 |\n  | 2 |   6 |    44.50 |\n  | 3 |   6 |    34.50 |\n  +--------------------+\n\nchi-squared =    11.038 with 2 d.f.\nprobability =     0.0040\n\nchi-squared with ties =    11.072 with 2 d.f.\nprobability =     0.0039`} lang="output" />
          <p>df=2 以組數來計算df</p>
          <CodeChunk code={`di invchi2tail(2, .05)`} lang="stata" />
          <CodeChunk code={`. di invchi2tail(2, .05)\n5.9914645`} lang="output" />
        </div>
      </>
    ),
  },
];
