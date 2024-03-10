import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Section4 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className='container'>
            <div className="text-white my-10">
                <h2 className="text-center mb-4 text-3xl">
                    Professional Wedding Photo Editing Services:
                </h2>
                <div className="mb-10 w-[100px] h-[3px] bg-[#411b7e] m-auto"></div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap xl:flex-nowrap pb-10">
                <div className="bg-[#f5f5f5] rounded-xl p-4 w-1/3" data-aos="fade-right" data-aos-delay="600">
                    <div className="my-4">
                        <h2 className="text-center text-2xl">Wedding Light</h2>
                        <h1 className="text-center text-4xl">$ 100</h1>
                        <p className="text-center">per wedding</p>
                    </div>
                    <hr className=' fill-gray-900 h-[2px]' />
                    <div className="my-4 text-center">
                        <p>Wedding Pack Light Includes:</p>
                        <ul>
                            <li>Color correction up to 700 photos</li>
                            <li>No contracts and hidden fees</li>
                            <li>Turnaround time 3-5 days</li>
                            <li>Save up to $40 per wedding</li>
                        </ul>
                    </div>
                    <a href="https://www.instagram.com/photographer_mamirov_group/" target="_blank">
                        <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-full rounded-md duration-300" id="order">
                            Order Now
                        </button>
                    </a>
                </div>
                <div className="bg-[#f5f5f5] rounded-xl p-4 w-1/3" data-aos="fade-left" data-aos-delay="600">
                    <div className="my-4">
                        <h2 className="text-center text-2xl">Wedding Pro</h2>
                        <h1 className="text-center text-4xl">$ 160</h1>
                        <p className="text-center">per wedding</p>
                    </div>
                    <hr className=' fill-gray-900 h-[2px]' />
                    <div className="my-4 text-center">
                        <p>Wedding Pack Pro Includes:</p>
                        <ul>
                            <li>Color correction up to 700 photos</li>
                            <li>Basic retouching up to 20 photos</li>
                            <li>High end retouching up to 5 photos</li>
                            <li>Save up to $70 per wedding</li>
                        </ul>
                    </div>
                    <a href="https://www.instagram.com/photographer_mamirov_group/" target="_blank">
                        <button className="min-h-14 bg-[#411b7e] text-[#f5f5f5] hover:bg-[#e0ccff] hover:text-[#411b7e] font-semibold w-full rounded-md duration-300" id="order">
                            Order Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Section4