// src/pages/ArticleListPage.jsx

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";
import ArticleDetails from "../components/ArticleDetails";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user._id);
  const getAllArticles = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/articles`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  const handleLike = (articleId) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${API_URL}/api/articles/${articleId}/like`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(getAllArticles)
      .catch((error) => console.log(error));
  };

  const handleUnlike = (articleId) => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${API_URL}/api/articles/${articleId}/unlike`,
        {},
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(getAllArticles)
      .catch((error) => console.log(error));
  };
  
  return (
    <div
      className="container text-center my-4 p-4"
      style={{
        border: "solid 1px",
        borderColor: "#00C6F8",
        borderRadius: "10px",
        backgroundColor: "#1F2833",
        width: "70%",
      }}
    >
      <div className="ArticleListPage">
        <AddArticle refreshArticles={getAllArticles} />
        <hr />
        {articles.map((article) => (
          <div key={article._id}>
            <ArticleCard {...article} />
            <button
              style={{ marginTop: "35px", marginBottom: "0px" }}
              className={
                article.likes.includes(user._id)
                  ? "unlike-button"
                  : "like-button"
              }
              onClick={() => {
                article.likes.includes(user._id)
                  ? handleUnlike(article._id)
                  : handleLike(article._id);
              }}
            >
              {article.likes.includes(user._id) ? "Unlike" : "Like"}
            </button>
            <ArticleDetails article={article} />

            
          </div>
        ))}
      </div>
    </div>
  );
}
