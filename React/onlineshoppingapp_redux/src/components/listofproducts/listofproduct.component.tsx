import React, { Component, useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { fetchAllProducts } from "../../redux/reducers/products.reducer";

const ListOfProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((store: RootState) => store.products); // selects products data from redux store

  let loadingImage = (
    <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
  );
  let productsToBeCreated = products.map((product: ProductModel) => (
    <Product productdetails={product} key={product.id} />
  ));

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <div className="row g-3">
      {products.length === 0 ? loadingImage : productsToBeCreated}
    </div>
  );
};
export default ListOfProducts;
