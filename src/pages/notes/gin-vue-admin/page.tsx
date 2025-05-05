import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath, imagePath }) => [
  {
    title: "Gin Vue Admin 介紹",
    content: (
      <>
        <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">
          gin-vue-admin (gva)
        </a>
        是一個基於 gin 與 vue 的全端框架，使用 mysql 資料庫，可以快速搭建後台管理系統。
        <Ul>
          <Li>
            <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">
              安裝流程
            </a>
          </Li>
          <Li>
            <a href="https://www.gin-vue-admin.com/guide/plugin/develop.html" target="_blank" rel="noopener noreferrer">
              插件前後端結構
            </a>
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "後端",
    content: (
      <>
        建議依據以下順序進行開發
        <Ol>
          <Li>
            前往 <InlineCode>後臺&gt;系統工具&gt;模板配置</InlineCode> 新增 plugin ，將自動創建必要資料夾結構
            <br />
            此處創建一個名為 <InlineCode>test</InlineCode> 的 plugin，路徑為：<InlineCode>gin-vue-admin/server/plugin/test</InlineCode>
            <CodeChunk path={`${demoPath}/server.example`} lang="bash" />
          </Li>
          <Li>
            <InlineCode>model/enter.go</InlineCode>: 定義 mysql 資料表與 json 回傳 key
            <CodeChunk path={`${demoPath}/model.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>service/enter.go</InlineCode>: 具體服務
            <br />
            此處創建添加與查詢測試資料的方法
            <CodeChunk path={`${demoPath}/service.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>api/enter.go</InlineCode>: 調用 <InlineCode>service</InlineCode> 中的方法，定義實際接收與回傳資料
            <CodeChunk path={`${demoPath}/api.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>router/enter.go</InlineCode>: 調用 <InlineCode>api</InlineCode> 中的方法，定義路由
            <CodeChunk path={`${demoPath}/router.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>initialize/api.go</InlineCode>: 註冊 API
            <CodeChunk path={`${demoPath}/initialize.api.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>initialize/menu.go</InlineCode>: 添加 menu，定義前端路徑
            <CodeChunk path={`${demoPath}/initialize.menu.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>initialize/router.go</InlineCode>: 調用 <InlineCode>router</InlineCode> 中定義的路由，初始化 router
            <CodeChunk path={`${demoPath}/initialize.router.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>initialize/gorm.go</InlineCode>: 調用 <InlineCode>model</InlineCode> 中定義的資料格式，初始化資料庫
            <CodeChunk path={`${demoPath}/initialize.gorm.go.example`} lang="go" />
          </Li>
          <Li>
            <InlineCode>plugin.go</InlineCode>: 調用 <InlineCode>initialize</InlineCode> 中的方法進行初始化
            <CodeChunk path={`${demoPath}/plugin.go.example`} lang="go" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "插件啟用",
    content: (
      <>
        於 <InlineCode>gin-vue-admin/server/initialize/plugin_biz_v2.go</InlineCode> 啟用插件
        <br />
        此處啟用 <InlineCode>annoucement</InlineCode> 、 <InlineCode>test</InlineCode> 兩個 plugin
        <CodeChunk path={`${demoPath}/plugin_biz_v2.go.example`} lang="go" />
        啟用後在後台 <InlineCode>超級管理員&gt;角色管理&gt;設置權限</InlineCode> 分配 menu & api 存取權
      </>
    ),
  },
  {
    title: "前端",
    content: (
      <>
        前端結構如下
        <CodeChunk path={`${demoPath}/web.example`} lang="bash" />
        此時前端對應頁面應如下圖
        <ZoomImage src={`${imagePath}/gva-plugin-empty.png`} />
        <Ol>
          <Li>
            <InlineCode>api/info.js</InlineCode>: 調用 api
            <CodeChunk path={`${demoPath}/api.info.example.js`} lang="js" />
          </Li>
          <Li>
            <InlineCode>view/info.vue</InlineCode>: 創建 vue + element plus 前端
            <CodeChunk path={`${demoPath}/view.info.example.vue`} lang="html" />
          </Li>
          <Li>
            完成!
            <ZoomImage src={`${imagePath}/gva-plugin-finish.png`} />
          </Li>
        </Ol>
      </>
    ),
  },
];
