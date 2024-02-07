import React, { useEffect, useState } from "react";

const Posts: React.FC = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Within UseEffect");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }, []);
  return (
    <div>
      <header>
        <h1>Posts</h1>
      </header>
      <ul>
        {posts.map((p: any) => (
          <li>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

// import React, { Component } from "react";

// export default class Posts extends Component {
//   state = { posts: [] };

//   render() {
//     console.log("Within render..");
//     return (
//       <div>
//         <header>
//           <h1>All Posts</h1>
//         </header>
//         {this.state.posts.length === 0 ? (
//           <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1262.gif" />
//         ) : (
//           <ul className="list-group">
//             {this.state.posts.map((post: any) => (
//               <li className="list-group-item" key={post.id}>
//                 {post.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
//   componentDidMount(): void {
//     console.log("Within componentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(posts => this.setState({ posts }));
//   }
// }
