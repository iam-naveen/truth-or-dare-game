import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
