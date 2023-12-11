// src/pages/Profile.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { Button } from "react-bootstrap";

const API_URL = "http://localhost:5005";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    // Fetch user information
    axios
      .get(`${API_URL}/api/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data);
        setUserArticles(response.data.articles);
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
    <div className="UserProfileContainer">
      {user && (
        <div className="UserProfile">
          <div className="ProfilePicture">
            {user.profilePicture && (
              <img
                src={user.profilePicture}
                alt="Profile"
                className="profile-picture"
              />
            )}
          </div>
          <div className="UserInfo">
            <h1>Your Profile</h1>
            <hr />
            <p>Username: {user.name}</p>
            <p>Email: {user.email}</p>

            <Button variant="danger" onClick={() => handleDeleteUser(user._id)}>
            Delete User
          </Button>
          </div>
        </div>
      )}
      
      <div className="UserArticles">
        <h2>Your Articles</h2>
        {userArticles.map((article) => (
          <ArticleCard key={article._id} {...article} />
        ))}
      </div>
    </div>
  );
}

{/* <h2>Your Articles</h2>
      {userArticles.map((article) => (
        <ArticleCard key={article._id} {...article} />
      ))}
    </div> */}