// src/pages/EditArticlePage.jsx

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap"; 

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
    <div className="EditArticlePage d-flex flex-column align-items-center justify-content-center">
      <h3>Edit the Article</h3>

      <form onSubmit={handleFormSubmit} className="w-75">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />

        <div className="d-grid gap-2 mt-3">
          <Button
            type="submit"
            variant="secondary"
            style={{ backgroundColor: "#0D2A4A" }}
          >
            Update Article
          </Button>
        </div>
      </form>

      <div className="d-grid gap-2 mt-3">
        <Button
          onClick={deleteArticle}
          variant="secondary"
          style={{ backgroundColor: "#0D2A4A" }}
        >
          Delete Article
        </Button>
      </div>
    </div>
  );
}
