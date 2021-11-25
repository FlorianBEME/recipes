const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/recipes", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(importData);
});

app.get(`/recipes/:id`, (req, res) => {
  const id = req.params.id - 1;
  res.header("Access-Control-Allow-Origin", "*");
  res.send(importData[id]);
});

app.listen(port, () => {
  console.log(`Example app is listening on port http://localhost:${port}`);
});
