import { Link } from "react-router-dom";
import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "install docker",
    content: (
      <>
        <Ol>
          <Li>
            install{" "}
            <a href="https://docs.docker.com/desktop/setup/install/windows-install/" target="_blank" rel="noopener noreferrer">
              docker for windows
            </a>
          </Li>
          <Li>運行docker for windows</Li>
        </Ol>
      </>
    ),
  },
  {
    title: "常用docker指令",
    content: (
      <>
        <Ul>
          <Li>
            列出正在運行的container
            <CodeChunk code={`docker ps`} lang="bash" />
          </Li>
          <Li>
            暫停container
            <CodeChunk code={`docker stop container_id`} lang="bash" />
          </Li>
          <Li>
            移除container(需先暫停)
            <CodeChunk code={`docker rm container_id`} lang="bash" />
          </Li>
          <Li>
            移除container
            <CodeChunk code={`docker restart container_id`} lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "docker compose",
    content: (
      <>
        <Ul>
          <Li>
            如果安裝新的packages需要使用<InlineCode>--build</InlineCode>，在後台運行使用<InlineCode>-d</InlineCode>
            <CodeChunk code={`docker-compose up --build -d`} lang="bash" />
          </Li>
          <Li>
            暫停所有compose中的container
            <CodeChunk code={`docker-compose stop`} lang="bash" />
          </Li>
          <Li>
            停止並移除所有compose中的container
            <CodeChunk code={`docker-compose down`} lang="bash" />
          </Li>
          <Li>
            重啟所有compose中的container
            <CodeChunk code={`docker-compose restart`} lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "wordpress 方法1",
    content: (
      <>
        <Ol>
          <Li>
            下載
            <a href="https://github.com/nezhar/wordpress-docker-compose?tab=readme-ov-file#installation" target="_blank">
              wordpress image
            </a>
            ，解壓縮並重新命名資料夾，資料夾名稱會作為container名稱
          </Li>
          <Li>
            將<InlineCode>env.example</InlineCode>重新命名為<InlineCode>.env</InlineCode>
          </Li>
          <Li>
            修改<InlineCode>.env</InlineCode>的<InlineCode>DB_ROOT_PASSWORD</InlineCode>
          </Li>
          <Li>
            運行container
            <CodeChunk code={`docker-compose up -d`} lang="bash" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "wordpress 方法2",
    content: (
      <>
        <Ol>
          <Li>
            建立任意名稱的資料夾，以下使用<InlineCode>wordpress-local-test</InlineCode>，為例
            <CodeChunk code={`mkdir wordpress-local-test && cd wordpress-local-test`} lang="bash" />
          </Li>
          <Li>
            將以下檔案複製到<InlineCode>wordpress-local-test/docker-compose.yml</InlineCode>
            <CodeChunk path={`${demoPath}/docker-compose.wordpress.example.yml`} lang="yml" />
          </Li>
          <Li>
            運行docker
            <CodeChunk code={`docker-compose up -d`} lang="bash" />
          </Li>
          <Li>
            連線到docker wordpress
            <CodeChunk code={`docker exec -it container_name /bin/bash`} lang="bash" />
          </Li>
          <Li>
            將檔案複製到docker wordpress
            <CodeChunk code={`docker cp your_file.zip container_id:/var/www/html/`} lang="bash" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "wordpress 方法2-修改file upload size",
    content: (
      <>
        <Ol>
          <Li>
            連線到docker wordpress
            <CodeChunk code={`docker exec -it container_name /bin/bash`} lang="bash" />
          </Li>
          <Li>
            安裝vim
            <CodeChunk code={`apt-get update && apt-get install apt-file && apt-file update && apt-get install vim`} lang="bash" />
          </Li>
          <Li>
            添加以下設定至<InlineCode>.htaccess</InlineCode>
            <CodeChunk code={`php_value upload_max_filesize 256M\nphp_value post_max_size 256M`} />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "vite & express",
    content: (
      <>
        <Ol>
          <Li>
            建立專案資料夾<InlineCode>./my-repo</InlineCode>
            <CodeChunk code={`mkdir my-repo && cd my-repo`} lang="bash" />
          </Li>
          <Li>
            在<InlineCode>./my-repo/client</InlineCode>建立vite前端，依據需要選擇專案類型，此處以react+ts為例
            <CodeChunk code={`npm create-vite@latest`} lang="bash" />
            修改<InlineCode>vite.config.ts</InlineCode>
            <CodeChunk path={`${demoPath}/vite.config.example.ts`} lang="ts" />
          </Li>
          <Li>
            在<InlineCode>./my-repo/server</InlineCode>建立express後端，後端儲存於<InlineCode>./my-repo/server</InlineCode>
            <CodeChunk code={`mkdir server && cd server && npm init -y`} lang="bash" />
            修改<InlineCode>package.json</InlineCode>的<InlineCode>scripts</InlineCode>、<InlineCode>type</InlineCode>、<InlineCode>dependencies</InlineCode>、<InlineCode>devDependencies</InlineCode>
            <CodeChunk path={`${demoPath}/package.example.json`} lang="json" />
            安裝<InlineCode>package.json</InlineCode>中的packages
            <CodeChunk code={`npm i`} lang="bash" />
            建立<InlineCode>index.js</InlineCode>
            <CodeChunk path={`${demoPath}/index.example.js`} lang="js" />
          </Li>
          <Li>
            在<InlineCode>./my-repo/client</InlineCode>、<InlineCode>./my-repo/server</InlineCode>建立<InlineCode>Dockerfile</InlineCode>，自行修改<InlineCode>WORKDIR</InlineCode>為對應資料夾
            <CodeChunk path={`${demoPath}/Dockerfile.example`} lang="docker" />
          </Li>
          <Li>
            在<InlineCode>./my-repo/client</InlineCode>、<InlineCode>./my-repo/server</InlineCode>建立<InlineCode>.dockerignore</InlineCode>
            <CodeChunk path={`${demoPath}/.dockerignore.example`} lang="docker" />
          </Li>
          <Li>
            在<InlineCode>./my-repo</InlineCode>建立<InlineCode>docker-compose.yml</InlineCode>，如果路徑或ports不同記得修改
            <CodeChunk path={`${demoPath}/docker-compose.vite.example.yml`} lang="yml" />
          </Li>
          <Li>
            運行docker
            <CodeChunk code={`docker-compose up`} lang="bash" />
            如果出現以下錯誤
            <CodeChunk code="sh: 1: vite: Permission denied" lang="bash" />在<InlineCode>./my-repo</InlineCode>中修改權限
            <CodeChunk code={`sudo chown -R $(whoami)`} lang="bash" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "mongodb",
    content: (
      <>
        參考
        <a href="https://github.com/EvanFang-tw/docker-compose-mongodb" target="_blank">
          github
        </a>
        <Ol>
          <Li>
            資料夾結構
            <CodeChunk path={`${demoPath}/docker-mongo-dir-tree`} lang="text" />
          </Li>
          <Li>
            啟動時自動新增使用者資料
            <CodeChunk path={`${demoPath}/mongo-init.example.js`} lang="js" />
          </Li>
          <Li>
            <InlineCode>docker-compose.yml</InlineCode>範例：
            <CodeChunk path={`${demoPath}/docker-compose.mongodb.example.yml`} lang="yml" />
          </Li>
          <Li>
            運行
            <CodeChunk code={`docker-compose up -d`} lang="bash" />
          </Li>
          <Li>
            連線至mongodb container
            <CodeChunk code={`docker exec -it mongodb bash`} lang="bash" />
          </Li>
          <Li>
            <Link to={`${import.meta.env.BASE_URL}/notes/mongodb`}>more about mongodb</Link>
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "mysql",
    content: (
      <>
        <CodeChunk path={`${demoPath}/docker-compose.mysql.example.yml`} lang="yml" />
      </>
    ),
  },
];
