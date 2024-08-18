import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

const HeroSection = () => {
  const [parallaxStrength, setParallaxStrength] = useState(400);
  const [marginClass, setMarginClass] = useState('mt-[-10rem]');

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth <= 640) { // sm breakpoint
        setParallaxStrength(0);
        setMarginClass(''); // Remove the margin class on small devices
      } else {
        setParallaxStrength(400);
        setMarginClass('mt-[-10rem]'); // Apply the margin class on larger screens
      }
    };

    updateLayout(); // Set the initial value
    window.addEventListener('resize', updateLayout); // Update on window resize

    return () => window.removeEventListener('resize', updateLayout); // Cleanup
  }, []);

  return (
    <section id="featured" className='w-full h-full'>
      <div className='flex-custom-center h-full w-full'>
        <Parallax 
          strength={parallaxStrength} 
          bgImage="/jewellery/hero/HeroJewellery.jpg"
          bgImageAlt="Poolside table"
          bgImageStyle={{ objectFit: "cover" }}
        >
          <div style={{ height: '110vh' }} className={`hero-image flex-custom-center`}>
            <div className={`flex-custom-center items-center justify-center w-full h-full ${marginClass}`}>
              <div className='flex-custom-col justify-center items-center'>
                <div className='hero-title'>
                  <h1 className='text-shadow hero-h1 text-center mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)]'>Crafted Elegance</h1>
                </div>
                <div className='flex items-center justify-center'>
                  <span className='text-center text-[1.53rem] mt-[-1rem] text-[var(--color-white)] font-karla'>Discover our handcrafted jewellery Lorem ipsum dolor sit amet</span>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
}

export default HeroSection;
