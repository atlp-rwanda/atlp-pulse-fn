import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function LandingPage() {
  return (
    <div className="hero">
      <Header styles="bg-opacity-50 dark:bg-opacity-50" />
      <div className="hero w-full min-h-full flex flex-col justify-center grow items-center py-5">
        <div className="grid h-full lg:grid-cols-2 w-full justify-around content-center pb-6">
          <div className="flex h-full flex-col items-center justify-start  w-full px-4 py-2">
            <h1 className="mt-28 sm:mt-20 text-3xl sm:text-4xl md:pl-10 md:text-6xl font-bold text-white dark:text-dark-text-fill font-lexend text-center md:text-left">
              Welcome to DevPulse
            </h1>
            <p className="text-2xl md:text-4xl lg:text-3xl mt-8 md:mt-8 lg:mt-8 w-full sm:w-3/4 md:w-4/5 lg:w-full md:px-0 lg:px-8 text-white dark:text-dark-text-fill font-sans text-center">
              The number one platform for
              <em>
                <b> managing trainees </b>
              </em>
              or
              <em>
                <b> students </b>
              </em>
              in any
              <em>
                <b> ed-tech organization </b>
              </em>
            </p>
            <button
              type="button"
              className="mt-12 lg:mt-8 justify-center items-center py-3 w-fit px-8  text-xl font-bold uppercase my-4 bg-primary text-white rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer styles="dark:bg-opacity-75 bg-opacity-50" />
    </div>
  );
}

export default LandingPage;
