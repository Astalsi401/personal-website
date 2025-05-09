import { CodeChunk } from "@/components";
import { InlineCode } from "@ui/inline-code";
import { Li, Ol, Ul } from "@ui/list";
import type { SectionsProps } from "@/types";

export const Sections: SectionsProps = ({ demoPath }) => [
  {
    title: "Install (Ubuntu)",
    content: (
      <>
        安裝<InlineCode>gnupg</InlineCode>、<InlineCode>curl</InlineCode>
        <CodeChunk code="sudo apt-get install gnupg curl" lang="bash" />
        導入公鑰
        <CodeChunk code={`curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \\\n   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \\\n   --dearmor`} lang="bash" />於<InlineCode>/etc/apt/sources.list.d/mongodb-org-8.0.list</InlineCode>創建列表文件
        <Ul>
          <Li>
            Ubuntu 24.04 (Noble)
            <CodeChunk code={`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`} lang="bash" />
          </Li>
          <Li>
            Ubuntu 22.04 (Jammy)
            <CodeChunk code={`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`} lang="bash" />
          </Li>
        </Ul>
        更新packages
        <CodeChunk code="sudo apt-get update" lang="bash" />
        安裝MongoDB Community Server
        <CodeChunk code="sudo apt-get install -y mongodb-org" lang="bash" />
      </>
    ),
  },
  {
    title: "Start",
    content: (
      <>
        運行
        <CodeChunk code="sudo systemctl start mongod" lang="bash" />
        檢查運行狀態
        <CodeChunk code="sudo systemctl status mongod" lang="bash" />
        開機自動啟動
        <CodeChunk code="sudo systemctl enable mongod" lang="bash" />
        預設配置文件路徑
        <CodeChunk code="/etc/mongod.conf" lang="text" />
      </>
    ),
  },
  {
    title: "Connect",
    content: (
      <>
        <CodeChunk code={"mongosh mongodb://127.0.0.1:27017"} lang="bash" />
        啟用身分驗證
        <CodeChunk code={"mongosh mongodb://user:password@127.0.0.1:27017"} lang="bash" />
      </>
    ),
  },
  {
    title: "啟用SCRAM身分驗證",
    content: (
      <>
        <Ol>
          <Li>
            連線到db
            <CodeChunk code={"mongosh mongodb://127.0.0.1:27017"} lang="bash" />
          </Li>
          <Li>
            切換到admin資料庫
            <CodeChunk code={"use admin"} lang="mongodb" />
          </Li>
          <Li>
            添加admin user
            <CodeChunk code={`db.createUser({ user: "admin", pwd: passwordPrompt(), roles: [{ role: "userAdminAnyDatabase", db: "admin"}, { role: "readWriteAnyDatabase", db: "admin"}] })`} lang="mongodb" />
          </Li>
          <Li>
            關閉連線
            <CodeChunk code={"db.adminCommand({ shutdown: 1 })"} lang="mongodb" />
          </Li>
        </Ol>
      </>
    ),
  },
  {
    title: "備份 (mongodump)",
    content: (
      <>
        <Ul>
          <Li>
            <InlineCode>-h</InlineCode>：host，表示資料庫主機的IP位置或是電腦名稱
          </Li>
          <Li>
            <InlineCode>-u</InlineCode>：user，登入的帳號
          </Li>
          <Li>
            <InlineCode>-p</InlineCode>：password，登入的密碼
          </Li>
          <Li>
            <InlineCode>--port</InlineCode>：指定port號
          </Li>
          <Li>
            <InlineCode>-d</InlineCode>：database，備份資料庫的名稱
          </Li>
          <Li>
            <InlineCode>-c</InlineCode>：collection，指定備份某一個Collection
          </Li>
          <Li>
            <InlineCode>-o</InlineCode>：output備份輸出的磁碟位置(Folder Path)
          </Li>
          <Li>
            <InlineCode>-q</InlineCode>：query，備份的過濾條件
          </Li>
        </Ul>
        範例：
        <CodeChunk code={"mongodump -h 127.0.0.1:27017 -d mydb -o ./backup"} lang="bash" />
        <InlineCode>--authenticationDatabase admin</InlineCode>：身分驗證，添加用於驗證密碼的<InlineCode>admin</InlineCode>資料庫
        <CodeChunk code={"mongodump -u {user} -p {password} --authenticationDatabase admin -h 127.0.0.1:27017 -d mydb -o ./backup"} lang="bash" />
      </>
    ),
  },
  {
    title: "還原 (mongorestore)",
    content: (
      <>
        <Ul>
          <Li>
            <InlineCode>-h</InlineCode>：host，表示資料庫主機的IP位置或是電腦名稱
          </Li>
          <Li>
            <InlineCode>-u</InlineCode>：user，登入的帳號
          </Li>
          <Li>
            <InlineCode>-p</InlineCode>：password，登入的密碼
          </Li>
          <Li>
            <InlineCode>-d</InlineCode>：database
          </Li>
          <Li>
            <InlineCode>-c</InlineCode>：collection
          </Li>
        </Ul>
        範例：
        <CodeChunk code="mongorestore -h 127.0.0.1:27017 -d mydb --drop ./backup/mydb" lang="bash" />
        身分驗證：
        <CodeChunk code="mongorestore -u {user} -p {password} --authenticationDatabase admin -h 127.0.0.1:27017 -d mydb --drop ./backup/mydb" lang="bash" />
      </>
    ),
  },
  {
    title: "刪除",
    content: (
      <>
        刪除database
        <CodeChunk code={`use mydb\ndb.dropDatabase()`} lang="mongodb" />
        刪除collection
        <CodeChunk code={`db.collection.drop()`} lang="mongodb" />
        刪除field
        <CodeChunk code={`db.collection.updateMany({}, { $unset: { field: 1 } })`} lang="mongodb" />
      </>
    ),
  },
  {
    title: "Express",
    content: (
      <>
        <Ul>
          <Li>
            根據同一個欄位(<InlineCode>_id</InlineCode>)的多個條件篩選資料，<InlineCode>array</InlineCode>可從其他<InlineCode>collections</InlineCode>抓取
            <CodeChunk code={`await model.find({ _id: { '$in': [ObjectId(1), ObjectId(2)] } })`} lang="js" />
          </Li>
        </Ul>
      </>
    ),
  },
  {
    title: "pymongo",
    content: (
      <>
        <CodeChunk path={`${demoPath}/pymongo.example.py`} lang="py" />
      </>
    ),
  },
  {
    title: "mongodb ObjectId",
    content: (
      <>
        <CodeChunk code={`const createObjectId = (m = Math, d = Date, h = 16, s = (s: number) => m.floor(s).toString(h)) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));`} lang="js" />
      </>
    ),
  },
];
