// src/App.jsx
import React from 'react';
import Artwork from './components/Artwork';
import { artworks } from './data/artworks';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Вінсент Ван Гог</h1>
      <p><strong>Біографія:</strong> Ван Гог — нідерландський постімпресіоніст, чия творчість мала величезний вплив на мистецтво XX століття.</p>
      <p><strong>Історія:</strong> Незважаючи на труднощі в житті та психічні розлади, він створив понад 2 000 творів мистецтва. Помер у 1890 році у віці 37 років.</p>

      <h2>Колекція робіт</h2>
      <div className="artworks-grid">
        {artworks.map((art, index) => (
          <Artwork key={index} {...art} />
        ))}
      </div>
    </div>
  );
};

export default App;
