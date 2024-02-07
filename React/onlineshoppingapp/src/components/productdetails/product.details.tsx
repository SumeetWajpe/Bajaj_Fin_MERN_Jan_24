import React, { useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel>();
  useEffect(() => {
    (async () => {
      let res = await fetch(`http://localhost:3500/products/details/${id}`);
      let product: ProductModel = await res.json();
      setProduct(product);
    })();
  });
  return (
    <div>
      <header>
        <h1>Product Details</h1>
      </header>
      <main>
        <p>Id : {product?.id}</p>
        <p>Likes : {product?.likes}</p>
        <p>Price : {product?.price}</p>
        <p>Description : {product?.description}</p>
      </main>
    </div>
  );
};

export default ProductDetails;
