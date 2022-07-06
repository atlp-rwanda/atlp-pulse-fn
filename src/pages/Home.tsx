import React from 'react'

import IpageSvg from '../assets/body.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';


const LandingPage = () => {
    return (
        <>
        <Header />
        <div className='w-full h-[87.5vh] bg-[#F9F9FB] flex justify-between'>
            <div className='grid lg:grid-cols-2 max-w-[1240px] md:m-auto'>
                <div className='flex flex-col items-center justify-center lg:items-start w-full px-2 py-2'>
                    <h1 className='mt-28 sm:mt-20 text-5xl sm:text-7xl font-bold text-[#173B3F]'>Dev-Pulse</h1>
                    <p className='text-2xl mt-8 w-3/4 md:px-0 text-[#173B3F]'>The No 1 platform for managing ratings of trainees or students in any ed-tech organization</p>
                </div>
                    <img className='hidden lg:flex md:w-[80%] md:ml-24 md:justify-center md:items-center' src={IpageSvg}  alt="svg" />
                <div className='w-full sm:w-[90vw] 2xl:w-[50vw] text-center justify-center items-center'>
                    <button className='mt-12 justify-center items-center py-3 w-[80%] px-4 sm:w-[50%] my-4 bg-[#148FB6] text-white rounded-md'>Get Started</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default LandingPage