import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  UserGroupIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/solid';

function Card({
  id,
  stylebg,
  stylebg1,
  rating,
  grade,
  teamname,
  coordinator,
  ttl,
  phase,
  week,
  skills,
  Qty,
  Qnty,
  active,
  drop,
  arrowColor,
}: {
  id: string;
  stylebg: string;
  stylebg1: string;
  rating: string;
  grade: string;
  teamname: string;
  coordinator: string;
  ttl: string;
  phase: string;
  week: number;
  skills: number;
  Qty: number;
  Qnty: number;
  active: number;
  drop: number;
  arrowColor: string;
}) {
  const { t } = useTranslation();
  return (
    <div>
      <div
        className={`${stylebg}  font-serif font-lexend w-[350px] h-[300px]   md:w-[500px] md:h-[300px]  rounded-md px-3 md:p-10 mr-11 py-7 
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
            <h1>{coordinator}</h1>
            <p className="text-gray-500 font-medium flex items-center ">
              {coordinator ? `${t('Coordinator')}` : `${t('Nocoordinator')}`}
            </p>
          </div>

          <div>
            <h1>{ttl}</h1>
            <p className="text-gray-500 font-medium flex items-center ">
              {' '}
              {ttl ? `${t('TTL')}` : `${t('No TTL')}`}
            </p>
          </div>

          <div className="flex pb-0 items-center text-center ">
            <UserGroupIcon className="w-5" />
            <h1 className="text-green-700 ml-2 mr-2 mb-0">
              {t('Active')}: {active}
            </h1>{' '}
            |
            <h1 className="text-red-500 text ml-2 pb-0">
              {' '}
              {t('Drop')}: {drop}
            </h1>
          </div>

          <div>
            <h1 className="ml-3 pt-2">
              {t('Week')} {week} {t('in')} {phase}
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
              {skills >= 1 ? (
                <ArrowUpIcon
                  className={`${'text-green-500 rotate-45'} w-5 ml-2 transform`}
                />
              ) : (
                <ArrowDownIcon
                  className={`${'text-red-500 -rotate-45'} w-5 ml-2 transform`}
                />
              )}
              P.Skills:{' '}
              <span
                className={`${skills >= 1 ? 'text-green-700' : 'text-red-500'}`}
              >
                {typeof skills === 'number' ? skills.toFixed(1) : skills}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
