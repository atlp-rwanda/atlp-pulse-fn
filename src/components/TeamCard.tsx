import React from 'react';

import {
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid';

const Card = ({
  stylebg,
  stylebg1,
  rating,
}: {
  stylebg: string;
  stylebg1: string;
  rating: string;
}) => {
  return (
    <div>
      <div
        className={`${stylebg}   font-lexend   w-[500px] h-[300px] rounded-md px-10 mr-11 py-7 
      `}
      >
        <div className="flex justify-between  py-1">
          <div className="flex items-center">
            <h1
              className={` ${stylebg1}  h-10 w-10 font-bold rounded-full flex items-center  
            justify-center text-sm   `}
            >
              LG
            </h1>
            <h1 className=" text-3xl ml-3 ">Legends</h1>
          </div>
          <div>
            <h1 className={`${rating} font-lexend font-bold text-3xl`}>A +</h1>
          </div>
        </div>

        <div className=" font-josefin  ml-12 mb-0 mt-3">
          <div>
            <h1>MBALANYA Didas</h1>
            <p className="text-gray-500 font-medium flex items-center ">
              Manager
              <div className="bg-green-700 h-2 w-2 rounded-full ml-3"></div>
            </p>
          </div>

          <div>
            <h1>Alex axel MUCYO</h1>
            <p className="text-gray-500 font-medium flex items-center ">TTL</p>
          </div>

          <div className="flex">
            <UserGroupIcon className="w-5" />
            <h1 className="text-green-700 ml-2 mr-2">Active: 18</h1> |
            <h1 className="text-red-500 text ml-2"> Drop: 2</h1>
          </div>

          <div>
            <h1 className="ml-3">Week 3 in Phase 1</h1>
          </div>

          <div>
            <h1 className="flex">
              <ArrowUpIcon className="w-5 transform rotate-45 text-green-700" />
              Qty: <span className="text-green-700">1.5</span>
              <ArrowDownIcon className="w-5 ml-2 transform -rotate-45 text-red-700" />
              Qnty: <span className="text-red-500">0.1</span>
              <ArrowUpIcon className="w-5 ml-2 transform rotate-45 text-green-700" />
              Atten: <span className="text-green-700">1.5</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
