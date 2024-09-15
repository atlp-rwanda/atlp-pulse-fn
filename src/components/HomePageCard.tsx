import React from 'react';

function HomePageCard({ style }: any) {
  return (
    <>
      <div
        className="font-serif text-black md:w-[600px] md:h-fit bg-light-green m-9 p-5 shadow-lg rounded-lg font-poppins text-center justify-center dark:bg-dark-light-blue dark:text-white"
        //   style={{ backgroundColor: '#D9E4DD' }}
      >
        <h1 className="font-black text-[19px] mt-5 ">
          Track Your Program Cycle
        </h1>
        <p className="font-light text-base text-left mt-5 ">
          Leverage a robust platform that empowers you to effortlessly track and
          manage trainees from the recruitment all the way to their graduation.
        </p>
      </div>
      <div className="text-black md:w-[600px] md:h-fit bg-light-green m-9 p-5 shadow-lg rounded-lg font-poppins text-center justify-center dark:bg-dark-light-blue dark:text-white">
        <h1 className=" font-black text-[19px] mt-5">
          Say Goodbye to Spreadsheets
        </h1>
        <p className="font-light text-base text-left mt-5">
          Harness the super powers of a centralized hub, providing you with a
          reliable and comprehensive source of information for all your info
          programs.
        </p>
      </div>
    </>
  );
}

export default HomePageCard;
