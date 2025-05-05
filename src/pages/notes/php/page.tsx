import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "參考文章",
    content: (
      <>
        <Ul>
          <Li>
            安裝流程：
            <a href="https://iter01.com/532365.html" target="_blank">
              PHP安裝配置(Windows和Linux)-一篇就夠了
            </a>
          </Li>
          <Li>
            apache安裝：
            <a href="https://blog.csdn.net/Jack_windows/article/details/72683237?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_default&utm_relevant_index=2" target="_blank">
              Apache Http 服務器安裝教程
            </a>
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "容易踩到的坑",
    content: (
      <>
        <Ol>
          <Li>php與apache必須為相同位元，如X64。</Li>
          <Li>
            php8以上，<InlineCode>php8apache2_4.dll</InlineCode>已經自帶在安裝包中，無須額外下載。
          </Li>
          <Li>
            php8以上，<InlineCode>httpd.conf</InlineCode>載入php的代碼須改為
            <CodeChunk path={`${demoPath}/httpd.conf`} />
          </Li>
          <Li>
            <a href="http://localhost/test.php" target="_blank">
              http://localhost/test.php
            </a>
            存取被拒時請重新開機。
          </Li>
          <Li>
            連接mysql出現<InlineCode>Call to undefined function mysqli_connect()</InlineCode>，請參考
            <a href="https://blog.csdn.net/www121104115/article/details/75006164" target="_blank">
              PHP中出现Call to undefined function mysqli_connect()
            </a>
          </Li>
        </Ol>
      </>
    ),
  },
];
