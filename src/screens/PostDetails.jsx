import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetails({ showTitle = true }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data));
  }, [id]);

  if (!post) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      {showTitle && <h2>{post.title}</h2>}
      <p>{post.body}</p>
    </div>
  );
}
