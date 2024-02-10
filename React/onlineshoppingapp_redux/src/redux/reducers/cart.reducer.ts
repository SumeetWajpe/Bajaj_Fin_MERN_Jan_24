import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../../models/product.model";

const initialState: ProductModel[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (store: ProductModel[], action: PayloadAction<ProductModel>) => {
      store.push(action.payload);
      return store;
    },
    removeFromCart: (store: ProductModel[], action: PayloadAction<number>) => {
      store = store.filter(p => p.id == action.payload);
      return store;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
