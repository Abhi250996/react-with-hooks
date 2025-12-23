import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);

  const handleSearch = useCallback((e) => setSearch(e.target.value), []);

  const filteredPosts = useMemo(
    () =>
      posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())),
    [posts, search]
  );

  return (
    <div className="container">
      <h2>Posts</h2>
      <input placeholder="Search..." onChange={handleSearch} />

      {filteredPosts.slice(0, 10).map((post) => (
        <Card key={post.id} title={post.title} body={post.body}>
          <Link to={`/posts/${post.id}`} style={{ color: "#1e90ff" }}>
            Read More
          </Link>
        </Card>
      ))}
    </div>
  );
}
