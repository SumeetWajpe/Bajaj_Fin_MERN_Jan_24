import React, { useEffect, useState } from "react";
class PostModel {
  constructor(
    public id: number = 0,
    public userId: number = 0,
    public title: string = "",
    public body: string = "",
  ) {}
}
// OR
class _PostModel {
  public id: number;
  public userId: number;
  public title: string;
  public body: string;
  constructor(id: number, userId: number, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}

const GetPostById: React.FC = () => {
  let [inputPostId, setInputPostId] = useState<number>(1);
  let [thePost, setThePost] = useState<PostModel>(new PostModel());

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${inputPostId}`)
  //       .then(res => res.json())
  //       .then(post => setThePost(post));
  //   }, [inputPostId]);
  useEffect(() => {
    async function GetPost() {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${inputPostId}`,
      );
      let post: PostModel = await res.json();
      setThePost(post);
    }
    GetPost();
  }, [inputPostId]);
  return (
    <div>
      <label htmlFor="txtPostId">Enter Post Id : </label>{" "}
      <input
        type="text"
        id="txtPostId"
        onInput={(e: any) => setInputPostId(e.target.value)}
      />
      <p>{thePost.title}</p>
    </div>
  );
};

export default GetPostById;
