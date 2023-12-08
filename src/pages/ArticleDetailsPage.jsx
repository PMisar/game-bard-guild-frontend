// src/pages/ArticleDetailsPage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import CommentSection from "../components/CommentSection";

const API_URL = "http://localhost:5005";

export default function ArticleDetailsPage (props) {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  
  //BEFORE
  // const getArticle = () => {
  //   axios
  //     .get(`${API_URL}/api/articles/${articleId}`)
  //     .then((response) => {
  //     	const oneArticle = response.data;
  //     	setArticle(oneArticle);
  //   	})
  //     .catch((error) => console.log(error));
  // };

  //AFTER ADDING VALID JWT IN REQUEST HEADERS
  const getArticle = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/articles/${articleId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        const oneArticle = response.data;
        setArticle(oneArticle);
      })
      .catch((error) => console.log(error));
  };
  
  useEffect(()=> {
    getArticle();
  }, [] );

  
  return (
    <div className="ArticleDetails">
    
      {article && (
        <>
          <h1>{article.title}</h1>
          <p>{article.description}</p>

          {article.image && <img src={article.image} alt="Article" />}

<p>User: {article.user && article.user.username}</p>

<p>Tags: {article.tags && article.tags.join(", ")}</p>

<p>Comments: {article.comments && article.comments.length}</p>

<p>Favorites: {article.favorites && article.favorites.length}</p>

<p>Likes: {article.likes && article.likes.length}</p>

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