import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Noredirect = () => {
  return (
    <div className=" dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-evenly md:justify-evenly grow h-full w-full">
      <h1 className="flex font-semibold text-primary dark:text-dark-text-fill text-3xl">
        Hello <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>, Users
      </h1>
      <p className="text-center text-gray-400 text-sm">
        The System is under development, redirection is not found !!
      </p>
      <Link to="/pricing-form">
        <button className="flex bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 mb-2  rounded">
          <Icon
            icon="eva:arrow-ios-back-fill"
            color="white"
            width="20"
            height="20"
          />
          <h2>back</h2>
        </button>
      </Link>
    </div>
  );
};

export default Noredirect;
