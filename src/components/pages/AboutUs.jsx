import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import ImageGallery from './ImageGallery';
import { useEffect } from 'react';

const AboutUs = () => {
    const [parallaxStrength, setParallaxStrength] = useState(100);
  
    useEffect(() => {
      const updateParallaxStrength = () => {
        if (window.innerWidth <= 640) { // sm breakpoint
          setParallaxStrength(0);
        } else {
          setParallaxStrength(100);
        }
      };
  
      updateParallaxStrength(); // Set the initial value
      window.addEventListener('resize', updateParallaxStrength); // Update on window resize
  
      return () => window.removeEventListener('resize', updateParallaxStrength); // Cleanup
    }, []);
  
    return (
        <>
            <section id='about-us' className='section-padding relative'>
                <div className='border-top-ornament'>
                    <div className="ornament">
                        <img src="/images/symbols/KitchenSymbol.svg" alt="Kitchen Symbol" />
                    </div>
                </div>
                <div className="w-full bg-custom">
                    <div className='flex flex-col md:flex-row relative w-full items-center gap-[3rem] h-full'>
                        <div className='h-full flex items-center justify-center'>
                            <Parallax
                                bgImage="/jewellery/models/noFace.png"
                                strength={parallaxStrength}
                            >
                                <div className='md:h-[40rem] h-[25rem] md:w-[33rem] w-[100vw] bg-cover' />
                            </Parallax>
                        </div>
                        <div className='flex md:justify-center w-full relative h-full'>
                            <div className='flex-custom-col items-center md:items-start justify-center gap-4 py-4'>
                                {/* <div className='text-left w-full'>
                                    <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">• ABOUT US
                                    </span>
                                </div> */}
                                <div className='col-row col-row-title medium text-shadow mb-2'>
                                    <h2 className=''>WHO WE ARE?</h2>
                                </div>
                                <div className='max-w-[90%] text-[1.5rem] space-y-6 py-2'>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">
                                            • ABOUT US
                                        </span>
                                        <p className='font-cormo font-medium'>
                                        We specialize in curating and crafting jewelry that embodies elegance and quality. As importers and manufacturers, our pieces are a perfect blend of tradition and contemporary design, created to enhance your unique style and celebrate life’s special moments.

                                        </p>
                                    </div>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">
                                            • ORIGIN
                                        </span>
                                        <p className='font-cormo font-medium'>
                                        Founded in 2024 by <strong className='font-bold'>Abhishekh Pandey</strong>, along with co-founders <strong className='font-bold'>Khushal Makawana</strong> and <strong className='font-bold'>Pravin Pandey</strong>, our journey began with a commitment to delivering timeless beauty. Starting as a vision to bridge tradition and modern craftsmanship, we have expanded our reach globally, bringing exceptional jewelry to clients worldwide.

                                        </p>
                                    </div>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">
                                            • OUR PURPOSE
                                        </span>
                                        <p className='font-cormo font-medium'>
                                        We believe that jewelry is more than just an accessory—it’s an expression of identity, love, and cherished memories. Our creations are designed to stand the test of time, serving as treasured pieces that mark life’s significant milestones.

                                        </p>
                                    </div>



                                </div>
                                {/* <div className={`btn w-[90%] md:w-auto btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none `}>
                                    <div className='btn-content gap-3'>
                                        <img className='size-4 first-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                        <span className='text-[var(--color-dark)]'>Read more</span>
                                        <img className='size-4 second-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
