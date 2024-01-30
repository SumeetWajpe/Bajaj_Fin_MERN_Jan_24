// import express from "express";
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static")); // express static middleware (adds static serving functionality to the app ex. .js / .css files)
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.get("/products", (req, res) => {
  let products = [
    { id: 1, title: "Mac BookPro", price: 250000 },
    { id: 2, title: "QLED TV", price: 80000 },
  ];
  res.json(products);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
