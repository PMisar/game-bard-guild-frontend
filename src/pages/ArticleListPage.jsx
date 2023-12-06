// src/pages/ArticleListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";

import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";

const API_URL = "http://localhost:5005";

export default function ArticleListPage() {
  const [articles, setArticles] = useState([]);

  // BEFORE
  // const getAllArticles = () => {
  //   axios
  //     .get(`${API_URL}/api/articles`)
  //     .then((response) => setArticles(response.data))
  //     .catch((error) => console.log(error));
  // };

  // AFTER
  const getAllArticles = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/articles`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className="ArticleListPage">
      <AddArticle refreshArticles={getAllArticles} />

      {articles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  );
}