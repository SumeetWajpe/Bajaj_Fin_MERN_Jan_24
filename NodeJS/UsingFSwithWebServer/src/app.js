import fs from "fs";
import http from "http";
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("src/Index.html", (err, dataFromFile) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(dataFromFile);
      } else if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/script.js") {
    fs.readFile("src/script.js", (err, dataFromFile) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(dataFromFile);
      } else if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/styles.css") {
    fs.readFile("src//styles.css", (err, dataFromFile) => {
      if (!err) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/css");
        res.end(dataFromFile);
      } else if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end("Something went wrong !");
      }
    });
  } else if (req.url == "/products") {
    let products = [
      { id: 1, title: "Mac BookPro", price: 250000 },
      { id: 2, title: "QLED TV", price: 80000 },
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
