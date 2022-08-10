import express from "express";

import bodyParser from "body-parser";
import ejs from "ejs";
import fetch from "node-fetch";

const app = express();
app.use(express.static("static"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("question", { OUTPUT: "" });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const type = req.body.type;
  var rating = req.body.rating;
  if (rating == null) rating = "pg13";
  const url =
    "https://api.truthordarebot.xyz/api/" + type + "?rating=" + rating;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.render("question", { OUTPUT: data.question }));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running in port 3000");
});
