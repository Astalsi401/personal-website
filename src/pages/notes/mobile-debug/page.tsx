import { CodeChunk, ZoomImage } from "@/components";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ imagePath }) => [
  {
    title: "安裝SDK Tools",
    content: (
      <>
        <ol>
          <li>
            下載
            <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
              commandlinetools
            </a>
            、
            <a href="https://developer.android.com/tools/releases/platform-tools" target="_blank" rel="noopener noreferrer">
              Platform Tools
            </a>
          </li>
          <li>
            將下載的SDK Tools解壓至資料夾android-sdk，此處安裝於<code>D:\Tools\android-sdk</code>
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-install.png`} />
          </li>
          <li>
            將SDK Tools、Java安裝目錄加入環境變數，變數名稱分別為
            <ul>
              <li>
                android-sdk
                <CodeChunk code={`ANDROID_HOME`} />
              </li>
              <li>
                android-sdk
                <CodeChunk code={`ANDROID_SDK_ROOT`} />
              </li>
              <li>
                java install path
                <CodeChunk code={`JAVA_HOME`} />
              </li>
            </ul>
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-env.png`} />
            同時也加入PATH
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-path.png`} />
          </li>
          <li>
            檢查是否成功安裝
            <CodeChunk code={`adb --version`} lang="bash" />
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/sdk-tools-check.png`} />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "連線至Android Device",
    content: (
      <>
        需求
        <ul>
          <li>Ardroid 11或以上</li>
        </ul>
        此處使用firefox示範，chrome在debug模式下有非常嚴重的延遲
        <ol>
          <li>將手機與電腦連線到同一wifi</li>
          <li>
            在開發人員選項開啟USB偵錯、無線偵錯
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-developer.png`} />
          </li>
          <li>
            點選無線偵錯，選擇<kbd>使用配對碼配對裝置</kbd>
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-info1.png`} />
          </li>
          <li>
            回到terminal建立配對，注意此處port為一次性，配對完成後即失效
            <CodeChunk code={`adb pair [ip]:35793`} lang="bash" />
            <ZoomImage className="w-lg-50 w-sm-75 mx-auto" src={`${imagePath}/wireless-debug-pair-code.png`} />
          </li>
          <li>
            使用這裡的ip與port建立連線(第二次連線時直接從此處開始)
            <CodeChunk code={`adb connect [ip]:35269`} lang="bash" />
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/wireless-debug-info2.png`} />
          </li>
          <li>
            開啟firefox，在搜尋列輸入<code>about:debugging</code>，可以看到已成功連線至手機
            <ZoomImage className="w-lg-25 w-sm-50 mx-auto" src={`${imagePath}/firefox-debug-page.png`} />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "其他",
    content: (
      <>
        <ul>
          <li>刪除現有連線</li>
          <CodeChunk code={`adb disconnect`} lang="bash" />
        </ul>
      </>
    ),
  },
];
