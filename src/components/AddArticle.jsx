// src/components/AddArticle.jsx

import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import CustomButton from "./Button";

const API_URL = "http://localhost:10000";

export default function AddArticle(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/articles`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setImage(null);
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

      <Form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="w-100"
      >
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

        <Form.Group>
        <label>
          Image:
          <input
            type="file"
            name="image"
            className="form-control-file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
        </Form.Group>
        
        <CustomButton onClick={handleSubmit}>Share</CustomButton>
      </Form>
    </div>
  );
}
