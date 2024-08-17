import React from 'react'
import { Parallax } from 'react-parallax';

const Newsletter = () => {
    return (
        <>
            <section id='news' className='w-full h-full pt-[var(--section-padding)]'>
                <div className='flex-custom-center h-full w-full'>
                    <Parallax
                        strength={200}
                        bgImage="/jewellery/newsLetter/News.png"
                        bgImageAlt="Poolside table"
                        bgImageStyle={{ objectFit: "cover" }}
                    >
                        <div className='hero-image flex-custom-center md:h-[60vh] h-[40vh]'>
                            <div className='flex-custom-center md:items-end md:justify-start justify-center w-full h-full md:mt-[-10rem] md:ml-10 p-5 md:p-0'>
                                <div className='flex-custom-col justify-center'>
                                    {/* header */}
                                    <div className='mb-[var(--gap)]'>
                                        <h1 className='hidden md:flex hero-h1 mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)] '>
                                            SUBSCRIBE TO OUR <br /> NEWSLETTER
                                        </h1>
                                        <h3 className='md:hidden hero-h1 mt-[-0.175em] mb-[-0.1em] text-center md:text-left font-cormo text-[var(--color-white)] '>
                                            SUBSCRIBE TO OUR <br /> NEWSLETTER
                                        </h3>
                                    </div>
                                    {/* subheader */}
                                    <div className='mb-[var(--gap)]'>
                                        <span className='hidden md:flex span-margin eyebrow text-hero-span text-[1.53rem] text-[var(--color-white)] font-karla'>Find our premimium range</span>
                                        <span className='md:hidden span-margin eyebrow text-center text-hero-span text-[1rem] text-[var(--color-white)] font-karla'>Find our premimium range</span>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <input
                                            type='email'
                                            placeholder='Enter email address...'
                                            className='flex-grow p-3 items-center font-karla text-[1rem] font-normal text-gray-700 placeholder-gray-500 border-brown-600 focus:outline-none'
                                        />
                                        <button
                                            type='submit'
                                            className='px-5 py-3 text-white bg-[#38220f] border-brown-600 hover:bg-brown-700 focus:outline-none hover:bg-[#583928]'
                                        >
                                            Subscribe
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>

            <div className='py-10'>
                <marquee behavior="scroll" direction="left" scrollamount="20">
                    <div className="flex items-center h-full w-full">
                        <h2 className="font-karla text-shadow">
                            MERLIANS
                        </h2>
                        <img
                            src="/jewellery/overlay-image/ring.png"
                            className="bg-cover h-14 drop-shadow-lg"
                            alt="Ring Image"
                        />
                        <h2 className="font-karla text-shadow text-[#D8D8D8] text-amber-950 text-amber-900">
                            SINCE 1982 // WORLD’S FINEST JEWELLARY
                        </h2>
                    </div>
                </marquee>

            </div>
        </>
    )
}

export default Newsletter