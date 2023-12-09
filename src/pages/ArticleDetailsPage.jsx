// src/pages/ArticleDetailsPage.jsx

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/CommentSection";

const API_URL = "http://localhost:5005";

export default function ArticleDetailsPage(props) {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();

  const getArticle = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/api/articles/${articleId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneArticle = response.data;
        setArticle(oneArticle);
      })
      .catch((error) => console.log(error));
  };

  const handleLike = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${API_URL}/api/articles/${articleId}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleUnlike = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${API_URL}/api/articles/${articleId}/unlike`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getArticle();
  }, []);

  // Format date to show only DD/MM/YYYY
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString(); // Format the date as you need
  };

  return (
    <div className="ArticleDetails">
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>

          {article.image && <img src={article.image} alt="Article" />}

          <p>User: {article.user && article.user.name}</p>
          <p>Created: {article.createdAt && formatDate(article.createdAt)}</p>

          <p>Tags: {article.tags && article.tags.join(", ")}</p>
          <p>Likes: {article.likes && article.likes.length}</p>

          {/* Display like and unlike buttons */}
          <button onClick={handleLike}>Like</button>
          <button onClick={handleUnlike}>Unlike</button>

          {/* Only show the "View Comments" link if there are comments */}
          {article.comments && article.comments.length > 0 && (
            <Link to={`/articles/${articleId}/comments`}>View Comments</Link>
          )}

          <CommentSection articleId={articleId} />
        </>
      )}

      <Link to="/articles">
        <button>Back to articles</button>
      </Link>

      <Link to={`/articles/edit/${articleId}`}>
        <button>Edit Article</button>
      </Link>
    </div>
  );
}
