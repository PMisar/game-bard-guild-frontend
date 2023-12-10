// src/pages/SignupPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    marginTop: '10px',
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '10px',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '10px',
  };

  return (
    <div className="SignupPage" style={formStyle}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Nickname:</label>
        <input type="text" name="name" value={name} onChange={handleName} style={inputStyle} />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} style={inputStyle} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>

      {errorMessage && <p style={errorStyle}>{errorMessage}</p>}

      <p style={linkStyle}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
