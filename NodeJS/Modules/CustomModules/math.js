function Add(x, y) {
  return x + y;
}
function Product(x, y) {
  return x * y;
}

// module.exports.Addition = Add; // common js
// module.exports.Multiplication = Product;
// OR
module.exports = { Addition: Add, Multiplication: Product };
