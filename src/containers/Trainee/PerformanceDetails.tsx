/* eslint-disable */
import React from 'react';
import TraineePerformanceDetails from '../../components/TraineePerformanceDetails';
import TraineeComments from '../../components/TraineeComments';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

function PerformanceDetails() {
  const{t} = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='bg-neutral-100 dark:bg-dark-frame-bg'>
      <TraineePerformanceDetails />
      <TraineeComments />
      {/* <div className="bg-neutral-100 dark:bg-dark-frame-bg">
        <button
          onClick={() => navigate(-1)}
          className="flex lg:ml-72  sm:ml-14 bg-primary px-4 md:py-2 sm:py-1 md:mt-0 sm:mt-[-200px]  rounded-md text-white font-semibold cursor-pointer"
        >
          <IoIosArrowBack className="mt-1 mr-1" />
          {t('Back')}
        </button>
      </div> */}
    </div>
  );
}

export default PerformanceDetails;
