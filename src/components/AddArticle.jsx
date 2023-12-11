// src/components/AddArticle.jsx

import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import CustomButton from "./Button"; 

const API_URL = "http://localhost:5005";

export default function AddArticle(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/articles`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        props.refreshArticles();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddArticle d-flex flex-wrap justify-content-center align-items-center" style={{ paddingBottom: '30px' }}>
      <h3 className="w-100 mb-4">Write an article</h3>

      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            style={{ backgroundColor: '#BCD6E5' }}
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
            style={{ backgroundColor: '#BCD6E5' }}
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="secondary"
            style={{ backgroundColor: "#0D2A4A" }}
          >
            Share
          </Button>
        </div>
      </Form>
    </div>
  );
}