/* eslint-disable */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TraineeAttendanceDetails = () => {
  
  return (
    <div>
      <div className="bg-neutral-100  dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center  min-h-screen ">
        <table className="lg:w-9/12 md:w-11/12 lg:h-[70%] md:h-[60%] md:ml-0 lg:ml-32 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md mt-32 mb-[-120px]">
          <thead>
            <tr className="text-gray-300  bg-gray-100  dark:bg-dark-tertiary">
              <th className="lg:py-3 md:py-2 lg:px-3 md:px-2  text-left  text-[#6B7280] dark:text-dark-text-fill ">
                Session
              </th>
              <th className="lg:py-3 md:py-2 lg:px-10 md:px-7 text-center text-[#6B7280] dark:text-dark-text-fill">
                Record
              </th>
              <th className="lg:py-3 md:py-2 text-left text-[#6B7280] dark:text-dark-text-fill">
                Comment
              </th>
              <th className="lg:py-3 md:py-2"></th>
            </tr>
          </thead>
          <tbody className=" text-center ">
            <tr className="text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
              <td className="lg:py-10 md:py-0 px-10 text-left  ">Demo</td>
              <td className="py-3 ">1</td>
              <td className="lg:py-6 md:py-3 text-start lg:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </td>

              <td className="py-3 px-8">
                <button className="px-4 py-0 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm">
                  Reply
                </button>
              </td>
            </tr>
            <tr className="text-black dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary ">
              <td className="py-10 px-10 text-left">Standup</td>
              <td className="py-3 ">1</td>
              <td className="py-3  text-start text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </td>
              <td className="py-3 ">
                <button className="px-4 py-0 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm">
                  Reply
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sm:flex sm:flex-col md:hidden justify-center items-center bg-light-bg dark:bg-dark-frame-bg dark:text-white  text-black">
        <div className="flex flex-col justify-center items-start w-full py-4 px-4 ml-4 mt-4">
          <h2 className="font-semibold mt-12 "> Sprint 1</h2>
          <h3 className="font-medium text-left text-[#6B7280] dark:text-white ">
            June 20, 2022 - June 24, 2022
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white  dark:bg-dark-bg pb-4 mt-4 pt-16">
          <table className=" rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]">
            <thead>
              <tr className="text-gray-300 dark:text-white  bg-gray-100 dark:bg-dark-tertiary ">
                <th className="py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill ">
                  Session
                </th>
                <th className="py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill">
                  Demo
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill  ">
                <td className="py-3 px-10">Record</td>
                <td className=" ">1</td>
              </tr>
              <tr className="text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  ">
                <td className="py-10 px-10 text-left">Comments</td>
                <td className="py-3  text-start text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </td>
              </tr>
            </tbody>
          </table>
          <button className="px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm">
            Reply
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16">
          <table className=" rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]">
            <thead>
              <tr className="text-gray-300 dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary">
                <th className="py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill  ">
                  Session
                </th>
                <th className="py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill">
                  Standup
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill ">
                <td className="py-3 px-10">Record</td>
                <td className=" ">1</td>
              </tr>
              <tr className="text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  ">
                <td className="py-10 px-10 text-left">Comments</td>
                <td className="py-3  text-start text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </td>
              </tr>
            </tbody>
          </table>
          <button className="px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraineeAttendanceDetails;
