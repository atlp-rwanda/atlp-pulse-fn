import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';

import IpageSvg from '../assets/body.svg';


const LandingPageBody = () => {
    return (
        <div className='w-full h-[87.5vh] bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] mt-32 md:m-auto'>
                <div className='flex flex-col items-center justify-center md:items-start w-full px-2 py-2'>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Dev-Pulse</h1>
                    <p className='text-2xl mt-8 px-6 md:px-0'>The No 1 platform for managing ratings of trainees or students in any ed-tech organization</p>
                    <button className='mt-16 py-3 w-[50%] px-4 sm:w-[30%] my-4'>Get Started</button>
                </div>

                <div className=''>
                    <img className='hideSvg w-full' src={IpageSvg} alt="svg" />
                </div>
            </div>
        </div>
    )
}

export default LandingPageBody