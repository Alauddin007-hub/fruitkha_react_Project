import React from 'react';
import AboutHero from '../Components/AboutHero';
import AboutFeature from '../Components/AboutFeature';
import ShopBanner from '../Components/ShopBanner';
import AboutTeam from '../Components/AboutTeam';
import Testimonial from '../Components/Testimonial';
import LogoSlider from '../Components/LogoSlider';

const AboutPage = () => {
  return (
    <>
        <AboutHero />
        <AboutFeature />
        <ShopBanner />
        <AboutTeam />
        <Testimonial />
        <LogoSlider />
    </>
  )
}

export default AboutPage