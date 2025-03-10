// components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ posts }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.length === 0 ? (
                <p>No posts available. Create one!</p>
            ) : (
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Link to={`/post/${index}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;
