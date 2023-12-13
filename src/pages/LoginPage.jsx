// src/pages/LoginPage.jsx

import React, { useState, useContext } from "react";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="page-content">
      <div className="LoginPage" style={{ padding: "20%" }}>
        <h1>Login</h1>

        <Form
          style={{ maxWidth: "400px", margin: "auto" }}
          onSubmit={handleLoginSubmit}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmail}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
          </Form.Group>

          <button className="articleDetailsButton" type="submit">
            Login
          </button>
        </Form>

        {errorMessage && (
          <Alert variant="danger" style={{ marginTop: "10px" }}>
            {errorMessage}
          </Alert>
        )}

        <p style={{ marginTop: "10px" }}>Don't have an account yet?</p>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
