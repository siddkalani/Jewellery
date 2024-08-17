import PropTypes from "prop-types";

const ImageGallery = ({ className = "" }) => {
    return (
        <>
        <section
            className={`self-stretch flex flex-col relative items-center justify-center pt-[var(--section-padding)]`}
            id="gallery"
        >
            <div className='border-top-ornament'>
                <div className="ornament">
                    <img src="/images/symbols/KitchenSymbol.svg" alt="Kitchen Symbol" />
                </div>
            </div>
            <div className="w-[90%] mt-[-2rem]">
                <div className='row-title flex justify-center w-full'>
                    <div className='styled-col items-center justify-center gap-6'>
                        {/* <div className='text-center'>
                            <div className='ornament'>
                                <img src="/images/symbols/section-symbol.svg" alt="Ornament" />
                            </div>
                        </div> */}
                        <div className='text-center'>
                            <div className='col-row-title'>
                                <h1 className='font-cormo'>Image gallery</h1>
                            </div>
                        </div>
                        <div className='text-center max-w-[35em] mt-[-1em]'>
                            <p className='font-cormo italic text-[1.8rem] font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cupiditate quod.</p>
                        </div>
                    </div>
                </div>
                <div className="w-[78rem] flex flex-col items-end justify-start gap-7 max-w-full">
                    <div className="self-stretch grid lg:grid-cols-3 gap-2 max-w-full md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                        <img
                            className="w-full h-full max-w-full overflow-hidden object-cover min-h-[38rem]"
                            alt=""
                            src="/jewellery/gallery/gallery1.png"
                        />
                        <div className="flex flex-col items-start justify-start gap-2 max-w-full">
                            <img
                                className="w-full h-[20rem] max-w-full overflow-hidden object-cover"
                                loading="lazy"
                                alt=""
                                src="/jewellery/gallery/gallery.png"
                            />
                            <div className="flex flex-row items-start justify-start gap-2 sm:flex-wrap">
                                <img
                                    className="flex-1 min-w-[8rem] min-h-[19rem] max-w-full overflow-hidden object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/jewellery/gallery/gallery3.png"
                                />
                                <img
                                    className="flex-1 min-w-[8rem] min-h-[19rem] max-w-full overflow-hidden object-cover"
                                    loading="lazy"
                                    alt=""
                                    src="/jewellery/gallery/gallery4.png"
                                />
                            </div>
                        </div>
                        <img
                            className="w-full h-full max-w-full overflow-hidden object-cover min-h-[38rem]"
                            loading="lazy"
                            alt=""
                            src="/jewellery/gallery/gallery2.png"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

ImageGallery.propTypes = {
    className: PropTypes.string,
};

export default ImageGallery;
