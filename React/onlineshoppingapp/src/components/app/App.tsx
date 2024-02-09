import React from "react";
import ListOfProducts from "../listofproducts/listofproduct.component";
import Posts from "../posts/posts.component";
import GetPostById from "../posts/getpostbyid.component";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import PostDetails from "../postdetails/postdetails.component";
import ProductDetails from "../productdetails/product.details";
import NewProduct from "../newproduct/newproduct.component";
import NewProductWithHookForm from "../newproduct/newProduct_hookform.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      {/* <a href="/">Home</a> |<a href="/posts">Posts</a> */}
      <BrowserRouter>
        {/* <Link to="/"> Home </Link> | <Link to="/posts"> Posts </Link> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ListOfProducts />}></Route>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>

          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/postdetails/:id" element={<PostDetails />}></Route>
          {/* <Route path="/newproduct" element={<NewProduct />} /> */}
          <Route path="/newproduct" element={<NewProductWithHookForm />} />
          {/* <Route
            path="*"
            element={
              <img
                src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
                alt="Page Not found"
                width="1000px"
              />
            }
          /> */}
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
};

export default App;

// class App extends React.Component {
//   render(): React.ReactNode {
//     // return <ListOfProducts />;
//     // return <Posts />;
//     return <GetPostById />;
//   }
// }
// export default App;
