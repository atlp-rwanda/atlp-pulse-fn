/* eslint-disable */
import React from 'react';
import TraineePerformanceDetails from '../../components/TraineePerformanceDetails';
import useDocumentTitle from '../../hook/useDocumentTitle';

function PerformanceDetails() {
  useDocumentTitle('Performance details');
  return (
    <div className="bg-neutral-100 dark:bg-dark-frame-bg">
      <TraineePerformanceDetails />
    </div>
  );
}

export default PerformanceDetails;
