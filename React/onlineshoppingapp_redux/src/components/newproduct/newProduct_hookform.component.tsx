import React from "react";
import { useForm } from "react-hook-form";
import ProductModel from "../../models/product.model";
import { useNavigate } from "react-router-dom";

const NewProductWithHookForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="row justify-content-center ">
      <div className="col-md-6 border border-4 rounded-2">
        <h2>Add New Product</h2>
        <form className="row">
          <div className="col-md-4">
            <label> Id :</label>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductId", {
                required: "Product Id is required !",
              })}
            />
            {errors.ProductId && (
              <p className="text-danger">
                {errors.ProductId.message?.toString()}
              </p>
            )}
          </div>
          <div className="col-md-4">
            <label> Title :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductTitle", {
                required: "Product Title is required !",
                maxLength: {
                  value: 20,
                  message: "You exceeded max length of 20 chars !",
                },
              })}
            />
            {errors.ProductTitle && (
              <p className="text-danger">
                {errors.ProductTitle.message?.toString()}
              </p>
            )}
          </div>
          <div className="col-md-4">
            <label> Price :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductPrice")}
            />
          </div>
          <div className="col-md-4">
            <label> Rating :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductRating")}
            />
          </div>
          <div className="col-md-4">
            <label> Likes :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductLikes")}
            />
          </div>
          <div className="col-md-4">
            <label> Image (url) :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              {...register("ProductImageUrl")}
            />
          </div>
          <div className="col-md-4">
            <label> Description :</label>
          </div>

          <div className="col-md-8">
            <textarea
              className="form-control"
              cols={45}
              rows={5}
              {...register("ProductDesc")}
            ></textarea>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 m-2">
              <button className="btn btn-success">Add New Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProductWithHookForm;
