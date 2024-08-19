import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageReveal = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.location.replace("/main"); // Smooth redirect to /main after animation
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
        { y: 50, opacity: 0, letterSpacing: '0.05em' },
        { y: 0, opacity: 1, letterSpacing: '0.1em', duration: 0.8, ease: 'power4.out' },
        '-=0.5'
      )
      .to(textRef.current, {
        y: -100,
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
      <div className="flex justify-center items-center h-screen bg-[#d9b99b]">
        <div className="relative">
          <img
            ref={imageRef}
            src="/jewellery/gallery/gallery1.png"
            alt="Jewelry"
            className="relative z-0 w-[50%] h-auto mx-auto"
          />
          <h1
            ref={textRef}
            className="text-center font-rale top-full mt-4 text-[#38220f] text-3xl md:text-4xl font-normal text-shadow tracking-wide z-20"
          >
            Welcome to, <br className='flex'/> <i> Kay Jewellers</i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageReveal;
