import { ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Kbd } from "@ui/kbd";
import { P } from "@ui/paragraph";
import { Li, Ol } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "",
    content: (
      <>
        <P>Stata只提供非常基礎的編輯器，使用上常會感到不方便。而利用Sublime Text 3的各種功能（ex：自動補齊）可大幅增加編寫效率。</P>
        <Ol>
          <Li>
            安裝<a href="https://www.sublimetext.com/">Sublime Text 3</a>
          </Li>
          <Li>
            開啟Sublime，在Sublime中安裝Package Control
            <Ol type="i">
              <Li>
                快捷鍵<Kbd>ctrl</Kbd>+<Kbd>shift</Kbd>+<Kbd>p</Kbd>
              </Li>
              <Li>
                輸入<InlineCode>install package contorl</InlineCode>
              </Li>
              <Li>重新開啟Sublime</Li>
            </Ol>
          </Li>
          <Li>
            在Sublime中安裝Stata Editor
            <Ol type="i">
              <Li>
                快捷鍵<Kbd>ctrl</Kbd>+<Kbd>shift</Kbd>+<Kbd>p</Kbd>
              </Li>
              <Li>
                輸入<InlineCode>install package</InlineCode>，可能要稍微等待幾秒鐘，之後會跳出搜索框
              </Li>
              <Li>
                輸入<InlineCode>stata editor</InlineCode>，按<Kbd>enter</Kbd>安裝
              </Li>
            </Ol>
          </Li>
          <Li>安裝pywin32，方法如上</Li>
          <Li>
            設定Stata Editor
            <Ol type="i">
              <Li>
                開啟預設設定檔
                <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step5-1.png`} />
              </Li>
              <Li>
                開啟自訂設定檔
                <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step5-2.png`} />
              </Li>
              <Li>將預設檔全選並複製到自訂檔</Li>
              <Li>
                更改<InlineCode>stata_path</InlineCode>為自己的Stata安裝路徑
              </Li>
              <Li>
                更改<InlineCode>stata_version</InlineCode>為自己的版本，存檔。
                <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step5-5.png`} />
              </Li>
            </Ol>
          </Li>
          <Li>在Stata安裝目錄中為stata建立捷徑</Li>
          <Li>
            右鍵點選捷徑→內容，將目標中的路徑用英文的引號<InlineCode> " </InlineCode>括起來，後方隔一個空格輸入<InlineCode>/Register</InlineCode>，套用
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step7.png`} />
          </Li>
          <Li>
            此時引號會消失，代表已成功
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step8.png`} />
          </Li>
          <Li>再次右鍵點選捷徑→以系統管理員身分執行→是，然後重新啟動電腦就完成了</Li>
        </Ol>
        <P>
          之後開啟Sublime，<Kbd>ctrl</Kbd>+<Kbd>n</Kbd>建立新分頁，選擇View&gt;Syntax&gt;Stata，隨意輸入一段statacode後用<Kbd>ctrl</Kbd>+<Kbd>d</Kbd>即可傳送到stata執行。
        </P>
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step9-1.png`} />
        <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/step9-2.png`} />
      </>
    ),
  },
];
