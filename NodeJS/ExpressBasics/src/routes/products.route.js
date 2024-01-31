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
  let newProduct = req.body;
  products.push(newProduct); // adds a new product to products array
  console.log(products.length);
  res.status(201).json({
    status: true,
    msg: `${newProduct.title} added successfully !`,
    err: null,
  });
});

router.delete("/deleteproduct/:id", (req, res) => {
  let productId = +req.params.id;
  products = products.filter(p => p.id !== productId);
  res.json({ msg: "Product deleted successfully !", status: true, err: null });
});
module.exports = router;
