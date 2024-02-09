import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
const store = configureStore({
  reducer: {
    products,
    posts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
