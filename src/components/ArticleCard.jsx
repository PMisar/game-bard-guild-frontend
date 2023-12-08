// src/components/ArticleCard.jsx
import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
export default function ArticleCard ( { title, description, _id } ) {
  
  return (
    <div className="ArticleCard card">
      <Link to={`/articles/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}