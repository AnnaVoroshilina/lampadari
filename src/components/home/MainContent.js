import React from 'react';
import Header from '../shared/Header';
import BackgroundSlider from './BackgroundSlider';
import Footer from './Footer';

function MainContent() {
  return (
    <div className="container">
      <BackgroundSlider>
        <Header />
      </BackgroundSlider>
      <Footer />
    </div>
  );
}

export default MainContent;
