/* eslint-disable */
import React from 'react';
import TraineeAttendaceDetails from '../../components/TraineeAttendanceDetails';
import TraineeComments from '../../components/TraineeComments';
import useDocumentTitle from '../../hook/useDocumentTitle';

function AttendanceDetails() {
  useDocumentTitle('Attendance details');
  return (
    <div className="bg-neutral-100 dark:bg-dark-frame-bg">
      <TraineeAttendaceDetails />
      <TraineeComments />
    </div>
  );
}

export default AttendanceDetails;
