import React from 'react';

import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';

const testimonials = [
  {
    rating: 5,
    name: 'John Doe',
    image: person1,
    text: 'The food was amazing! The Mediterranean flavors were perfect. I highly recommend the lamb dish.',
  },
  {
    rating: 5,
    name: 'Jane Smith',
    image: person2,
    text: 'Fantastic restaurant! The atmosphere was great, and the service was excellent. Best falafel I have ever had!',
  },
  {
    rating: 4,
    name: 'Mike Johnson',
    image: person3,
    text: 'Great food and service! The hummus was delicious, but I found the pita bread to be slightly dry.',
  },
  {
    rating: 5,
    name: 'Emily Brown',
    image: person4,
    text: 'Loved the entire experience! From the warm pita to the grilled vegetables, everything was top-notch.',
  },
];

const CustomersSay = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-title-wrapper">
        <h1>What Our Customers Say</h1>
      </div>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((star, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="#F4CE14" viewBox="0 0 24 24" width="20" height="20">
                  <path d="M12 .587l3.668 7.571 8.332 1.151-6.063 5.731 1.582 8.163L12 18.896l-7.519 4.307 1.582-8.163-6.063-5.731 8.332-1.151z"/>
                </svg>
              ))}
            </div>
            <div className="testimonial-info">
              <div className="image-container" style={{ backgroundImage: `url(${testimonial.image})` }}></div>
              <h3>{testimonial.name}</h3>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;



