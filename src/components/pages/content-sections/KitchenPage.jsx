import React from 'react';
import { Parallax } from 'react-parallax';
import ImageGallery from './ImageGallery';

const KitchenPage = () => {
    return (
        <>
            <section className='section-padding relative'>
                <div className='border-top-ornament'>
                    <div className="ornament">
                        <img src="/images/symbols/KitchenSymbol.svg" alt="Kitchen Symbol" />
                    </div>
                </div>
                <div className="w-full bg-custom">
                    <div className='flex flex-col md:flex-row relative w-full items-center gap-[3rem] h-full'>
                        <div className='h-full flex items-center justify-center'>
                            <Parallax
                                bgImage="/jewellery/models/image.png"
                                strength={100}
                            >
                                <div className='md:h-[40rem] h-[25rem] w-[33rem] bg-cover' />
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
                                            At Merilans, we craft timeless jewelry that celebrates life’s precious moments. Each piece is designed to tell a story, blending tradition with modern elegance.
                                        </p>
                                    </div>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">
                                            • ORIGIN
                                        </span>
                                        <p className='font-cormo font-medium'>
                                            Founded in 1982, Merilans began as a small atelier with a passion for artistry. Today, we are a globally recognized brand, known for our unique designs and craftsmanship.
                                        </p>
                                    </div>
                                    <div className='md:text-left text-center w-full space-y-2'>
                                        <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">
                                            • OUR PURPOSE
                                        </span>
                                        <p className='font-cormo font-medium'>
                                            We create jewelry that goes beyond adornment. Our pieces symbolize love, commitment, and personal expression, meant to be cherished for a lifetime.
                                        </p>
                                    </div>



                                </div>
                                <div className={`btn w-[90%] md:w-auto btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none `}>
                                    <div className='btn-content gap-3'>
                                        <img className='size-4 first-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                        <span className='text-[var(--color-dark)]'>Read more</span>
                                        <img className='size-4 second-img' src="/images/symbols/section-symbol.svg" alt="Ornament" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ImageGallery />
        </>
    );
};

export default KitchenPage;
