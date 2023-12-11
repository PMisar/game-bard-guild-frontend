// src/components/ArticleCard.jsx

import { Link } from "react-router-dom";

export default function ArticleCard({ title, description, _id }) {
  return (
    <div className="ArticleCard card d-flex flex-column align-items-center justify-content-center">
      <Link to={`/articles/${_id}`}>
        <h3 className="text-center">{title}</h3>
      </Link>
      <p className="text-center" style={{ maxWidth: "70%" }}>
        {description}
      </p>
    </div>
  );
}