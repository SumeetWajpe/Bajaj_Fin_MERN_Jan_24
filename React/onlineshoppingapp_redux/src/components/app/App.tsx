import React from "react";
import logo from "./logo.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ListOfProducts from "../listofproducts/listofproduct.component";

function App() {
  return (
    <div>
      <ListOfProducts />
    </div>
  );
}

export default App;
