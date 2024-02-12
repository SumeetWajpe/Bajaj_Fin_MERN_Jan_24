import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthModel = {
  isUserAuthenticated: boolean;
  token: string;
  username: string;
};

const initialState: AuthModel = {
  isUserAuthenticated: false,
  token: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLoggedIn: (store: AuthModel, action: PayloadAction<AuthModel>) => {
      store = action.payload;
      return store;
    },
    setUserLoggedOut: (store: AuthModel, action: PayloadAction<AuthModel>) => {
      store = action.payload;
      return store;
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = authSlice.actions;
export default authSlice.reducer;
