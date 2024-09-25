import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import CallToAction from '../CallToAction';
import Specials from '../Specials';
import CustomersSay from '../CustomersSay';
import Chicago from '../Chicago';
import Footer from '../Footer';

const Main = () => (
  <div>
    <Header />
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

export default Main;
