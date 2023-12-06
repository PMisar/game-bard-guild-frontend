// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";  
import { AuthContext } from "../context/auth.context";

export default function Navbar() {
 // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      {isLoggedIn && (
        <>
          {/* <Link to="/news">
            <button>News</button>
          </Link> */}
          {/* <Link to="/reviews">
            <button>Reviews</button>
          </Link> */}
          <Link to="/articles">
            <button>Articles</button>
          </Link>

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          {/* <Link to="news"> <button>News</button> </Link> */}
          <Link to="signup"> <button>Sign Up</button> </Link>
          <Link to="login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}