import React from 'react';
import { Link } from 'react-router-dom';

import littlelemon_logo from "../assets/littlelemon_logo.png"


const Nav = () => (
  <header>
    <nav>
      <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  </header>
);

export default Nav;
