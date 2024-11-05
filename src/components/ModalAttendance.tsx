import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { RECORD_ATTENDANCE } from '../Mutations/Attendance';
import AttendanceSymbols from './AttendanceSymbols';
import {
  AttendanceDataInterface,
  UserInterface,
} from '../pages/TraineeAttendanceTracker';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  setAttendanceData: React.Dispatch<
    React.SetStateAction<AttendanceDataInterface | undefined>
  >;
  trainees: UserInterface[];
  week: number;
  date: string;
  dayType: 'today' | 'yesterday' | 'others';
  team: string;
  teamName: string;
}
interface attendanceProps {
  name: string;
  score: number;
  id: string;
}

export interface recordTraineeProps {
  trainee: string;
  score: number;
}

function ModalAttendance({
  isVisible,
  onClose,
  trainees,
  week,
  date,
  dayType,
  setAttendanceData,
  team,
  teamName,
}: ModalProps) {
  const [allTrainees, setAllTrainees] = useState<(UserInterface & {recorded: boolean})[]>([]);
  const [filteredTrainees, setFilteredTrainees] = useState<any[]>([]);
  const [searchName, setSearchName] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [traineesAttendance, setTraineesAttendance] = useState<
    attendanceProps[]
  >([]);
  const [recordTrainees, setRecordTrainees] = useState<recordTraineeProps[]>(
    [],
  );

  const [
    recordAttendance,
    { data: recordAttendanceData, loading: loadingRecordAttendance, error },
  ] = useMutation(RECORD_ATTENDANCE, {
    variables: {
      today: dayType === 'today',
      yesterday: dayType === 'yesterday',
      week,
      team,
      trainees: recordTrainees,
      orgToken: localStorage.getItem('orgToken'),
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      toast.success('Attendance recorded successfully.');

      setAttendanceData(data.recordAttendance);
      setTraineesAttendance([]);
      setRecordTrainees([]);
      onClose();
    },
    onError: (error) => {
      const errorMessage =
        error.graphQLErrors?.[0]?.message || 'An unexpected error occurred';
      toast.error(errorMessage);
    },
  });

  useEffect(() => {
    if (recordTrainees.length > 0) {
      recordAttendance();
    }
  }, [recordTrainees]);

  useEffect(() => {
    if (trainees) {
      const sanitizedTrainees = trainees
        .map((trainee: UserInterface) => ({ ...trainee, recorded: false }))
        .filter((trainee: any) => trainee.status.status !== 'drop');
      setAllTrainees(sanitizedTrainees);
    }
  }, [trainees]);
  useEffect(() => {
    setFilteredTrainees(
      allTrainees.filter((trainee) =>
        trainee.profile.name
          .toLowerCase()
          .includes(searchName.trim().toLowerCase()),
      ),
    );
  }, [allTrainees, searchName]);

  useEffect(() => {
    traineesAttendance.length &&
      setFilteredTrainees(
        allTrainees.sort((a, b) => Number(a.recorded) - Number(b.recorded)),
      );
  }, [traineesAttendance]);

  if (!isVisible) return null;

  const handleGiveAttendance = (name: string, score: number, id: string) => {
    let updatedAttendance;
    const updateAttendance = traineesAttendance.find(
      (attendance) => attendance.id === id,
    );
    if (updateAttendance) {
      updatedAttendance = traineesAttendance.map((attendance) => {
        if (attendance.id === id) {
          return { ...attendance, score };
        }
        return attendance;
      });
    } else {
      setFilteredTrainees(
        allTrainees.map((trainee, index) => {
          if (trainee.id === id) {
            allTrainees[index].recorded = true;
            return { ...trainee, recorded: true };
          }
          return trainee;
        }),
      );
      updatedAttendance = [...traineesAttendance, { name, score, id }];
    }

    setTraineesAttendance(updatedAttendance);
  };

  const handleSubmitAttendance = () => {
    if (allTrainees.length !== traineesAttendance.length) {
      toast.error(
        'Give all trainees an attendance score before submitting attendance',
      );
      return;
    }

    const updatedRecords = traineesAttendance.map((attendance) => ({
      trainee: attendance.id,
      score: attendance.score,
    }));

    setRecordTrainees(updatedRecords);
    setFilteredTrainees(
      allTrainees.map((trainee, index) => {
        allTrainees[index].recorded = false;
        return { ...trainee, recorded: false };
      }),
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-[#FFFFFF] dark:bg-[#020917] md:w-[500px] rounded-lg w-96 px-5 py-4 xmd:p-6 shadow-lg flex flex-col gap-3 text-[#111827] dark:text-white">
        <div className="w-full">
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-[1.1rem] xmd:text-xl font-bold text-center text-purple-400 mb-2">
              Take Attendance
            </h2>
            <div className="flex flex-col justify-between  text-[.85rem] xmd:text-[.9rem] md:text-[.95rem]">
              <p className="">
                <span className="font-semibold">Week&nbsp;:&nbsp;</span>
                <span className="text-[.82rem] xmd:text-[.86rem] md:text-[.9rem] font-light">
                  {week}
                </span>
              </p>
              <p className="">
                <span className="font-semibold">Team&nbsp;:&nbsp;</span>
                <span className="text-[.82rem] xmd:text-[.86rem] md:text-[.9rem] font-light capitalize">
                  {teamName}
                </span>
              </p>
              <p>
                <span className="font-semibold">Date&nbsp;:&nbsp;</span>
                <span
                  className="text-[.82rem] xmd:text-[.86rem] md:text-[.9rem] font-light"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: format(new Date(date), 'EEEE, do MMM yyyy').replace(
                      /(st|nd|rd|th)\b/,
                      (match) => `<sup>${match}</sup>`,
                    ),
                  }}
                />
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[..84rem] xmd:text-[.9rem] md:text-[.95rem]">
                Trainees:
              </p>
              <div className="w-full min-h-[40px] max-h-[110px] overflow-auto custom-scrollbar">
                {traineesAttendance.length ? (
                  <div className="grid grid-cols-2 gap-1 xmd:gap-3 justify-between">
                    {traineesAttendance.map((trainee) => (
                      <div
                        key={trainee.id}
                        className="flex justify-between items-center bg-gray-200 dark:bg-gray-700 rounded-[5px] text-[.8rem] xmd:text-sm px-3 py-[6px]"
                      >
                        <span>
                          {
                            // eslint-disable-next-line no-nested-ternary
                            trainee.name.length > 8 && window.innerWidth < 550
                              ? `${trainee.name.slice(0, 8)}...`
                              : window.innerWidth > 550 &&
                                trainee.name.length > 15
                              ? `${trainee.name.slice(0, 13)}...`
                              : trainee.name
                          }
                        </span>
                        <div className="flex items-center gap-2">
                          <span>[{trainee.score}]</span>
                          {trainee.score === 0 && (
                            <AttendanceSymbols status={0} />
                          )}
                          {trainee.score === 1 && (
                            <AttendanceSymbols status={1} />
                          )}
                          {trainee.score === 2 && (
                            <AttendanceSymbols status={2} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="pl-5 text-[.83rem] xmd:text-[.88rem] font-light">
                    No trainee given attendance.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-[.86rem] xmd:text-[.9rem] md:text-[.95rem] font-medium">
                Trainee Name
              </label>
              <div className="flex">
                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="text"
                    value={searchName}
                    onFocus={() => setInputFocus(true)}
                    onBlur={() => setInputFocus(false)}
                    onChange={(e) => {
                      setSearchName(e.target.value);
                    }}
                    className="placeholder:text-neutral-600 dark:placeholder:text-neutral-400 text-[.82rem] xmd:text-[.85rem] bg-gray-300 dark:bg-gray-700 w-full py-[6px] px-3 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Find trainee by name"
                  />

                  <div className="min-h-[100px]">
                    {inputFocus && (
                      <div className="bg-[#c4c4c4] dark:bg-[#202B3E] z-20 left-0 right-0 w-full max-h-[100px] overflow-y-auto py-1 px-2 flex flex-col gap-1 custom-scrollbar">
                        {!filteredTrainees.length ? (
                          <p className="text-[.78rem] xmd:text-[.83rem] py-2 px-1">{`No trainee found in team ${teamName}.`}</p>
                        ) : (
                          filteredTrainees.map((trainee) => (
                            <div
                              key={trainee.email}
                              onMouseDown={(e) => e.preventDefault()}
                              className={`${
                                trainee.recorded
                                  ? 'brightness-[.6] text-neutral-500 dark:text-white'
                                  : ''
                              } flex items-center border-[#858585] border-b-[1px] py-[2px] xmd:py-1 px-2`}
                            >
                              <p className="flex-1 text-[.83rem] xmd:text-sm">
                                {trainee.profile.name}
                              </p>
                              <div className="flex items-center gap-1 xmd:gap-2">
                                <div
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleGiveAttendance(
                                      trainee.profile.name,
                                      2,
                                      trainee.id,
                                    );
                                  }}
                                  className="cursor-pointer hover:brightness-75"
                                  data-testid="test-score-2"
                                >
                                  <AttendanceSymbols status={2} />
                                </div>
                                <div
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleGiveAttendance(
                                      trainee.profile.name,
                                      1,
                                      trainee.id,
                                    );
                                  }}
                                  className="cursor-pointer hover:brightness-75"
                                  data-testid="test-score-1"
                                >
                                  <AttendanceSymbols status={1} />
                                </div>
                                <div
                                  onMouseDown={(e) => {
                                    e.preventDefault();
                                    handleGiveAttendance(
                                      trainee.profile.name,
                                      0,
                                      trainee.id,
                                    );
                                  }}
                                  className="cursor-pointer hover:brightness-75"
                                  data-testid="test-score-0"
                                >
                                  <AttendanceSymbols status={0} />
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex justify-between text-[.92rem] xmd:text-[.95rem] leading-6 font-medium">
          <button
            type="button"
            onClick={() => {
              setFilteredTrainees(
                allTrainees.map((trainee, index) => {
                  allTrainees[index].recorded = false;
                  return { ...trainee, recorded: false };
                }),
              );
              setTraineesAttendance([]);
              onClose();
            }}
            className="bg-gray-500 text-white py-[4px] xmd:py-[5px] px-4 rounded-[4px] hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={traineesAttendance.length === 0}
            className={`py-[4px] xmd:py-[5px] px-4 rounded-[4px] ${
              traineesAttendance.length === 0 || loadingRecordAttendance
                ? 'bg-gray-300 text-gray-800 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
            onClick={() => {
              handleSubmitAttendance();
            }}
          >
            {loadingRecordAttendance ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAttendance;
