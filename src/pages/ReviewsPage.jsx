// src/pages/ReviewsPage.jsx

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";  

const API_URL = "http://localhost:5005";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    
    const fetchReviews = async () => {
      try {
        console.log("Auth Token:", authToken); 
        const response = await axios.get(`${API_URL}/api/reviews`, {
          headers: {Authorization: `Bearer ${authToken}`, 
          },
        });
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [authToken]); 

  return (
        <div className="ReviewsPage">
          <div>
            <label htmlFor="search">Search by Name:</label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
    
          {reviews
      .filter((review) =>
        review.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((review) => (
        <div key={review.id}> 
          <h3>{review.title}</h3>
          <p>{review.description}</p>
        </div>
      ))}
        </div>
      );
};

export default ReviewsPage;
