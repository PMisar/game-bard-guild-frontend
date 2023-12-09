// // src/pages/Profile.jsx

// import { useState, useEffect } from "react";
// import axios from "axios";
// import ArticleCard from "../components/ArticleCard";

// const API_URL = "http://localhost:5005";

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [userArticles, setUserArticles] = useState([]);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");

//     // Fetch user information
//     axios
//       .get(`${API_URL}/api/profile`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) => {
//         setUser(response.data);
//       })
//       .catch((error) => console.log(error));

//     // Fetch articles written by the user
//     axios
//       .get(`${API_URL}/api/articles`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) => {
//         setUserArticles(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="User">
//       {user && (
//         <>
//           <h1>Welcome, {user.name}!</h1>
//           <p>Email: {user.email}</p>
//         </>
//       )}

//       <h2>Your Articles</h2>
//       {userArticles.map((article) => (
//         <ArticleCard key={article._id} {...article} />
//       ))}
//     </div>
//   );
// }

// src/pages/Profile.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

const API_URL = "http://localhost:5005";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    // Fetch user information
    axios
      .get(`${API_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));

    // Fetch articles written by the user
    axios
      .get(`${API_URL}/api/articles`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUserArticles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="User">
      {user && (
        <>
          <div className="UserProfile">
            {user.profilePicture && (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            )}
            <div className="user-info">
              <h1>Welcome, {user.name}!</h1>
              <p>Email: {user.email}</p>
              <button onClick={() => handleDeleteUser(user._id)}>
                Delete User
              </button>
            </div>
          </div>
        </>
      )}

      <h2>Your Articles</h2>
      {userArticles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div>
  );
}