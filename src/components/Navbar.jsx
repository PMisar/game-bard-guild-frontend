// src/components/Navbar.jsx

import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const CustomNavbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navbarStyle = {
    backgroundColor: "#0B0C10",
    color: "#C5C6C7"
  };

  const brandStyle = {
    marginLeft: "10px",
  };

  const welcomeTextStyle = {
    marginRight: "10px",
  }; 

  return (
    // collapseOnSelect + eventKey="1" to collapse on link click
    <Navbar collapseOnSelect variant="dark" style={navbarStyle} expand="md">
      <Navbar.Brand as={Link} to="/" style={brandStyle}>
        <img
          src="/images/Gamebard.png"
          width="140"
          height="30"
          className="d-inline-block align-top"
          alt="GameBard Guild"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none' }} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link eventKey="3" as={Link} to="/reviews" className="custom-link">
                Reviews
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/articles" className="custom-link">
                Articles
              </Nav.Link>
              <Nav.Link eventKey="5" as={Link} to="/profile" className="custom-link">
                Profile
              </Nav.Link>
              <Nav.Link eventKey="6" onClick={logOutUser} className="custom-link">Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link eventKey="8" as={Link} to="/login" className="custom-link">
                Login
              </Nav.Link>
              <Nav.Link eventKey="9" as={Link} to="/signup" className="custom-link">
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
        {isLoggedIn && (
          <span className="navbar-text" style={welcomeTextStyle}>Welcome, {user.name}</span>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;