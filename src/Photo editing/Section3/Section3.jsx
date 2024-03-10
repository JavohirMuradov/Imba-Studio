import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section>
            <div className="container">
                <div className="text-white my-10">
                    <h2 className="text-center mb-4 text-3xl">
                        Prices for Our Photo Editing
                    </h2>
                    <div className="mb-10 w-[100px] h-[3px] bg-[#411b7e] m-auto"></div>
                </div>
                <div className="flex gap-4 justify-between flex-wrap xl:flex-nowrap">
                    <div className="bg-[#f5f5f5] rounded-xl p-4 w-full flex flex-col justify-between" data-aos="flip-right" data-aos-delay="600">
                        <div>
                            <h2 className="text-center text-2xl">Color Correction</h2>
                            <h1 className="text-center text-4xl">$ 0.20</h1>
                            <p className="text-center mb-2">per photo</p>
                        </div>
                        <hr className=' fill-gray-900 h-[2px]' />
                        <div className="ml-6 mt-2 card-main-text">
                            <p>Services applied:</p>
                            <ul className="list-disc">
                                <li>White balance</li>
                                <li>Contrast adjustment</li>
                                <li>Exposure correction</li>
                                <li>Cropping</li>
                                <li>Straightening</li>
                                <li>Sharpening</li>
                                <li>Noise reduction</li>
                                <li>Matching your style</li>
                            </ul>
                            <p>Additional Services: Culling - $0.06 per photo</p>
                            <ul>
                                <li>Charging for all submitted photos</li>
                                <li>Deleting All damaged or duplicate images</li>
                                <li>Culling under the clients' requirements</li>
                                <li>
                                    Marking of the chosen images with the stars in LR Catalog
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2">
                            <button className="min-h-14 bg-[#c8e5ff] text-[#114b81] hover:bg-[#2766a1] hover:text-[#f5f5f5] font-semibold w-full rounded-md duration-300">
                                View examples
                            </button>
                            <a href="https://www.instagram.com/photographer_mamirov_group/" target="_blank" className="mt-2">
                                <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-full rounded-md duration-300" id="order">
                                    Order Now
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#f5f5f5] rounded-xl p-4 w-full flex flex-col justify-between" data-aos="flip-right" data-aos-delay="600">
                        <div>
                            <h2 className="text-center text-2xl">Basic Level</h2>
                            <h1 className="text-center text-4xl">$ 2</h1>
                            <p className="text-center">per photo</p>
                        </div>
                        <hr className=' fill-gray-900 h-[2px]' />
                        <div className="ml-6 mt-2 card-main-text">
                            <p>Services applied:</p>
                            <ul className="list-disc">
                                <li>Basic Retouch for 2-3 Persons</li>
                                <li>Color/Light Correction</li>
                                <li>Exposure</li>
                                <li>Teeth Whitening</li>
                                <li>Red-Eye Effect Removal</li>
                                <li>Eye Bag Fixing</li>
                                <li>Skin Tone Fixing</li>
                                <li>Cropping/Straightening</li>
                                <li>No Body Retouch</li>
                                <li>No Background Touch Up</li>
                                <li>No Portraits/Indoors Photos Editing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2">
                            <button className="min-h-14 bg-[#c8e5ff] text-[#114b81] hover:bg-[#2766a1] hover:text-[#f5f5f5] font-semibold w-full rounded-md duration-300">
                                View examples
                            </button>
                            <a href="https://www.instagram.com/photographer_mamirov_group/" target="_blank" className="mt-2">
                                <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-full rounded-md duration-300" id="order">
                                    Order Now
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="bg-[#f5f5f5] rounded-xl p-4 w-full flex flex-col justify-between" data-aos="flip-right" data-aos-delay="600">
                        <div>
                            <h2 className="text-center text-2xl">High End Level</h2>
                            <h1 className="text-center text-4xl">$ 10</h1>
                            <p className="text-center">per photo</p>
                        </div>
                        <hr className=' fill-gray-900 h-[2px]' />
                        <div className="ml-6 mt-2 card-main-text">
                            <p>Services applied:</p>
                            <ul className="list-disc">
                                <li>Pro Beauty Retouching for 3-5 Persons</li>
                                <li>Make Up Adjustment</li>
                                <li>Eye-glasses Glare Fixing</li>
                                <li>Stray Hair Removal</li>
                                <li>Face Wrinkles Removal</li>
                                <li>Clothes Smoothen</li>
                                <li>Dress Correction</li>
                                <li>Slight Body/Face Imperfections Removal</li>
                                <li>High End Skin Retouching</li>
                                <li>Dodge and Burn Effect</li>
                                <li>Following the Client's Style</li>
                            </ul>
                        </div>
                        <div className="flex flex-col mt-2">
                            <button className="min-h-14 bg-[#c8e5ff] text-[#114b81] hover:bg-[#2766a1] hover:text-[#f5f5f5] font-semibold duration-300">
                                View examples
                            </button>
                            <a href="https://www.instagram.com/photographer_mamirov_group/" target="_blank" className="mt-2">
                                <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-full rounded-md duration-300" id="order">
                                    Order Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3