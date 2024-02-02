import { CodeChunk } from "../../../components/codeChunk";

const demoPath = `${import.meta.env.BASE_URL}/assets/demo-files/notes/vite-basic`;
const sections = [
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
          修改<code>vite.config.js</code>中的<code>base</code>為github專案名稱
          <CodeChunk path={`${demoPath}/vite.config.js`} lang="js" />
        </div>
        <div>
          在<code>package.json</code>中新增<code>homepage</code>
          <CodeChunk code={`{\n  "homepage": "https://<username>.github.io/<project-name>",\n  ...\n}\n`} lang="json" />
        </div>
        <div>
          新增以下內容至<code>./.github/workflows/deploy.yml</code>
          <CodeChunk path={`${demoPath}/deploy.yml`} lang="yml" />
        </div>
        <div>
          建立<code>.env</code>並新增以下內容
          <CodeChunk code={"BASE_URL=."} />
          在components中可用以下方式使用<code>BASE_URL</code>修正圖片連結在local的預覽問題(圖片放置於public)
          <CodeChunk code={"<img src={`${import.meta.env.BASE_URL}${image-path}`} />"} lang="jsx" />
        </div>
        <div>將專案推送至github</div>
        <div>
          進入github專案
          <ul>
            <li>
              <code>Settings&gt;Actions&gt;General&gt;Workflow permissions</code>，勾選<code>Read and write permissions</code>
            </li>
            <li>
              <code>Settings&gt;Pages&gt;Build and deployment&gt;Branch</code>，選取<code>gh-pages</code>
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
export default sections;
