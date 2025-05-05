import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import { Td } from "@ui/table";
import type { SectionsProps } from "@/types";

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

export const Sections: SectionsProps = () => [
  {
    title: "安裝",
    content: (
      <Ol>
        <Li>
          Cmder下載：<a href="https://cmder.net/">官網</a>
        </Li>
        <Li>
          解壓縮至想安裝的資料夾，例如我安裝於：<InlineCode>D:\Tools\cmder</InlineCode>
        </Li>
        <Li>新增以上路徑至環境變數 &gt; 系統變數 &gt; PATH</Li>
      </Ol>
    ),
  },
  {
    title: "基礎設定",
    content: (
      <Ol>
        <Li>
          更改命令提示字元 <br /> cmder預設為<InlineCode>λ</InlineCode>，偶爾會導致有一個字符無法刪除的bug，雖然多餘的字符並不會影響指令運作，但還是建議替換。
          <br />到<InlineCode>cmder安裝路徑\config\cmder_prompt_config.lua</InlineCode>，將
          <CodeChunk code='prompt_lambSymbol = "λ"' />
          改為
          <CodeChunk code='prompt_lambSymbol = "$"' />
          重啟cmder。
        </Li>
      </Ol>
    ),
  },
  {
    title: "Cmder & Sublime Text 3",
    content: (
      <Ol>
        <Li>
          將<a href="">Sublime Text 3</a>安裝於<InlineCode>cmder安裝路徑\bin\Sublime_Text_3\</InlineCode>
        </Li>
        <Li>
          在<InlineCode>cmder安裝路徑\config\user_aliases.cmd</InlineCode>中加入：
          <CodeChunk code='subl="cmder安裝路徑\bin\Sublime_Text_3\sublime_text.exe" $* -new_console:s50H' />
          <InlineCode>subl</InlineCode>是用以叫出Sublime的代號，可替換為你習慣的稱呼。<InlineCode>-new_console</InlineCode>在新分頁開啟。<InlineCode>s50</InlineCode>占比50%。<InlineCode>H</InlineCode>橫向排列。縱向排列則為<InlineCode>V</InlineCode>。
        </Li>
      </Ol>
    ),
  },
  {
    title: "Cmder快捷鍵",
    content: (
      <table>
        <tbody>
          {shortCutTable.map((d) => (
            <tr key={d.shortCut}>
              <Td>{d.shortCut}</Td>
              <Td>{d.des}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    title: "其他指令",
    content: (
      <Ul>
        <Li>
          運行bat：
          <CodeChunk code='cmder /x "/cmd test.bat"' lang="bash" />
        </Li>
        <Li>
          scss to css：
          <CodeChunk code="sass --watch main.scss main.css" lang="bash" />
        </Li>
        <Li>
          列出執行中的程式：
          <CodeChunk code={`tasklist`} lang="bash" />
        </Li>
        <Li>
          列出執行中程式的PID與路徑：
          <CodeChunk code={`wmic process get ProcessID,ExecutablePath`} lang="bash" />
        </Li>
        <Li>
          根據PID找出執行中程式的路徑：
          <CodeChunk code={`wmic process where "ProcessID=6712" get ProcessID,ExecutablePath`} lang="bash" />
        </Li>
      </Ul>
    ),
  },
];
