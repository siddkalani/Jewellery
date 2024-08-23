import React, { useState, useRef, useEffect } from 'react';

const Intro = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isExpanded]);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='h-full w-full intro-section'>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[90%] h-full flex lg:flex-row flex-col justify-between lg:pl-20 md:items-center md:mt-20 sm:mt-20'>
                    <div className='relative flex justify-center items-center'>
                        {/* First Image with Border Box */}
                        <div className='md:flex lg:flex hidden'>
                            <div className='lg:w-[18rem] lg:h-[20rem] md:w-[16rem] md:h-[18rem]'>
                                <div className='absolute border-2 border-black lg:w-[18rem] lg:h-[20rem] md:w-[16rem] md:h-[18rem]'></div>
                                <img
                                    src="/jewellery/overlay-image/earrings.png"
                                    alt="Jewelry"
                                    className="absolute top-[40%] left-[40%] object-cover z-[1] custom-shadow lg:w-[16rem] lg:h-[18rem] md:w-[14rem] md:h-[16rem]"
                                />
                                <img
                                    src="/jewellery/overlay-image/shadow2.png"
                                    alt="Overlay Image"
                                    className="absolute top-[-20%] right-[30%] object-cover custom-shadow"
                                />
                            </div>
                        </div>

                        <div className="md:hidden w-full">
                            <div className="w-full h-full flex justify-between">
                                {/* First Image */}
                                <img
                                    src="/jewellery/overlay-image/earrings.png"
                                    alt="Jewelry"
                                    className="object-cover custom-shadow w-[40%] h-auto max-w-[14rem]"
                                />
                                {/* Second Image */}
                                <img
                                    src="/jewellery/overlay-image/shadow2.png"
                                    alt="Overlay Image"
                                    className="object-cover custom-shadow w-[40%] h-auto max-w-[14rem]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex md:mt-40 lg:mt-0 mt-20'>
                        <div className='flex-custom-col lg:items-start justify-center hero-flex-gap sm:justify-center md:items-center'>
                            <div className='col-row col-row-title medium text-center md:text-left'>
                                <h1 className='font-cormo text-amber-950'>Exploring the Beauty of Adornments</h1>
                            </div>
                            <div
                                ref={contentRef}
                                style={{ height: contentHeight }}
                                className={`max-w-[35em] text-center md:text-left overflow-hidden transition-all duration-500 ease-in-out`}
                            >
                                <p className='font-cormo text-[1.5rem] font-medium'>
                                    "Where elegance meets craftsmanship, every piece tells a story of timeless beauty. Adorn yourself with treasures that capture the essence of grace, reflecting the sparkle within. Our jewelry is more than an accessory—it's a statement of sophistication, crafted to perfection."
                                </p>
                            </div>
                            <div
                                className={`btn w-15 btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none cursor-pointer`}
                                onClick={handleReadMoreClick}
                            >
                                <div className='btn-content gap-3'>
                                    <img className='size-4 first-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                    <span className='text-[var(--color-dark)]'>
                                        {isExpanded ? 'Show less' : 'Read more'}
                                    </span>
                                    <img className='size-4 second-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
