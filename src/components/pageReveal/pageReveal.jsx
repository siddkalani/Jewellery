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
      <div className="flex justify-center items-center h-screen">
  <div className="relative w-screen h-screen mx-auto">
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        ref={imageRef}
        src="https://cdn.alromaizan.com/image/upload/v1682709593/media/blog/unlocking-the-secrets-to-layering-your-gold-jewellery-like-a-pro.jpg"
        alt="Jewelry"
        className="w-full h-full object-cover filter"
      />
    </div>
    <h1
  ref={textRef}
  className="relative z-10 flex flex-col items-end justify-end h-full font-rale text-3xl md:text-5xl font-normal tracking-wide text-shadow bg-gradient-to-r from-white to-slate-300 mr-[5rem] mt-[-5rem] bg-clip-text text-transparent"
>
  Welcome to, <br className='hidden md:block' />
  <b>Kay Jewellers</b>
</h1>

  </div>
</div>

    </div>
  );
};

export default PageReveal;
