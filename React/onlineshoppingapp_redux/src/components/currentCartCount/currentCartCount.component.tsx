import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import Icon from "../atoms/icons/icon.component";
import Button from "../molecules/button/button.component";

const CurrentCartCount = () => {
  const cartItems = useSelector((store: RootState) => store.cart);
  return (
    <div className="d-flex">
      {/* <button className="btn btn-warning">
        <Icon classes="fa-solid fa-cart-shopping" /> {cartItems.length}
      </button> */}

      <Button>
        <Icon classes="fa-solid fa-cart-shopping" />
        {cartItems.length}
      </Button>
    </div>
  );
};

export default CurrentCartCount;
