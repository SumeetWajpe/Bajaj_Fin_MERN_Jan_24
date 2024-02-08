import React from "react";
import { useForm } from "react-hook-form";
import ProductModel from "../../models/product.model";
import { useNavigate } from "react-router-dom";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <form
          className="row"
          onSubmit={handleSubmit(async formData => {
            try {
              let productToBeInserted = new ProductModel(
                formData.ProductId,
                formData.ProductTitle,
                formData.ProductPrice,
                formData.ProductRating,
                formData.ProductLikes,
                formData.ProductImageUrl,
                formData.ProductDesc,
              );
              let response = await fetch(
                "http://localhost:3500/products/newproduct",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(productToBeInserted),
                },
              );
              let message = await response.json();
              if (message.status) {
                toast.success(`${message.msg}`, {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/"); // redirect (pragramatically)
              }
            } catch (error) {
              // make async call to server and send error
              console.log(error);
            }
          })}
        >
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
              id=""
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
