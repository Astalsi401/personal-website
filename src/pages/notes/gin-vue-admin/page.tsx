import { CodeChunk, ZoomImage } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath, imagePath }) => [
  {
    title: "Gin Vue Admin 介紹",
    content: (
      <>
        <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">
          gin-vue-admin (gva)
        </a>
        是一個基於 gin 與 vue 的全端框架，使用 mysql 資料庫，可以快速搭建後台管理系統。
        <ul>
          <li>
            <a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">
              安裝流程
            </a>
          </li>
          <li>
            <a href="https://www.gin-vue-admin.com/guide/plugin/develop.html" target="_blank" rel="noopener noreferrer">
              插件前後端結構
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "後端",
    content: (
      <>
        建議依據以下順序進行開發
        <ol>
          <li>
            前往 <code>後臺&gt;系統工具&gt;模板配置</code> 新增 plugin ，將自動創建必要資料夾結構
            <br />
            此處創建一個名為 <code>test</code> 的 plugin，路徑為：<code>gin-vue-admin/server/plugin/test</code>
            <CodeChunk path={`${demoPath}/server.example`} lang="bash" />
          </li>
          <li>
            <code>model/enter.go</code>: 定義 mysql 資料表與 json 回傳 key
            <CodeChunk path={`${demoPath}/model.go.example`} lang="go" />
          </li>
          <li>
            <code>service/enter.go</code>: 具體服務
            <br />
            此處創建添加與查詢測試資料的方法
            <CodeChunk path={`${demoPath}/service.go.example`} lang="go" />
          </li>
          <li>
            <code>api/enter.go</code>: 調用 <code>service</code> 中的方法，定義實際接收與回傳資料
            <CodeChunk path={`${demoPath}/api.go.example`} lang="go" />
          </li>
          <li>
            <code>router/enter.go</code>: 調用 <code>api</code> 中的方法，定義路由
            <CodeChunk path={`${demoPath}/router.go.example`} lang="go" />
          </li>
          <li>
            <code>initialize/api.go</code>: 註冊 API
            <CodeChunk path={`${demoPath}/initialize.api.go.example`} lang="go" />
          </li>
          <li>
            <code>initialize/menu.go</code>: 添加 menu，定義前端路徑
            <CodeChunk path={`${demoPath}/initialize.menu.go.example`} lang="go" />
          </li>
          <li>
            <code>initialize/router.go</code>: 調用 <code>router</code> 中定義的路由，初始化 router
            <CodeChunk path={`${demoPath}/initialize.menu.go.example`} lang="go" />
          </li>
          <li>
            <code>initialize/gorm.go</code>: 調用 <code>model</code> 中定義的資料格式，初始化資料庫
            <CodeChunk path={`${demoPath}/initialize.gorm.go.example`} lang="go" />
          </li>
          <li>
            <code>plugin.go</code>: 調用 <code>initialize</code> 中的方法進行初始化
            <CodeChunk path={`${demoPath}/plugin.go.example`} lang="go" />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "插件啟用",
    content: (
      <>
        於 <code>gin-vue-admin/server/initialize/plugin_biz_v2.go</code> 啟用插件
        <br />
        此處啟用 <code>annoucement</code> 、 <code>test</code> 兩個 plugin
        <CodeChunk path={`${demoPath}/plugin_biz_v2.go.example`} lang="go" />
        啟用後在後台 <code>超級管理員&gt;角色管理&gt;設置權限</code> 分配 menu & api 存取權
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
        <ol>
          <li>
            <code>api/info.js</code>: 調用 api
            <CodeChunk path={`${demoPath}/api.info.example.js`} lang="js" />
          </li>
          <li>
            <code>view/info.vue</code>: 創建 vue + element plus 前端
            <CodeChunk path={`${demoPath}/view.info.example.vue`} lang="html" />
          </li>
          <li>
            完成!
            <ZoomImage src={`${imagePath}/gva-plugin-finish.png`} />
          </li>
        </ol>
      </>
    ),
  },
];

export default Sections;
