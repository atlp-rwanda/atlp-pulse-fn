import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound dark:bg-dark-frame-bg flex flex-row py-8 px-5  md:flex-row items-center justify-end md:justify-evenly grow h-full w-full ">
      <div></div>
      <div className="bg-light-bg dark:bg-dark-bg px-4 py-5 rounded-3xl max-w-md flex flex-col h-full">
        <h3 className="text-2xl font-sans font-bold dark:text-dark-text-fill ">
          Ooops... What just happened!?
        </h3>
        <h2 className="text-[4rem] font-bold text-primary ">NOT FOUND</h2>
        <p className="text-base font-bold dark:text-dark-text-fill whitespace-pre-wrap">
          You did not break the internet 😱. The page you are looking for does
          not exists.
        </p>

        <Link
          className="px-5 py-3 bg-primary font-bold mt-5 rounded-md text-white w-fit"
          to="/"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
