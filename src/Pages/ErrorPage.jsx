import React from 'react';
import ErrorHero from '../Components/ErrorHero';
import LogoSlider from '../Components/LogoSlider';
import ErrorMsg from '../Components/ErrorMsg';

const ErrorPage = () => {
  return (
    <>
        <ErrorHero />
        <ErrorMsg />
        <LogoSlider />
    </>
  )
}

export default ErrorPage