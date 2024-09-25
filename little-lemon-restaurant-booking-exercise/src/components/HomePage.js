import React from 'react';

import Nav from './Nav';
import Footer from './Footer';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

const HomePage = () => (
  <div>
    <Nav />
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
    <Footer />
  </div>
);

export default HomePage;
