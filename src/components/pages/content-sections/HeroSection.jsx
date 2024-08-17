import React from 'react'
import { Parallax } from 'react-parallax';

const HeroSection = () => {
  return (
    
    <section id="featured" className='w-full h-full'>
      <div className='flex-custom-center h-full w-full'>
        <Parallax 
          strength={400} 
          bgImage="/jewellery/hero/HeroJewellery.jpg"
          bgImageAlt="Poolside table"
          bgImageStyle={{objectFit: "cover"}}
        >
          <div style={{ height: '110vh' }} className='hero-image flex-custom-center'>
            <div className='flex-custom-center items-center justify-center w-full h-full mt-[-10rem]'>
              <div className='flex-custom-col justify-center items-center'>
                {/* <div className='flex-custom-center'>
                  <picture>
                    <img src="/images/symbols/icon.svg" alt="" className='hero-logo filter-white flex-custom-center' />
                  </picture>
                </div> */}
                <div className='hero-title'>
                  <h1 className='text-shadow hero-h1 text-center mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)]'>Crafted Elegance</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <span className='text-center text-[1.53rem] mt-[-1rem] text-[var(--color-white)] font-karla'>Discover our handcrafted jewellry Lorem ipsum dolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* footer img */}
      {/* <div className='w-full h-full flex-custom-center hero-margin md:hero-margin-large'>
        <picture className='card-width md:card-width-large h-full'>
          <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1]" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
        </picture>
      </div> */}
    </section>
   
  )
}

export default HeroSection