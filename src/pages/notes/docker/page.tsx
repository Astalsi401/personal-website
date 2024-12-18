import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "install docker",
    content: (
      <>
        <ol>
          <li>
            install{" "}
            <a href="https://docs.docker.com/desktop/setup/install/windows-install/" target="_blank" rel="noopener noreferrer">
              docker for windows
            </a>
          </li>
          <li>運行docker for windows</li>
        </ol>
      </>
    ),
  },
  {
    title: "常用docker指令",
    content: (
      <>
        <ul>
          <li>
            列出正在運行的container
            <CodeChunk code={`docker ps`} lang="bash" />
          </li>
          <li>
            暫停container
            <CodeChunk code={`docker stop container_id`} lang="bash" />
          </li>
          <li>
            移除container(需先暫停)
            <CodeChunk code={`docker rm container_id`} lang="bash" />
          </li>
          <li>
            移除container
            <CodeChunk code={`docker restart container_id`} lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "docker compose",
    content: (
      <>
        <ul>
          <li>
            如果安裝新的packages需要使用<code>--build</code>，在後台運行使用<code>-d</code>
            <CodeChunk code={`docker-compose up --build -d`} lang="bash" />
          </li>
          <li>
            暫停所有compose中的container
            <CodeChunk code={`docker-compose stop`} lang="bash" />
          </li>
          <li>
            停止並移除所有compose中的container
            <CodeChunk code={`docker-compose down`} lang="bash" />
          </li>
          <li>
            重啟所有compose中的container
            <CodeChunk code={`docker-compose restart`} lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "docker wordpress 方法1",
    content: (
      <>
        <ol>
          <li>
            下載
            <a href="https://github.com/nezhar/wordpress-docker-compose?tab=readme-ov-file#installation" target="_blank">
              wordpress image
            </a>
            ，解壓縮並重新命名資料夾，資料夾名稱會作為container名稱
          </li>
          <li>
            將<code>env.example</code>重新命名為<code>.env</code>
          </li>
          <li>
            修改<code>.env</code>的<code>DB_ROOT_PASSWORD</code>
          </li>
          <li>
            運行container
            <CodeChunk code={`docker-compose up -d`} lang="bash" />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "docker wordpress 方法2",
    content: (
      <>
        <ol>
          <li>
            建立任意名稱的資料夾，以下使用<code>wordpress-local-test</code>，為例
            <CodeChunk code={`mkdir wordpress-local-test && cd wordpress-local-test`} lang="bash" />
          </li>
          <li>
            將以下檔案複製到<code>wordpress-local-test</code>
            <CodeChunk path={`${demoPath}/docker-compose.yml`} lang="yml" />
          </li>
          <li>
            運行docker
            <CodeChunk code={`docker-compose up -d`} lang="bash" />
          </li>
          <li>
            連線到docker wordpress
            <CodeChunk code={`docker exec -it container_name /bin/bash`} lang="bash" />
          </li>
          <li>
            將檔案複製到docker wordpress
            <CodeChunk code={`docker cp your_file.zip container_id:/var/www/html/`} lang="bash" />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "docker wordpress 方法2-修改file upload size",
    content: (
      <>
        <ol>
          <li>
            連線到docker wordpress
            <CodeChunk code={`docker exec -it container_name /bin/bash`} lang="bash" />
          </li>
          <li>
            安裝vim
            <CodeChunk code={`apt-get update && apt-get install apt-file && apt-file update && apt-get install vim`} lang="bash" />
          </li>
          <li>
            添加以下設定至<code>.htaccess</code>
            <CodeChunk code={`php_value upload_max_filesize 256M\nphp_value post_max_size 256M`} />
          </li>
        </ol>
      </>
    ),
  },
];

export default Sections;
