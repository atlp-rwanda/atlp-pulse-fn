import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { IoPerson, IoMail, IoCreate } from 'react-icons/io5'

export default function OrgRegister() {
  const [name, setName] = useState("")

  const handleChange = (value: string) => {
    setName(value)
    
  }
  return (
    <div className="bg-light-bg dark:bg-[#262E3D] lg:h-full grow flex flex-col w-full ">
      <div className="flex flex-row items-center justify-center grow w-full">
        <div className="bg-white w-screen px-16 py-20 md:px-32 lg:w-1/2 dark:bg-[#1F2A37] lg:px-16 lg:h-screen md:mt-32 md:ml-24 md:mb-16 md:mr-24 lg:mr-0 rounded-tl-2xl rounded-bl-2xl md:rounded-tr-2xl md:rounded-br-2xl lg:rounded-br-none lg:rounded-tr-none 2xl:mt-32 shadow-md dark:shadow-none">
          <h1 className="lg:pb-16 text-4xl  py-12 lg:py-5 lg:text-3xl text-primary text-center dark:text-white">
            Register your organization
          </h1>
          <label className="tracking-wide text-gray-700 dark:text-white font-normal text-xl">
            E-mail
          </label>
          <div className='absolute mt-5 px-2 text-gray-400'>
            <IoMail className='w-6 h-6' />
          </div>
          <input
            type="text"
            className="border border-primary w-full px-9 py-2 dark:border-dark-text-fill dark:bg-[#1F2A37] rounded mb-6 mt-3 dark:text-white"
            name="email"
          />
          <label className="tracking-wide text-gray-700 dark:text-white text-xl font-normal mb-2">
            Name of your Organization
          </label>
          <div className='absolute mt-5 px-2 text-gray-400'>
            <IoPerson className='w-6 h-6' />
          </div>
          <input
            type="text"
            className="border border-primary w-full px-9 py-2 rounded dark:border-white dark:bg-[#1F2A37] dark:text-white mb-6 mt-3"
            name="name"
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className="tracking-wide text-gray-700 dark:text-white text-xl font-normal mb-2">
            Organization Description
          </label>
          <div className='absolute px-2 text-gray-400 mt-7 '>
            <IoCreate className='w-6 h-6' />
          </div>
          <textarea
            className="border border-primary w-full  px-9 py-4 rounded mb-4 dark:border-white dark:bg-[#1F2A37] dark:text-white mt-3"
            name="Describe"
          >
          </textarea>
          <div className="flex justify-between items-center mb-6">
            <div className="form-check">
              <input
                type="checkbox"
                className=" h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label className="form-check-label inline-block dark:text-white text-gray-800"
              >I agree to Pulse's <span className='text-primary'>Terms & Conditions</span>
              </label
              >
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 lg:w-1/4 text-center lg:mx-40 py-3 mt-9 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Register
          </button>
        </div>
        <div className='hidden bg-primary dark:bg-primary px-6 h-screen lg:flex lg:flex-col pt-24 lg:mt-32 lg:mr-24 lg:mb-16 rounded-tr-2xl rounded-br-2xl 2xl:mt-32 '>
          <div className='flex items-center justify-center text-white pb-14 lg:pb-6'>
            <h1 className="text-2xl 2xl:text-4xl 2xl:py-10 2xl:mb-10 font-bold px-2 uppercase text-white dark:text-dark-text-fill font-sans">
              Get started
            </h1>
          </div>
          <h2 className='text-2xl font-bold text-dark-text-fill text-left px-5 font-sans'>Welcome to the page where your management starts</h2>
          <p className='max-w-[600px] text-start text-xl text-white my-5 px-5'>
          With your own organization, you get a custom domain where you can manage your trainees/students and you can handle all processes related to your program.
            </p>
          <Link to="get-started" className='border-b-1 font-bold text-white px-5'>Explore docs</Link>
          <div>
            <h3 className='font-bold text-white text-lg mt-5 mb-2 px-5'> Your organization link</h3>
            <button className='rounded bg-white text-primary font-bold py-2 px-8 ml-4 mt-3'>{name.replaceAll(" ", "-").toLowerCase()}<span>.pulse.org</span></button>
          </div>
        </div>
      </div>
    </div>
  );
}
