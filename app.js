const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running in port 3000");
});
