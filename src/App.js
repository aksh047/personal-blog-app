// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import PostCreationForm from "./components/PostCreationForm";
import PostDetailView from "./components/PostDetailView";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // Save posts to localStorage
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/create" element={<PostCreationForm createPost={createPost} />} />
            <Route path="/post/:id" element={<PostDetailView posts={posts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
