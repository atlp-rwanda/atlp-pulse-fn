import React from 'react'
import Logo from '../assets/logo.svg';
import logow from '../assets/logoWhite.svg';
import '../App'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaPlayCircle,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-sky-900 h-[90px] sm:h-[100px] text-gray-300 py-y px-2'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                <img src={logow} alt="logo" />
                    <ul className='hidden md:flex cursor-pointer'>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Product</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    {/* <div className='px-3 mt-3.5' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-5'/> : <SunIcon className='w-5'/>}
                    </div> */}
                    <span className='flex border-none w-32 px-4 py-4 justify-around mr-4 cursor-pointer'>
                    <FaFacebook className='mr-1 w-20'/>
                    <FaInstagram className='mr-1 w-20'/>
                    <FaTwitter className='mr-1 w-20'/>
                    <FaLinkedin className='mr-1 w-20'/>
                    <FaPlayCircle className='w-20' />
                    </span>
                    <span className='px-4 py-3 cursor-pointer'>©2022 Pulse Technologies</span>
                </div>
                <div className='flex md:hidden'>
                    {/* <div className='px-3' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-5'/> : <SunIcon className='w-5'/>}
                    </div>
                    <div onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                    </div> */}
                </div>
            </div>
            {/* <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>


            </div>

            <div className='flex flex-row max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>logo.</h1>
                <div className='flex justify-between'>
                    <h6 className='font-bold pt-2 mr-3'>About us</h6>
                    <h6 className='font-bold pt-2 mr-3'>Contact us</h6>
                    <h6 className='font-bold pt-2 mr-3'>Product</h6>
                    <h6 className='font-bold pt-2 mr-3'>Terms and Conditions</h6>
                    <h6 className='font-bold pt-2'>Privacy</h6>
                </div>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaPlayCircle />
                    <div>
                        <p className='py-2'>©2022 Pulse Technologies</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Footer