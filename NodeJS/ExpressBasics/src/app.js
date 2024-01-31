// import express from "express";
const express = require("express");
const app = express();
const port = 3000;
const productsRouter = require("./routes/products.route.js");
// middlewares
app.use(express.static("static")); // express static middleware (adds static serving functionality to the app ex. .js / .css files)
app.use(express.json()); // reads the payload from request and populates req.body
// mapping of routes
app.use("/products", productsRouter); // registering products router
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
