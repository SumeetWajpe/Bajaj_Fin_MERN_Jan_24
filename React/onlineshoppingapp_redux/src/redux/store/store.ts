import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";
import auth from "../reducers/auth.reducer";

const store = configureStore({
  reducer: {
    products,
    posts,
    cart,
    auth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
