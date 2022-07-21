/* eslint-disable */
import React from 'react';
import TraineePerformanceDetails from '../../components/TraineePerformanceDetails';
import TraineeComments from '../../components/TraineeComments';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function PerformanceDetails() {
  return (
    <div>
      <TraineePerformanceDetails />
      <TraineeComments />
      <div className="bg-neutral-100 dark:bg-dark-frame-bg">
        <Link to="/dashboard/trainee/performance">
          <button className="flex lg:ml-72  sm:ml-14 bg-primary px-4 md:py-2 sm:py-1 md:mt-0 sm:mt-[-200px]  rounded-md text-white font-semibold cursor-pointer">
            <IoIosArrowBack className="mt-1 mr-1" />
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PerformanceDetails;
