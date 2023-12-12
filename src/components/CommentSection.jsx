// // src/components/CommentSection.jsx

// import React from "react";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// export default function CommentSection({ articleId }) {
//   const [comments, setComments] = React.useState([]);
//   const [newComment, setNewComment] = React.useState("");

//   const getComments = () => {
//     const storedToken = localStorage.getItem("authToken");

//     axios
//       .get(`${API_URL}/api/comments/${articleId}`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) => {
//         setComments(response.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();

//     const storedToken = localStorage.getItem("authToken");

//     axios
//       .post(
//         // `${API_URL}/api/articles/${articleId}/comments`,
//         `${API_URL}/api/comments`,
//         { text: newComment, articleId },
//         { headers: { Authorization: `Bearer ${storedToken}` } }
//       )
//       .then((response) => {
//         setNewComment("");
//         getComments();
//       })
//       .catch((error) => console.log(error));
//   };

//   React.useEffect(() => {
//     getComments();
//   }, [articleId]);

//   return (
//     <div className="CommentSection d-flex flex-wrap justify-content-center align-items-center">
//       {comments &&
//         comments.map((comment) => (
//           <div key={comment._id}>
//             <p>{comment.text}</p>
//             {/* Display other comment details if needed */}
//           </div>
//         ))}

//       <Form onSubmit={handleCommentSubmit} className="w-100">
//         <Form.Group className="mb-3">
//           <Form.Control
//             as="textarea"
//             id="newComment"
//             name="newComment"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Add a comment..."
//           />
//         </Form.Group>

//         <div className="d-grid gap-2">
//           <Button
//             type="submit"
//             variant="secondary"
//             style={{ backgroundColor: "#0D2A4A" }}
//           >
//             Submit Comment
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }

// src/components/CommentSection.jsx

import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [characterCount, setCharacterCount] = React.useState(0);
  const maxCharacterLimit = 300;

  const getComments = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
    .get(`${API_URL}/api/articles/${articleId}/comments`, {
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
    <div className="CommentSection d-flex flex-wrap justify-content-center align-items-center">
      {comments &&
        comments.map((comment) => (
          <div key={comment._id}>
            <p>{comment.text}</p>
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
            style={{ backgroundColor: '#BCD6E5' }}
          />
          <small className="text-muted">
            Characters remaining: {maxCharacterLimit - characterCount}
          </small>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="secondary"
            style={{ backgroundColor: "#0D2A4A" }}
            disabled={characterCount >= maxCharacterLimit}
          >
            Submit Comment
          </Button>
        </div>
      </Form>
    </div>
    </div>
  );
}

