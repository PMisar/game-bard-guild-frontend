// src/components/ArticleDetails.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArticleDetails = ({ article, isAuthor, onLike, onUnlike }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="ArticleDetails" style={{ padding: '5% 10%' }}>
      {article && (
        <>
          <Row>
            <Col>
              <p>Author: {article.user && article.user.name}</p>
              <p>Written: {article.createdAt && formatDate(article.createdAt)}</p>
            </Col>
            <Col>
              <p>Tags: {article.tags && article.tags.join(', ')}</p>
              <p>Likes: {article.likes && article.likes.length}</p>
            </Col>
          </Row>

          {article.comments && article.comments.length > 0 && (
            <Link to={`/articles/${article._id}/comments`}>View Comments</Link>
          )}

          {isAuthor && (
            <Link to={`/articles/edit/${article._id}`}>
              <button
                className="articleDetailsButton"
                style={{
                  backgroundColor: "#0D2A4A",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Edit Article
              </button>
            </Link>
          )}

          <CommentSection articleId={article._id} />
        </>
      )}
    </div>
  );
};

export default ArticleDetails;