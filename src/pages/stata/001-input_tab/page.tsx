import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { P } from "@ui/paragraph";
import { Li, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = () => [
  {
    title: "常用符號",
    content: (
      <>
        <P>以下簡單介紹Stata中常用的符號：</P>
        <Ul>
          <Li>
            <P>
              <InlineCode>==</InlineCode>：等號，以連續兩個等號代表數值的相等。
            </P>
          </Li>
          <Li>
            <P>
              <InlineCode>=</InlineCode>：賦值符號，以一個等號為一批資料或某個數值賦予名稱。
            </P>
          </Li>
          <Li>
            <P>
              <InlineCode>&</InlineCode>：與、和，同時滿足提到條件的含意。
            </P>
          </Li>
          <Li>
            <P>
              <InlineCode>|</InlineCode>：或，只要滿足其中一個條件。
            </P>
          </Li>
          <Li>
            <P>
              <InlineCode>/* some text... */</InlineCode>：加入註解
            </P>
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "資料輸入",
    content: (
      <>
        <P>
          輸入<InlineCode>case</InlineCode>、<InlineCode>response</InlineCode>、<InlineCode>freq</InlineCode>三個變項。
        </P>
        <CodeChunk code={`clear\ninput case response freq\n1 1 9\n1 2 18\n1 3 42\n1 4 51\n1 5 30\n2 1 6\n2 2 12\n2 3 28\n2 4 34\n2 5 20\nend`} lang="stata" />
        <P>
          利用<InlineCode>describe</InlineCode>查看變項資訊。
        </P>
        <CodeChunk code={`describe`} lang="stata" />
        <CodeChunk code={`Contains data\nobs: 10 \nvars: 3 \nsize: 120 \n---------------------------------------------------------------------------------------------\nstorage display value\nvariable name type format label variable label\n---------------------------------------------------------------------------------------------\ncase  float %9.0g\nresponse  float %9.0g\nfreq  float %9.0g\n---------------------------------------------------------------------------------------------\nSorted by:\n Note: Dataset has changed since last saved.`} lang="output" />
        <P>
          定義名為<InlineCode>react</InlineCode>的<InlineCode>value label</InlineCode>，並為1~5加上標籤。
        </P>
        <P>
          將<InlineCode>react</InlineCode>與<InlineCode>response</InlineCode>連結。
        </P>
        <P>
          將<InlineCode>response</InlineCode>的<InlineCode>variable label</InlineCode>命名為<InlineCode>"Agr of Onset"</InlineCode>
        </P>
        <CodeChunk code={`label def react 1 "70-79" 2 "60-69" 3 "50-59" 4 "40-49" 5 "30-39"\nlab val response react\nlab var response "Agr of Onset"`} lang="stata" />
        <P>
          再次利用<InlineCode>describe</InlineCode>查看變項資訊，可發現<InlineCode>response</InlineCode>的欄位已發生變化。
        </P>
        <CodeChunk code={`describe`} lang="stata" />
        <CodeChunk code={`Contains data\nobs: 10 \nvars: 3 \nsize: 120 \n---------------------------------------------------------------------------------------------\nstorage display value\nvariable name type format label variable label\n---------------------------------------------------------------------------------------------\ncase  float %9.0g\nresponse  float %9.0g react Agr of Onset\nfreq  float %9.0g\n---------------------------------------------------------------------------------------------\nSorted by:\n Note: Dataset has changed since last saved.`} lang="output" />
        <P>對case進行相同的步驟。</P>
        <CodeChunk code={`lab def case 1 "f" 2 "%", modify\nlab val case case`} lang="stata" />
      </>
    ),
  },
  {
    title: "輸出表格",
    content: (
      <>
        <P>
          <b>第一種方法:</b> 將加權變項中的數值視為"個案數"，然後增加"n-1"個案數。以此資料為例，第一列為一個個案，但由於freq＝9，因此當執行完<InlineCode>expandfreq</InlineCode>後，這資料會增加9-1＝8列的"1 1 9"的個案
        </P>
        <CodeChunk code={`preserve\nexpand freq\ntab response case, freq\nrestore`} lang="stata" />
        <CodeChunk code={`. preserve\n. expand freq\n(240 observations created)\n. tab response case, freq\n\nAgr of     | case\nOnset      | f  %                 | Total\n-----------+----------------------+----------\n70-79      | 9  6                 | 15 \n60-69      | 18 12                | 30 \n50-59      | 42 28                | 70 \n40-49      | 51 34                | 85 \n30-39      | 30 20                | 50 \n-----------+----------------------+----------\nTotal      | 150 100              | 250 \n. restore`} lang="output" />
        <P>
          <b>第二種方法:</b> 將freq視為加權的變項
        </P>
        <CodeChunk code={`ta response case [fw=freq], freq`} lang="stata" />
        <CodeChunk code={`. ta response case [fw=freq], freq\n\nAgr of     | case\nOnset      | f  %                 | Total\n-----------+----------------------+----------\n70-79      | 9  6                 | 15 \n60-69      | 18 12                | 30 \n50-59      | 42 28                | 70 \n40-49      | 51 34                | 85 \n30-39      | 30 20                | 50 \n-----------+----------------------+----------\nTotal      | 150 100              | 250 `} lang="output" />
      </>
    ),
  },
  {
    title: "表格範例2",
    content: (
      <>
        <CodeChunk code={`clear\ninput x y freq\nx y freq\n0 0 15\n1 0 10\n0 1 5\n1 1 10\nend\n\nlab var x "political orientation"\nlab var y "government perference"\nlab def x 0 "liberal" 1 "conservative", modify\nlab def y 0 "large" 1 "small", modify\nlab val x x\nlab val y y\ntab y x [fw=freq], chi`} lang="stata" />
        <CodeChunk code={`. clear\n. input x y freq\nx y freq\n1. 0 0 15\n2. 1 0 10\n3. 0 1 5\n4. 1 1 10\n5. end\n. \n. lab var x "political orientation"\n. lab var y "government perference"\n. lab def x 0 "liberal" 1 "conservative", modify\n. lab def y 0 "large" 1 "small", modify\n. lab val x x\n. lab val y y\n. tab y x [fw=freq], chi\n\ngovernment | political orientation\nperference | liberal    conservat | Total\n-----------+----------------------+----------\nlarge      | 15         10        | 25 \nsmall      | 5          10        | 15 \n-----------+----------------------+----------\nTotal      | 20 20                | 40 \nPearson chi2(1) =  2.6667  Pr = 0.102`} lang="output" />
      </>
    ),
  },
  {
    title: "建立亂數(Stata Random Number)",
    content: (
      <>
        <P>各種建立亂數的指令</P>
        <Ul>
          <Li>
            <InlineCode>runiform():</InlineCode> generates rectangularly (uniformly) distributed random number over [0,1].
          </Li>
          <Li>
            <InlineCode>rbeta(a,b):</InlineCode> generates beta-distribution beta(a, b) random numbers.
          </Li>
          <Li>
            <InlineCode>rbinomial(n,p):</InlineCode> generates binomial(n, p) random numbers, where n is the number of trials and p the probability of a success.
          </Li>
          <Li>
            <InlineCode>rchi2(df):</InlineCode> generates χ2 with df degrees of freedom random numbers.
          </Li>
          <Li>
            <InlineCode>rgamma(a,b):</InlineCode> generates Γ(a, b) random numbers, where a is the shape parameter and b, the scale parameter.
          </Li>
          <Li>
            <InlineCode>rhypergeometric(N,K,n):</InlineCode> generates hypergeometric random numbers, where N is the population size, K is the number of in the population having the attribute of interest, and n is the sample size.
          </Li>
          <Li>
            <InlineCode>rnbinomial(n,p):</InlineCode> generates negative binomial — the number of failures before the nth success — random numbers, where p is the probability of a success. (n can also be noninteger.)
          </Li>
          <Li>
            <InlineCode>rnormal(μ,σ):</InlineCode> generates Gaussian normal random numbers.
          </Li>
          <Li>
            <InlineCode>rpoisson(m):</InlineCode> generates Poisson(m) random numbers.
          </Li>
          <Li>
            <InlineCode>rt(df):</InlineCode> generates Student’s t(df) random numbers.
          </Li>
        </Ul>
        <CodeChunk code={`clear\nset obs 100000\nset seed 123456789\ng x = int(floor((101)*runiform()+0))\n* 100-0+1 a\n* b -a a\n* max min\n*int=整數\n*0~100有101個整數\n*runiform=平均分布\n\nsu x, d\nsort x`} lang="stata" />
        <CodeChunk code={`. clear\n. set obs 100000\nnumber of observations (_N) was 0, now 100,000\n. set seed 123456789 \n. g x = int(floor((101)*runiform()+0))\n. * 100-0+1 a\n. * b -a a\n. * max min \n. *int=整數\n. *0~100有101個整數\n. *runiform=平均分布\n. su x, d\n                              x\n-------------------------------------------------------------\n      Percentiles      Smallest\n  1%           0              0\n  5%           4              0\n 10%          10              0      Obs              100,000\n 25%          25              0      Sum of Wgt.      100,000\n 50%          50                     Mean            50.00145\n                        Largest      Std. Dev.       29.18721\n 75%          75            100\n 90%          90            100      Variance         851.893\n 95%          95            100      Skewness       -.0033492\n 99%          99            100      Kurtosis         1.79898\n. sort x`} lang="output" />
      </>
    ),
  },
];
