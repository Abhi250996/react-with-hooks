import React from "react";

const PostItem = React.memo(({ post }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
});

export default PostItem;
