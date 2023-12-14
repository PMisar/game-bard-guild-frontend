// src/components/CommentSection.jsx

import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [characterCount, setCharacterCount] = React.useState(0);
  const maxCharacterLimit = 200;

  const getComments = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/articles/${articleId}/comments`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //       setComments(response.data);
        //     })
        //     .catch((error) => console.log(error));
        // };
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

            <p>{comment.user.name}:</p>
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
          <small className="text-muted" style={{ color: "#C5C6C7" }}>
            Characters remaining: {maxCharacterLimit - characterCount}
          </small>
        </Form.Group>

        <button
          type="submit" className="articleDetailsButton"
          disabled={characterCount >= maxCharacterLimit}
          // style={{
          //   backgroundColor: "#C5C6C7",
          //   borderColor: "#C5C6C7",
          //   borderRadius: "50px",
          //   color: "#1F2833",
          // }}
        >
          Submit Comment
        </button>
      </Form>
    </div>
  );
}
