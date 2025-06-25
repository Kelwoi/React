
import React from 'react';

const Artwork = ({ title, year, image, description }) => {
  return (
    <div className="artwork-card">
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{title} ({year})</h3>
      <p>{description}</p>
    </div>
  );
};

export default Artwork;
