import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
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
    title: "在docker運行wordpress",
    content: (
      <>
        <ol>
          <li>
            下載
            <a href="https://github.com/nezhar/wordpress-docker-compose?tab=readme-ov-file#installation" target="_blank">
              wordpress images
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
            <CodeChunk code={`docker-compose up`} lang="bash" />
          </li>
        </ol>
      </>
    ),
  },
];

export default Sections;
