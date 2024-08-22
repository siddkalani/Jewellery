import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCards/ImageCard';

const ImageSlider = () => {
    const images1 = [
        '/images/jewellery/exclusive/14.png',
        '/images/jewellery/exclusive/pendal.png',
        '/images/jewellery/earrings/4.png',
        
        '/images/jewellery/exclusive/white.jpeg',
        // '/images/carousel/section-1/image5.jpg',
        // '/images/carousel/section-1/image6.jpg',
        // '/images/carousel/section-1/image7.jpg',
    ];

    const images2 = [
        '/images/jewellery/exclusive/24.png',
        '/images/jewellery/exclusive/12.png',
        '/images/jewellery/earrings/2.png',
        
        '/images/jewellery/exclusive/white2.png',
        // '/images/carousel/section-2/image5.jpg',
        // '/images/carousel/section-2/image6.jpg',
        // '/images/carousel/section-2/image7.jpg',
    ];

    const images3 = [
        '/images/jewellery/exclusive/exclusive2.jpeg',
        '/images/jewellery/exclusive/10.png',
        '/images/jewellery/earrings/5.png',
       
        '/images/jewellery/necklace/necklace4.png',
        // '/images/carousel/section-2/image5.jpg',
        // '/images/carousel/section-2/image6.jpg',
        // '/images/carousel/section-2/image7.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handlePaginationClick = (index) => {
        setCurrentIndex(index);
        clearInterval(interval)
    };

    return (
        <section id='category' className='lg:pt-[var(--section-padding)] pb-[var(--section-padding)]'>
            <div className='container-custom'>
                <div className='row-title flex justify-center w-full'>
                    <div className='styled-col items-center justify-center gap-6'>
                        {/* <div className='text-center'>
                            <div className='ornament'>
                                <img src="/images/symbols/section-symbol.svg" alt="Ornament" />
                            </div>
                        </div> */}
                        <div className='text-center'>
                            <div className='col-row-title'>
                                <h1 className='font-cormo text-amber-950'>Shop by category</h1>
                            </div>
                        </div>
                        <div className='text-center max-w-[35em] mt-[-1em]'>
                            <p className='font-cormo italic text-[1.8rem] font-medium text-amber-950'>Indulge in what we offer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full relative'>
                <div className='md:flex md:flex-row flex flex-col w-full gap-[var(--container-padding)]'>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images1.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 1 Image ${index + 1}`}
                                    className='carousel-image h-[25rem] md:h-[30rem]'
                                />
                            ))}
                        </div>
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images3.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 2 Image ${index + 1}`}
                                    className='carousel-image h-[25rem] md:h-[30rem]'
                                />
                            ))}
                        </div>
                    </div>
                    <div className='wallpaper-carousel md:w-[50%] w-full'>
                        <div className='carousel-inner' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images2.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Carousel 2 Image ${index + 1}`}
                                    className='carousel-image h-[25rem] md:h-[30rem]'
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='pagination flex gap-2 justify-center items-center mt-4'>
                    {images1.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePaginationClick(index)}
                            aria-label={`Go to page ${index + 1}`}
                            className={`h-[2.5em] w-[2.5em] rounded-full transition-transform duration-300 ease-in-out ${currentIndex === index
                                    ? 'bg-[var(--color-butterflygreen-900)] text-white shadow-lg scale-110'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-inner focus:outline-none focus:ring-offset-2 focus:ring-[var(--color-butterflygreen-900)]'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;