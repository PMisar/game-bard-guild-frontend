// src/pages/ReviewsPage.jsx

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth.context";

// const API_URL = "http://localhost:5005";
const API_URL = "https://game-bard-guild-backend.onrender.com";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/releases/`, {
          headers: { Authorization: `Bearer ${storedToken}` },
          params: { gameName: "defaultGameName" },
        });
        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!reviews.length) return <div>Loading...</div>;

  return (
    <div className="ReviewsPage">
      <div>
        <h3>Hall of Fame 2023</h3>
        <label htmlFor="search" style={{ margin: "50px 0px" }}>
          Search by Name:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {reviews
        .filter(
          (review) =>
            review.name &&
            review.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((review) => (
          <div key={review.id}>
            <h3>{review.name}</h3>
            <p>Release date: {formatDate(review.firstReleaseDate)}</p>
            <p>Tier: {review.tier}</p>
            <p>Critic score: {review.topCriticScore}</p>
          </div>
        ))}
    </div>
  );
};

export default ReviewsPage;
