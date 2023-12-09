// src/pages/ArticleListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";
import CommentSection from "../components/CommentSection";
import ArticleDetailsPage from "./ArticleDetailsPage";

const API_URL = "http://localhost:5005";

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);

  const getAllArticles = () => {
    const storedToken = localStorage.getItem("authToken");
   
    axios
      .get(
      `${API_URL}/api/articles`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className="container text-center my-4 p-4 border">

    <div className="ArticleListPage">
      <AddArticle refreshArticles={getAllArticles} />

      {articles.map((article) => (
        <div key={article._id}>
        <ArticleCard {...article} />        
        <CommentSection articleId={article._id} /> {/* Add CommentSection for each article */}
      </div>
      ))}
    </div>
    </div>
  );
}