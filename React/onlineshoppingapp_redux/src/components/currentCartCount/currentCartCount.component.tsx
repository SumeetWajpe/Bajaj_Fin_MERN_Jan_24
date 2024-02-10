import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const CurrentCartCount = () => {
  const cartItems = useSelector((store: RootState) => store.cart);
  return (
    <div className="d-flex">
      <button className="btn btn-warning">
        <i className="fa-solid fa-cart-shopping"></i> {cartItems.length}
      </button>
    </div>
  );
};

export default CurrentCartCount;
