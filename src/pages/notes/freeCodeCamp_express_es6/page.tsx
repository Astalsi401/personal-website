import { CodeChunk } from "@components";
import type { SectionsProps } from "@types";

const Sections: SectionsProps = () => [
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
        Node 20.11 or higher
        <code>__dirname</code> to <code>import.meta.dirname</code>
      </>
    ),
  },
  {
    title: "ES6 Repos",
    content: (
      <>
        <a href="https://github.com/Astalsi401/fcc-learn-node-with-express-es6" target="_blank" rel="noopener noreferrer">
          Basic Node and Express
        </a>
        <br />
        <a href="https://github.com/Astalsi401/fcc-mongo-mongoose-challenges-es6" target="_blank" rel="noopener noreferrer">
          MongoDB and Mongoose
        </a>
      </>
    ),
  },
];
export default Sections;
