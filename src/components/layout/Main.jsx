import React from 'react'
import HeroSection from '../pages/HeroSection'
import Intro from '../pages/Intro'
import ImageSlider from '../pages/ImageSlider'
import AboutUs from '../pages/AboutUs'
import ImageGallery from '../pages/ImageGallery'
import Newsletter from '../pages/Newsletter'

const Main = () => {
  return (

    <div className='w-full h-full'>
      <HeroSection />
      <Intro/>
      <ImageSlider />
      <AboutUs />
      <ImageGallery/>
      <Newsletter/>
    </div>

  )
}

export default Main