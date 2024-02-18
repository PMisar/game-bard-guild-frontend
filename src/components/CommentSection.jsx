// src/components/CommentSection.jsx

import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "http://localhost:10000";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [characterCount, setCharacterCount] = React.useState(0);
  const maxCharacterLimit = 150;

  const getComments = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/articles/${articleId}/comments`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const populatedComments = response.data.map((comment) => ({
          ...comment,
          user: comment.userId,
        }));
        setComments(populatedComments);
      })
      .catch((error) => console.log(error));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/api/articles/${articleId}/comments`,
        { comment: newComment, articleId },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setNewComment("");
        getComments();
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    getComments();
  }, [articleId]);

  const handleCommentChange = (e) => {
    const commentText = e.target.value;
    setNewComment(commentText);
    setCharacterCount(commentText.length);
  };

  return (
    <div className="comment-section">
      {comments &&
        comments.map((comment) => (
          <div key={comment._id} className="comment-container">
            <p className="timestamp">
              {new Date(comment.createdAt).toLocaleString()}:
            </p>

            <p>{comment.user.name} wrote:</p>
            <p>{comment.comment}</p>
          </div>
        ))}

      <Form onSubmit={handleCommentSubmit} className="w-100">
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            id="newComment"
            name="newComment"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            style={{ backgroundColor: "#BCD6E5" }}
          />
          <small className="text" style={{ color: "white" }}>
            Characters remaining: {maxCharacterLimit - characterCount}
          </small>
        </Form.Group>

        <button
          type="submit"
          className="articleDetailsButton"
          disabled={characterCount >= maxCharacterLimit}
        >
          Submit Comment
        </button>
      </Form>
    </div>
  );
}
