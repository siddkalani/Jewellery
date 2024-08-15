import React, { useEffect, useState } from 'react';
import ImageCard from '../../ImageCards/ImageCard';

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
        <section className='lg:pt-[var(--section-padding)] pb-[var(--section-padding)]'>
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
            {/* <div className='container-custom flex justify-between grid-flow-col flex-wrap items-center gap-4'>
                <div className='card-width md:card-width-large'>
                    <picture className='h-full'>
                        <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1] w-full h-auto" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
                    </picture>
                    <p className='text-center mt-2 font-cormo text-[1.5rem] font-medium'>Earings</p>
                </div>

                <div className='card-width md:card-width-large'>
                    <picture className='h-full'>
                        <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1] w-full h-auto" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
                    </picture>
                    <p className='text-center mt-2 font-cormo text-[1.5rem] font-medium'>Necklace</p>
                </div>

                <div className='card-width md:card-width-large'>
                    <picture className='h-full'>
                        <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1] w-full h-auto" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
                    </picture>
                    <p className='text-center mt-2 font-cormo text-[1.5rem] font-medium'>Bracelte</p>
                </div>

                <div className='card-width md:card-width-large'>
                    <picture className='h-full'>
                        <img alt="Chef doing final touches on the dish" data-parallax-target="" className="relative z-[1] w-full h-auto" src="https://www.thedamai.com/media/pages/dining/98c9b97fa3-1703335810/wontons-540x720-crop-q72.jpg" />
                    </picture>
                    <p className='text-center mt-2 font-cormo text-[1.5rem] font-medium'>huhu</p>
                </div>
            </div> */}
            <div className='w-full flex justify-center items-center'>
                <div className="w-[90%] self-stretch flex flex-row flex-wrap items-start justify-center gap-[1.125rem] text-[1.5rem] text-black">
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;