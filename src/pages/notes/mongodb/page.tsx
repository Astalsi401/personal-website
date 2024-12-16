import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
  {
    title: "Install (Ubuntu)",
    content: (
      <>
        安裝<code>gnupg</code>、<code>curl</code>
        <CodeChunk code="sudo apt-get install gnupg curl" lang="bash" />
        導入公鑰
        <CodeChunk code={`curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \\\n   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \\\n   --dearmor`} lang="bash" />於<code>/etc/apt/sources.list.d/mongodb-org-8.0.list</code>創建列表文件
        <ul>
          <li>
            Ubuntu 24.04 (Noble)
            <CodeChunk code={`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`} lang="bash" />
          </li>
          <li>
            Ubuntu 22.04 (Jammy)
            <CodeChunk code={`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`} lang="bash" />
          </li>
        </ul>
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
      </>
    ),
  },
  {
    title: "啟用SCRAM身分驗證",
    content: (
      <>
        <ol>
          <li>
            連線到db
            <CodeChunk code={"mongosh mongodb://127.0.0.1:27017"} lang="bash" />
          </li>
          <li>
            切換到admin資料庫
            <CodeChunk code={"use admin"} lang="mongodb" />
          </li>
          <li>
            添加admin user
            <CodeChunk code={`db.createUser({ user: "admin", pwd: passwordPrompt(), roles: [{ role: "userAdminAnyDatabase", db: "admin"}, { role: "readWriteAnyDatabase", db: "admin"}] })`} lang="mongodb" />
          </li>
          <li>
            關閉連線
            <CodeChunk code={"db.adminCommand({ shutdown: 1 })"} lang="mongodb" />
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "備份 (mongodump)",
    content: (
      <>
        <ul>
          <li>
            <code>-h</code>：host，表示資料庫主機的IP位置或是電腦名稱
          </li>
          <li>
            <code>-u</code>：user，登入的帳號
          </li>
          <li>
            <code>-p</code>：password，登入的密碼
          </li>
          <li>
            <code>--port</code>：指定port號
          </li>
          <li>
            <code>-d</code>：database，備份資料庫的名稱
          </li>
          <li>
            <code>-c</code>：collection，指定備份某一個Collection
          </li>
          <li>
            <code>-o</code>：output備份輸出的磁碟位置(Folder Path)
          </li>
          <li>
            <code>-q</code>：query，備份的過濾條件
          </li>
        </ul>
        範例：
        <CodeChunk code={"mongodump -h 127.0.0.1:27017 -d mydb -o ./backup"} lang="bash" />
        <code>--authenticationDatabase admin</code>：身分驗證，添加用於驗證密碼的<code>admin</code>資料庫
        <CodeChunk code={"mongodump -u {user} -p {password} --authenticationDatabase admin -h 127.0.0.1:27017 -d mydb -o ./backup"} lang="bash" />
      </>
    ),
  },
  {
    title: "還原 (mongorestore)",
    content: (
      <>
        <ul>
          <li>
            <code>-h</code>：host，表示資料庫主機的IP位置或是電腦名稱
          </li>
          <li>
            <code>-u</code>：user，登入的帳號
          </li>
          <li>
            <code>-p</code>：password，登入的密碼
          </li>
          <li>
            <code>-d</code>：database
          </li>
          <li>
            <code>-c</code>：collection
          </li>
        </ul>
        範例：
        <CodeChunk code="mongorestore -h 127.0.0.1:27017 -d mydb --drop ./backup/mydb" lang="bash" />
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
      </>
    ),
  },
  {
    title: "查詢(Express)",
    content: (
      <>
        <ul>
          <li>
            根據同一個欄位(<code>_id</code>)的多個條件篩選資料，<code>array</code>可從其他<code>collections</code>抓取
            <CodeChunk code={`await model.find({ _id: { '$in': [ObjectId(1), ObjectId(2)] } })`} lang="js" />
          </li>
        </ul>
      </>
    ),
  },
];
export default Sections;
