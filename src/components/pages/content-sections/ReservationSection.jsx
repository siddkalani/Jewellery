import React from 'react'
import { Parallax } from 'react-parallax';

const ReservationSection = () => {
    return (
        <>
            <section className='w-full h-full'>
                <div className='flex-custom-center h-full w-full'>
                    <Parallax
                        strength={200}
                        bgImage="/jewellery/newsLetter/News.png"
                        bgImageAlt="Poolside table"
                        bgImageStyle={{ objectFit: "cover" }}
                    >
                        <div style={{ height: '60vh' }} className='hero-image flex-custom-center'>
                            <div className='flex-custom-center items-end justify-start w-full h-full mt-[-10rem] ml-10'>
                                <div className='flex-custom-col justify-center'>
                                    {/* header */}
                                    <div className='mb-[var(--gap)]'>
                                        <h1 className='hero-h1 mt-[-0.175em] mb-[-0.1em] font-cormo text-[var(--color-white)] '>
                                            SUBSCRIBE TO OUR <br /> NEWSLETTER
                                        </h1>
                                    </div>
                                    {/* subheader */}
                                    <div className='mb-[var(--gap)]'>
                                        <span className='span-margin eyebrow text-hero-span text-[1.53rem] text-[var(--color-white)] font-karla'>Find our premimium range</span>
                                    </div>
                                    <div className='flex w-full max-w-lg'>
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
                        <h1 className="font-karla text-shadow">
                            MERLIANS
                        </h1>
                        <img
                            src="/jewellery/overlay-image/ring.png"
                            className="bg-cover h-16 drop-shadow-lg"
                            alt="Ring Image"
                        />
                        <h1 className="font-karla text-shadow text-[#D8D8D8]">
                            SINCE 1982 // WORLD’S FINEST JEWELLARY
                        </h1>
                    </div>
                </marquee>

            </div>
        </>
    )
}

export default ReservationSection