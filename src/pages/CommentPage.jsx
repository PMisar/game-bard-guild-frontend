// CommentPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";

const CommentPage = () => {
  const { articleId } = useParams();

  return (
    <div>
      <h2>Article Comments</h2>
      <CommentSection articleId={articleId} />
    </div>
  );
};

export default CommentPage;
