import React from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ListOfProducts from "../listofproducts/listofproduct.component";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import GrandParent from "../contextAPi/context.counter";

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/"> Home </Link> | <Link to="/posts"> Posts </Link> */}
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<ListOfProducts />}></Route> */}
        <Route path="/" element={<GrandParent />}></Route>

        {/* <Route path="/productdetails/:id" element={<ProductDetails />}></Route> */}

        {/* <Route path="/posts" element={<Posts />}></Route> */}
        {/* <Route path="/postdetails/:id" element={<PostDetails />}></Route> */}
        {/* <Route path="/newproduct" element={<NewProduct />} /> */}
        {/* <Route path="/newproduct" element={<NewProductWithHookForm />} /> */}

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
