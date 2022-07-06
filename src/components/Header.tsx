import React, { useState } from 'react'
import { MenuIcon, XIcon, SunIcon } from "@heroicons/react/outline"
import { MoonIcon } from "@heroicons/react/solid"
import Logo from './../assets/logo.svg';


const Header = () => {
    const [nav, setNav] = useState(false);
    const [visibility, setVisibility] = useState(false)
    const handleClick = () => setNav(!nav)
    const visibilityClick = () => setVisibility(!visibility)
    return (
        <div className='w-screen h-[60px] z-10 bg-white fixed border-b'>
            <div className="px-3 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                    <img className='w-full lg:px-3 cursor-pointer' src={Logo} alt="logo" />
                    <h1 className='text-3xl font-bold m-4 px-3 text-[#148FB6]'>PULSE</h1>
                    <ul className='hidden lg:flex cursor-pointer'>
                        <li className='px-5'>Home</li>
                        <li className='px-5'>Pricing</li>
                        <li className='px-5'>Product</li>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <div className='px-4 mt-1' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-8' /> : <SunIcon className='w-8' />}
                    </div>
                    <button className='border-none w-24 h-10 mr-4 cursor-pointer bg-[#148FB6] text-white rounded-md'>Sign In</button>
                    <button
                        className='px-4 py-2 h-10 bg-transparent cursor-pointer text-[#148FB6] border border-[#148FB6] rounded-md'>
                        Register Organization
                    </button>
                </div>
                <div className='flex px-5 lg:hidden'>
                    <div className='px-3' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-6 mr-2' /> : <SunIcon className='w-6 mr-2' />}
                    </div>
                    <div onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-7' /> : <XIcon className='w-7' />}
                    </div>
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-white w-1/8 justify-end px-8 cursor-pointer m-2 right-0 lg:hidden'}>
                <li className='p-2 w-full mt-2'>Home</li>
                <li className='p-2 w-full'>Pricing</li>
                <li className='p-2 w-full'>Product</li>
                <li className='p-2 w-full'>Sign In</li>
                <li className='p-2 w-full mb-2'>Register Organization</li>
            </ul>
        </div>
        
    )
}

export default Header
