import React from 'react'
import LogoFooter from './../assets/logoWhite.svg';
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
        <div className='w-full bg-[#148FB6]  lg:h-[100px] h-[400px] sm:h-[160px] text-gray-300  px-2'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center p-5'>
                    <img className='mb-24 mr-2 lg:mb-0 lg:mr-0' src={LogoFooter} alt="logo" />
                    <ul className='lg:flex cursor-pointer'>
                        <li className='px-3'>About us</li>
                        <li className='px-3'>Contact us</li>
                        <li className='px-3'>Product</li>
                        <li className='px-3'>Terms and Conditions</li>
                        <li className='px-3'>Privacy</li>
                    </ul>
                </div>
                <div className=' lg:flex'>
                    <span className='flex border-none w-32 sm:justify-end px-4 py-4 justify-around mr-4 cursor-pointer'>
                        <FaFacebook className='mr-1 w-20' />
                        <FaInstagram className='mr-1 w-20' />
                        <FaTwitter className='mr-1 w-20' />
                        <FaLinkedin className='mr-1 w-20' />
                        <FaPlayCircle className='w-20' />
                    </span>
                    <span className='px-4 py-3 cursor-pointer'>©2022 Pulse Technologies</span>
                </div>
                <div className='flex md:hidden'>
                </div>
            </div>
        </div>
    )
}

export default Footer