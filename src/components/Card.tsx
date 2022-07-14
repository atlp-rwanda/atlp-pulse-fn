import React from 'react';

const Card = ({ text, number }: { text: string; number: any }) => {
  return (
    <div className="border bg-white py-4 dark:bg-dark-bg md:w-[70%] h-24 md:h-28 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg">
      <h4 className="font-['sans'] font-medium text-base dark:text-dark-text-fill">
        {text}
      </h4>
      <h1 className="font-['sans] font-semibold text-4xl mt-2 dark:text-dark-text-fill">
        {number}
      </h1>
    </div>
  );
};

export default Card;
