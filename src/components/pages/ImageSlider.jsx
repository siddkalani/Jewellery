import React, { useEffect, useState } from 'react';
import ImageCard from '../ImageCards/ImageCard';

const ImageSlider = () => {
    const images1 = [
        '/images/carousel/section-1/image1.jpg',
        '/images/carousel/section-1/image2.jpg',
        '/images/carousel/section-1/image3.jpg',
        '/images/carousel/section-1/image4.jpg',
        '/images/carousel/section-1/image5.jpg',
        '/images/carousel/section-1/image6.jpg',
        '/images/carousel/section-1/image7.jpg',
    ];

    const images2 = [
        '/images/carousel/section-2/image1.jpg',
        '/images/carousel/section-2/image2.jpg',
        '/images/carousel/section-2/image3.jpg',
        '/images/carousel/section-2/image4.jpg',
        '/images/carousel/section-2/image5.jpg',
        '/images/carousel/section-2/image6.jpg',
        '/images/carousel/section-2/image7.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
        }, 3000);

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
                                    className='carousel-image'
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
                                    className='carousel-image'
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
                                    className='carousel-image'
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
                            className={`h-[2.5em] w-[2.5em] rounded-full transition-[var(--animation-slider)] ${
                                currentIndex === index
                                    ? 'bg-[var(--color-butterflygreen-900)] text-white shadow-sm'
                                    : ' shadow-inner text-gray-700 hover:bg-gray-300 box-sha'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            {/* <div className='w-full flex justify-center items-center'>
                <div className="w-[90%] self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.125rem] text-[1.5rem] text-black">
                    <ImageCard name='Ring' source="/jewellery/imageCard/cardRing.png"/>
                    <ImageCard name='Bracelet' source="/jewellery/imageCard/bracelet.png"/>
                    <ImageCard name='Earrings' source="/jewellery/imageCard/cardEar.png"/>
                    <ImageCard name='Bracelet' source="/jewellery/imageCard/bracelet2.png"/>
                    <ImageCard name='Necklace' source="/jewellery/imageCard/cardNecklace.png"/>
                </div>
            </div> */}
        </section>
    );
};

export default ImageSlider;