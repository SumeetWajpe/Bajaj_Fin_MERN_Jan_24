const express = require("express");
const router = express.Router();
let products = require("../data/products.data.js");
router.get("/", (req, res) => {
  res.json(products);
});

// using routing parameter
router.get("/:id", (req, res) => {
  const product = products.find(p => p.id == productId);
  res.json(product);
});
router.post("/newproduct", (req, res) => {
  console.log("within new product api");
  console.log(req.body);
  res.send("success");
});
module.exports = router;
