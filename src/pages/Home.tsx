import React from 'react';
import IpageSvg from '../assets/body.svg';

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-[87.5vh] bg-light-bg dark:bg-dark-frame-bg flex justify-between">
        <div className="grid lg:grid-cols-2 max-w-[1240px] ">
          <div className="flex flex-col items-center justify-center lg:items-start w-full px-2 py-2">
            <h1 className="mt-28 sm:mt-20 lg:ml-8 text-3xl md:text-5xl font-bold text-[#173b3fdf] dark:text-dark-text-fill">
              DevPulse - Welcome
            </h1>
            <p className="text-2xl md:text-5xl lg:text-2xl text-center mt-8 md:mt-28 lg:mt-8 w-3/4 md:px-0 lg:px-8 text-light-text dark:text-dark-text-fill">
              The No 1 platform for managing trainees or students in
              any ed-tech organization
            </p>
          </div>
          <img
            className="hidden mt-20 lg:flex md:w-[70%] md:ml-auto md:justify-center md:items-center"
            src={IpageSvg}
            alt="svg"
          />
          <div className="w-full sm:w-[90vw] 2xl:w-[50vw] text-center justify-center items-center">
            <button className="mt-12 lg:mt-0 justify-center items-center py-3 w-1/2 px-4 lg:w-1/6 my-4 ml-8 bg-primary text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
