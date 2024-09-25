import React from 'react';
import { Link } from 'react-router-dom';
import VerticalLogoWhite from '../assets/vertical_logo_white.png';

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div>
        <img src={VerticalLogoWhite} alt="Little Lemon Logo" />
      </div>
      <div>
        <h2>Doormat Navigation</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>1234 Lemon St, Chicago, IL</li>
          <li>(555) 123-4567</li>
          <li>info@littlelemon.com</li>
        </ul>
      </div>
      <div>
        <h2>Social Media Links</h2>
        <ul className="social-media">
          <li><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
    <p>&copy; 2024 Little Lemon. All rights reserved.</p>
  </footer>
);

export default Footer;
