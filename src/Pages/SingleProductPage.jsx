import React from 'react';
import SingleProductHero from '../Components/SingleProductHero';
import SingleProduct from './SingleProduct';
import Products from '../Components/Products';
import LogoSlider from '../Components/LogoSlider';

const SingleProductPage = () => {
  return (
    <>
        <SingleProductHero />
        <SingleProduct />
        <Products />
        <LogoSlider />
    </>
  )
}

export default SingleProductPage