import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { RECORD_ATTENDANCE } from '../Mutations/Attendance';
import AttendanceSymbols from './AttendanceSymbols';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  setAttendanceData: React.Dispatch<React.SetStateAction<any[]>>;
  trainees: any;
  week: number;
  date: string;
  day: string;
  team: string;
  teamName: string;
}
interface attendanceProps {
  name: string;
  score: number;
  id: string;
  day: string;
}

interface StatusInput {
  day: string;
  score: string;
}

export interface recordTraineeProps {
  trainee: string;
  status: StatusInput;
}

function ModalAttendance({
  isVisible,
  onClose,
  trainees,
  week,
  date,
  day,
  setAttendanceData,
  team,
  teamName,
}: ModalProps) {
  const [allTrainees, setAllTrainees] = useState<any[]>([]);
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
      week,
      team,
      date,
      trainees: recordTrainees,
      orgToken: localStorage.getItem('orgToken'),
    },
    fetchPolicy: 'no-cache',
    onCompleted: (data) => {
      if (data) {
        toast.success('Attendance recorded successfully.');
      }

      setAttendanceData((prev) => {
        let isSet = false;
        const result = prev.map((attendance) => {
          if (
            attendance.week.toString() === week.toString() &&
            attendance.cohort.id === data.recordAttendance.team.cohort.id &&
            attendance.phase.id === data.recordAttendance.team.cohort.phase.id
          ) {
            isSet = true;
            return {
              ...attendance,
              teams: [data.recordAttendance],
            };
          }
          return attendance;
        });

        if (!isSet && team === data.recordAttendance.team.id) {
          result.push({
            week: week.toString(),
            id: Math.random().toString(),
            cohort: {
              id: data.recordAttendance.team.cohort.id,
              name: data.recordAttendance.team.cohort.name,
            },
            phase: {
              id: data.recordAttendance.team.cohort.phase.id,
              name: data.recordAttendance.team.cohort.phase.name,
            },
            teams: [data.recordAttendance],
          });
        }
        return result;
      });
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
      const sanitizedTrainees = trainees.filter(
        (trainee: any) => trainee.status.status !== 'drop',
      );
      setAllTrainees(sanitizedTrainees);
    }
  }, [trainees]);
  useEffect(() => {
    setFilteredTrainees(
      allTrainees.filter((trainee) =>
        trainee.profile.name.toLowerCase().includes(searchName.toLowerCase()),
      ),
    );
  }, [allTrainees, searchName]);

  if (!isVisible) return null;

  const handleGiveAttendance = (
    name: string,
    score: number,
    id: string,
    day: string,
  ) => {
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
      updatedAttendance = [...traineesAttendance, { name, score, id, day }];
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
      status: {
        day: attendance.day,
        score: attendance.score.toString(),
      },
    }));

    setRecordTrainees(updatedRecords);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4">
      <div className="bg-[#FFFFFF] dark:bg-[#020917] md:w-[500px] rounded-lg w-96 px-5 py-4 xmd:p-6 shadow-lg flex flex-col gap-3 text-[#111827] dark:text-white">
        <div className="w-full">
          <div className="w-full flex flex-col gap-3">
            <h2 className="text-[1.1rem] xmd:text-xl font-bold text-center text-purple-400 mb-2">
              Take Attendance
            </h2>
            <div className="flex justify-between">
              <h3 className="font-semibold text-[.85rem] xmd:text-[.95rem] ">
                Week {week}
              </h3>
              <p className="text-sm">
                {format(new Date(date), 'EE, do MMMM yyyy')}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[..84rem] xmd:text-[.95rem]">
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
                  <p className="text-center text-[.83rem] xmd:text-[.9rem] font-medium">
                    No trainee given attendance.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-[.86rem] xmd:text-[.95rem] font-medium">
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
                    className="placeholder:text-neutral-600 dark:placeholder:text-neutral-400 text-[.82rem] xmd:text-sm bg-gray-200 dark:bg-gray-700 w-full py-[5px] px-3 rounded-[2px] focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Find trainee by name"
                  />

                  <div className="min-h-[100px]">
                    {inputFocus && (
                      <div className="bg-[#EDF2EE] dark:bg-[#202B3E] z-20 left-0 right-0 w-full max-h-[100px] overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar">
                        {filteredTrainees.length === 0 ? (
                          <p className="text-[.78rem] xmd:text-sm">{`No trainee found in team ${teamName}.`}</p>
                        ) : (
                          filteredTrainees.map((trainee) => (
                            <div
                              key={trainee.email}
                              onMouseDown={(e) => e.preventDefault()}
                              className="flex items-center border-[#858585] border-b-[1px] py-[2px] xmd:py-1"
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
                                      day,
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
                                      day,
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
                                      day,
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

        <div className="mt-3 flex justify-between text-[.9rem] xmd:text-[.95rem]">
          <button
            type="button"
            onClick={() => {
              setTraineesAttendance([]);
              onClose();
            }}
            className="bg-gray-500 text-white py-[4px] xmd:py-[6px] px-4 rounded-[4px] hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={traineesAttendance.length === 0}
            className={`py-[4px] xmd:py-[6px] px-4 rounded-[4px] ${
              traineesAttendance.length === 0 || loadingRecordAttendance
                ? 'bg-gray-300 text-gray-800 cursor-not-allowed'
                : 'bg-purple-500 text-white hover:bg-purple-600'
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
