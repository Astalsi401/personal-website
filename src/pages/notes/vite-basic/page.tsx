import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Start",
    content: (
      <>
        切換至專案資料夾，建立專案
        <CodeChunk code={"npm create vite@latest"} lang="bash" />
        運行vite
        <CodeChunk code={"npm run dev"} lang="bash" />
      </>
    ),
  },
  {
    title: "Git Page",
    content: (
      <>
        <div>
          vite官方文件：
          <a href="https://vitejs.dev/guide/static-deploy.html#github-pages" target="_blank">
            https://vitejs.dev/guide/static-deploy.html#github-pages
          </a>
        </div>
        <div>
          修改<InlineCode>vite.config.js</InlineCode>中的<InlineCode>base</InlineCode>為github專案名稱
          <CodeChunk path={`${demoPath}/vite.config.example.js`} lang="js" />
        </div>
        <div>
          在<InlineCode>package.json</InlineCode>中新增<InlineCode>homepage</InlineCode>
          <CodeChunk code={`{\n  "homepage": "https://<username>.github.io/<project-name>",\n  ...\n}\n`} lang="json" />
        </div>
        <div>
          新增以下內容至<InlineCode>./.github/workflows/deploy.yml</InlineCode>
          <CodeChunk path={`${demoPath}/deploy.yml`} lang="yml" />
        </div>
        <div>
          建立<InlineCode>.env</InlineCode>並新增以下內容
          <CodeChunk code={"BASE_URL=."} />
          在components中可用以下方式使用<InlineCode>BASE_URL</InlineCode>修正圖片連結在local的預覽問題(圖片放置於public)
          <CodeChunk code={"<img src={`${import.meta.env.BASE_URL}${image-path}`} />"} lang="jsx" />
        </div>
        <div>將專案推送至github</div>
        <div>
          進入github專案
          <ul>
            <li>
              <InlineCode>Settings&gt;Actions&gt;General&gt;Workflow permissions</InlineCode>，勾選<InlineCode>Read and write permissions</InlineCode>
            </li>
            <li>
              <InlineCode>Settings&gt;Pages&gt;Build and deployment&gt;Branch</InlineCode>，選取<InlineCode>Github Actions</InlineCode>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "typescript path alias",
    content: (
      <>
        <div>
          安裝<InlineCode>path</InlineCode>、<InlineCode>@types/node</InlineCode>
          <CodeChunk code={"npm i -D path @types/node"} />
        </div>
        <div>
          新增以下內容至<InlineCode>tsconfig.json</InlineCode>
          <CodeChunk path={`${demoPath}/tsconfig.example.json`} lang="json" />
        </div>
        <div>
          將<InlineCode>vite.config.ts</InlineCode>修改如下
          <CodeChunk path={`${demoPath}/vite.config.alias.example.ts`} lang="ts" />
        </div>
      </>
    ),
  },
];
