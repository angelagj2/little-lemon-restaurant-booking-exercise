import React from 'react';

import Food1 from "../assets/greek salad.jpg";
import Food2 from "../assets/bruchetta.svg";
import Food3 from "../assets/lemon dessert.jpg";

import Deliveryicon from "../assets/moped.svg";
import { NavLink } from 'react-router-dom';

const Specials = () => {
  const specialMenus = [
    {   
        image: Food1,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        order: "Order a delivery"
    },
    {
        image: Food2,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        order: "Order a delivery"
    },
    {
        image: Food3,
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        order: "Order a delivery"
    }
  ];

  const specialMenusItems = specialMenus.map((menu, index) => { 
    const { image, title, price, description, order } = menu;
    
    return (
      <div key={index}> 
        <div className="highlight-card-container">
          <div className="image-container">
            <img src={image} alt={title} /> 
          </div>
          <div className="highlight-card-text">
            <div className='title-and-price'>
              <h2>{title}</h2>
              <h3 className="price-tag">{price}</h3>
            </div>
            <p>{description}</p>
            <NavLink to="#">
              <button>
                {order}
                <img 
                  src={Deliveryicon} 
                  style={{ color: "#333333", width: "30px", height: "30px", marginLeft: "10px"}} 
                  alt="Moped delivery icon"
                />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="highlights-container">
      <section className="highlights-section-title">
        <h1>This Week's Specials</h1>
        <button>Online Menu</button>
      </section>

      <div className="highlight-card">
        {specialMenusItems}
      </div>
    </div>
  );
};

export default Specials;
