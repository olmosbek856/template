import { fileURLToPath } from "node:url";
import * as path from "node:path";
import express from "express";
import ejs from "ejs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = parseInt(process.env.PORT || 3_000);

const app = express();

app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));
app.engine("html", ejs.renderFile);

app.get("/", (_, res) => {
  res.render("index", {
    title: "OK",
    name: "Olmosbek Rustamov",
    major: "dasturchi",
  });
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
