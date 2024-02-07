import React, { Component, useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";

const ListOfProducts: React.FC = () => {
  function DeleteAProduct(id: number) {
    let newProductList = productList.filter((p: ProductModel) => p.id !== id);
    setProductList(newProductList);
  }

  const [productList, setProductList] = useState<Array<ProductModel>>([]);
  let loadingImage = (
    <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
  );
  let productsToBeCreated = productList.map((product: ProductModel) => (
    <Product
      productdetails={product}
      key={product.id}
      DeleteAProduct={id => DeleteAProduct(id)}
    />
  ));
  useEffect(() => {
    fetch("http://localhost:3500/products")
      .then(res => res.json())
      .then((products: ProductModel[]) => setProductList(products));
  }, []);
  return (
    <div className="row g-3">
      {productList.length === 0 ? loadingImage : productsToBeCreated}
    </div>
  );
};
export default ListOfProducts;
// export default class ListOfProducts extends Component {
//   productList: Array<ProductModel> = [];
//   state = {
//     productList: this.productList,
//   };
//   DeleteAProduct(id: number) {
//     console.log("Deleting Product..", id);
//     let newProductList = this.state.productList.filter(
//       (p: ProductModel) => p.id !== id,
//     );
//     this.setState({ productList: newProductList });
//   }

//   render() {
//     console.log("Render : ListOf products");
//     return (
//       <div className="row g-3">
//         {this.state.productList.map(product => (
// <Product
//   productdetails={product}
//   key={product.id}
//   DeleteAProduct={id => this.DeleteAProduct(id)}
// />
//         ))}
//       </div>
//     );
//   }

//   componentDidMount(): void {
//     fetch("http://localhost:3500/products")
//       .then(res => res.json())
//       .then(products => this.setState({ productList: products }));
//   }
// }
