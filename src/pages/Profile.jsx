// src/pages/Profile.jsx

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [userArticles, setUserArticles] = useState([]);
  const { logOutUser } = useContext(AuthContext)

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data);
        setUserArticles(response.data.articles);
      })
      .catch((error) => console.log(error));

    axios
      .get(`${API_URL}/api/articles`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUserArticles(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteUser = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .delete(`${API_URL}/api/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // console.log(response.data);
        alert("User deleted successfully");
        logOutUser()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="container text-center my-4 p-4" style={{ width: "70%", color:"#C5C6C7" }}>
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
            <p>Joined: {user.createdAt && formatDate(user.createdAt)}</p>

            <button className="delete-button" onClick={handleDeleteUser}>
              Delete User
            </button>
          </div>
        </div>
      )}

      {/* <div className="UserArticles">
        <h2>Your Articles</h2>
        {userArticles.map((article) => (
          <ArticleCard key={article._id} {...article} />
        ))}
      </div> */}
      <div className="UserArticles">
        <h2>Your Articles</h2>
        {userArticles.length > 0 ? (
          userArticles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))
        ) : (
          <p>You haven't published any articles yet.</p>
        )}
      </div>
    </div>
  );
}
