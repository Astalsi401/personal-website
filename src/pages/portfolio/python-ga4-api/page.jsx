import { CodeChunk } from "../../../components/codeChunk";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/portfolio/python-ga4-api`;
const sections = [
  {
    title: "定義下載日期區間",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_date.py`} lang="py" />,
  },
  {
    title: "下載報表",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_download.py`} lang="py" />,
  },
  {
    title: "讀取並彙整為所需格式",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_report.py`} lang="py" />,
  },
  {
    title: "將list匯出至excel的特定位置",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_toExcel.py`} lang="py" />,
  },
  {
    title: "定義需下載的資源資訊",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_vars.py`} lang="py" />,
  },
  {
    title: "執行程式",
    content: <CodeChunk path={`${demoPath}/py/ga4Api_main.py`} lang="py" />,
  },
];
export default sections;
