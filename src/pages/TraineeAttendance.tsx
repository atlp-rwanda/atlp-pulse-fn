/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import useDocumentTitle from '../hook/useDocumentTitle';
import AttendanceSymbols from '../components/AttendanceSymbols';
import { GET_TRAINEE_ATTENDANCE } from '../queries/attendance.queries';
import { WeekdaysInterface } from './TraineeAttendanceTracker';
import { Minus } from 'lucide-react';
import { format } from 'date-fns';

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
  weekAverage: number;
  daysStatus: WeekdaysInterface;
}

interface PhaseInterface {
  _id: string;
  name: string;
}

interface TraineeAttendancePhase {
  phase: PhaseInterface;
  phaseAverage: number;
  weeks: TraineeAttendanceWeek[];
}

interface TraineeAttendanceProps {
  traineeId: string;
  teamName: string;
  allPhasesAverage: number;
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
      const tempSelectedWeek = selectedPhase.weeks.find((week) => {
        if (Number(week.week) === Number(selectedWeekNumber)) {
          return true;
        }
        return false;
      });

      setSelectedWeek(tempSelectedWeek);
    }
  }, [selectedWeekNumber, selectedPhase]);

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
          <h2 className="flex items-center w-[145px] xmd:w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          <h2 className="flex items-center w-[145px] xmd:w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
        </div>
        <div className="flex justify-between items-end mt-3 xmd:mt-5">
          <h2 className="flex items-center w-[145px] xmd:w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
          <h2 className="flex items-center w-[145px] xmd:w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]"></h2>
        </div>
        <div>
          <div className="flex items-center w-full h-44 animate-pulse duration-200 bg-gray-400/90 mb-5 rounded-[6px] px-5"></div>
          <div className="flex flex-col gap-4 ml-2 xmd:ml-5 mt-6">
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 rounded-[4px]"></h2>
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 rounded-[4px]"></h2>
            <h2 className="flex items-center w-[280px] h-7 animate-pulse duration-75 bg-gray-400/90 rounded-[4px]"></h2>
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
        <div className="flex flex-col gap-y-7 xmd:gap-y-9 bg-tertiary dark:bg-dark-bg p-5 xmd:p-7 md:p-10 xmd:m-2 md:m-5 rounded-lg font-serif">
          <div>
            <h2 className="text-lg xmd:text-xl font-semibold">
              {t('Your Attendance')}
            </h2>
          </div>
          <div className="flex justify-between items-end mt-5">
            <div className="flex flex-shrink-0 w-32 xm:w-44 xmd:w-[70%] overflow-x-scroll xmd:overflow-x-auto  xmd:custom-scrollbar">
              {traineeAttendanceData?.phases.map((phase) => (
                <div
                  key={phase.phase._id}
                  onClick={() => setSelectedPhase(phase)}
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
                data-testid="week-test"
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
                {!selectedPhase?.weeks.length && <option>00</option>}
              </select>
            </div>
          </div>

          <div>
            {!traineeAttendanceData?.phases.length && (
              <div className="flex items-center px-3 xmd:pl-7 bg-yellow-700/25 dark:bg-yellow-600/15 text-black h-10 dark:text-white text-[.75rem] xmd:text-[.85rem] md:text-[.9rem] italic leading-3">
                <p>
                  You don't have an attendance record in the system at the
                  moment.
                </p>
              </div>
            )}
            <table className="w-full overflow-hidden border border-neutral-400 dark:border-neutral-600">
              <thead>
                <tr className="bg-neutral-400/60 dark:bg-neutral-600 h-9 xmd:h-[2.7rem] text-[.84rem] xmd:text-base">
                  <th className="font-semibold">Day</th>
                  <th className="font-semibold">Date</th>
                  <th className="font-semibold">Score</th>
                </tr>
              </thead>
              <tbody className="font-normal text-[.82rem] xmd:text-[.86rem] md:text-[.9rem]">
                {weekDays.length
                  ? weekDays.map((weekDay, index) => (
                      <tr
                        key={weekDay.data.date}
                        className="even:bg-neutral-400/20 dark:even:bg-black/20  h-[2.1rem] xmd:h-10 even:border-y even:border-neutral-400/30 dark:even:border-neutral-600/40"
                      >
                        <td className="text-center capitalize">
                          {weekDay.day}
                        </td>
                        <td className="text-center text-[.8rem] xmd:text-[.83rem] md:text-[.85rem]">
                          {format(new Date(weekDay.data.date), 'dd, MMM yyyy')}
                        </td>
                        {weekDay.data.score ? (
                          <td>
                            <div className="flex justify-center items-center">
                              <AttendanceSymbols
                                status={Number(weekDay.data.score)}
                              />
                            </div>
                          </td>
                        ) : (
                          <td className="font-extrabold">
                            <div className="flex justify-center items-center">
                              <Minus />
                            </div>
                          </td>
                        )}
                      </tr>
                    ))
                  : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                      <tr
                        key={day}
                        className="even:bg-neutral-400/20 dark:even:bg-black/20  h-[2.1rem] xmd:h-10 even:border-y even:border-neutral-400/30 dark:even:border-neutral-600/40"
                      >
                        <td className="text-center capitalize">{day}</td>
                        <td className="font-extrabold">
                          <div className="flex justify-center items-center">
                            <Minus />
                          </div>
                        </td>
                        <td className="font-extrabold">
                          <div className="flex justify-center items-center">
                            <Minus />
                          </div>
                        </td>
                      </tr>
                    ))}
                <tr className="even:bg-neutral-400/20 dark:even:bg-black/20  h-[2.1rem] xmd:h-10 even:border-y even:border-neutral-400/30 dark:even:border-neutral-600/40">
                  <td colSpan={3}>
                    <div className="flex flex-col gap-y-8 xmd:flex-row  justify-between xmd:items-end list-inside py-5 pl-5 pr-1 md:px-10 md:py-5 text-[.8rem] xmd:text-[.83rem] md:text-sm">
                      <div>
                        <h2 className="uppercase font-semibold mb-3">
                          Attendance Averages:
                        </h2>
                        <ul className="flex flex-col gap-y-2 list-disc font-medium pl-8 ">
                          <li>
                            <div className="flex items-center gap-1">
                              <span>Week {selectedWeekNumber}: </span>
                              <span className="inline-block bg-gray-400 dark:bg-gray-600 px-[6px] py-[1px] rounded-[3px] font-semibold text-[.76rem] xmd:text-[.8rem] md:text-[.83rem] leading-[1.05rem]">
                                {selectedWeek ? selectedWeek.weekAverage : '0.0'}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-1">
                              <span>
                                {selectedPhase
                                  ? selectedPhase.phase.name
                                  : 'Sel Phase'}
                                :
                              </span>
                              <span className="inline-block bg-gray-400 dark:bg-gray-600 px-[6px] py-[1px] rounded-[3px] font-semibold text-[.76rem] xmd:text-[.8rem] md:text-[.83rem] leading-[1.05rem]">
                                {selectedPhase
                                  ? selectedPhase.phaseAverage
                                  : '0.0'}
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="flex items-center gap-1">
                              <span>All Phases: </span>
                              <span className="inline-block bg-gray-400 dark:bg-gray-600 px-[6px] py-[1px] rounded-[3px] font-semibold text-[.76rem] xmd:text-[.8rem] md:text-[.83rem] leading-[1.05rem]">
                                {traineeAttendanceData
                                  ? traineeAttendanceData.allPhasesAverage
                                  : '0.0'}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-2 text-[.8rem] xmd:text-[.83rem] md:text-sm tracking-tight">
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default TraineeAttendance;
