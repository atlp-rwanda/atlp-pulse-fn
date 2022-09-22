/* eslint-disable */
import React from 'react';
import TraineePerformanceDetails from '../../components/TraineePerformanceDetails';
import TraineeComments from '../../components/TraineeComments';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../hook/useDocumentTitle';

function PerformanceDetails() {
  useDocumentTitle('Performance details');
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100 dark:bg-dark-frame-bg">
      <TraineePerformanceDetails />
      <TraineeComments />
    </div>
  );
}

export default PerformanceDetails;
