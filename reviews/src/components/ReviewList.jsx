import React from "react";

export default function ReviewList({ reviews }) {
  return (
    <div className="review-list">
      <h2>Відгуки</h2>
      {reviews.length === 0 ? (
        <p>Ще немає відгуків.</p>
      ) : (
        reviews.map((r, idx) => (
          <div key={idx} className="review-card">
            <div className="review-header">
              <strong>{r.name}</strong> — {r.date}
            </div>
            <div className="review-rating">Оцінка: {r.rating}/5</div>
            <p><strong>Переваги:</strong> {r.pros}</p>
            <p><strong>Недоліки:</strong> {r.cons}</p>
            <p><strong>Коментар:</strong> {r.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
