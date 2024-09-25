import React from 'react';
import { Link } from 'react-router-dom';

import HeroImage from "../assets/restauranfood.jpg"


const CallToAction = () => (
  <section className="hero-section-background">
    <div className="hero-section-container">
      <div className="section-left">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button>Book Now</button>
        </Link>
      </div>
      <div className="section-right">
        <div className="image-box">
          <img src={HeroImage} alt="Serving delicious dish" />
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
