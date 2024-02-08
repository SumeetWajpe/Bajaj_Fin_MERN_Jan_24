import React, { useEffect, useState } from "react";
import ProductModel from "../../models/product.model";
import { useParams } from "react-router-dom";
import Rating from "../rating/rating.component";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel>();
  useEffect(() => {
    (async () => {
      let res = await fetch(`http://localhost:3500/products/details/${id}`);
      let product: ProductModel = await res.json();
      setProduct(product);
    })();
  }, []);
  return (
    <div>
      <header>
        <h1>Product Details</h1>
      </header>

      <div className="row m-2">
        <div className="col-md-9">
          <video
            src="http://localhost:3500/video"
            controls
            width="100%"
          ></video>
        </div>
        <div className="col-md-3">
          <h1>{product?.title}</h1>
          <Rating noofstars={product?.rating || 0} color="orange" />
          <p>{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
