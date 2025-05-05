import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { P } from "@ui/paragraph";
import { Subsection, SubsectionTitle } from "@ui/subsection";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath, demoPath }) => [
  {
    id: "工作目錄",
    title: "工作目錄",
    content: (
      <>
        <P>匯入資料前最好先確認STATA的工作目錄，這樣可以減少需要輸入的路徑的長度。</P>
        <P>
          <InlineCode>cd "路徑"</InlineCode>：直接指定工作目錄
        </P>
        <CodeChunk code={`cd "C:\\Users\\misti\\Documents\\Stata\\unify"`} lang="stata" />
        <CodeChunk code={`. cd "C:\\Users\\misti\\Documents\\Stata\\unify"\nC:\\Users\\misti\\Documents\\Stata\\unify`} lang="output" />
        <P>
          <InlineCode>pwd</InlineCode>：確認當前目錄
        </P>
        <CodeChunk code={`pwd`} lang="stata" />
        <CodeChunk code={`. pwd\nC:\\Users\\misti\\Documents\\Stata\\unify`} lang="output" />
        <P>
          <InlineCode>cd ..</InlineCode>：回到上一層目錄
        </P>
        <CodeChunk code={`cd ..`} lang="stata" />
        <CodeChunk code={`. cd ..\nC:\\Users\\misti\\Documents\\Stata`} lang="output" />
        <P>
          <InlineCode>ls</InlineCode>：確認目前工作目錄中有哪些檔案及資料夾
        </P>
        <CodeChunk code={`ls`} lang="stata" />
        <CodeChunk path={`${demoPath}/ls.result`} lang="output" />
        <P>
          <InlineCode>cd 資料夾名稱</InlineCode>：進入當前目錄中的資料夾，如此處為unify。
        </P>
        <CodeChunk code={`cd unify`} lang="stata" />
        <CodeChunk code={`. cd unify\nC:\\Users\\misti\\Documents\\Stata\\unify`} lang="output" />
      </>
    ),
  },
  {
    id: "資料檔匯入",
    title: "資料檔匯入",
    content: (
      <>
        <Subsection>
          <SubsectionTitle>
            Txt匯入：<InlineCode>insheet</InlineCode>
          </SubsectionTitle>
          <P>直接從指定的目錄匯入，無須變更工作目錄。</P>
          <CodeChunk code={`insheet using "C:\\Users\\misti\\Documents\\Stata\\社會一\\社會統計\\統計1-06\\grade.txt", clear\nta v1`} lang="stata" />
          <CodeChunk path={`${demoPath}/ta_v1.result`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>
            Csv匯入：<InlineCode>insheet</InlineCode>
          </SubsectionTitle>
          <CodeChunk code={`cd data\ninsheet using data1b.csv, c n clear  /*c 導入逗點分隔值檔案*/\nsort id /*以id排序*/\nlist in 1/10 /*列出這份資料的前10筆*/`} lang="stata" />
          <CodeChunk path={`${demoPath}/list.result`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>
            Excel檔匯入（.xlsx）：<InlineCode>import</InlineCode>
          </SubsectionTitle>
          <CodeChunk code={`import exc data2b.xlsx, first clear\n/*import exc option\nfirst: first row as var name\nsheet("sheetname")*/\nsort id\nlist in 1/10`} lang="stata" />
          <CodeChunk path={`${demoPath}/list2.result`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>匯入有多個分頁的Excel</SubsectionTitle>
          <P>
            <InlineCode>cellra(A2)</InlineCode>: 從A2開始讀取資料
          </P>
          <CodeChunk code={`import exc using data2b.xlsx, sh("sheetname") cellra(A2) first clear`} lang="stata" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>
            STATA資料檔匯入（.dta）：<InlineCode>use</InlineCode>
          </SubsectionTitle>
          <CodeChunk code={`use data1a, clear\nlist in 1/5\ncd ..`} lang="stata" />
          <CodeChunk code={`. use data1a, clear\n. list in 1/5\n     +--------------------+\n     | id   male   score1 |\n     |--------------------|\n  1. |  1      1       58 |\n  2. |  2      1       65 |\n  3. |  3      1       55 |\n  4. |  4      1       62 |\n  5. |  5      1       78 |\n     +--------------------+\n. cd ..\nC:\\Users\\misti\\Documents\\Stata\\unify`} lang="output" />
        </Subsection>
      </>
    ),
  },
  {
    id: "資料檔匯出",
    title: "資料檔匯出",
    content: (
      <>
        <Subsection>
          <P>
            <InlineCode>sysuse auto, clear</InlineCode>清除上一筆資料，使用stata內建，名為auto的資料
          </P>
          <P>查看資料中的變項。</P>
          <CodeChunk code={`sysuse auto, clear\ndes\ncd data`} lang="stata" />
          <CodeChunk path={`${demoPath}/des.result`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>匯出csv</SubsectionTitle>
          <P>
            <InlineCode>outfile</InlineCode>匯出
          </P>
          <CodeChunk code={`outfile make price rep78 weight length using "1978 Automobile_part.csv", comma replace`} lang="stata" />
          <CodeChunk code={`. outfile make price rep78 weight length using "1978 Automobile_part.csv", comma replace\n(note: file 1978 Automobile_part.csv not found)`} lang="output" />
          <P>或直接全部匯出。</P>
          <CodeChunk code={`outfile using "1978 Automobile.csv", comma replace`} lang="stata" />
          <CodeChunk code={`. outfile using "1978 Automobile.csv", comma replace\n(note: file 1978 Automobile.csv not found)`} lang="output" />
          <P>
            <InlineCode>outsheet</InlineCode>匯出
          </P>
          <CodeChunk code={`outsheet using "1978 Automobile.csv", c n replace`} lang="stata" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>匯出xlsx</SubsectionTitle>
          <CodeChunk code={`export exc using 1978 Automobile.xlsx, sh("sheetname") first(var) sheetrep`} lang="stata" />
        </Subsection>
      </>
    ),
  },
  {
    id: "圖表匯入",
    title: "圖表匯入",
    content: (
      <>
        <P>在STATA中開啟圖表</P>
        <CodeChunk code={`graph use "1978auto.gph`} lang="stata" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/1978auto_1.png`} alt="1978auto_1.png" />
      </>
    ),
  },
  {
    id: "圖表匯出",
    title: "圖表匯出",
    content: (
      <>
        <Subsection>
          <SubsectionTitle>匯出為png</SubsectionTitle>
          <CodeChunk code={`twoway (sca weight length) (qfit weight length), ///\n       title("1978 Automobile Data")\ngraph save "1978auto.gph", replace  /*將圖表儲存為stata專用的gph格式*/\ngraph export "1978auto.png", replace   /*將圖表儲存為png格式*/`} lang="stata" />
          <CodeChunk code={`. twoway (sca weight length) (qfit weight length), ///\n>        title("1978 Automobile Data")\n. graph save "1978auto.gph", replace  /*將圖表儲存為stata專用的gph格式*/\n(file 1978auto.gph saved)\n. graph export "1978auto.png", replace   /*將圖表儲存為png格式*/\n(file 1978auto.png written in PNG format)`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>匯出png至excel</SubsectionTitle>
          <P>
            <InlineCode>A1</InlineCode>= excel表格位置
          </P>
          <CodeChunk code={`putexcel set pathToXlsxFile.xlsx, sheet("xlsxSheetName") modify\nputexcel A1 = picture(pathToPngFile.png)`} lang="stata" />
        </Subsection>
      </>
    ),
  },
  {
    id: "資料檔合併",
    title: "資料檔合併",
    content: (
      <>
        <Subsection>
          <P>以下將介紹兩種資料合併的方法：</P>
        </Subsection>
        <Subsection>
          <SubsectionTitle>
            方法一：<InlineCode>append</InlineCode>
          </SubsectionTitle>
          <P>
            <InlineCode>append</InlineCode>是將資料b直接添加在資料a的後方，此時兩份資料必須擁有完全相同的變項才能成功合併。
          </P>
          <P>首先匯入資料a（data1a）觀察後可發現，這份資料有3個變項（id、male、score1），樣本數（obs）為30。</P>
          <CodeChunk code={`cd data\nuse data1a, clear\nd /*簡單列出資料檔的資訊*/`} lang="stata" />
          <CodeChunk code={`. cd data\nC:\\Users\\misti\\Documents\\Stata\\unify\\data\n\n. use data1a, clear\n\n. d /*簡單列出資料檔的資訊*/\n\nContains data from data1a.dta\n  obs:            30                          \n vars:             3                          26 Nov 2020 19:06\n size:           360                          \n---------------------------------------------------------------------------------------------------------------\n              storage   display    value\nvariable name   type    format     label      variable label\n---------------------------------------------------------------------------------------------------------------\nid              float   %9.0g                 \nmale            float   %9.0g                 \nscore1          float   %9.0g                 \n---------------------------------------------------------------------------------------------------------------\nSorted by: id`} lang="output" />
          <P>再來匯入data1b觀察後可發現這份資料與data1a擁有相同的變項，而樣本數則是30。</P>
          <CodeChunk code={`use data1b, clear\nd`} lang="stata" />
          <CodeChunk code={`. use data1b, clear\n\n. d\n\nContains data from data1b.dta\n  obs:            30                          \n vars:             3                          26 Nov 2020 19:06\n size:            90                          \n---------------------------------------------------------------------------------------------------------------\n              storage   display    value\nvariable name   type    format     label      variable label\n---------------------------------------------------------------------------------------------------------------\nid              byte    %8.0g                 \nmale            byte    %8.0g                 \nscore1          byte    %8.0g                 \n---------------------------------------------------------------------------------------------------------------\nSorted by: id`} lang="output" />
          <P>
            現在利用<InlineCode>append</InlineCode>將data1a與data1b合併，然後存檔為data1_all。
          </P>
          <P>
            像這樣直接使用<InlineCode>save 檔名</InlineCode>存檔，檔案格式為STATA專用的.dta，存檔位置為當前的工作目錄。
          </P>
          <CodeChunk code={`append using data1a\nsort id  /*以變項id來為合併後的資料排序*/\nsave data1_all, replace  /*replace: 如果存檔位置已存在同名的檔案，則取代它*/`} lang="stata" />
          <CodeChunk code={`. append using data1a\n(note: variable id was byte, now float to accommodate using data's values)\n(note: variable male was byte, now float to accommodate using data's values)\n(note: variable score1 was byte, now float to accommodate using data's values)\n\n. sort id  /*以變項id來為合併後的資料排序*/\n\n. save data1_all, replace  /*replace: 如果存檔位置已存在同名的檔案，則取代它*/\nfile data1_all.dta saved`} lang="output" />
          <P>現在觀察這份資料可以發現，變項依然是3個，而樣本數則增加到60個。</P>
          <CodeChunk code={`d`} lang="stata" />
          <CodeChunk code={`. d\n\nContains data from data1_all.dta\n  obs:            60                          \n vars:             3                          27 Nov 2020 21:27\n size:           720                          \n---------------------------------------------------------------------------------------------------------------\n              storage   display    value\nvariable name   type    format     label      variable label\n---------------------------------------------------------------------------------------------------------------\nid              float   %8.0g                 \nmale            float   %8.0g                 \nscore1          float   %8.0g                 \n---------------------------------------------------------------------------------------------------------------\nSorted by: id`} lang="output" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>
            方法二：<InlineCode>merge</InlineCode>
          </SubsectionTitle>
          <P>
            <InlineCode>merge</InlineCode>是將資料2中的變項新增到資料1中，不過這種合併依然要求兩份資料至少有一個變項相同，且該變項的性質必須類似身分證號碼，每個樣本都有其自身的編號，這樣才能成功配對。
          </P>
          <P>匯入data2b，觀察後可發現這份資料中同樣有id這個變項，以及另外3個新變項（score2、class、dist）。</P>
          <CodeChunk code={`use data2b, clear\nd`} lang="stata" />
          <CodeChunk code={`. use data2b, clear\n\n. d\n\nContains data from data2b.dta\n  obs:            60                          \n vars:             4                          26 Nov 2020 19:07\n size:           240                          \n---------------------------------------------------------------------------------------------------------------\n              storage   display    value\nvariable name   type    format     label      variable label\n---------------------------------------------------------------------------------------------------------------\nid              byte    %10.0g                id\nscore2          byte    %10.0g                score2\nclass           byte    %10.0g                class\ndist            byte    %10.0g                dist\n---------------------------------------------------------------------------------------------------------------\nSorted by: id`} lang="output" />
          <P>以id來為data2b、data1_all進行配對，並儲存為data2_all</P>
          <CodeChunk code={`merge 1:1 id using data1_all\ncap drop _merge\nsort id\nsave data2_all, replace\ncd ..`} lang="stata" />
          <CodeChunk code={`. merge 1:1 id using data1_all\n(note: variable id was byte, now float to accommodate using data's values)\n\n    Result                           # of obs.\n    -----------------------------------------\n    not matched                             0\n    matched                                60  (_merge==3)\n    -----------------------------------------\n\n. cap drop _merge\n\n. sort id\n\n. save data2_all, replace\nfile data2_all.dta saved\n\n. cd ..\nC:\\Users\\misti\\Documents\\Stata\\unify`} lang="output" />
          <P>可以看到data1_all的資料成功與data2b合併，變項增加為6個，而樣本數仍維持20個。</P>
          <CodeChunk code={`d`} lang="stata" />
          <CodeChunk code={`. d\n\nContains data from data2_all.dta\n  obs:            60                          \n vars:             6                          27 Nov 2020 21:27\n size:           900                          \n---------------------------------------------------------------------------------------------------------------\n              storage   display    value\nvariable name   type    format     label      variable label\n---------------------------------------------------------------------------------------------------------------\nid              float   %10.0g                id\nscore2          byte    %10.0g                score2\nclass           byte    %10.0g                class\ndist            byte    %10.0g                dist\nmale            float   %8.0g                 \nscore1          float   %8.0g                 \n---------------------------------------------------------------------------------------------------------------\nSorted by: id`} lang="output" />
        </Subsection>
      </>
    ),
  },
  {
    id: "資料長寬轉換",
    title: "資料長寬轉換",
    content: (
      <>
        <P>在這份資料中可以看到score1、score2，利用以下指令，將score合併為一個變項，另外新增exam變項作為兩次分數的區分。</P>
        <CodeChunk code={`reshape long score, i(id) j(exam)\nlist in 1/10`} lang="stata" />
        <CodeChunk code={`. reshape long score, i(id) j(exam)\n(note: j = 1 2)\n\nData                               wide   ->   long\n-----------------------------------------------------------------------------\nNumber of obs.                       60   ->     120\nNumber of variables                   6   ->       6\nj variable (2 values)                     ->   exam\nxij variables:\n                          score1 score2   ->   score\n-----------------------------------------------------------------------------\n\n. list in 1/10\n\n     +-----------------------------------------+\n     | id   exam   score   class   dist   male |\n     |-----------------------------------------|\n  1. |  1      1      58       3      3      1 |\n  2. |  1      2      56       3      3      1 |\n  3. |  2      1      65       2      3      1 |\n  4. |  2      2      63       2      3      1 |\n  5. |  3      1      55       3      5      1 |\n     |-----------------------------------------|\n  6. |  3      2      52       3      5      1 |\n  7. |  4      1      62       1      4      1 |\n  8. |  4      2      59       1      4      1 |\n  9. |  5      1      78       2      1      1 |\n 10. |  5      2      78       2      1      1 |\n     +-----------------------------------------+`} lang="output" />
        <P>轉回原本格式</P>
        <CodeChunk code={`reshape wide score, i(id) j(exam)  /*或輸入reshape wide也能恢復原本格式*/\nlist in 1/5`} lang="stata" />
        <CodeChunk code={`. reshape wide score, i(id) j(exam)  /*或輸入reshape wide也能恢復原本格式*/\n(note: j = 1 2)\n\nData                               long   ->   wide\n-----------------------------------------------------------------------------\nNumber of obs.                      120   ->      60\nNumber of variables                   6   ->       6\nj variable (2 values)              exam   ->   (dropped)\nxij variables:\n                                  score   ->   score1 score2\n-----------------------------------------------------------------------------\n\n. list in 1/5\n\n     +--------------------------------------------+\n     | id   score1   score2   class   dist   male |\n     |--------------------------------------------|\n  1. |  1       58       56       3      3      1 |\n  2. |  2       65       63       2      3      1 |\n  3. |  3       55       52       3      5      1 |\n  4. |  4       62       59       1      4      1 |\n  5. |  5       78       78       2      1      1 |\n     +--------------------------------------------+`} lang="output" />
      </>
    ),
  },
];
