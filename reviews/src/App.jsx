import React, { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import "./App.css";

export default function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="app-container">
      <ReviewForm onAddReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}
