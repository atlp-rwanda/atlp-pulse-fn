import React from 'react';
import { Link } from 'react-router-dom';

const Orglogin = () => {
  return (
    <div className="min-h-screen  bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans ">
      <div className="max-w-lg w-full mx-auto mt-4 bg-white dark:bg-dark-bg p-14">
        <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
          Sign in to your Organization
        </div>
        <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
          Enter your organization’s Dev-Pulse URL
        </div>
        <form action="" className="space-y-6 mt-4">
          <div>
            <input
              type="text"
              placeholder="your-organization.pulse.com"
              className="w-full p-2 border border-primary rounded mt-1 dark:bg-dark-bg"
            ></input>
          </div>

          <div>
            <Link to="/login-admin">
              <button className="w-full py-2 px-4 bg-primary hover:bg-cyan-700 rounded-md text-white text-sm">
                Continue
              </button>
            </Link>
          </div>
          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
            Don’t know your organization URL?
            <a className="text-primary"> Find your organizations</a>
          </div>
          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
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

export default Orglogin;
