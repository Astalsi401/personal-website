import{j as e}from"./index-TXvsTRDK.js";import{C as s}from"./codeChunk-l5uJ8eZi.js";const d=[{title:".csv",content:e.jsxs(e.Fragment,{children:[e.jsx(s,{code:`setwd("D:/Documents/R/site/data")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"}),e.jsx(s,{code:`# 將匯入的文件命名為fauxhs
fauxhs <- read.csv("data.fauxhigh.csv")
head(fauxhs)`,lang:"r"}),e.jsx(s,{code:`##   ids grade gender  race      gpa
## 1   1     7      F  Hisp 3.074965
## 2   2     7      F  Hisp 1.826402
## 3   3    10      F White 2.521067
## 4   4    11      M NatAm 1.976382
## 5   5     9      M White 1.599860
## 6   6     9      M  Hisp 1.288948`,lang:"output"}),e.jsx(s,{code:`# 匯出為csv
# 方法1
write.csv(fauxhs, file = "export01.csv")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"}),e.jsx(s,{code:`# 方法2
# sep <- 逗點分隔
# row.names = F <- 不匯出列名稱
# na = "NA" <- 設定遺漏直
write.table(fauxhs, file = "export02.csv", sep = ",", row.names = F, na = "NA")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"})]})},{title:".Rdata",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"用以儲存多個變項組成的資料"}),e.jsx(s,{code:`setwd("D:/Documents/R/site/data")

# 匯出
save(fauxhs, file = "export03.rdata")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"}),e.jsx(s,{code:`# 匯入
load("export03.rdata")`,lang:"r"})]})},{title:".rds",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"用來儲存單一變項"}),e.jsx(s,{code:`setwd("D:/Documents/R/site/data")

# 例如：只儲存fauxhs中的ids變項
head(fauxhs)`,lang:"r"}),e.jsx(s,{code:`##   ids grade gender  race      gpa
## 1   1     7      F  Hisp 3.074965
## 2   2     7      F  Hisp 1.826402
## 3   3    10      F White 2.521067
## 4   4    11      M NatAm 1.976382
## 5   5     9      M White 1.599860
## 6   6     9      M  Hisp 1.288948`,lang:"output"}),e.jsx(s,{code:`saveRDS(fauxhs$ids, file = "export04_ids.rds")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"}),e.jsx(s,{code:`# 匯入rds
# 將重新匯入的ids命名為newids
newids <- readRDS("export04_ids.rds")
head(newids)`,lang:"r"}),e.jsx(s,{code:"## [1] 1 2 3 4 5 6",lang:"output"}),e.jsx(s,{code:`# 將ids.rds重新匯入fauxhs中，成為一個新的變項
fauxhs$newids <- readRDS("export04_ids.rds")
head(fauxhs)`,lang:"r"}),e.jsx(s,{code:`##   ids grade gender  race      gpa newids
## 1   1     7      F  Hisp 3.074965      1
## 2   2     7      F  Hisp 1.826402      2
## 3   3    10      F White 2.521067      3
## 4   4    11      M NatAm 1.976382      4
## 5   5     9      M White 1.599860      5
## 6   6     9      M  Hisp 1.288948      6`,lang:"output"})]})},{title:".dta",content:e.jsxs(e.Fragment,{children:[e.jsx(s,{code:`setwd("D:/Documents/R/site/data")

# 匯出.dta

#install.packages("foreign")
require(foreign)`,lang:"r"}),e.jsx(s,{code:"## Loading required package: foreign",lang:"output"}),e.jsx(s,{code:`write.dta(fauxhs, "export05.dta")
list.files()`,lang:"r"}),e.jsx(s,{code:`## [1] "data.fauxhigh.csv"   "edges.fauxhigh.csv"  "export01.csv"       
## [4] "export02.csv"        "export03.rdata"      "export04_ids.rds"   
## [7] "export05.dta"        "matrix.fauxhigh.csv"`,lang:"output"}),e.jsx(s,{code:`# 匯入.dta

import_dta <- read.dta("export05.dta", convert.dates = T, convert.factors = T, missing.type = F, convert.underscore = F, warn.missing.labels = T)
head(import_dta)`,lang:"r"}),e.jsx(s,{code:`##   ids grade gender  race      gpa newids
## 1   1     7      F  Hisp 3.074965      1
## 2   2     7      F  Hisp 1.826402      2
## 3   3    10      F White 2.521067      3
## 4   4    11      M NatAm 1.976382      4
## 5   5     9      M White 1.599860      5
## 6   6     9      M  Hisp 1.288948      6`,lang:"output"})]})}];export{d as default};
