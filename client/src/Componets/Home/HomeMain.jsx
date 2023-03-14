import React from 'react';
import Navigation from '../GeneralComponets/Navigation';
import HeroImage from './HeroImage';
import HeroSection from './HeroSection';
import HomeClientSection from './HomeClientSection';
import HomeConnectSection from './HomeConnectSection';
import HomeServices from './HomeServices';

function HomeMain() {
  return (
    <div className="Home-Main-Container">
      <Navigation />
      <HeroImage />
      <HeroSection />
      <HomeServices />
      <HomeClientSection />
      <HomeConnectSection />
    </div>
  );
}

export default HomeMain;
