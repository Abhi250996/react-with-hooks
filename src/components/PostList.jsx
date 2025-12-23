import { useMemo } from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, search }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  return (
    <>
      {filteredPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
