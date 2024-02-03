const express = require("express");
const router = express.Router();
let productsModel = require("../models/products.model");
router.get("/", async (req, res) => {
  let products = await productsModel.find({}); // fetch data from MongoDB!
  res.json(products);
});

// using routing parameter
router.get("/:id", async (req, res) => {
  let productId = +req.params.id;
  let product = await productsModel.findOne({ id: productId });
  res.json(product);
});
router.post("/newproduct", async (req, res) => {
  console.log("within new product api");
  let newProduct = req.body;

  // using save
  // let productToBeInserted = new productsModel(newProduct);
  // let r = await productToBeInserted.save(); // insert / update

  //create
  let r = await productsModel.create(newProduct); // insert one or many records

  res.status(201).json({
    status: true,
    msg: `${newProduct.title} added successfully !`,
    err: null,
  });
});

router.delete("/deleteproduct/:id", async (req, res) => {
  let productId = +req.params.id;
  if (productId) {
    await productsModel.deleteOne({ id: productId });
    res.json({
      msg: "Product deleted successfully !",
      status: true,
      err: null,
    });
  }
});

router.get("/details/:id", (req, res) => {
  // find the product by id
  let id = +req.params.id;
  if (id) {
    let theProduct = products.find(p => p.id == id);
    // pass the product to pug view
    res.render("productdetails", { theProduct });
  }
});

module.exports = router;
