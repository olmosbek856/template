// import { fileURLToPath } from "node:url";
// import * as path from "node:path";
import express from "express";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);
// console.log(PORT);

const PORT = parseInt(process.env.PORT || 3_000);

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});

