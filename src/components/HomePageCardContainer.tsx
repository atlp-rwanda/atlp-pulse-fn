import React from 'react';
import HomePageCard from './HomePageCard';

function HomePageCardContainer() {
  return (
    <div className="bg-white text-center flex flex-col h-fit md:flex-row justify-center items-center lg:h-[700px] w-full dark:bg-dark-blue lg:px-10">
      <HomePageCard />
    </div>
  );
}

export default HomePageCardContainer;
