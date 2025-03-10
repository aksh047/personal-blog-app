// components/PostCreationForm.js
import React, { useState } from "react";

const PostCreationForm = ({ createPost }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError("Both title and content are required!");
            return;
        }
        createPost({ title, content });
        setTitle("");
        setContent("");
        setError("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create New Post</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default PostCreationForm;
