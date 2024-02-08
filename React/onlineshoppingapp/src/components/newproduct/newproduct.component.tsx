import { useState } from "react";
import ProductModel from "../../models/product.model";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState<ProductModel>(
    new ProductModel(),
  );
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
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, id: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label> Title :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, title: e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label> Price :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, price: +e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label> Rating :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, id: +e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label> Likes :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, likes: +e.target.value })
              }
            />
          </div>
          <div className="col-md-4">
            <label> Image (url) :</label>
          </div>

          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, imageUrl: e.target.value })
              }
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
              onInput={(e: any) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 m-2">
              <button
                className="btn btn-success"
                onClick={(e: any) => {
                  e.preventDefault();
                  console.log(newProduct);
                }}
              >
                Add New Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
