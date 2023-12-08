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

  return (
    <Navbar variant="dark" style={navbarStyle} expand="md">
      <Navbar.Brand as={Link} to="/">
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
        <Nav className="mr-auto">
          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/articles">
                Articles
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link onClick={logOutUser}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
        {isLoggedIn && <span className="navbar-text">Welcome, {user.name}</span>}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;


// export default function Navbar() {
//  // Subscribe to the AuthContext to gain access to
//   // the values from AuthContext.Provider `value` prop
//   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

//   return (
//     <nav>
//       <Link to="/">
//         <button>Home</button>
//       </Link>

//       {isLoggedIn && (
//         <>
//           {/* <Link to="/news">
//             <button>News</button>
//           </Link> */}
//           <Link to="/reviews">
//             <button>Reviews</button>
//           </Link>
//           <Link to="/articles">
//             <button>Articles</button>
//           </Link>

//           <button onClick={logOutUser}>Logout</button>
//           <span>{user && user.name}</span>
//         </>
//       )}

//       {!isLoggedIn && (
//         <>
//           {/* <Link to="news"> <button>News</button> </Link> */}
//           <Link to="signup"> <button>Sign Up</button> </Link>
//           <Link to="login"> <button>Login</button> </Link>
//         </>
//       )}
//     </nav>
//   );
// }