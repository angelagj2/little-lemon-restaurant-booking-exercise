import React from 'react';

import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.jpg';

const Chicago = () => (
  <section className="chicago-section">
    <div className="chicago-left">
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        Welcome to Little Lemon, a family-owned Mediterranean restaurant located in the heart of Chicago.
        Our menu brings together traditional Mediterranean recipes passed down through generations,
        blended with a modern twist to create a unique dining experience. Whether you're joining us
        for a casual lunch, a special evening, or a taste of something fresh, we promise a warm atmosphere
        and dishes that reflect the love we put into every meal.
      </p>
    </div>

    <div className="chicago-right">
      <div className="image-container image1">
        <img src={Image1} alt="Restaurant chef" />
      </div>
      <div className="image-container image2">
        <img src={Image2} alt="Restaurant chef" />
      </div>
    </div>
  </section>
);

export default Chicago;
