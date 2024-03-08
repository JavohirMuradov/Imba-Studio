import React, { useEffect } from 'react'
import "./Section.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Section3 = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <section className='bg-section3 py-10' id='about' data-aos-once="true" data-aos="zoom-in">
            <div className="container">
                <div className='flex flex-col items-center'>
                    <h1 className="text-[#6c757d] text-3xl w-11/12">About <span className=" font-light">US</span></h1>
                    <hr className='my-4 w-11/12' />
                    <p className=" text-white text-sm md:text-2xl mb-4 italic indent-[30px] w-11/12">
                        Our team has more than 6-7 years of video and photo editing experience, we offer the following services: Video
                        editing of Wedding, Barmitzvah, Batmitzvah and Birthday events will include full video, highlight,
                        feature film, social films.
                    </p>
                    <div className="text-white text-sm md:text-2xl mb-4 italic indent-[30px] w-11/12">
                        Quality is our main goal, if you
                        are looking for a quality and fast video editing team, do not hesitate to contact us, we are pleased to work with you.
                    </div>
                </div>
                <div className="font-bold text-end text-white italic text-sm md:text-2xl mr-10 lg:mr-0">
                    Respectfully IMBA team!
                </div>
                <div className="flex justify-evenly my-5 flex-wrap gap-5" id="feature-card">
                    <div className="w-[200px] bg-gradient-to-b from-[#0A443A] to-[#2E2E2E] flex flex-col items-center justify-center text-white text-center animation hover:cursor-pointer" id='animation'>
                        <h5 className="font-bold pt-2">Full Film</h5>
                        <p className="font-smaller pb-5">1-3 Hours</p>
                    </div>
                    <div className="w-[200px] bg-gradient-to-b from-[#0A443A] to-[#2E2E2E] flex flex-col items-center justify-center text-white text-center animation hover:cursor-pointer" id='animation1'>
                        <h5 className="font-bold pt-2">Highlight</h5>
                        <p className="font-smaller pb-5">5-7 Minutes</p>
                    </div>
                    <div className="w-[200px] bg-gradient-to-b from-[#0A443A] to-[#2E2E2E] flex flex-col items-center justify-center text-white text-center animation hover:cursor-pointer" id='animation2'>
                        <h5 className="font-bold pt-2">Social Film</h5>
                        <p className="font-smaller pb-5">1-2 Minutes</p>
                    </div>
                    <div className="w-[200px] bg-gradient-to-b from-[#0A443A] to-[#2E2E2E] flex flex-col items-center justify-center text-white text-center animation hover:cursor-pointer" id='animation3'>
                        <h5 className="font-bold pt-2">Feature Film</h5>
                        <p className="font-smaller pb-5">10-30 Minutes</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3