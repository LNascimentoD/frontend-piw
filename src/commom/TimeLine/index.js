import React, { useEffect, useContext, useState } from "react";
import Post from "../Post";
import "./styles.css";

import { getPosts } from "../../api/requests/post.js";
import { AuthContext } from "../../App.js";

export default function TimeLine() {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(auth.token).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="timeline">
      <h1>TIMELINE</h1>

      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
}
