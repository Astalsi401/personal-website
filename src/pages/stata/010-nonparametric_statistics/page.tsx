import { CodeChunk, ZoomImage } from "@/components";
import { Li, Ol } from "@ui/list";
import { P } from "@ui/paragraph";
import { Subsection, SubsectionTitle } from "@ui/subsection";
import { Table, Td, Th } from "@ui/table";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "",
    content: (
      <>
        <Subsection>
          <Ol>
            <Li>
              參數顯著性檢驗：
              <Ol type="i">
                <Li>母體的分佈是常態分配（或樣本數夠大，使其平均數的分佈也呈現常態分配）</Li>
                <Li>測量的尺度是區間（interval）尺度</Li>
              </Ol>
            </Li>
            <Li>
              非參數顯著性檢驗：
              <Ol type="i">
                <Li>不需要對總體分佈做事先的假定。例如，不需要假定母體分佈呈常態分配。</Li>
                <Li>當變項的測量尺度是名目（nominal）或等距（ordinal）尺度。</Li>
                <Li>
                  非參數顯著性檢驗並不是在檢驗平均數是否相等的虛無假設，而是：
                  <Ol>
                    <Li>當變項只有一個時：檢驗變項的分配是否符合某種分配</Li>
                    <Li>當有兩個變項時：探討變項是否獨立或是否有關聯。</Li>
                  </Ol>
                </Li>
              </Ol>
            </Li>
            <Li>
              非參數顯著性檢驗採用的是卡方分配（Chi Square distribution）
              <ZoomImage className="mx-auto w-sm-75 img-invert" src={`${imagePath}/chi-square01.png`} />
              <Ol type="i">
                <Li>是右偏的分配。</Li>
                <Li>
                  最小檢定值
                  <i>
                    &Chi;<sup>2</sup>
                  </i>
                  =0，因此統計量不會是負數。
                </Li>
                <Li>
                  卡方分配的平均值<i>&mu;</i>及標準差都被自由度（Degree of Freedom, df）所決定。自由度增加時，其分配就愈趨於常態曲線。
                </Li>
                <Li>
                  <i>
                    &Chi;<sup>2</sup>
                  </i>
                  值愈大，拒絕虛無假設的可能性就愈大。
                </Li>
                <Li>
                  以STATA找出分配數值的指令：
                  <Ol>
                    <Li>
                      若自由度為2，
                      <i>
                        &Chi;<sup>2</sup>
                      </i>
                      =5時，找出右邊分配的機率值
                      <CodeChunk code={`di chi2tail(2, 5)`} lang="stata" />
                      <CodeChunk code={`. di chi2tail(2, 5)\n.082085`} lang="output" />
                    </Li>
                    <Li>
                      若自由度為2，右邊機率值為0.082085時，找出
                      <i>
                        &Chi;<sup>2</sup>
                      </i>
                      值<CodeChunk code={`di invchi2tail(2, .082085)`} lang="stata" />
                      <CodeChunk code={`. di invchi2tail(2, .082085)\n5`} lang="output" />
                    </Li>
                  </Ol>
                </Li>
              </Ol>
            </Li>
            <Li>
              One-way Chi-square test：檢驗變項的分配是否符合某種分配
              <Ol type="i">
                <Li>
                  目的就是用於檢驗樣本的分佈是否符合某種理論分佈或某種假設的分佈。
                  <Ol>
                    <Li>
                      <i>
                        H<sub>1</sub>
                      </i>
                      ：母體不為某種比例分配
                    </Li>
                    <Li>
                      <i>
                        H<sub>0</sub>
                      </i>
                      ：母體在某性質上呈現某種比例分配
                    </Li>
                  </Ol>
                </Li>
              </Ol>
            </Li>
            <Li>
              計算方式
              <Ol>
                <Li>
                  <i>
                    f<sub>o</sub>
                  </i>
                  =被觀察到的數值
                </Li>
                <Li>
                  <i>
                    f<sub>e</sub>
                  </i>
                  =被期望到的數值
                </Li>
                <Li>
                  公式為：
                  <img className="img-invert d-block my-2" src={`${imagePath}/chi-square.svg`} />
                </Li>
              </Ol>
            </Li>
          </Ol>
        </Subsection>
        <Subsection>
          <SubsectionTitle>範例1：</SubsectionTitle>
          <P>在選擇題測驗中，有50個選擇題，每題的答案範圍由A至E，但其中只有一個是標準答案。在考完試後，老師公佈標準答案，其分配如下：</P>
          <Table>
            <thead>
              <tr>
                <Th>標準答案</Th>
                <Th>數量</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>A</Td>
                <Td>12</Td>
              </tr>
              <tr>
                <Td>B</Td>
                <Td>14</Td>
              </tr>
              <tr>
                <Td>C</Td>
                <Td>9</Td>
              </tr>
              <tr>
                <Td>D</Td>
                <Td>5</Td>
              </tr>
              <tr>
                <Td>E</Td>
                <Td>10</Td>
              </tr>
            </tbody>
          </Table>
          <P>此處的虛無假設是樣本符合母體中各類別之分佈符合平均分配（Pr&gt;0.05）</P>
          <CodeChunk code={`chitesti 12 14 5 9 10 \ 10 10 10 10 10 `} lang="stata" />
          <CodeChunk code={`. chitesti 12 14 5 9 10 \ 10 10 10 10 10 \n\nobserved frequencies from keyboard; expected frequencies from keyboard\n\n         Pearson chi2(4) =   4.6000   Pr =  0.331\nlikelihood-ratio chi2(4) =   4.9690   Pr =  0.290\n\n  +-------------------------------------------+\n  | observed   expected   obs - exp   Pearson |\n  |-------------------------------------------|\n  |       12     10.000       2.000     0.632 |\n  |       14     10.000       4.000     1.265 |\n  |        5     10.000      -5.000    -1.581 |\n  |        9     10.000      -1.000    -0.316 |\n  |       10     10.000       0.000     0.000 |\n  +-------------------------------------------+`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>範例2：</SubsectionTitle>
          <P>輸入資料</P>
          <CodeChunk code={`clear\ninput x y freq\n0 0 15\n1 0 10\n0 1 5\n1 1 10\nend\n\nlab variable x "pOlitical orientation"\nlab var y "government preference"\nlab define xlabel 0 "Liberal" 1 "Conservative"\nlab define y      0 "Large  " 1 "Small"\nlab value x xlabel\nlab val   y y\n\nexpand freq`} lang="stata" />
          <CodeChunk code={`. clear\n\n. input x y freq\n\n             x          y       freq\n  1. 0 0 15\n  2. 1 0 10\n  3. 0 1 5\n  4. 1 1 10\n  5. end\n\n. \n. lab variable x "pOlitical orientation"\n\n. lab var y "government preference"\n\n. lab define xlabel 0 "Liberal" 1 "Conservative"\n\n. lab define y      0 "Large  " 1 "Small"\n\n. lab value x xlabel\n\n. lab val   y y\n\n. expand freq\n(36 observations created)\n.`} lang="output" />
          <P>自由主義與保守主義對政府的偏好沒有顯著區別（Pr&gt;0.05）。</P>
          <CodeChunk code={`clear\ntab x y, chi exp`} lang="stata" />
          <CodeChunk code={`. clear\n. tab x y, chi exp\n\n+--------------------+\n| Key                |\n|--------------------|\n|     frequency      |\n| expected frequency |\n+--------------------+\n\n   pOlitical | government preference\n orientation |   Large        Small |     Total\n-------------+----------------------+----------\n     Liberal |        15          5 |        20 \n             |      12.5        7.5 |      20.0 \n-------------+----------------------+----------\nConservative |        10         10 |        20 \n             |      12.5        7.5 |      20.0 \n-------------+----------------------+----------\n       Total |        25         15 |        40 \n             |      25.0       15.0 |      40.0 \n\n          Pearson chi2(1) =   2.6667   Pr = 0.102`} lang="output" />
          <P>也能直接用這種方法</P>
          <CodeChunk code={`tabi 15 5 \\ 10 10, chi exp`} lang="stata" />
          <CodeChunk code={`. tabi 15 5 \\ 10 10, chi exp\n\n+--------------------+\n| Key                |\n|--------------------|\n|     frequency      |\n| expected frequency |\n+--------------------+\n\n           |          cOl\n       row |         1          2 |     Total\n-----------+----------------------+----------\n         1 |        15          5 |        20 \n           |      12.5        7.5 |      20.0 \n-----------+----------------------+----------\n         2 |        10         10 |        20 \n           |      12.5        7.5 |      20.0 \n-----------+----------------------+----------\n     Total |        25         15 |        40 \n           |      25.0       15.0 |      40.0 \n\n          Pearson chi2(1) =   2.6667   Pr = 0.102`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>範例3：</SubsectionTitle>
          <P>某校男女生比例相同。現隨機抽取50名學生，其中男生27人，而女生23人。問此一抽樣比例是否符合該校男女生比例？</P>
          <P>Pr&gt;0.05，符合</P>
          <CodeChunk code={`prtesti 50 .54 .46`} lang="stata" />
          <CodeChunk code={`. prtesti 50 .54 .46\n\nOne-sample test of proportion                      x: Number of obs =       50\n------------------------------------------------------------------------------\n             |       Mean   Std. Err.                     [95% Conf. Interval]\n-------------+----------------------------------------------------------------\n           x |        .54    .070484                      .4018538    .6781462\n------------------------------------------------------------------------------\n    p = proportion(x)                                             z =   1.1350\nHo: p = 0.46\n\n    Ha: p < 0.46                 Ha: p != 0.46                 Ha: p > 0.46\n Pr(Z < z) = 0.8718         Pr(|Z| > |z|) = 0.2564          Pr(Z > z) = 0.1282`} lang="output" />
        </Subsection>
      </>
    ),
  },
];
