const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "Mac BookPro", price: 250000 },
    { id: 2, title: "QLED TV", price: 80000 },
  ];
  res.json(products);
});

// using routing parameter
router.get("/:id", (req, res) => {
  const productId = req.params.id;
  let products = [
    { id: 1, title: "Mac BookPro", price: 250000 },
    { id: 2, title: "QLED TV", price: 80000 },
  ];
  const product = products.find(p => p.id == productId);
  res.json(product);
});
module.exports = router;
