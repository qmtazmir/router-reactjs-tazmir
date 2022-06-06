import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h1>Posts details:{postId} </h1>
      <h2>{post.title}</h2>
      <h5>{post.body}</h5>
    </div>
  );
};

export default PostsDetail;
