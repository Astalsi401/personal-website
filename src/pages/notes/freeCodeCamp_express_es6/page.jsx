import { CodeChunk } from "../../../components/codeChunk";

const sections = [
  {
    title: "package.json",
    content: (
      <>
        Add <code>"type": "module"</code> in <code>package.json</code>
        <CodeChunk code={`{\n  ...\n  "type": "module"\n  ...\n}`} lang="json" />
      </>
    ),
  },
  {
    title: "server.js",
    content: (
      <>
        <CodeChunk code={`const bGround = require('fcc-express-bground');\nconst myApp = require('./myApp');\nconst express = require('express');`} lang="js" />
        to
        <CodeChunk code={`import bGround from "fcc-express-bground";\nimport myApp from "./myApp.js";\nimport express from "express";`} lang="js" />
      </>
    ),
  },
  {
    title: "myApp.js",
    content: (
      <>
        <CodeChunk code={`let express = require('express');\nlet app = express();\nmodule.exports = app;`} lang="js" />
        to
        <CodeChunk code={`// import dotenv from "dotenv";   /*if local*/\nimport express from "express";\n// dotenv.config();   /*if local*/\nconst myApp = express();\nexport default myApp;`} lang="js" />
      </>
    ),
  },
  {
    title: "__dirname",
    content: (
      <>
        <code>__dirname</code> to <code>import.meta.url</code>
      </>
    ),
  },
];
export default sections;
