import { CodeChunk } from "../../../components/codeChunk";

const shortCutTable = [
  { shortCut: "Ctrl+T", des: "新頁面" },
  { shortCut: "Ctrl+W", des: "關閉頁面" },
  { shortCut: "Ctrl+Tab", des: "切換頁面" },
  { shortCut: "Alt+Shift+1", des: "開啟cmd.exe" },
  { shortCut: "Alt+Shift+2", des: "開啟powershell.exe" },
  { shortCut: "Alt+Shift+3", des: "開啟powershell.exe (系統管理員許可權)" },
  { shortCut: "Ctrl+n", des: "快速切換到第n個頁籤" },
  { shortCut: "Ctrl+R", des: "歷史命令搜尋" },
  { shortCut: "Win+Alt+P", des: "開啟設定視窗" },
];

const Sections = (demoPath) => [
  {
    title: "安裝",
    content: (
      <ol>
        <li>
          Cmder下載：<a href="https://cmder.net/">官網</a>
        </li>
        <li>
          解壓縮至想安裝的資料夾，例如我安裝於：<code>D:\Tools\cmder</code>
        </li>
        <li>新增以上路徑至環境變數 &gt; 系統變數 &gt; PATH</li>
      </ol>
    ),
  },
  {
    title: "基礎設定",
    content: (
      <ol>
        <li>
          更改命令提示字元 <br /> cmder預設為<code>λ</code>，偶爾會導致有一個字符無法刪除的bug，雖然多餘的字符並不會影響指令運作，但還是建議替換。
          <br />到<code>cmder安裝路徑\config\cmder_prompt_config.lua</code>，將
          <CodeChunk code='prompt_lambSymbol = "λ"' />
          改為
          <CodeChunk code='prompt_lambSymbol = "$"' />
          重啟cmder。
        </li>
      </ol>
    ),
  },
  {
    title: "Cmder & Sublime Text 3",
    content: (
      <ol>
        <li>
          將<a href="">Sublime Text 3</a>安裝於<code>cmder安裝路徑\bin\Sublime_Text_3\</code>
        </li>
        <li>
          在<code>cmder安裝路徑\config\user_aliases.cmd</code>中加入：
          <CodeChunk code='subl="cmder安裝路徑\bin\Sublime_Text_3\sublime_text.exe" $* -new_console:s50H' />
          <code>subl</code>是用以叫出Sublime的代號，可替換為你習慣的稱呼。<code>-new_console</code>在新分頁開啟。<code>s50</code>占比50%。<code>H</code>橫向排列。縱向排列則為<code>V</code>。
        </li>
      </ol>
    ),
  },
  {
    title: "Cmder快捷鍵",
    content: (
      <table>
        <tbody>
          {shortCutTable.map((d) => (
            <tr key={d.shortCut}>
              <td>{d.shortCut}</td>
              <td>{d.des}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    title: "其他指令",
    content: (
      <ul>
        <li>
          運行bat：
          <CodeChunk code='cmder /x "/cmd test.bat"' lang="bash" />
        </li>
        <li>
          scss to css：
          <CodeChunk code="sass --watch main.scss main.css" lang="bash" />
        </li>
      </ul>
    ),
  },
];

export default Sections;
