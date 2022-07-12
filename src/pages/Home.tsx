import React from 'react';
import IpageSvg from '../assets/landing.svg';

const LandingPage = () => {
  return (
    <div className="w-full min-h-full bg-light-bg dark:bg-dark-frame-bg flex flex-col justify-center grow items-center py-5">
      <div className="grid h-full lg:grid-cols-2 w-full justify-around content-center pb-6">
        <div className="flex h-full flex-col items-center justify-center w-full px-2 py-2">
          <h1 className="mt-28 sm:mt-20 text-3xl md:text-5xl font-bold text-[#173b3fdf] dark:text-dark-text-fill">
            Welcome to DevPulse
          </h1>
          <p className="text-2xl md:text-5xl lg:text-2xl text-justify mt-8 md:mt-28 lg:mt-8 w-3/4 md:px-0 lg:px-8 text-light-text dark:text-dark-text-fill">
            The number one platform for{' '}
            <em>
              <b>managing trainees</b>
            </em>{' '}
            or students in any{' '}
            <em>
              <b>ed-tech organization </b>
            </em>
          </p>
        </div>
        <div className="py-8 px-8 flex items-center justify-center">
          <img
            className="hidden lg:flex h-full w-full"
            src={IpageSvg}
            alt="svg"
          />
        </div>
      </div>
      <div className="w-full text-center justify-center items-center">
        <button className="mt-12 lg:mt-0 justify-center items-center py-3 w-fit px-8  text-xl font-bold uppercase my-4 bg-primary text-white rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
