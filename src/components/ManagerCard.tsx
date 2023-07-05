import React from 'react';
import Card from './TeamCard';

const ManagerCard = () => {
  return (
    <div
      className="pt-24 px-4 md:px-0 md:ml-40
    pb-20  w-full dark:bg-dark-frame-bg  dark:text-black h-full flex overflow-x-auto "
    >
      <div className="pl-10 flex">
        <Card
          stylebg="bg-green-100"
          stylebg1="bg-green-300 text-green-500"
          rating="text-green-700"
          grade="A +"
          teamname="Legends"
        />
        <Card
          stylebg="bg-yellow-100"
          stylebg1="bg-yellow-300 text-yellow-500"
          rating="text-yellow-700"
          grade="B +"
          teamname="Champions"
        />

        <Card
          stylebg="bg-red-100"
          stylebg1="bg-red-300 text-red-500"
          rating="text-red-700"
          grade="C +"
          teamname="Team Sostene"
        />
      </div>
    </div>
  );
};

export default ManagerCard;
