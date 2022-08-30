/* eslint-disable */
import React from 'react';
import TraineeAttendaceDetails from '../../components/TraineeAttendanceDetails';
import TraineeComments from '../../components/TraineeComments';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../../hook/useDocumentTitle';

function AttendanceDetails() {
  useDocumentTitle('Attendance details');
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100 dark:bg-dark-frame-bg">
      <TraineeAttendaceDetails />
      <TraineeComments />
    </div>
  );
}

export default AttendanceDetails;
