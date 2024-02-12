import React from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ListOfProducts from "../listofproducts/listofproduct.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import GrandParent from "../contextAPi/context.counter";
import Login from "../login/login.component";
import Dashboard from "../dashboard/dashboard";
import NewProductWithHookForm from "../newproduct/newProduct_hookform.component";

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/"> Home </Link> | <Link to="/posts"> Posts </Link> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<ListOfProducts />} />
          <Route path="newproduct" element={<NewProductWithHookForm />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Route path="/" element={<Login />}></Route> */
}
{
  /* <Route path="/" element={<GrandParent />}></Route> */
}

{
  /* <Route path="/productdetails/:id" element={<ProductDetails />}></Route> */
}

{
  /* <Route path="/posts" element={<Posts />}></Route> */
}
{
  /* <Route path="/postdetails/:id" element={<PostDetails />}></Route> */
}
{
  /* <Route path="/newproduct" element={<NewProduct />} /> */
}
{
  /* <Route path="/newproduct" element={<NewProductWithHookForm />} /> */
}
