// src/pages/EditArticlePage.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function EditArticlePage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const { articleId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles/${articleId}`)
      .then((response) => {
        const oneArticle = response.data;
        setTitle(oneArticle.title);
        setDescription(oneArticle.description);
      })
      .catch((error) => console.log(error));
    
  }, [articleId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };
  
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
  
    axios
      .put(`${API_URL}/api/articles/${articleId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/articles/${articleId}`);
      })
      .catch((error) => console.log(error));
  };
  
  
  const deleteArticle = () => {
    const storedToken = localStorage.getItem("authToken");
    
    axios
    .delete(`${API_URL}/api/articles/${articleId}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })      
    .then(() => {
        navigate("/articles");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditArticlePage">
      <h3>Edit the Article</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Article</button>
      </form>

      <button onClick={deleteArticle}>Delete Article</button>
    </div>
  );
}