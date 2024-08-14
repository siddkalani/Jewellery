import React from 'react';
import { Parallax } from 'react-parallax';

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
                    <div className='flex flex-col md:flex-row relative w-full gap-[3rem] h-full'>
                        <div className='h-full flex items-center justify-center'>
                            <Parallax
                                bgImage="https://www.thedamai.com/media/pages/dining/5d61087be9-1703335787/cookbook-1080x1440-crop-q72.jpg"
                                strength={100}
                            >
                                <div className='md:h-[37rem] h-[25rem] w-[33rem]'/>
                            </Parallax>
                        </div>
                        <div className='flex md:justify-center w-full relative'>
                            <div className='flex-custom-col items-start justify-center hero-flex-gap'>
                                <div className='text-left w-full'>
                                <span className="span-margin eyebrow text-hero-span text-[1.15rem] text-[var(--color-white)] font-karla text-shadow">ARTICLE • OCTOBER 2022
                                </span>
                                </div>
                                <div className='col-row col-row-title medium'>
                                    <h2 className=''>During the golden hour</h2>
                                </div>
                                <div className='max-w-[80%] text-[1.5rem]'>
                                    <p className='font-cormo font-medium'>
                                        The restaurant at Damai opened in 1997. Over the decades many chefs have contributed to the kitchen, but none more than Danish master chef Per Thøstesen, formerly of Paul Bocuse in France. His cuisine merged classic French and Asian traditions, in an innovative highly local, market-fresh approach. His legacy continues today.
                                        His 1998 book with recipies from Damai became an international bestseller. In his new award-winning cook book My Bali Kitchen Per returns to his beloved Damai with new deliciously simple Balinese brasserie recipes, for you to try at home.
                                    </p>
                                </div>
                                <div className={`btn w-15 btn-svg h-[3rem] border-[1px] border-black bg-transparent rounded-none`}>
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
        </>
    );
};

export default KitchenPage;
