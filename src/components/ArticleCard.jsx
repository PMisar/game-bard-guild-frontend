// src/components/ArticleCard.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ title, description, _id, imageUrl }) {
  return (
    <div className="ArticleCard card d-flex flex-column align-items-center justify-content-center" style={{ backgroundColor: "#BCD6E5" }}>
      <Link
        to={`/articles/${_id}`}
        style={{
          maxWidth: "90%",
          paddingTop: "20px",
          paddingBottom: "20px",
          textDecoration: "none",
        }}
      >
       
        <h3 className="text-center">{title}</h3>
      </Link>

      {imageUrl && (
          <img
            src={imageUrl}
            alt="Article"
            style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
          />
        )}
      <p className="text-center" style={{ maxWidth: "80%", paddingBottom: "20px" }}>
        {description}
      </p>
      
    </div>
  );
}