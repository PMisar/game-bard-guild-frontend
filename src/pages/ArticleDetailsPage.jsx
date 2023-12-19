// src/pages/ArticleDetailsPage.jsx

import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentSection from "../components/CommentSection";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

export default function ArticleDetailsPage() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    getArticle();
  }, []);

  // Format date to show only DD/MM/YYYY
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const isAuthor = article && user && article.user && article.user._id === user._id;
  
  return (
    <div className="ArticleDetails" style={{ padding: "10%", margin: "20px" }}>
      {article && (
        <>
          <h1>{article.title}</h1>
          <img
            src={article.imageUrl}
            style={{ width: "100%", paddingTop: "30px", paddingBottom: "30px" }}
          />
          <p>{article.description}</p>

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

          {article.comments && article.comments.length > 0 && (
            <Link to={`/articles/${articleId}/comments`}>View Comments</Link>
          )}

          <CommentSection articleId={articleId} />
        </>
      )}

      <Link to="/articles" className="articleDetailsButton">
        <button
          style={{
            backgroundColor: "#1F2833",
            color: "#C5C6C7",
            textDecoration: "none",
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          Back to Articles
        </button>
      </Link>
      
      {isAuthor && (
        <Link to={`/articles/edit/${articleId}`} className="articleDetailsButton">
          <button
            style={{
              backgroundColor: "#1F2833",
              color: "#C5C6C7",
              textDecoration: "none",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            Edit Article
          </button>
        </Link>
      )}
    </div>
  );
}
