import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

app.set("trust proxy", true);
app.use(cors({ credentials: true }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(4001, () => {
  console.log(`Server listening on port 4001`);
});

app.route("/").get((req, res) => res.json({ express_server: "OK" }));
