import{j as t}from"./index-TXvsTRDK.js";import{C as e}from"./codeChunk-l5uJ8eZi.js";const s=[{title:"",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"更改工作資料夾"}),t.jsx(e,{code:'setwd("D:/Documents/R/sna/week02")',lang:"r"}),t.jsx("p",{children:"確認工作資料夾"}),t.jsx(e,{code:"getwd()",lang:"r"}),t.jsx(e,{code:'## [1] "D:/Documents/R/site"',lang:"output"}),t.jsx("p",{children:"列出工作資料夾內的檔案"}),t.jsx(e,{code:"list.files()",lang:"r"}),t.jsx(e,{code:'## [1] "01.Rmd"',lang:"output"}),t.jsx("p",{children:"清空記憶體"}),t.jsx(e,{code:"rm(list = ls())",lang:"r"})]})},{title:"R的符號",content:t.jsx(t.Fragment,{children:t.jsxs("ul",{children:[t.jsx("li",{children:t.jsxs("p",{children:[t.jsx("code",{children:"<-"}),"：賦值符號"]})}),t.jsx("li",{children:t.jsxs("p",{children:[t.jsx("code",{children:"=="}),"：等於"]})}),t.jsx("li",{children:t.jsxs("p",{children:[t.jsx("code",{children:"#"}),"：加上註解"]})})]})})},{title:"資料輸入",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"建立變項a=30"}),t.jsx(e,{code:`a <- 30
a`,lang:"r"}),t.jsx(e,{code:"## [1] 30",lang:"output"}),t.jsx("p",{children:"變項計算"}),t.jsx(e,{code:"a+10",lang:"r"}),t.jsx(e,{code:"## [1] 40",lang:"output"}),t.jsx(e,{code:"a/10",lang:"r"}),t.jsx(e,{code:"## [1] 3",lang:"output"}),t.jsx(e,{code:"sqrt(a)",lang:"r"}),t.jsx(e,{code:"## [1] 5.477226",lang:"output"}),t.jsx(e,{code:`d <- sqrt(a)
d`,lang:"r"}),t.jsx(e,{code:"## [1] 5.477226",lang:"output"}),t.jsx(e,{code:"d <- sqrt(a);d  #也可以寫在同一行",lang:"r"}),t.jsx(e,{code:"## [1] 5.477226",lang:"output"}),t.jsx("p",{children:"讓R進行判斷"}),t.jsx(e,{code:"d==a",lang:"r"}),t.jsx(e,{code:"## [1] FALSE",lang:"output"}),t.jsx(e,{code:"d!=a",lang:"r"}),t.jsx(e,{code:"## [1] TRUE",lang:"output"}),t.jsx(e,{code:"d<a",lang:"r"}),t.jsx(e,{code:"## [1] TRUE",lang:"output"}),t.jsx(e,{code:"d>a",lang:"r"}),t.jsx(e,{code:"## [1] FALSE",lang:"output"}),t.jsx("p",{children:"列出變項與移除物件"}),t.jsx(e,{code:"ls()   #列出當前的變項",lang:"r"}),t.jsx(e,{code:'## [1] "a" "d"',lang:"output"}),t.jsx(e,{code:"rm(d);ls()   #移除變項d, 並列出剩餘變項",lang:"r"}),t.jsx(e,{code:'## [1] "a"',lang:"output"}),t.jsx(e,{code:"rm(list = ls()); ls()  #移除所有變項",lang:"r"}),t.jsx(e,{code:"## character(0)",lang:"output"})]})},{title:"矩陣",content:t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"建立名為mat的矩陣，內容物為1~36，row=6，column=6"}),t.jsx(e,{code:"mat <- matrix(1:36, nr=6, ncol=6); mat",lang:"r"}),t.jsx(e,{code:`##      [,1] [,2] [,3] [,4] [,5] [,6]
## [1,]    1    7   13   19   25   31
## [2,]    2    8   14   20   26   32
## [3,]    3    9   15   21   27   33
## [4,]    4   10   16   22   28   34
## [5,]    5   11   17   23   29   35
## [6,]    6   12   18   24   30   36`,lang:"output"}),t.jsx("p",{children:"分別列出矩陣中的數字"}),t.jsx(e,{code:"mat[1,]  #row=1",lang:"r"}),t.jsx(e,{code:"## [1]  1  7 13 19 25 31",lang:"output"}),t.jsx(e,{code:"mat[,1]  #column=1",lang:"r"}),t.jsx(e,{code:"## [1] 1 2 3 4 5 6",lang:"output"}),t.jsx(e,{code:"mat[2,3]  #row=2, column=3",lang:"r"}),t.jsx(e,{code:"## [1] 14",lang:"output"}),t.jsx(e,{code:"mat[1:3,]  #row=1~3",lang:"r"}),t.jsx(e,{code:`##      [,1] [,2] [,3] [,4] [,5] [,6]
## [1,]    1    7   13   19   25   31
## [2,]    2    8   14   20   26   32
## [3,]    3    9   15   21   27   33`,lang:"output"}),t.jsx(e,{code:"mat[1:3,1:3]  #row=1~3, column=1~3",lang:"r"}),t.jsx(e,{code:`##      [,1] [,2] [,3]
## [1,]    1    7   13
## [2,]    2    8   14
## [3,]    3    9   15`,lang:"output"}),t.jsx("p",{children:"矩陣轉置"}),t.jsx(e,{code:"t(mat)",lang:"r"}),t.jsx(e,{code:`##      [,1] [,2] [,3] [,4] [,5] [,6]
## [1,]    1    2    3    4    5    6
## [2,]    7    8    9   10   11   12
## [3,]   13   14   15   16   17   18
## [4,]   19   20   21   22   23   24
## [5,]   25   26   27   28   29   30
## [6,]   31   32   33   34   35   36`,lang:"output"}),t.jsx("p",{children:"其他矩陣功能"}),t.jsx(e,{code:"mat2 <- cbind(1:10,21:30); mat2  #以column排序(預設)",lang:"r"}),t.jsx(e,{code:`##       [,1] [,2]
##  [1,]    1   21
##  [2,]    2   22
##  [3,]    3   23
##  [4,]    4   24
##  [5,]    5   25
##  [6,]    6   26
##  [7,]    7   27
##  [8,]    8   28
##  [9,]    9   29
## [10,]   10   30`,lang:"output"}),t.jsx(e,{code:"mat3 <- rbind(1:10,21:30); mat3  #以row排序",lang:"r"}),t.jsx(e,{code:`##      [,1] [,2] [,3] [,4] [,5] [,6] [,7] [,8] [,9] [,10]
## [1,]    1    2    3    4    5    6    7    8    9    10
## [2,]   21   22   23   24   25   26   27   28   29    30`,lang:"output"}),t.jsx(e,{code:"dim(mat2)   #計算矩陣的大小：row=10 col=2",lang:"r"}),t.jsx(e,{code:"## [1] 10  2",lang:"output"}),t.jsx(e,{code:"nrow(mat2); ncol(mat2)  #分別列出矩陣的row、column",lang:"r"}),t.jsx(e,{code:"## [1] 10",lang:"output"}),t.jsx(e,{code:"## [1] 2",lang:"output"}),t.jsx(e,{code:"mat4 <- mat2*2; mat4",lang:"r"}),t.jsx(e,{code:`##       [,1] [,2]
##  [1,]    2   42
##  [2,]    4   44
##  [3,]    6   46
##  [4,]    8   48
##  [5,]   10   50
##  [6,]   12   52
##  [7,]   14   54
##  [8,]   16   56
##  [9,]   18   58
## [10,]   20   60`,lang:"output"}),t.jsx(e,{code:"mat2+mat4",lang:"r"}),t.jsx(e,{code:`##       [,1] [,2]
##  [1,]    3   63
##  [2,]    6   66
##  [3,]    9   69
##  [4,]   12   72
##  [5,]   15   75
##  [6,]   18   78
##  [7,]   21   81
##  [8,]   24   84
##  [9,]   27   87
## [10,]   30   90`,lang:"output"}),t.jsx(e,{code:"mat2 %*% mat3  # %*% 矩陣相乘符號",lang:"r"}),t.jsx(e,{code:`##       [,1] [,2] [,3] [,4] [,5] [,6] [,7] [,8] [,9] [,10]
##  [1,]  442  464  486  508  530  552  574  596  618   640
##  [2,]  464  488  512  536  560  584  608  632  656   680
##  [3,]  486  512  538  564  590  616  642  668  694   720
##  [4,]  508  536  564  592  620  648  676  704  732   760
##  [5,]  530  560  590  620  650  680  710  740  770   800
##  [6,]  552  584  616  648  680  712  744  776  808   840
##  [7,]  574  608  642  676  710  744  778  812  846   880
##  [8,]  596  632  668  704  740  776  812  848  884   920
##  [9,]  618  656  694  732  770  808  846  884  922   960
## [10,]  640  680  720  760  800  840  880  920  960  1000`,lang:"output"}),t.jsx(e,{code:"mat2>4  #確認mat2中有多少大於4",lang:"r"}),t.jsx(e,{code:`##        [,1] [,2]
##  [1,] FALSE TRUE
##  [2,] FALSE TRUE
##  [3,] FALSE TRUE
##  [4,] FALSE TRUE
##  [5,]  TRUE TRUE
##  [6,]  TRUE TRUE
##  [7,]  TRUE TRUE
##  [8,]  TRUE TRUE
##  [9,]  TRUE TRUE
## [10,]  TRUE TRUE`,lang:"output"})]})},{title:"建立資料",content:t.jsxs(t.Fragment,{children:[t.jsx(e,{code:'alist <- list(1:6, mat2, "ABCDE"); alist  #將3個變項分別儲存在3個儲存位',lang:"r"}),t.jsx(e,{code:`## [[1]]
## [1] 1 2 3 4 5 6
## 
## [[2]]
##       [,1] [,2]
##  [1,]    1   21
##  [2,]    2   22
##  [3,]    3   23
##  [4,]    4   24
##  [5,]    5   25
##  [6,]    6   26
##  [7,]    7   27
##  [8,]    8   28
##  [9,]    9   29
## [10,]   10   30
## 
## [[3]]
## [1] "ABCDE"`,lang:"output"}),t.jsx(e,{code:"alist[[1]]     #查看第一格儲存位",lang:"r"}),t.jsx(e,{code:"## [1] 1 2 3 4 5 6",lang:"output"}),t.jsx(e,{code:"alist[[2]]     #查看第二格",lang:"r"}),t.jsx(e,{code:`##       [,1] [,2]
##  [1,]    1   21
##  [2,]    2   22
##  [3,]    3   23
##  [4,]    4   24
##  [5,]    5   25
##  [6,]    6   26
##  [7,]    7   27
##  [8,]    8   28
##  [9,]    9   29
## [10,]   10   30`,lang:"output"}),t.jsx(e,{code:"alist[[1]][5]  #查看第一格第五個",lang:"r"}),t.jsx(e,{code:"## [1] 5",lang:"output"}),t.jsx(e,{code:`alist <- list(element1=1:6, element2=mat2)    #將儲存位分別命名為element1、element2
names(alist)  #查看資料中的變項`,lang:"r"}),t.jsx(e,{code:'## [1] "element1" "element2"',lang:"output"}),t.jsx(e,{code:"alist$element1  #直接以變項名稱叫出",lang:"r"}),t.jsx(e,{code:"## [1] 1 2 3 4 5 6",lang:"output"})]})}];export{s as default};
