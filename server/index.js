const express = require("express");
const {request} = require("express");
const app = express()
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("aaaa!!")
});

app.listen(PORT, () => {
  console.log("ローカルサーバー起動中")
})
