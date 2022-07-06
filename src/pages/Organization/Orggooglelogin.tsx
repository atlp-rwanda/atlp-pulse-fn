import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

const Orggooglelogin = () => {
  return (
    <div className="min-h-screen  bg-light-bg  dark:bg-dark-frame-bg flex flex-col justify-center font-sans ">
      <div className="max-w-lg w-full mx-auto mt-4 bg-white dark:bg-dark-bg p-14  sm:w-full">
        <div className="text-center   text-black-600 text-2xl sm:text-black-300-text-center dark:text-dark-text-fill ">
          Sign in to organization.pulse.com
        </div>
        <div className="text-xl  text-black-600 mt-2 text-center dark:text-dark-text-fill sm:text-center sm:text-xs sm:mt-4">
          This organization allows you to sign in with your Google account.
        </div>
        <form action="" className="space-y-6 mt-4">
          <div>
            <button className="w-full py-1.5 px-2 bg-primary hover:bg-cyan-700 rounded-md text-light-text dark:text-dark-text-fill text-sm flex justify-between items-center ">
              <div className="flex items-center justify-around text-xl w-24 ">
                <AiOutlineGoogle className="text-white" />

                <div className="bg-white h-8 w-0.5  ml-5"></div>
              </div>
              <div className="flex w-full text-white  font-bold mr-28 sm:px-8 sm:py-2 sm:ml-2 sm:mr-0  sm:text-xs md:ml-12 md:text-[14px] sm:font-semibold">
                Sign in with google
              </div>
            </button>
          </div>
          <div className="text-center text-black-600 text-lg dark:text-dark-text-fill sm:text-sm">
            Or
          </div>

          <button className="w-full py-3 px-4 bg-primary hover:bg-cyan-700 rounded-md text-white font-bold sm:py-1-px-1 sm:font-thin md:text-[14px]">
            Sign in with email and password
          </button>

          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill sm:font-thin">
            Looking to register an organization instead?
            <Link to="/register-organization">
              <a className="text-primary">Register a new organization</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Orggooglelogin;
