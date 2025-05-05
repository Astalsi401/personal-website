import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Subsection, SubsectionTitle } from "@ui/subsection";
import { Li, Ul } from "@ui/list";
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
        <Subsection>
          vite官方文件：
          <a href="https://vitejs.dev/guide/static-deploy.html#github-pages" target="_blank">
            https://vitejs.dev/guide/static-deploy.html#github-pages
          </a>
        </Subsection>
        <Subsection>
          修改<InlineCode>vite.config.js</InlineCode>中的<InlineCode>base</InlineCode>為github專案名稱
          <CodeChunk path={`${demoPath}/vite.config.example.js`} lang="js" />
        </Subsection>
        <Subsection>
          在<InlineCode>package.json</InlineCode>中新增<InlineCode>homepage</InlineCode>
          <CodeChunk code={`{\n  "homepage": "https://<username>.github.io/<project-name>",\n  ...\n}\n`} lang="json" />
        </Subsection>
        <Subsection>
          新增以下內容至<InlineCode>./.github/workflows/deploy.yml</InlineCode>
          <CodeChunk path={`${demoPath}/deploy.yml`} lang="yml" />
        </Subsection>
        <Subsection>
          建立<InlineCode>.env</InlineCode>並新增以下內容
          <CodeChunk code={"BASE_URL=."} />
          在components中可用以下方式使用<InlineCode>BASE_URL</InlineCode>修正圖片連結在local的預覽問題(圖片放置於public)
          <CodeChunk code={"<img src={`${import.meta.env.BASE_URL}${image-path}`} />"} lang="jsx" />
        </Subsection>
        <Subsection>
          <SubsectionTitle>將專案推送至github</SubsectionTitle>
          進入github專案
          <Ul>
            <Li>
              <InlineCode>Settings&gt;Actions&gt;General&gt;Workflow permissions</InlineCode>，勾選<InlineCode>Read and write permissions</InlineCode>
            </Li>
            <Li>
              <InlineCode>Settings&gt;Pages&gt;Build and deployment&gt;Branch</InlineCode>，選取<InlineCode>Github Actions</InlineCode>
            </Li>
          </Ul>
        </Subsection>
      </>
    ),
  },
  {
    title: "typescript path alias",
    content: (
      <>
        <Subsection>
          安裝<InlineCode>path</InlineCode>、<InlineCode>@types/node</InlineCode>
          <CodeChunk code={"npm i -D path @types/node"} />
        </Subsection>
        <Subsection>
          新增以下內容至<InlineCode>tsconfig.json</InlineCode>，實際路徑請依需求更改
          <CodeChunk path={`${demoPath}/tsconfig.example.json`} lang="json" />
        </Subsection>
        <Subsection>
          依據<InlineCode>tsconfig.json</InlineCode>中的路徑修改<InlineCode>vite.config.ts</InlineCode>
          <CodeChunk path={`${demoPath}/vite.config.alias.example.ts`} lang="ts" />
        </Subsection>
      </>
    ),
  },
];
