// jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

// send a response and create h1 in html
app.get("/", function (req, res) {
  res.send("<h1>Hellow, Express.js</h1>");
});

// targeting different route
app.get("/about", function (req, res) {
  res.send("<h1>Stephen Espinosa</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contanct me @:");
});

app.listen(3000, function () {
  console.log("server started");
});
