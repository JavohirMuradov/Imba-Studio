import React from 'react'
import post1 from "../Images/1.jpg";
import post2 from "../Images/2.jpg";
import post3 from "../Images/3.jpg";
import post4 from "../Images/4.jpg";

const Section4 = () => {
    return (
        <section className='container pb-12 mt-10'>
            <div className='flex flex-col items-center gap-3'>
                <h1 className=' text-white text-center text-5xl flex items-center gap-1 justify-center'>
                    <span className='font-bold'>Instagram</span>
                    Posts
                </h1>
                <div className='w-[100px] h-[3px] bg-[#411b7e] mx-auto mb-10'></div>
            </div>
            <div className='flex flex-wrap gap-20 items-center justify-center'>
                <img src={post1} alt="" className='w-[300px] h-[300px] rounded-lg hover:scale-[1.1] duration-300' />
                <img src={post2} alt="" className='w-[300px] h-[300px] rounded-lg hover:scale-[1.1] duration-300' />
                <img src={post3} alt="" className='w-[300px] h-[300px] rounded-lg hover:scale-[1.1] duration-300' />
                <img src={post4} alt="" className='w-[300px] h-[300px] rounded-lg hover:scale-[1.1] duration-300' />
            </div>
            <br />
            <div className="flex justify-center my-4">
                <div className="anim-btn">
                    <a href="https://www.instagram.com/imba_studio/" className=" text-lg rounded-md bg-[#f5f5f5f5] py-2 px-7 md:text-2xl font-bold hover:bg-[#411b7e] hover:text-white duration-300" target="_blank">Contact us via Instagram</a>
                </div>
            </div>
        </section>
    )
}

export default Section4