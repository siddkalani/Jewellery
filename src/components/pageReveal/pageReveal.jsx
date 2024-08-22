import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageReveal = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.href = "/main"; // Use href for a smooth redirect
      }
    });

    // Image and Text Reveal Animation with Enhanced Effects
    tl.fromTo(
      imageRef.current,
      { y: 100, opacity: 0, scale: 1.5 },
      { y: 0, opacity: 1, scale: 1.05, duration: 1, ease: 'power4.out' }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power4.out' },
        '-=0.5'
      )
      .to(textRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power4.inOut',
      })
      .to(containerRef.current, {
        backgroundColor: '#fff3e0',
        duration: 1,
        ease: 'power2.inOut',
      }, '-=1')
      .to(containerRef.current, {
        y: '-100vh',
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.inOut',
      });
      
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Image and Text Section */}
      <div className="flex justify-center items-center h-screen bg-[#38220f]">
        <div className="relative w-[30%] mx-auto">
          <img
            ref={imageRef}
            src="/jewellery/gallery/gallery2.png"
            alt="Jewelry"
            className="w-full h-auto"
          />
         <h1
  ref={textRef}
  className="absolute inset-0 flex flex-col items-center justify-end font-rale text-3xl md:text-5xl font-normal tracking-wide text-shadow bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent"
>
  Welcome to, <br className='hidden md:block'/> 
  <i>Kay Jewellers</i>
</h1>

        </div>
      </div>
    </div>
  );
};

export default PageReveal;
