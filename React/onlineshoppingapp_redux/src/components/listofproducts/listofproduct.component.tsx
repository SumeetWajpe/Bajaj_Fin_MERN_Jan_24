import React, { Component, useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const ListOfProducts: React.FC = () => {
  const { products } = useSelector((store: RootState) => store.products); // selects products data from redux store

  let loadingImage = (
    <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
  );
  let productsToBeCreated = products.map((product: ProductModel) => (
    <Product
      productdetails={product}
      key={product.id}
    />
  ));
  return (
    <div className="row g-3">
      {products.length === 0 ? loadingImage : productsToBeCreated}
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
