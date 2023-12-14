// // src/pages/SignupPage.jsx

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// export default function SignupPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [errorMessage, setErrorMessage] = useState(undefined);

//   const navigate = useNavigate();

//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);
//   const handleName = (e) => setName(e.target.value);

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     const requestBody = { email, password, name };

//     axios
//       .post(`${API_URL}/auth/signup`, requestBody)
//       .then(() => {
//         navigate("/login");
//       })
//       .catch((error) => {
//         const errorDescription = error.response.data.message;
//         setErrorMessage(errorDescription);
//       });
//   };

//   const formStyle = {
//     maxWidth: "400px",
//     margin: "auto",
//     padding: "20px",
//     textAlign: "center",
//   };

//   const inputStyle = {
//     width: "100%",
//     marginTop: "10px",
//   };

//   const errorStyle = {
//     color: "red",
//     marginTop: "10px",
//   };

//   const linkStyle = {
//     display: "block",
//     marginTop: "10px",
//   };

//   return (
//     <div className="SignupPage" style={formStyle}>
//       <h1>Sign Up</h1>

//       <form onSubmit={handleSignupSubmit}>
//         <label>Nickname:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleName}
//           style={inputStyle}
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleEmail}
//           style={inputStyle}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handlePassword}
//           style={inputStyle}
//         />

//         <button className="articleDetailsButton" type="submit">
//           Sign Up
//         </button>
//       </form>

//       {errorMessage && <p style={errorStyle}>{errorMessage}</p>}

//       <p style={linkStyle}>
//         Already have an account? <Link to="/login"  style={{ textDecoration: "none" }}>Login</Link>
//       </p>
//     </div>
//   );
// }

// src/pages/SignupPage.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
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
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (

    // <div className="LoginPage" style={{ marginTop: '12vh' }}>
    // <h1>Login</h1>

    <div className="SignupPage" style={{ marginTop: '12vh' }}>
      <h1>Sign Up</h1>
      
      <Form 
            style={{ maxWidth: "400px", margin: "auto" }}

      onSubmit={handleSignupSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nickname:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <button className="articleDetailsButton" variant="primary" type="submit">
          Sign Up
        </button>
      </Form>

      {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}

      <p style={{ display: "block", marginTop: "10px" }}>
        Already have an account? <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
      </p>
    </div>
  );
}
