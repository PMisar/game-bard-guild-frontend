// src/pages/ArticleDetailsPage.jsx

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/CommentSection";
import ArticleDetails from "../components/ArticleDetails";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_URL = "http://localhost:5005";

export default function ArticleDetailsPage(props) {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();

  const getArticle = () => {
    const storedToken = localStorage.getItem("authToken");

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
    console.log("Liking article with ID:", article.id);

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
    console.log("Unliking article with ID:", article.id);

    axios
      .delete(
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
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="ArticleDetails" style={{ padding: "10%", margin: "20px" }}>
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>

          {article.image && <img src={article.image} alt="Article" />}

          <Row>
            <Col>
              <p>User: {article.user && article.user.name}</p>
              <p>
                Written: {article.createdAt && formatDate(article.createdAt)}
              </p>
            </Col>
            <Col>
              <p>Tags: {article.tags && article.tags.join(", ")}</p>
              <p>Likes: {article.likes && article.likes.length}</p>
            </Col>
          </Row>

          <button className="like-button" onClick={handleLike}>
            Like
          </button>
          <button className="unlike-button" onClick={handleUnlike}>
            Unlike
          </button>

          {/* Only show the "View Comments" link if there are comments */}
          {article.comments && article.comments.length > 0 && (
            <Link to={`/articles/${articleId}/comments`}>View Comments</Link>
          )}

          <CommentSection articleId={articleId} />
        </>
      )}

      <Link to="/articles">
        <button
          className="articleDetailsButton"
          style={{
            backgroundColor: "#0D2A4A",
            color: "white",
            textDecoration: "none",
          }}
        >
          Back to Articles
        </button>{" "}
      </Link>

      <Link to={`/articles/edit/${articleId}`}>
        <button
          className="articleDetailsButton"
          style={{
            backgroundColor: "#0D2A4A",
            color: "white",
            textDecoration: "none",
          }}
        >
          Edit Article
        </button>
      </Link>
    </div>
  );
}
