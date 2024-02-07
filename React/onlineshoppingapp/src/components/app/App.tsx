import React from "react";
import ListOfProducts from "../listofproducts/listofproduct.component";
import Posts from "../posts/posts.component";
import GetPostById from "../posts/getpostbyid.component";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "../navbar/navbar.component";
import PostDetails from "../postdetails/postdetails.component";
import ProductDetails from "../productdetails/product.details";

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
        </Routes>
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
