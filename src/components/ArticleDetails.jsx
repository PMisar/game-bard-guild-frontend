import React from 'react';
import { Link } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArticleDetails = ({ article, onLike, onUnlike }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="ArticleDetails" style={{ padding: '10%' }}>
      {article && (
        <>

          {article.image && <img src={article.image} alt="Article" />}

          <Row>
            <Col>
              <p>User: {article.user && article.user.name}</p>
              <p>Created: {article.createdAt && formatDate(article.createdAt)}</p>
            </Col>
            <Col>
              <p>Tags: {article.tags && article.tags.join(', ')}</p>
              <p>Likes: {article.likes && article.likes.length}</p>
            </Col>
          </Row>

          <button onClick={onLike}>Like</button>
          <button onClick={onUnlike}>Unlike</button>

          {article.comments && article.comments.length > 0 && (
            <Link to={`/articles/${article._id}/comments`}>View Comments</Link>
          )}

          <CommentSection articleId={article._id} />
        </>
      )}
    </div>
  );
};

export default ArticleDetails;
