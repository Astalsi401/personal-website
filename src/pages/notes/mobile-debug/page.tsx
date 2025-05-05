import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Kbd } from "@ui/kbd";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "安裝SDK Tools",
    content: (
      <>
        <Ol>
          <Li>
            下載
            <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
              commandlinetools
            </a>
            、
            <a href="https://developer.android.com/tools/releases/platform-tools" target="_blank" rel="noopener noreferrer">
              Platform Tools
            </a>
          </Li>
          <Li>
            將下載的SDK Tools解壓至資料夾android-sdk，此處安裝於<InlineCode>D:\Tools\android-sdk</InlineCode>
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-install.png`} />
          </Li>
          <Li>
            將SDK Tools、Java安裝目錄加入環境變數，變數名稱分別為
            <Ul>
              <Li>
                android-sdk
                <CodeChunk code={`ANDROID_HOME`} />
              </Li>
              <Li>
                android-sdk
                <CodeChunk code={`ANDROID_SDK_ROOT`} />
              </Li>
              <Li>
                java install path
                <CodeChunk code={`JAVA_HOME`} />
              </Li>
            </Ul>
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-env.png`} />
            同時也加入PATH
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-path.png`} />
          </Li>
          <Li>
            檢查是否成功安裝
            <CodeChunk code={`adb --version`} lang="bash" />
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-check.png`} />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "連線至Android Device",
    content: (
      <>
        需求
        <Ul>
          <Li>Ardroid 11或以上</Li>
        </Ul>
        此處使用firefox示範，chrome在debug模式下有非常嚴重的延遲
        <Ol>
          <Li>將手機與電腦連線到同一wifi</Li>
          <Li>
            在開發人員選項開啟USB偵錯、無線偵錯
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-developer.png`} />
          </Li>
          <Li>
            點選無線偵錯，選擇<Kbd>使用配對碼配對裝置</Kbd>
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-info1.png`} />
          </Li>
          <Li>
            回到terminal建立配對，注意此處port為一次性，配對完成後即失效
            <CodeChunk code={`adb pair [ip]:35793`} lang="bash" />
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/wireless-debug-pair-code.png`} />
          </Li>
          <Li>
            使用這裡的ip與port建立連線(第二次連線時直接從此處開始)
            <CodeChunk code={`adb connect [ip]:35269`} lang="bash" />
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-info2.png`} />
          </Li>
          <Li>
            開啟firefox，在搜尋列輸入<InlineCode>about:debugging</InlineCode>，可以看到已成功連線至手機
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/firefox-debug-page.png`} />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "其他",
    content: (
      <>
        <Ul>
          <Li>刪除現有連線</Li>
          <CodeChunk code={`adb disconnect`} lang="bash" />
        </Ul>
      </>
    ),
  },
];
