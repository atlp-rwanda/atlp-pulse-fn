/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import Pagination from '../components/Pagination';
import AttendanceData from '../dummyData/attendance.json';
import useDocumentTitle from '../hook/useDocumentTitle';
import { GET_WEEKLY_ATTENDANCE } from '../Mutations/Attendance';

interface TraineeAttendanceData {
  getTraineeAttendanceByID: {
    weekNumber: string;
    traineeAttendance: {
      days: string;
      value: number;
    }[];
  }[];
}

interface weekData {
  weekNumber: string;
  traineeAttendance: (
    | { days: string; value: number }
    | { days: string; value: string }
  )[];
}
[];

export function optimizeWeekData(weeklyData: TraineeAttendanceData) {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const optimizedWeekData = weeklyData.getTraineeAttendanceByID.map((week) => {
    const daysPresent = week.traineeAttendance.map((day) => day.days);
    const missingDays = weekDays.filter((day) => !daysPresent.includes(day));
    const missingDayData = missingDays.map((day) => ({
      days: day,
      value: 'N/A',
    }));

    return {
      weekNumber: week.weekNumber,
      traineeAttendance: [...week.traineeAttendance, ...missingDayData],
    };
  });
  return optimizedWeekData;
}

export function getTraineeEmail() {
  const localAuth = localStorage.getItem('auth');
  if (localAuth) {
    const auth = JSON.parse(localAuth);
    return auth.email;
  }
}

const TraineeAttendance: React.FC = () => {
  useDocumentTitle('Attendance');
  const { t } = useTranslation();
  const [weekAttendance, setWeekAttendance] = useState<any>([]);
  const { loading, error, data } = useQuery<TraineeAttendanceData>(
    GET_WEEKLY_ATTENDANCE,
    {
      variables: { traineeEmail: getTraineeEmail() },
      onCompleted: (data) => {
        const optimizedWeekData = optimizeWeekData(data);
        setWeekAttendance(optimizedWeekData);
      },
      onError: (error: any) => {
        console.log(error);
      },
    },
  );

  if (error) {
    return <p>Error loading data</p>;
  }

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = Pagination({
    contentPerPage: 3,
    count: AttendanceData.length,
  });

  return (
    <>
      <div className="bg-light-bg dark:bg-dark-frame-bg">
        <div className="">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full">
            <div className=""></div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <tbody>
                      <tr>
                        <th>Week</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                      </tr>
                      {weekAttendance &&
                        weekAttendance.map((week: any) => (
                          <tr key={week.weekNumber}>
                            <td
                              data-testid={week.weekNumber}
                              className="border-b border-gray-300 px-4 py-2 text-center"
                            >
                              {week.weekNumber}
                            </td>
                            {week.traineeAttendance.map((dayData: any) => (
                              <td
                                data-testid={dayData.days}
                                className="border-b border-gray-300 px-4 py-2 text-center"
                                key={dayData.days}
                              >
                                {dayData.value}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-12 mb-0">
            <button
              onClick={prevPage}
              data-testid="prev"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              data-testid="page1"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === 1 && 'disabled'
              }`}
            >
              1
            </button>
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                data-testid="page2"
                key={el}
                className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                  page === el ? 'active' : ''
                }`}
              >
                {el}
              </button>
            ))}
            <button
              onClick={() => setPage(totalPages)}
              data-testid="page3"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === totalPages && 'disabled'
              }`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              data-testid="next"
              className={`page flex text-white h-12 w-12 items-center justify-center border-solid cursor-pointer bg-transparent ${
                page === totalPages && 'disabled'
              }`}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeAttendance;
