// import express from "express";
const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = 3000;
const productsRouter = require("./routes/products.route.js");

mongoose.connect("mongodb://localhost:27017/onlineshoppingdb");

mongoose.connection.once("open", () => console.log("Connected to database !"));
mongoose.connection.on("error", () => console.log(err));
// view engine settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
// middlewares
app.use(express.static("static")); // express static middleware (adds static serving functionality to the app ex. .js / .css files)
app.use(express.json()); // reads the payload from request and populates req.body
// mapping of routes
app.use("/products", productsRouter); // registering products router
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});
app.get("/video", (req, res) => {
  console.log("Within video api");
  // send the video in chunks
  const range = req.headers.range;
  console.log(range);
  const videoPath = path.join(__dirname, "videos/shoes.mp4");

  const videoSize = fs.statSync(videoPath).size;
  // range
  const CHUNK_SIZE = 10 ** 6; // 1 MB
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

  // headers
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": end - start + 1,
    "Content-Type": "video/mp4",
  };
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
