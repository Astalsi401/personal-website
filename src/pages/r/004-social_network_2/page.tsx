import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath, demoPath }) => [
  {
    title: "匯入資料",
    content: (
      <>
        <div className="my-2">
          <p>
            <b>方法一：使用矩陣格式的資料</b>
          </p>
          <p>
            資料分為兩個部分：
            <br />
            <InlineCode>data.fauxhigh.csvs</InlineCode>為Homophily（類聚），代表actors的性質，例如種族、性別、年齡等，載入後命名為<InlineCode>fauxhs</InlineCode>。<br />
            <InlineCode>matrix.fauxhigh.csvs</InlineCode>為矩陣格式的網絡關係，載入後命名為<InlineCode>fauxhs.mat</InlineCode>。<br />
          </p>
          <CodeChunk code={`library(asnipe)\nlibrary(igraph)`} lang="r" />
          <CodeChunk code={`## \n## 載入套件：'igraph'`} lang="output" />
          <CodeChunk code={`## 下列物件被遮斷自 'package:stats':\n## \n##     decompose, spectrum`} lang="output" />
          <CodeChunk code={`## 下列物件被遮斷自 'package:base':\n## \n##     union`} lang="output" />
          <CodeChunk code={`setwd("D:/Documents/R/site/data")\n#載入actors信息\nfauxhs <- read.csv("data.fauxhigh.csv")\nfauxhs`} lang="r" />
          <CodeChunk path={`${demoPath}/read.csv.result`} lang="output" />
          <CodeChunk code={`#載入關係網絡\nfauxhs.mat <- read.csv("matrix.fauxhigh.csv", header = T, check.names = F, row.names = 1)\nfauxhs.mat <- as.matrix(fauxhs.mat)\nfauxhs.mat`} lang="r" />
          <CodeChunk path={`${demoPath}/fauxhs.mat.result`} lang="output" />
          <p>
            將網絡資料命名為<InlineCode>fauxhs.net</InlineCode>，
          </p>
          <CodeChunk code={`fauxhs.net <- graph_from_adjacency_matrix(fauxhs.mat, mode = "direct", weighted = NULL)\nfauxhs.net`} lang="r" />
          <CodeChunk path={`${demoPath}/fauxhs.net.result`} lang="output" />
          <CodeChunk code={`plot(fauxhs.net, vertex.size = 5, vertex.label = "", vertex.color = "red", edge.arrow.size = 0.5, layout = fauxhs.layout)`} lang="r" />
          <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_1.png`} />
          <CodeChunk code={`#儲存本次fauxhs.net繪製的圖形中，nodes的位置，命名為fauxhs.layout\n#以便下次使用\nfauxhs.layout <- layout.fruchterman.reingold(fauxhs.net)`} lang="r" />
        </div>
        <div className="my-2">
          <p>
            <b>方法二：使用Edgelist格式的資料繪製網絡圖</b>
          </p>
          <CodeChunk code={`setwd("D:/Documents/R/site/data")\nfauxhs.edges <- read.csv("edges.fauxhigh.csv", header = T)\nfauxhs.edges`} lang="r" />
          <CodeChunk path={`${demoPath}/fauxhs.edges.result`} lang="output" />
          <CodeChunk code={`fauxhs.eg <- graph_from_data_frame(fauxhs.edges, directed = T)\nfauxhs.eg`} lang="r" />
          <CodeChunk path={`${demoPath}/fauxhs.eg.result`} lang="output" />
          <CodeChunk code={`set.seed(2); plot(fauxhs.eg, vertex.size = 5, vertex.label = "", vertex.color = "red", edge.arrow.size = 0.5)`} lang="r" />
          <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_2.png`} />
          <p>
            兩種方式的結果是完全相同的，電腦在計算後會隨機繪製出網絡圖形。
            <br />
            若想繪製出同樣的圖形，可利用<InlineCode>set.seed()</InlineCode>來固定每次node位置的參數；或是以<InlineCode>layout.fruchterman.reingold()</InlineCode>儲存node的值，以便下次使用。
            <br />
          </p>
        </div>
      </>
    ),
  },
  {
    title: "合併actors資料與與網絡資料",
    content: (
      <>
        <CodeChunk code={`V(fauxhs.net)$name`} lang="r" />
        <CodeChunk code={`##   [1] "1"   "2"   "3"   "4"   "5"   "6"   "7"   "8"   "9"   "10"  "11"  "12" \n##  [13] "13"  "14"  "15"  "16"  "17"  "18"  "19"  "20"  "21"  "22"  "23"  "24" \n##  [25] "25"  "26"  "27"  "28"  "29"  "30"  "31"  "32"  "33"  "34"  "35"  "36" \n##  [37] "37"  "38"  "39"  "40"  "41"  "42"  "43"  "44"  "45"  "46"  "47"  "48" \n##  [49] "49"  "50"  "51"  "52"  "53"  "54"  "55"  "56"  "57"  "58"  "59"  "60" \n##  [61] "61"  "62"  "63"  "64"  "65"  "66"  "67"  "68"  "69"  "70"  "71"  "72" \n##  [73] "73"  "74"  "75"  "76"  "77"  "78"  "79"  "80"  "81"  "82"  "83"  "84" \n##  [85] "85"  "86"  "87"  "88"  "89"  "90"  "91"  "92"  "93"  "94"  "95"  "96" \n##  [97] "97"  "98"  "99"  "100" "101" "102" "103" "104" "105" "106" "107" "108"\n## [109] "109" "110" "111" "112" "113" "114" "115" "116" "117" "118" "119" "120"`} lang="output" />
        <CodeChunk code={`V(fauxhs.eg)$name`} lang="r" />
        <CodeChunk code={`##   [1] "14"  "26"  "31"  "39"  "50"  "53"  "54"  "56"  "63"  "71"  "86"  "92" \n##  [13] "98"  "74"  "108" "119" "16"  "59"  "91"  "11"  "28"  "66"  "120" "23" \n##  [25] "41"  "34"  "87"  "13"  "29"  "43"  "107" "21"  "79"  "35"  "72"  "90" \n##  [37] "112" "32"  "58"  "36"  "68"  "22"  "33"  "44"  "82"  "25"  "65"  "104"\n##  [49] "100" "106" "116" "75"  "46"  "60"  "78"  "109" "117" "48"  "38"  "49" \n##  [61] "89"  "40"  "84"  "37"  "114" "47"  "99"  "76"  "55"  "61"  "93"  "97" \n##  [73] "51"  "88"  "101" "103" "85"  "67"  "80"  "77"  "81"  "113" "118" "102"\n##  [85] "110" "111" "94"  "105" "96"  "95"  "115" "1"   "2"   "3"   "4"   "5"  \n##  [97] "6"   "7"   "8"   "9"   "10"  "12"  "15"  "17"  "18"  "19"  "20"  "24" \n## [109] "27"  "30"  "42"  "45"  "52"  "57"  "62"  "64"  "69"  "70"  "73"  "83"`} lang="output" />
        <CodeChunk code={`V(fauxhs.net)$gpa <- fauxhs[match(V(fauxhs.net)$name, fauxhs$ids ), "gpa"]\nV(fauxhs.net)$grade <- factor(fauxhs[match(V(fauxhs.net)$name, fauxhs$ids ), "grade"])\nV(fauxhs.net)$gender <- factor(fauxhs[match(V(fauxhs.net)$name, fauxhs$ids ), "gender"])\nV(fauxhs.net)$race <- factor(fauxhs[match(V(fauxhs.net)$name, fauxhs$ids ), "race"])`} lang="r" />
        <div className="my-2">
          <p>
            <b>以grade分類</b>
          </p>
          <p>可以發現grade為7~12的整數</p>
          <CodeChunk code={`fauxhs$grade\nsummary(fauxhs$grade)`} lang="r" />
          <CodeChunk code={`fauxhs$grade`} lang="r" />
          <CodeChunk code={`##   [1]  7  7 10 11  9  9  9  8 10  7 10 12  8  7  8 11  7  9 12 10 10  7 12 10  8\n##  [26]  7 11  9  8  7 12 11  7 11  7  8 11  8  7  7 12 10  8  7  7  9  8 11  8  7\n##  [51]  7 10  7  7  9  7  9 12 11  8  9  9  7  7  7  9  8  8 11  7  7  7  7  7 11\n##  [76]  7  7  8 12  9 11  7 10  9  7  7  9  7  8  7 11  7  9  9 11  9  9  7 12  9\n## [101]  7  7  7  7 10 10  8  7 10  8 10  7  7  7  9 10 12 11 10  9`} lang="output" />
          <CodeChunk code={`summary(fauxhs$grade)`} lang="r" />
          <CodeChunk code={`##    Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n##   7.000   7.000   8.000   8.708  10.000  12.000`} lang="output" />
          <p>賦予7~12不同的顏色（淺紅~深紅）</p>
          <CodeChunk code={`V(fauxhs.net)$color <- c("#FFF2F2", "#FFA1A1", "#FF5F5F", "#FF5F5F", "#CC0000", "#A30000")[as.numeric(V(fauxhs.net)$grade)]\nplot(fauxhs.net, vertex.size=5, vertex.label="", edge.arrow.size=0.5, layout = fauxhs.layout)`} lang="r" />
          <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_3.png`} />
        </div>
        <div className="my-2">
          <p>
            <b>以gender分類</b>
          </p>
          <p>R的排列方式為由小到大，由A~Z，因此若變項為文字，例如gender的F、M，則F會在前，因此下圖red=female，blue=man</p>
          <CodeChunk code={`V(fauxhs.net)$color=c("red", "blue")[as.numeric(V(fauxhs.net)$gender)]\nplot(fauxhs.net, vertex.size=5, vertex.label="", edge.arrow.size=0.5, layout = fauxhs.layout)`} lang="r" />
          <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_4.png`} />
        </div>
      </>
    ),
  },
  {
    title: "計算網絡的詳細資訊",
    content: (
      <>
        <ul>
          <li>
            Degree
            <CodeChunk code={`deg <- degree(fauxhs.net, mode = "all")\ndeg`} lang="r" />
            <CodeChunk code={`##   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20 \n##  26   8   2   6   8   4   4   8   4   8   2   6  12  14   4   8   4   2   2   4 \n##  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40 \n##   2   6   6  18   6   8   4   6  18   4   4   6   4   6   4  10   4   8   6   2 \n##  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60 \n##  10   4   4   4   2  10   2   4   2  20   4   2   8  14   6  10   2   8  10   4 \n##  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80 \n##   6   4  10   2   6   6   2  14   6   2  10   6   4   6  10   8   6  12  10   6 \n##  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 \n##   2   2   2   6   8   4   6   2   8   8  16   6   6   8   2   2   8   2   2   6 \n## 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 \n##   8   2   6  10   2   8  14   8   4   2   6   6   4   2   2   2   4   2   6   2`} lang="output" />
          </li>
          <li>
            Out Degree
            <CodeChunk code={`outdeg <- degree(fauxhs.net, mode = "out")\noutdeg`} lang="r" />
            <CodeChunk code={`##   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20 \n##  13   4   1   3   4   2   2   4   2   4   1   3   6   7   2   4   2   1   1   2 \n##  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40 \n##   1   3   3   9   3   4   2   3   9   2   2   3   2   3   2   5   2   4   3   1 \n##  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60 \n##   5   2   2   2   1   5   1   2   1  10   2   1   4   7   3   5   1   4   5   2 \n##  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80 \n##   3   2   5   1   3   3   1   7   3   1   5   3   2   3   5   4   3   6   5   3 \n##  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 \n##   1   1   1   3   4   2   3   1   4   4   8   3   3   4   1   1   4   1   1   3 \n## 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 \n##   4   1   3   5   1   4   7   4   2   1   3   3   2   1   1   1   2   1   3   1`} lang="output" />
          </li>
          <li>
            In Degree
            <CodeChunk code={`indeg <- degree(fauxhs.net, mode = "in")\nindeg`} lang="r" />
            <CodeChunk code={`##   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20 \n##  13   4   1   3   4   2   2   4   2   4   1   3   6   7   2   4   2   1   1   2 \n##  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40 \n##   1   3   3   9   3   4   2   3   9   2   2   3   2   3   2   5   2   4   3   1 \n##  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60 \n##   5   2   2   2   1   5   1   2   1  10   2   1   4   7   3   5   1   4   5   2 \n##  61  62  63  64  65  66  67  68  69  70  71  72  73  74  75  76  77  78  79  80 \n##   3   2   5   1   3   3   1   7   3   1   5   3   2   3   5   4   3   6   5   3 \n##  81  82  83  84  85  86  87  88  89  90  91  92  93  94  95  96  97  98  99 100 \n##   1   1   1   3   4   2   3   1   4   4   8   3   3   4   1   1   4   1   1   3 \n## 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 \n##   4   1   3   5   1   4   7   4   2   1   3   3   2   1   1   1   2   1   3   1`} lang="output" />
          </li>
          <li>
            Betweenness
            <CodeChunk code={`betweenness <- betweenness(fauxhs.net, normalized=T)\nbetweenness`} lang="r" />
            <CodeChunk path={`${demoPath}/betweenness.result`} lang="output" />
          </li>
          <li>
            Closeness
            <CodeChunk code={`closeness <- closeness(fauxhs.net)\ncloseness`} lang="r" />
            <CodeChunk path={`${demoPath}/closeness.result`} lang="output" />
          </li>
          <li>
            Closeness（僅接收）
            <CodeChunk code={`closeness1 <- closeness(fauxhs.net, mode="in")\ncloseness1`} lang="r" />
            <CodeChunk path={`${demoPath}/closeness.in.result`} lang="output" />
          </li>
          <li>
            計算其他信息
            <CodeChunk code={`eigen <- eigen_centrality(fauxhs.net)\neigen`} lang="r" />
            <CodeChunk path={`${demoPath}/eigen.result}`} lang="output"/>
          </li>
          <li>
            樣本數
            <CodeChunk code={`n <- vcount(fauxhs.net)\nn`} lang="r" />
            <CodeChunk code={`## [1] 120`} lang="output" />
          </li>
          <li>
            edges的數量
            <CodeChunk code={`m <- ecount(fauxhs.net)\nm`} lang="r" />
            <CodeChunk code={`## [1] 370`} lang="output" />
          </li>
          <li>
            網絡密度
            <CodeChunk code={`dyads <- n*(n-1)/2\ndensity <- m/dyads\ndensity`} lang="r" />
            <CodeChunk code={`## [1] 0.05182073`} lang="output" />
            <CodeChunk code={`edge_density(fauxhs.net)`} lang="r" />
            <CodeChunk code={`## [1] 0.02591036`} lang="output" />
          </li>
          <li>
            計算Degree的分配
            <CodeChunk code={`hist(degree(fauxhs.net), breaks=10, col="gray")`} lang="r" />
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_5.png`} />
            <CodeChunk code={`dyad_census(fauxhs.net)`} lang="r" />
            <CodeChunk code={`## $mut\n## [1] 185\n## \n## $asym\n## [1] 0\n## \n## $null\n## [1] 6955`} lang="output" />
            <CodeChunk code={`triad_census(fauxhs.net)`} lang="r" />
            <CodeChunk code={`##  [1] 259598      0  20716      0      0      0      0      0      0      0\n## [11]    464      0      0      0      0     62`} lang="output" />
            <CodeChunk code={`g.cluster <- transitivity(fauxhs.net, "global")\ng.cluster`} lang="r" />
            <CodeChunk code={`## [1] 0.2861538`} lang="output" />
            <CodeChunk code={`l.cluster <- transitivity(fauxhs.net, "local")\nl.cluster`} lang="r" />
            <CodeChunk code={`##   [1] 0.03384615 0.03571429 0.00000000 0.20000000 0.03571429 0.16666667\n##   [7] 0.00000000 0.10714286 0.00000000 0.07142857 0.00000000 0.00000000\n##  [13] 0.09090909 0.05494505 0.16666667 0.10714286 0.16666667 0.00000000\n##  [19] 0.00000000 0.00000000 0.00000000 0.13333333 0.13333333 0.03267974\n##  [25] 0.13333333 0.07142857 0.16666667 0.06666667 0.03921569 0.00000000\n##  [31] 0.00000000 0.06666667 0.16666667 0.06666667 0.00000000 0.08888889\n##  [37] 0.16666667 0.07142857 0.06666667 0.00000000 0.04444444 0.00000000\n##  [43] 0.16666667 0.16666667 0.00000000 0.08888889 0.00000000 0.16666667\n##  [49] 0.00000000 0.05263158 0.16666667 0.00000000 0.17857143 0.08791209\n##  [55] 0.20000000 0.06666667 0.00000000 0.07142857 0.08888889 0.16666667\n##  [61] 0.06666667 0.00000000 0.11111111 0.00000000 0.13333333 0.06666667\n##  [67] 0.00000000 0.07692308 0.06666667 0.00000000 0.06666667 0.06666667\n##  [73] 0.00000000 0.00000000 0.04444444 0.07142857 0.06666667 0.06060606\n##  [79] 0.02222222 0.06666667 0.00000000 0.00000000 0.00000000 0.00000000\n##  [85] 0.03571429 0.16666667 0.00000000 0.00000000 0.14285714 0.10714286\n##  [91] 0.04166667 0.00000000 0.20000000 0.00000000 0.00000000 0.00000000\n##  [97] 0.14285714 0.00000000 0.00000000 0.00000000 0.07142857 0.00000000\n## [103] 0.06666667 0.04444444 0.00000000 0.00000000 0.06593407 0.03571429\n## [109] 0.16666667 0.00000000 0.06666667 0.13333333 0.00000000 0.00000000\n## [115] 0.00000000 0.00000000 0.16666667 0.00000000 0.00000000 0.00000000`} lang="output" />
            <CodeChunk code={`av.l.cluster <- transitivity(fauxhs.net, "localaverage")\nav.l.cluster`} lang="r" />
            <CodeChunk code={`## [1] 0.4046534`} lang="output" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Community detection",
    content: (
      <>
        <CodeChunk code={`fauxhs.net1 <- graph_from_adjacency_matrix(fauxhs.mat, mode="undirected", weighted = T)`} lang="r" />
        <CodeChunk code={`com <- cluster_louvain(fauxhs.net1)\ncom`} lang="r" />
        <CodeChunk code={`## IGRAPH clustering multi level, groups: 10, mod: 0.77\n## + groups:\n##   $\`1\`\n##    [1] "4"   "9"   "12"  "16"  "19"  "21"  "32"  "37"  "59"  "62"  "67"  "69" \n##   [13] "79"  "80"  "83"  "91"  "92"  "95"  "111"\n##   \n##   $\`2\`\n##   [1] "6"   "23"  "27"  "41"  "48"  "75"  "99"  "118"\n##   \n##   $\`3\`\n##   [1] "5"   "11"  "28"  "66"  "81"  "120"\n##   \n##   + ... omitted several groups/vertices`} lang="output" />
        <CodeChunk code={`plot(com, fauxhs.net1, vertex.label="", vertex.size=5, edge.width=E(fauxhs.net1)$weight, layout = fauxhs.layout)`} lang="r" />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/r004_6.png`} />
      </>
    ),
  },
];
