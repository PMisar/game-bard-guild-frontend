// src/pages/ArticleListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";
import CommentSection from "../components/CommentSection";
import ArticleDetails from "../components/ArticleDetails";

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
  
  // const handleLike = () => {
  //   const storedToken = localStorage.getItem("authToken");

  //   axios
  //     .put(
  //       `${API_URL}/api/articles/${articleId}/like`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       }
  //     )
  //     .then((response) => {
  //       setArticle(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const handleUnlike = () => {
  //   const storedToken = localStorage.getItem("authToken");
  //   console.log("Unliking article with ID:", article._id);

  //   axios
  //     .put(
  //       `${API_URL}/api/articles/${articleId}/unlike`,
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${storedToken}` },
  //       }
  //     )
  //     .then((response) => {
  //       setArticle(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
<div className="container text-center my-4 p-4" style={{ backgroundColor: '#98CEE0'  }}>
      <div className="ArticleListPage">
        <AddArticle refreshArticles={getAllArticles} />

        {articles.map((article) => (
          <div key={article._id}>
            <ArticleCard {...article} />
            <ArticleDetails article={article} /> 
            {/* <button
            className={`btn ${
              article.likes && article.likes.length > 0
                ? "btn-success"
                : "btn-outline-success"
            }`}
            onClick={handleLike}
          >
            Like
          </button>
          <button
            className={`btn ${
              article.likes && article.likes.length === 0
                ? "btn-danger"
                : "btn-outline-danger"
            }`}
            onClick={handleUnlike}
          >
            Unlike
          </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}


// AYKUTS CODE
// // src/pages/ArticleListPage.jsx

// import { useState, useEffect } from "react";
// import axios from "axios";
// import ArticleCard from "../components/ArticleCard";
// import AddArticle from "../components/AddArticle";
// import CommentSection from "../components/CommentSection";
// import ArticleDetails from "../components/ArticleDetails";

// const API_URL = "http://localhost:5005";

// export default function ArticleListPage() {
//   const [articles, setArticles] = useState([]);
//   const [articleId, setArticleId] = useState("");
//   const getAllArticles = () => {
//     const storedToken = localStorage.getItem("authToken");

//     axios
//       .get(`${API_URL}/api/articles`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) => setArticles(response.data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getAllArticles();
//   }, []);

//   const handleLike = (articleIdForLike) => {
//     const storedToken = localStorage.getItem("authToken");
//     console.log("Like article with ID:", articleIdForLike);
//     setArticleId(articleIdForLike);
//     axios
//       .put(
//         `${API_URL}/api/articles/${articleId}/like`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         }
//       )
//       .then((response) => {
//         setArticles(response.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleUnlike = (articleIdForDelete) => {
//     const storedToken = localStorage.getItem("authToken");
//     console.log("Unliking article with ID:", articleIdForDelete);
//     setArticleId(articleIdForDelete);
//     axios
//       .put(
//         `${API_URL}/api/articles/${articleId}/unlike`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         }
//       )
//       .then((response) => {
//         setArticles(response.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="container text-center my-4 p-4 border">
//       <div className="ArticleListPage">
//         <AddArticle refreshArticles={getAllArticles} />
//         {articles.length ? (
//           <div>
//             {articles.map((article) => (
//               <div key={article._id}>
//                 <ArticleCard {...article} />
//                 {/* <ArticleDetails article={article} /> */}
//                 <button
//                   className={`btn ${
//                     article.likes && article.likes.length > 0
//                       ? "btn-success"
//                       : "btn-outline-success"
//                   }`}
//                   onClick={() => handleLike(article._id)}
//                 >
//                   Like
//                 </button>
//                 <button
//                   className={`btn ${
//                     article.likes && article.likes.length === 0
//                       ? "btn-danger"
//                       : "btn-outline-danger"
//                   }`}
//                   onClick={() => handleUnlike(article._id)}
//                 >
//                   Unlike
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }
