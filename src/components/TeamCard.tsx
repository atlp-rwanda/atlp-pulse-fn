import React from 'react';

import {
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid';

function Card({
  stylebg,
  stylebg1,
  rating,
  grade,
  teamname,
  manager,
  ttl,
  phase,
  week,
  att,
  Qty,
  Qnty,
  active,
  drop,
  arrowColor,
}: {
  stylebg: string;
  stylebg1: string;
  rating: string;
  grade: string;
  teamname: string;
  manager: string;
  ttl: string;
  phase: string;
  week: number;
  att: number;
  Qty: number;
  Qnty: number;
  active: number;
  drop: number;
  arrowColor: string;
}) {
  return (
    <div>
      <div
        className={`${stylebg}   font-lexend w-[350px] h-[300px]   md:w-[500px] md:h-[300px]  rounded-md px-3 md:p-10 mr-11 py-7 
      `}
      >
        <div className="flex justify-between  py-1">
          <div className="flex items-center">
            <h1
              className={`${stylebg1}  h-10 w-10 font-bold rounded-full flex items-center  
            justify-center text-sm   `}
            >
              {teamname.slice(0, 2).toUpperCase()}
            </h1>
            <h1 className=" text-xl md:text-2xl ml-3 ">{teamname}</h1>
          </div>
          <div>
            <h1 className={`${rating} font-lexend font-bold text-3xl`}>
              {grade}
            </h1>
          </div>
        </div>

        <div className=" font-josefin  ml-12 mb-0 mt-3">
          <div>
            <h1>{manager}</h1>
            <p className="text-gray-500 font-medium flex items-center ">
              {manager ? 'Manager' : 'No Manager'}
            </p>
          </div>

          <div>
            <h1>{ttl}</h1>
            <p className="text-gray-500 font-medium flex items-center ">
              {' '}
              {ttl ? 'TTL' : 'No TTL'}
            </p>
          </div>

          <div className="flex pb-0 items-center text-center ">
            <UserGroupIcon className="w-5" />
            <h1 className="text-green-700 ml-2 mr-2 mb-0">
              Active: {active}
            </h1>{' '}
            |<h1 className="text-red-500 text ml-2 pb-0"> Drop: {drop}</h1>
          </div>

          <div>
            <h1 className="ml-3 pt-2">
              Week {week} in {phase}
            </h1>
          </div>

          <div>
            <h1 className="flex mt-2">
              {Qty >= 1 ? (
                <ArrowUpIcon
                  className={`${'text-green-500 rotate-45'} w-5 ml-2 transform`}
                />
              ) : (
                <ArrowDownIcon
                  className={`${'text-red-500 -rotate-45'} w-5 ml-2 transform`}
                />
              )}
              Qty:{' '}
              <span
                className={`${Qty >= 1 ? 'text-green-700' : 'text-red-500'}`}
              >
                {typeof Qty === 'number' ? Qty.toFixed(1) : Qty}
              </span>
              {Qnty >= 1 ? (
                <ArrowUpIcon
                  className={`${'text-green-500 rotate-45'} w-5 ml-2 transform`}
                />
              ) : (
                <ArrowDownIcon
                  className={`${'text-red-500 -rotate-45'} w-5 ml-2 transform`}
                />
              )}{' '}
              Qnty:{' '}
              <span
                className={`${Qnty >= 1 ? 'text-green-700' : 'text-red-500'}`}
              >
                {typeof Qnty === 'number' ? Qnty.toFixed(1) : Qnty}
              </span>
              {att >= 1 ? (
                <ArrowUpIcon
                  className={`${'text-green-500 rotate-45'} w-5 ml-2 transform`}
                />
              ) : (
                <ArrowDownIcon
                  className={`${'text-red-500 -rotate-45'} w-5 ml-2 transform`}
                />
              )}
              Atten:{' '}
              <span
                className={`${att >= 1 ? 'text-green-700' : 'text-red-500'}`}
              >
                {typeof att === 'number' ? att.toFixed(1) : att}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
