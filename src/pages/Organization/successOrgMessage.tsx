// no-use-before-define
/* istanbul ignore next */
import React from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../hook/useDocumentTitle';
import functionTree from '../../assets/Functionality_Tree.svg';
import pulseStars from '../../assets/Property 1=Logo_flie (1).svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './orgName.css';

export const SuccessOrgMessage = () => {
  useDocumentTitle('Organization');
  const { t } = useTranslation();

  return (
    <div className="grow dark:bg-dark-frame-bg bg-indigo-50 flex flex-row font-serif">
      <div className="hidden lg:flex w-[50%] h-full flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="relative flex flex-row justify-center">
            <img
              src={pulseStars}
              alt="pulses"
              className="absolute inset-0 w-[41rem] h-[12rem] dark:hidden"
            />
            <p className="relative w-[70%] text-gray-700 text-[1.9em] p-5 text-center italic font-bold dark:text-dark-text-fill">
              {t('Boost your organization')}
            </p>
          </div>

          <div className="w-[30vw] h-[42vh] flex flex-row">
            <img
              src={functionTree}
              alt="functions"
              className="w-sm dark:brightness-150"
            />
          </div>
        </div>
      </div>

      {/* Success Message Section */}
      <div className="flex w-[50%] h-full flex-col justify-center items-center mt-10 max-md:my-20 max-md:w-full">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-center" role="alert">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {t('The Organization has been successfully Approved')}</span>
        </div>
      </div>
    </div>
  );
};
