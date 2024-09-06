import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Buttons';

export default function Noredirect() {
  return (
    <div className="font-serif dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-evenly md:justify-evenly grow h-full w-full">
      <h1 className="flex font-semibold text-primary dark:text-dark-text-fill text-3xl">
        Hello
        <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>, Users
      </h1>
      <p className="text-center text-gray-400 text-sm">
        The System is under development, redirection is not found !!
      </p>
      <Link to="/pricing-form">
        <Button variant="primary" size="lg" data-testid="buttonback">
          back
        </Button>
      </Link>
    </div>
  );
}
