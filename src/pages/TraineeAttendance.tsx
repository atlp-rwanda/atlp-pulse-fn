/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import useDocumentTitle from '../hook/useDocumentTitle';
import AttendanceSymbols from '../components/AttendanceSymbols';
import { GET_TRAINEE_ATTENDANCE } from '../queries/attendance.queries';
import { WeekdaysInterface } from './TraineeAttendanceTracker';

interface dataProps {
  date: string;
  score: string | null;
}
interface weekDaysProps {
  day: string;
  data: dataProps;
}
interface TraineeAttendanceWeek {
  week: number;
  daysStatus: WeekdaysInterface;
}

interface PhaseInterface {
  _id: string;
  name: string;
}

interface TraineeAttendancePhase {
  phase: PhaseInterface;
  weeks: TraineeAttendanceWeek[];
}

interface TraineeAttendanceProps {
  traineeId: string;
  teamName: string;
  phases: TraineeAttendancePhase[];
}

const TraineeAttendance: React.FC = () => {
  useDocumentTitle('Attendance');
  const { t } = useTranslation();

  const [traineeAttendanceData, setTraineeAttendanceData] =
    useState<TraineeAttendanceProps>();
  const [selectedPhase, setSelectedPhase] = useState<TraineeAttendancePhase>();
  const [selectedWeek, setSelectedWeek] = useState<TraineeAttendanceWeek>();
  const [weekDays, setWeekDays] = useState<weekDaysProps[]>([]);
  const [selectedWeekNumber, setSelectedWeekNumber] = useState<
    string | number
  >();

  const { data, loading } = useQuery(GET_TRAINEE_ATTENDANCE);

  useEffect(() => {
    if (data) {
      setTraineeAttendanceData(data.getTraineeAttendance);
    }
  }, [data]);

  useEffect(() => {
    if (traineeAttendanceData) {
      const lastPhase =
        traineeAttendanceData.phases[traineeAttendanceData.phases.length - 1];
      setSelectedPhase(lastPhase);
    }
  }, [traineeAttendanceData]);

  useEffect(() => {
    if (selectedPhase) {
      const lastWeek = selectedPhase.weeks[selectedPhase.weeks.length - 1];
      setSelectedWeekNumber(lastWeek.week);
    }
  }, [selectedPhase]);

  useEffect(() => {
    if (selectedWeekNumber && selectedPhase) {
      const selectedWeek = selectedPhase.weeks.find((week) => {
        if (Number(week.week) === Number(selectedWeekNumber)) {
          return true;
        }
        return false;
      });

      setSelectedWeek(selectedWeek);
    }
  }, [selectedWeekNumber]);

  useEffect(() => {
    if (selectedWeek) {
      const transformedArray = Object.entries(selectedWeek.daysStatus)
        .filter(([day]) => day !== '__typename')
        .map(([day, { date, score }]) => ({
          day,
          data: { date, score },
        }));

      setWeekDays(transformedArray);
    }
  }, [selectedWeek]);

  const Skeleton = (
    <>
      <div className="flex flex-col gap-y-7 xmd:gap-y-9 bg-tertiary dark:bg-dark-bg p-5 xmd:p-7 md:p-10 xmd:m-5 rounded-lg font-serif">
        <div className="flex justify-between">
          <h2 className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          <h2 className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
        </div>
        <div className="flex justify-between items-end mt-5">
          <h2 className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          <h2 className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
        </div>
        <div>
          <h2 className="flex items-center w-full h-40 animate-pulse duration-200 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          <div className="flex flex-col gap-2 text-[.8rem] xmd:text-[.83rem] md:text-sm tracking-tight ml-2 xmd:ml-5 mt-6">
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {loading ? (
        Skeleton
      ) : (
        <div className="flex flex-col gap-y-7 xmd:gap-y-9 bg-tertiary dark:bg-dark-bg p-5 xmd:p-7 md:p-10 xmd:m-5 rounded-lg font-serif">
          <div className="flex justify-between">
            <h2 className="text-lg xmd:text-xl font-semibold">
              {t('Your Attendance')}
            </h2>
            <h2 className="text-[.85rem] sm:text-sm font-medium">
              {`Team ${traineeAttendanceData?.teamName}`}
            </h2>
          </div>
          <div className="flex justify-between items-end mt-5">
            <div className="flex flex-shrink-0 w-32 xm:w-44 xmd:w-[70%] overflow-x-scroll xmd:overflow-x-auto  xmd:custom-scrollbar">
              {traineeAttendanceData?.phases.map((phase) => (
                <div
                  key={phase.phase._id}
                  onClick={() => {
                    setSelectedPhase(phase);
                  }}
                  className={`${
                    phase.phase._id === selectedPhase?.phase._id
                      ? 'border-black dark:border-white dark:text-white  text-neutral-600'
                      : 'dark:border-neutral-600 dark:text-neutral-500 border-neutral-400 text-neutral-600'
                  } h-6 xmd:h-7 px-2 xmd:px-3 border-b-4 capitalize cursor-pointer font-medium whitespace-nowrap text-[.85rem] xmd:text-[.95rem]`}
                >
                  <span>{phase.phase.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center pl-2 pr-1 h-[1.85rem] xmd:h-8 w-24 xmd:w-28 rounded-[4px] border dark:border-white border-black text-black dark:text-white text-[.83rem] xmd:text-[.9rem]">
              <span>Week:</span>
              <select
                className="w-full text-center bg-tertiary dark:bg-dark-bg border-none outline-none cursor-pointer "
                value={selectedWeekNumber}
                onChange={(event) => {
                  setSelectedWeekNumber(event.target.value);
                }}
              >
                {selectedPhase?.weeks.map((week) => (
                  <option key={week.week} value={week.week}>
                    {week.week}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <table className="w-full overflow-hidden border border-neutral-400 dark:border-neutral-600">
              <thead>
                <tr className="bg-neutral-400/60 dark:bg-neutral-600 h-9 xmd:h-12 text-[.84rem] xmd:text-base">
                  <th className="font-medium">Day</th>
                  <th className="font-medium">Date</th>
                  <th className="font-medium">Score</th>
                </tr>
              </thead>
              <tbody className="font-normal text-[.82rem] xmd:text-[.9rem]">
                {weekDays &&
                  weekDays.map((weekDay, index) => (
                    <tr
                      key={weekDay.data.date}
                      className={`${
                        index % 2 !== 0
                          ? 'even:bg-neutral-400/20 dark:even:bg-black/20 h-[2.1rem] xmd:h-10'
                          : 'even:bg-neutral-400/20 dark:even:bg-black/20  h-[2.1rem] xmd:h-10 border-y border-neutral-400/30 dark:border-neutral-600/40'
                      }`}
                    >
                      <td className="text-center capitalize">{weekDay.day}</td>
                      <td className="text-center">{weekDay.data.date}</td>
                      {weekDay.data.score ? (
                        <td>
                          <div className="flex justify-center items-center">
                            <AttendanceSymbols
                              status={Number(weekDay.data.score)}
                            />
                          </div>
                        </td>
                      ) : (
                        <td className="text-center font-extrabold leading-[0px]">
                          ___
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex flex-col gap-2 text-[.8rem] xmd:text-[.83rem] md:text-sm tracking-tight ml-2 xmd:ml-5 mt-6">
              <div className="flex gap-x-1 items-center">
                <AttendanceSymbols status={2} />
                <span>[2] Attended and communicated</span>
              </div>
              <div className="flex gap-x-1 items-center ">
                <AttendanceSymbols status={1} />
                <span>[1] Didn&lsquo;t attend and communicated</span>
              </div>
              <div className="flex gap-x-1 items-center">
                <AttendanceSymbols status={0} />
                <span>
                  [0] Didn&lsquo;t attend and didn&lsquo;t communicate
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TraineeAttendance;
