import { CodeChunk, ZoomImage } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = ({ demoPath, imagePath }) => [
  {
    title: "Git 基礎設定",
    content: (
      <>
        <ol>
          <li>
            設定email與user name
            <CodeChunk code='git config --global user.email "misting401@gmail.com"' lang="bash" />
            <CodeChunk code='git config --global user.name "Astalsi401"' lang="bash" />
          </li>
          <li>
            設定ssh key
            <CodeChunk code='ssh-keygen -t rsa -C "misting401@gmail.com"' lang="bash" />
            ssh key會被儲存於<code>C:\Users\user\.ssh\id_rsa.pub</code>
          </li>
          <li>
            將<code>id_rsa.pub</code>中的內容全選並直接複製到<a href="https://github.com/settings/ssh/new">Key欄位</a>。
          </li>
          <li>
            確認是否成功
            <CodeChunk code="ssh -T git@github.com" lang="bash" />
          </li>
        </ol>
        <ul>
          <li>
            更改github密碼後，遠端倉庫網址會變更為https，並在每次進行<code>push</code>、<code>pull</code>等指令時要求輸入user.name、password，然而在今年（2021）git已經取消使用密碼進行推送的途徑，在密碼欄位須改為使用<a href="https://github.com/settings/tokens">Personal access token</a>作為密碼。此時使用以下指令即可改回SSH網址，不需再輸入用戶名與密碼。
            <CodeChunk code="git remote set-url origin git@github.com:username/repository.git" lang="bash" />
            確認遠端倉庫網址
            <CodeChunk code="git remote -v" lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "多帳號設定",
    content: (
      <>
        <ol>
          <li>創建新的ssh key</li>
          <li>
            前往 <code>C:\Users\user\.ssh\config</code>，添加新的設定
            <CodeChunk path={`${demoPath}/config.example`} />
          </li>
          <li>
            使用新的 ssh key
            <CodeChunk code="git@github.com-work:username/repo.git" lang="bash" />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "合併遠端分支",
    content: (
      <div>
        <CodeChunk code="git pull --rebase origin main" lang="bash" />
      </div>
    ),
  },
  {
    title: "將repo加入另一個repo",
    content: (
      <>
        <ul>
          <li>
            <code>subtree</code>
            <CodeChunk code="git subtree add <prefix> <repo> <rev>" lang="bash" />
            <ul>
              <li>
                <code>prefix</code>：要加入的子目錄
              </li>
              <li>
                <code>repo</code>：要加入的repo clone url
              </li>
              <li>
                <code>rev</code>：要加入的revision
              </li>
            </ul>
            example:
            <CodeChunk code="git subtree add repo git@github.com:user/repo.git HEAD" lang="bash" />
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "清理.git",
    content: (
      <ol>
        <li>
          運行bash.exe
          <CodeChunk code="D:\Tools\Git\bin\bash.exe" lang="bash" />
        </li>
        <li>
          列出pack包裏最大的5個文件(自行替換<code>.idx</code>檔名)
          <CodeChunk code="git verify-pack -v .git/objects/pack/pack-a2ac68d28ef70a111b4db707db5c7a6b77275871.idx | sort -k 3 -n | tail -5" lang="bash" />
          <ZoomImage className="col-xs-8 mx-auto" src={`${imagePath}/cmder-git-clean1.png`} />
        </li>
        <li>
          列出最大的文件名稱
          <CodeChunk code="git rev-list --objects --all | grep 4f1a0424c890e4d3fa9b33dfe0d021ac119eb2be" lang="bash" />
          <ZoomImage className="col-xs-8 mx-auto" src={`${imagePath}/cmder-git-clean2.png`} />
        </li>
        <li>
          刪除文件
          <CodeChunk code="git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch assets/images/expoPage1.png' --prune-empty --tag-name-filter cat -- --all" lang="bash" />
        </li>
        <li>
          清理殘餘歷史紀錄
          <CodeChunk code={`rm -Rf .git/refs/original \nrm -Rf .git/logs/ \ngit gc\ngit prune --expire now`} lang="bash" />
        </li>
      </ol>
    ),
  },
  {
    title: "更新.gitignore",
    content: (
      <div>
        <CodeChunk code={`git rm -r --cached .\ngit add .\ngit commit -m "update: .gitignore"`} lang="bash" />
      </div>
    ),
  },
];

export default Sections;
