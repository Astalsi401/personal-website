import { CodeChunk } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "專案架構",
    content: <CodeChunk path={`${demoPath}/py/readme.md`} lang="md" />,
  },
  {
    title: "定義下載日期區間",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_date.py`} lang="py" />,
  },
  {
    title: "定義excel樣式與資源資訊格式",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_vars.py`} lang="py" />,
  },
  {
    title: "將list匯出至excel的特定位置",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_to_excel.py`} lang="py" />,
  },
  {
    title: "添加圖表",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_chart.py`} lang="py" />,
  },
  {
    title: "下載GA資料",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_download.py`} lang="py" />,
  },
  {
    title: "讀取已下載的資料並彙整為所需格式",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_report.py`} lang="py" />,
  },
  {
    title: "將彙整好的資料匯出至excel，同時添加圖表",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_report_to_sheet.py`} lang="py" />,
  },
  {
    title: "執行程式",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_main.py`} lang="py" />,
  },
];
