import React from 'react';

import Card from './TeamCard';

import {
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid';

const ManagerCard = () => {
  return (
    <div
      className="pt-24 px-4 md:px-0 md:ml-60
    pb-20  w-full dark:bg-dark-frame-bg  dark:text-black h-full flex overflow-x-auto "
    >
      <Card
        stylebg="bg-green-100"
        stylebg1="bg-green-300 text-green-500"
        rating="text-green-700"
      />
      <Card
        stylebg="bg-yellow-100"
        stylebg1="bg-yellow-300 text-yellow-500"
        rating="text-yellow-700"
      />

      <Card
        stylebg="bg-red-100"
        stylebg1="bg-red-300 text-red-500"
        rating="text-red-700"
      />
    </div>
  );
};

export default ManagerCard;
