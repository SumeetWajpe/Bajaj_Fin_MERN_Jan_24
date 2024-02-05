import React, { Component } from "react";
import ProductModel from "../../models/product.model";
import Rating from "../rating/rating.component";

type ProductPropType = {
  productdetails: ProductModel;
};

export default class Product extends Component<ProductPropType> {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="card" style={{ boxShadow: "3px 3px 5px gray" }}>
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.title}
            className="card-img-top rounded-0"
            height="200px"
          />
          <div className="card-body p-2">
            <div className="d-flex flex-wrap justify-content-between">
              <h5 className="card-title">{this.props.productdetails.title}</h5>
              <p className="card-text m-0">
                <Rating noofstars={this.props.productdetails.rating} />
              </p>
            </div>

            <p className="card-text "> ₹.{this.props.productdetails.price}</p>

            <div className="d-flex flex-wrap">
              <button className="btn btn-primary text-light">
                <i className="fa-solid fa-thumbs-up"></i>{" "}
                {this.props.productdetails.likes}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
