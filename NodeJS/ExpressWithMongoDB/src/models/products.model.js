const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  rating: Number,
  likes: Number,
  imageUrl: String,
  description: String,
});

module.exports = mongoose.model("products", productSchema); // products is name of collection in db
