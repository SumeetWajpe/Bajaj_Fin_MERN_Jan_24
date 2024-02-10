import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import ProductModel from "../../models/product.model";

type ProductsState = {
  products: ProductModel[];
};
const initialState: ProductsState = {
  products: [],
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await fetch("http://localhost:3500/products");
    return await response.json();
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action: PayloadAction<number>) => {
      //   console.log("Within IncrementLikes reducer - ", action.payload);
      let productId: number = action.payload;
      let index = store.products.findIndex(p => p.id === productId);
      // change the likes of the existing product
      store.products[index].likes++;
      return store; // update the store & return
    },
    deleteAProduct: (store, action: PayloadAction<number>) => {
      //   console.log("Within deleteAProduct reducer !");
      let productId: number = action.payload;

      store.products = store.products.filter(p => p.id !== productId);
      return store;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchAllProducts.fulfilled,
      (store: ProductsState, action: PayloadAction<ProductModel[]>) => {
        // store.products.push(...action.payload);
        store.products = action.payload;
        return store;
      },
    );
  },
});

export const { incrementLikes, deleteAProduct } = productsSlice.actions;
export default productsSlice.reducer;
