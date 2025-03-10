// components/PostDetailView.js
import React from "react";
import { useParams } from "react-router-dom";

const PostDetailView = ({ posts }) => {
    const { id } = useParams();
    const post = posts[parseInt(id, 10)];

    if (!post) {
        return <p>Post not found!</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetailView;
