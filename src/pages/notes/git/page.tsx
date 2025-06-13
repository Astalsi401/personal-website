import { CodeChunk, ZoomImage } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath, imagePath }) => [
  {
    title: "Git 基礎設定",
    content: (
      <>
        <Ol>
          <Li>
            設定email與user name
            <CodeChunk
              code='git config --global user.email "misting401@gmail.com"'
              lang="bash"
            />
            <CodeChunk
              code='git config --global user.name "Astalsi401"'
              lang="bash"
            />
          </Li>
          <Li>
            設定ssh key
            <CodeChunk
              code='ssh-keygen -t rsa -C "misting401@gmail.com"'
              lang="bash"
            />
            ssh key會被儲存於
            <InlineCode>C:\Users\user\.ssh\id_rsa.pub</InlineCode>
          </Li>
          <Li>
            將<InlineCode>id_rsa.pub</InlineCode>中的內容全選並直接複製到
            <a href="https://github.com/settings/ssh/new">Key欄位</a>。
          </Li>
          <Li>
            確認是否成功
            <CodeChunk code="ssh -T git@github.com" lang="bash" />
          </Li>
        </Ol>
        <Ul>
          <Li>
            更改github密碼後，遠端倉庫網址會變更為https，並在每次進行
            <InlineCode>push</InlineCode>、<InlineCode>pull</InlineCode>
            等指令時要求輸入user.name、password，然而在今年（2021）git已經取消使用密碼進行推送的途徑，在密碼欄位須改為使用
            <a href="https://github.com/settings/tokens">
              Personal access token
            </a>
            作為密碼。此時使用以下指令即可改回SSH網址，不需再輸入用戶名與密碼。
            <CodeChunk
              code="git remote set-url origin git@github.com:username/repository.git"
              lang="bash"
            />
            確認遠端倉庫網址
            <CodeChunk code="git remote -v" lang="bash" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "多帳號設定",
    content: (
      <>
        <Ol>
          <Li>創建新的ssh key</Li>
          <Li>
            前往 <InlineCode>C:\Users\user\.ssh\config</InlineCode>
            ，添加新的設定
            <CodeChunk path={`${demoPath}/config.example`} />
          </Li>
          <Li>
            使用新的 ssh key
            <CodeChunk
              code="git@github.com-work:username/repo.git"
              lang="bash"
            />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "合併遠端分支",
    content: <CodeChunk code="git pull --rebase origin main" lang="bash" />,
  },
  {
    title: "將repo加入另一個repo",
    content: (
      <>
        <Ul>
          <Li>
            <InlineCode>subtree</InlineCode>
            <CodeChunk
              code="git subtree add <prefix> <repo> <rev>"
              lang="bash"
            />
            <Ul>
              <Li>
                <InlineCode>prefix</InlineCode>：要加入的子目錄
              </Li>
              <Li>
                <InlineCode>repo</InlineCode>：要加入的repo clone url
              </Li>
              <Li>
                <InlineCode>rev</InlineCode>：要加入的revision
              </Li>
            </Ul>
            example:
            <CodeChunk
              code="git subtree add repo git@github.com:user/repo.git HEAD"
              lang="bash"
            />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "清理.git",
    content: (
      <Ol>
        <Li>
          運行bash.exe
          <CodeChunk code="D:\Tools\Git\bin\bash.exe" lang="bash" />
        </Li>
        <Li>
          列出pack包裏最大的5個文件(自行替換<InlineCode>.idx</InlineCode>檔名)
          <CodeChunk
            code="git verify-pack -v .git/objects/pack/pack-a2ac68d28ef70a111b4db707db5c7a6b77275871.idx | sort -k 3 -n | tail -5"
            lang="bash"
          />
          <ZoomImage
            className="col-xs-8 mx-auto"
            src={`${imagePath}/cmder-git-clean1.png`}
          />
        </Li>
        <Li>
          列出最大的文件名稱
          <CodeChunk
            code="git rev-list --objects --all | grep 4f1a0424c890e4d3fa9b33dfe0d021ac119eb2be"
            lang="bash"
          />
          <ZoomImage
            className="col-xs-8 mx-auto"
            src={`${imagePath}/cmder-git-clean2.png`}
          />
        </Li>
        <Li>
          刪除文件
          <CodeChunk
            code="git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch assets/images/expoPage1.png' --prune-empty --tag-name-filter cat -- --all"
            lang="bash"
          />
        </Li>
        <Li>
          清理殘餘歷史紀錄
          <CodeChunk
            code={`rm -Rf .git/refs/original \nrm -Rf .git/logs/ \ngit gc\ngit prune --expire now`}
            lang="bash"
          />
        </Li>
      </Ol>
    ),
  },
  {
    title: "更新.gitignore",
    content: (
      <CodeChunk
        code={`git rm -r --cached .\ngit add .\ngit commit -m "update: .gitignore"`}
        lang="bash"
      />
    ),
  },
  {
    title: "Create a new branch from current branch",
    content: (
      <CodeChunk
        code={`git checkout -b new-branch-name\ngit push -u origin new-branch-name`}
        lang="bash"
      />
    ),
  },
];
