import React from "react";
import ListOfProducts from "../listofproducts/listofproduct.component";
import Posts from "../posts/posts.component";
import GetPostById from "../posts/getpostbyid.component";

class App extends React.Component {
  render(): React.ReactNode {
    // return <ListOfProducts />;
    // return <Posts />;
    return <GetPostById />;
  }
}

export default App;
