// src/components/AddArticle.jsx

import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
// import { Button } from "react-bootstrap";
import CustomButton from "./Button";

const API_URL = "http://localhost:5005";

export default function AddArticle(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, image };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/articles`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setImage(null)
        props.refreshArticles();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="AddArticle d-flex flex-wrap justify-content-center align-items-center"
      style={{ paddingBottom: "30px" }}
    >
      <h3 className="w-100 mb-4">Write an article</h3>

      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            style={{ backgroundColor: "#BCD6E5" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            style={{ backgroundColor: "#BCD6E5" }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <label>
            Image:
            <input
              type="file"
              name="game-image"
              className="form-control-file"
              onChange={handleImageChange}
            />
          </label>
        </Form.Group>

        <CustomButton onClick={handleSubmit}>Share</CustomButton>
        
        {/* <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="secondary"
            style={{ backgroundColor: "#0D2A4A" }}
          >
            Share
          </Button>
        </div> */}

      </Form>
    </div>
  );
}


  //   return (
  //     <div className="AddArticle d-flex flex-wrap justify-content-center align-items-center" style={{ paddingBottom: '30px' }}>
  //       <h3 className="w-100 mb-4">Write an article</h3>

  //       <Form onSubmit={handleSubmit} className="w-100">
  //         <Form.Group className="mb-3">
  //           <Form.Control
  //             type="text"
  //             name="title"
  //             value={title}
  //             onChange={(e) => setTitle(e.target.value)}
  //             placeholder="Enter the title"
  //             style={{ backgroundColor: '#BCD6E5' }}
  //           />
  //         </Form.Group>

  //         <Form.Group className="mb-3">
  //           <Form.Control
  //             as="textarea"
  //             type="text"
  //             name="description"
  //             value={description}
  //             onChange={(e) => setDescription(e.target.value)}
  //             placeholder="Enter the description"
  //             style={{ backgroundColor: '#BCD6E5' }}
  //           />
  //         </Form.Group>

  //         <div className="d-grid gap-2">
  //           <Button
  //             type="submit"
  //             variant="secondary"
  //             style={{ backgroundColor: "#0D2A4A" }}
  //           >
  //             Share
  //           </Button>
  //         </div>
  //       </Form>
  //     </div>
  //   );
  // }

  // // src/components/AddArticle.jsx
  // import { useState } from 'react';
  // import { Form, Button } from 'react-bootstrap';
  // import axios from 'axios';

  // const API_URL = 'http://localhost:5005';

  // export default function AddArticle(props) {
  //   const [title, setTitle] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [image, setImage] = useState(null);

  //   const handleImageChange = (e) => {
  //     const file = e.target.files[0];
  //     setImage(file);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const formData = new FormData();
  //     formData.append('title', title);
  //     formData.append('description', description);
  //     formData.append('image', image);

  //     const storedToken = localStorage.getItem('authToken');

  //     try {
  //       const response = await axios.post(`${API_URL}/api/articles`, formData, {
  //         headers: {
  //           Authorization: `Bearer ${storedToken}`,
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       setTitle('');
  //       setDescription('');
  //       setImage(null);
  //       props.refreshArticles();
  //     } catch (error) {
  //       console.error('Error creating article:', error);
  //     }
  //   };

  