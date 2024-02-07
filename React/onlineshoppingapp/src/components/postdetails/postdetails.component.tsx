import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  useEffect(()=>{

  });
  return <div>PostDetails for {id}</div>;
};

export default PostDetails;
