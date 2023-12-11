// src/components/Profile.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const ProfileComponent = ({ userId }) => {
  const [user, setUser] = useState(null);

  const getUserInfo = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserInfo();
  }, [userId]);

  return (
    <div className="Profile">
      {user && (
        <>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add other user information as needed */}
        </>
      )}
    </div>
  );
};

export default ProfileComponent;
