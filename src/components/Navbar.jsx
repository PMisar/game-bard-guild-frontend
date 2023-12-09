// src/components/Navbar.jsx

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const CustomNavbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navbarStyle = {
    backgroundColor: "#171B2B",
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link eventKey="2" as={Link} to="/news">
              News
            </Nav.Link>
              <Nav.Link eventKey="3" as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link eventKey="4" as={Link} to="/articles">
                Articles
              </Nav.Link>
              <Nav.Link eventKey="5" as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link eventKey="6" onClick={logOutUser}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link eventKey="7" as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link eventKey="8" as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link eventKey="9" as={Link} to="/login">
                Login
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