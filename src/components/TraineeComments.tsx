/* eslint-disable */
import { Icon } from '@iconify/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';
import comments from '../dummyData/comments.json';

function TraineeComments() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-1 rounded-md w-[90%] mx-auto lg:w-[70%] lg:ml-60 mb-10 mt-80"></div>
  );
}

export default TraineeComments;
