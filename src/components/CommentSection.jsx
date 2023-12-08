// src/components/CommentSection.jsx

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const getComments = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/comments/${articleId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(
        `${API_URL}/api/comments`,
        { text: newComment, articleId },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setNewComment("");
        getComments(); 
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getComments();
  }, [articleId]);

  return (
    <div className="CommentSection">
      <h3>Comments</h3>

      {comments &&
        comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.text}</p>
            {/* Display other comment details if needed */}
          </div>
        ))}

      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="newComment">Add a comment:</label>
        <textarea
          id="newComment"
          name="newComment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
