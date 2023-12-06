// src/components/AddArticle.jsx

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function AddArticle(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/articles`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state
        setTitle("");
        setDescription("");
        props.refreshArticles();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddArticle">
      <h3>Write an article</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Share</button>
      </form>
    </div>
  );
}