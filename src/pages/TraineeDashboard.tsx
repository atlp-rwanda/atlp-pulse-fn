/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/jsx-no-bind */

/* istanbul ignore file */

import React from 'react';
import { t } from 'i18next';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TraineeChart from '../components/TraineesChart';
import Table from '../components/TraineeTable';

/* istanbul ignore file */

function SupAdDashboard() {
  return (
    <div className="flex flex-col grow bg-white dark:bg-dark-frame-bg">
      <div className="flex flex-row pb-8 justify-center">
        <div className="h-[100%]">
          {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <Card text="Cohort" number={5} />
            <Card text="Curret phase" number={2} />
            <Card text="Perfomance" number={2} />
            <Card text="Attendance" number={1} /> */}
          {/* </div> */}
          {/* <Chart title={t('Overall performance')} /> */}
          <div className='flex justify-end'>
          <div className=' border-2 grid grid-cols-3 gap-2 max-w-[300px] rounded-lg my-4 mr-4'>
            <p>Period</p>
            <p>Last Month</p>
            <p><RiArrowDropDownLine/></p>

          </div>
          <div className=" flex flex-row justify-start ml-12">
            <div className="flex  bg-[#b8cdba] w-[222px] h-[48px]  items-center justify-center rounded-lg ">
              <span className="mr-2 font-semibold text-xl ">Cohort 26</span>
              <div className="h-5 border-2 bg-[#202020] mx-0 text-xl" />
              <span className="mx-2  font-semibold text-xl "> Phase: 2</span>
            </div>
          </div>

          <p className=" font-bold text-gray-700 ml-12 my-10 text-lg">
            {' '}
            Perfomance score
          </p>
          <div className=" flex flex-row ">
            <div className="flex flex-row w-[90%]  justify-between ml-7  ">
              <div className="flex flex-col w-[30%] ml-7   lg:flex-row">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={80}
                    text={`${1.6}`}
                    styles={buildStyles({
                      pathColor: '#1b5e20',
                      textColor: '#1b5e20',
                    })}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-7">
                  <ul className="list-disc ml-4">
                    <li>Quantity</li>
                  </ul>
                  <p className="text-[#1b5e20] ml-2">Good</p>
                </div>
              </div>
              <div className="flex flex-col w-[30%]  flex-wrap   lg:flex-row">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={30}
                    text={`${0.7}`}
                    styles={buildStyles({
                      pathColor: '#b71c1c',
                      textColor: '#b71c1c',
                    })}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-7">
                  <ul className="list-disc ml-4">
                    <li>Quality</li>
                  </ul>
                  <p className="text-[#b71c1c] ml-2">Need to improve</p>
                </div>
              </div>
              <div className="flex flex-col w-[30%] flex-wrap  lg:flex-row ">
                <div className=" w-[130px]">
                  <CircularProgressbar
                    value={50}
                    text={`${1}`}
                    styles={buildStyles({
                      pathColor: '#ffeb3b',
                      textColor: '#ffeb3b',
                    })}
                  />
                </div>

                <div className=" flex flex-col justify-center ml-7">
                  <ul className="list-disc ml-4">
                    <li>Professionalism</li>
                  </ul>
                  <p className=" text-[#ffeb3b] ml-2">Good</p>
                </div>
              </div>
            </div>
          </div>

          <p className=" font-bol ml-12 my-10 text-lg"> Stats</p>
          <div className=" flex flex-row justify-center items-center ">
            <div className=" w-[100%] ">
              <TraineeChart />
            </div>
          </div>
          <div className="p-4 ml-12">
            <h1 className="text-2xl font-bold mb-4 ">Recents feedback</h1>
            <div className="p-2 grid grid-cols-2 ">
              <div className="flex  items-center ">
                <span
                  className="mr-2 font-bold "
                  style={{
                    fontFamily: 'inter',
                    fontSize: '14px',
                    color: '#b1b1b1',
                    borderBottom: '3px solid #6b6319',
                    borderRadius: '1px',
                  }}
                >
                  Phase : 1
                </span>
                <div className="h-5 border-2 bg-[#b1b1b1] mx-0" />
                <span
                  className="mx-2  font-bold"
                  style={{
                    fontFamily: 'inter',
                    color: '#b1b1b1',
                    fontSize: '14px',
                  }}
                >
                  Phase : 2
                </span>
                <div className="h-5 border-2 bg-black mx-0" />
                <span
                  className="ml-2 font-bold"
                  style={{
                    fontFamily: 'inter',
                    color: '#b1b1b1',
                    fontSize: '14px',
                  }}
                >
                  Phase : 3
                </span>
              </div>
              <div className="flex justify-end">
                <div className="border-2 grid grid-cols-3 gap-2 max-w-[300px] rounded-2xl p-1 mr-20">
                  <span className="flex items-center justify-center">
                    Filter
                  </span>
                  <span className="flex items-center justify-center">
                    Week1
                  </span>
                  <span className="flex items-center justify-center">
                    {' '}
                    <RiArrowDropDownLine />
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-bold text-gray-700 mr-10 my-10 w-[100%] text-lg ">
                <Table data={[]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
