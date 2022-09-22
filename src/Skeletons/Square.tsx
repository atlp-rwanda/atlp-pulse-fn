import React from 'react';

export default function Square() {
  return (
    <div className="w-full overflow-hidden h-full grow flex flex-col">
      <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg overflow-hidden px-4">
        <div className="flex flex-row pb-8 justify-center">
          <div className="lg:ml-44 w-[90%] pt-[4vh] lg:pt-[6vh]">
            <div className="grid grid-cols-2 lg:grid-cols-4 px-4">
              <div className=" bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" />
              <div className=" bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" />
              <div className=" bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" />
              <div className=" bg-gray-300 py-4 dark:bg-gray-600 md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
        <div className="items-center px-4 ">
          <div className="w-[100%] h-[46vh] lg:h-[62vh] pb-14 lg:w-[84%] mx-auto lg:ml-52 lg:mr-2  mt-8 bottom-0 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
