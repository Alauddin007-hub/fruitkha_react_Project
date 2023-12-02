import React from 'react'
import HomeSlider from '../Components/HomeSlider'
import Feature from '../Components/Feature'
import Products from '../Components/Products'
import CartBanner from '../Components/CartBanner'
import Testimonial from '../Components/Testimonial'
import Advertisment from '../Components/Advertisment'
import ShopBanner from '../Components/ShopBanner'
import LatestNews from '../Components/LatestNews'
import LogoSlider from '../Components/LogoSlider'

const Home = () => {
  return (
    <>
       <HomeSlider />
       <Feature />
        <Products />
        <CartBanner />
        <Testimonial />
        <Advertisment />
        <ShopBanner />
        <LatestNews />
        <LogoSlider />
    </>
  )
}

export default Home