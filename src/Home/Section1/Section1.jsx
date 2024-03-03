import { Button } from '@material-tailwind/react'
import React from 'react'

const Section1 = () => {
    return (
        <section className='bg-cover bg-hero-image'>
            <div className='container flex items-center justify-center flex-col h-[679px] gap-5'>
                <span className='text-heroColor md:text-[19.2px] md:w-[600px] text-center'>Looking for FAST, CREATIVE, and CINEMATIC VIDEO EDITING? Search no more! This is the right place for you!
                </span>
                <h1 className='text-white text-3xl md:text-6xl text-center font-bold'>We are PROFESSIONAL VIDEO and PHOTO editing team</h1>
                <Button color='white'>Contact us</Button>
            </div>
        </section>
    )
}

export default Section1