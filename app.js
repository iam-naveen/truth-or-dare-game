const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(express.static("static"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/game.html");
  res.render("question", { OUTPUT: "" });
});

app.post("/", function (req, res) {
  console.log(req.body);
  const type = req.body.type;
  const rating = req.body.rating;
  const url =
    "https://api.truthordarebot.xyz/api/" + type + "?rating=" + rating;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.render("question", { OUTPUT: data.question }));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running in port 3000");
});
