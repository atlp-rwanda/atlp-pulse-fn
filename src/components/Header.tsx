import React, { useState } from 'react'
import { MenuIcon, XIcon, SunIcon } from "@heroicons/react/outline"
import { MoonIcon} from "@heroicons/react/solid"
import Logo from '../assets/logo.svg';


const Header = () => {
    const [nav, setNav] = useState(false);
    const [visibility, setVisibility] = useState(false)
    const handleClick = () => setNav(!nav)
    const visibilityClick = () => setVisibility(!visibility)
    return (
        <div className='w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                    <img className='w-full' src={Logo} alt="logo" />
                    <h1 className='text-3xl font-bold m-4 text-sky-600'>PULSE</h1>
                    <ul className='hidden md:flex cursor-pointer'>
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <div className='px-4 mt-1' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-8'/> : <SunIcon className='w-8'/>}
                    </div>
                    <button className='border-none w-24 h-10 mr-4 cursor-pointer'>Sign In</button>
                    <button className='px-4 py-2 h-10 bg-transparent cursor-pointer text-sky-600'>Register Organization</button>
                </div>
                <div className='flex md:hidden'>
                    <div className='px-3' onClick={visibilityClick}>
                        {!visibility ? <MoonIcon className='w-5 mr'/> : <SunIcon className='w-5'/>}
                    </div>
                    <div onClick={handleClick}>
                        {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                    </div>
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-1/8 justify-end px-8 cursor-pointer lg:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <li className='border-b-2 border-zinc-300 w-full'>Product</li>
                <li className='border-b-2 border-zinc-300 w-full'>Sign In</li>
                <li className='border-b-2 border-zinc-300 w-full'>Register Organization</li>
                {/* <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4 w-1/4'>Sign In</button>
                <button className='px-8 py-3 w-1/4 cursor-pointer'>Register</button>
            </div> */}
            </ul>
        </div>
    )
}

export default Header
