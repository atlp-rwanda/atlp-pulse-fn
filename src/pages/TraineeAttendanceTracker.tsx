/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuClipboardEdit } from 'react-icons/lu';
import { MdCalendarMonth, MdOutlineCalendarMonth } from 'react-icons/md';
import { isSameWeek } from 'date-fns';
import { PulseLoader } from 'react-spinners';
import {
  DELETE_ATTENDANCE,
  UPDATE_ATTENDANCE,
} from '../Mutations/Attendance';
import { GET_TEAM_ATTENDANCE } from '../queries/attendance.queries'
import 'react-circular-progressbar/dist/styles.css';
import { GET_ALL_TEAMS } from '../queries/team.queries';
import { GET_TEAMS_CARDS } from '../components/CoordinatorCard';
import { GET_TEAM_TRAINEE_QUERY } from '../queries/manageStudent.queries'
import AttendanceSymbols from '../components/AttendanceSymbols';
import { getDateForDays, Weekdays } from '../utils/getDateForDays';
import Modal, { recordTraineeProps } from '../components/ModalAttendance';
import EditAttendanceButton from '../components/EditAttendenceButton';

/* istanbul ignore next */
interface TeamData {
  id: string;
  name: string;
  cohort: {
    name: string;
    phase: {
      id: 'string';
      name: 'string';
    };
  };
}

export interface TraineeAttendanceDataInterface {
  trainee: {
    id: string;
    email: string;
    profile: {
      name: string;
    };
  };
  status: string;
}
export interface TraineeAttendanceDayInterface {
  week: string;
  data: boolean;
  phase: string;
  dates: Weekdays;
  days: {
    mon: TraineeAttendanceDataInterface[];
    tue: TraineeAttendanceDataInterface[];
    wed: TraineeAttendanceDataInterface[];
    thu: TraineeAttendanceDataInterface[];
    fri: TraineeAttendanceDataInterface[];
  };
}

interface PhaseInterface {
  id: string;
  name: string;
}

function TraineeAttendanceTracker() {
  const { t } = useTranslation();
  const [getTeamAttendance, { loading: teamAttendanceLoading }] =
    useLazyQuery(GET_TEAM_ATTENDANCE);
  const [selectedWeek, setSelectedWeek] = useState<string>();
  const [weeks, setWeeks] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [isValidAttendanceDay, SetIsValidAttendanceDay] =
    useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<
    'mon' | 'tue' | 'wed' | 'thu' | 'fri'
  >('mon');
  const [selectedDayDate, setSelectedDayDate] = useState<string>('');
  const [selectedDayHasData, setSelectedDayHasData] = useState<boolean>(false);
  const [selectedPhase, setSelectedPhase] = useState<
    PhaseInterface | undefined
  >();
  const [phases, setPhases] = useState<PhaseInterface[]>([]);
  const [teamsData, setTeamsData] = useState<TeamData[]>();
  const [getAllTeams] = useLazyQuery(GET_ALL_TEAMS);
  const [initialTraineeAttendanceData, setInitialTraineeAttendanceData] =
    useState<TraineeAttendanceDayInterface[]>([]);
  const [traineeAttendanceData, setTraineeAttendanceData] = useState<
    TraineeAttendanceDayInterface[]
  >([]);
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [orgToken, setOrgToken] = useState<string | null>('');
  const [refetchTrainee, setRefetchTrainee] = useState<boolean | null>(null);
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [selectedTeamData, setSelectedTeamData] = useState<TeamData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdatedMode, setIsUpdatedMode] = useState<boolean>(false);
  const [deleteAttendance, { loading: loadingDeleteAttendance }] =
    useMutation(DELETE_ATTENDANCE);
  const [updated, setUpdate] = useState<boolean>(false);
  const [updateTrainees, setUpdateTrainees] = useState<recordTraineeProps[]>(
    [],
  );
  const editColumnRef = useRef<HTMLTableCellElement | null>(null);

  const formatAttendanceData = (data: any) => {
    const tempPhases: PhaseInterface[] = [];

    const updatedTraineeData: TraineeAttendanceDayInterface[] = [];

    data.forEach((attendance: any, index: any) => {
      let hasData = false;
      !selectedWeek && index === 0 && setSelectedWeek(attendance.week);

      if (!tempPhases.find((p) => p.id === attendance.phase.id))
        tempPhases.push({
          id: attendance.phase.id,
          name: attendance.phase.name,
        });

      const result: TraineeAttendanceDayInterface = {
        week: attendance.week,
        data: true,
        dates: {
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
        },
        phase: attendance.phase.id,
        days: {
          mon: [],
          tue: [],
          wed: [],
          thu: [],
          fri: [],
        },
      };

      let date = '';

      attendance.teams[0].trainees.forEach((traineeData: any) => {
        if (traineeData.status.length) {
          hasData = true;
          traineeData.status.forEach((traineeStatus: any) => {
            if (traineeStatus.day === selectedDay) {
              setSelectedDayHasData(true);
            }
            if (traineeStatus.date && !date) {
              date = traineeStatus.date;
            }

            result.days[
              traineeStatus.day as 'mon' | 'tue' | 'wed' | 'thu' | 'fri'
            ].push({
              trainee: traineeData.trainee,
              status: traineeStatus.score as string,
            });
          });
        }
      });
      if (date) result.dates = getDateForDays(date);
      // setTraineeAttendanceData((prevData) => [...prevData, result]);
      hasData && updatedTraineeData.push(result);
    });

    setTraineeAttendanceData(updatedTraineeData);
    setInitialTraineeAttendanceData(updatedTraineeData);

    teamsData?.forEach((team) => {
      if (team.id === selectedTeamId) {
        const names = tempPhases.map((phase) => phase.name);
        let isDataSet = false;
        if (!data.length) {
          isDataSet = true;
          setWeeks(['1']);
          setSelectedWeek('1');
          setSelectedDayDate(
            getDateForDays(Date.now().toString())[selectedDay],
          );
          setTraineeAttendanceData([
            {
              week: '1',
              data: false,
              phase: team.cohort.phase.id,
              dates: getDateForDays(Date.now().toString()),
              days: {
                mon: [],
                tue: [],
                wed: [],
                thu: [],
                fri: [],
              },
            },
          ]);
        }

        if (!names.includes(team.cohort.phase.name)) {
          tempPhases.push({
            id: team.cohort.phase.id,
            name: team.cohort.phase.name,
          });
          // setSelectedDayDate(
          //   getDateForDays(Date.now().toString())[selectedDay],
          // );
          if (!isDataSet) {
            setTraineeAttendanceData((prevData) => [
              ...prevData,
              {
                week: '1',
                data: false,
                phase: team.cohort.phase.id,
                dates: getDateForDays(Date.now().toString()),
                days: {
                  mon: [],
                  tue: [],
                  wed: [],
                  thu: [],
                  fri: [],
                },
              },
            ]);
          }
        }
      }
    });
    setPhases(tempPhases);

    selectedTeamData &&
      !selectedPhase &&
      setSelectedPhase({
        id: selectedTeamData?.cohort.phase.id,
        name: selectedTeamData?.cohort.phase.name,
      });
  };

  const [updateAttendance, { loading: loadingupdateAttendance }] = useMutation(
    UPDATE_ATTENDANCE,
    {
      variables: {
        week: Number(selectedWeek),
        team: selectedTeamId,
        phase: selectedPhase?.id,
        trainees: updateTrainees,
        orgToken: localStorage.getItem('orgToken'),
      },
      onCompleted: (data) => {
        if (data) {
          toast.success('Attendance updated successfully.');
        }
        setUpdate(false);
        setIsUpdatedMode(false);
        setAttendanceData(data.updateAttendance);
        formatAttendanceData(attendanceData);
      },
      onError: (error) => {
        const errorMessage =
          error.graphQLErrors?.[0]?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      },
    },
  );
  useEffect(() => {
    if (updateTrainees.length > 0) {
      updateAttendance();
    }
  }, [updateTrainees]);

  useEffect(() => {
    setOrgToken(localStorage.getItem('orgToken'));
  }, []);

  const { data, loading } = useQuery(GET_TEAMS_CARDS, {
    variables: { orgToken },
  });

  const [
    getTeamMembers,
    { data: teamMembersData, loading: loadingTeamMembers, refetch },
  ] = useLazyQuery(GET_TEAM_TRAINEE_QUERY, {
    variables: { orgToken, team: selectedTeam },
  });

  useEffect(() => {
    if (!loading && data && data.getAllTeams.length > 0) {
      setSelectedTeam(data.getAllTeams[0].name);
    }
  }, [loading, data]);

  // Get all teams data
  useEffect(() => {
    const fetchData = async () => {
      const orgToken = localStorage.getItem('orgToken');
      if (orgToken) {
        // Execute the query and handle callbacks within useEffect
        getAllTeams({
          fetchPolicy: 'no-cache',
          variables: { orgToken },
          onCompleted: (data) => {
            setTeamsData(data.getAllTeams);
            setSelectedTeam(data.getAllTeams[0].name);
            setSelectedTeamData(data.getAllTeams[0]);
            setSelectedTeamId(data.getAllTeams[0].id);
          },
          onError: (error) => {
            const errorMessage =
              error.graphQLErrors?.[0]?.message ||
              'An unexpected error occurred';
            toast.error(errorMessage);
          },
        });
      }
    };
    fetchData();
  }, [getAllTeams]);

  useEffect(() => {
    setTraineeAttendanceData([]);
    selectedTeam &&
      getTeamAttendance({
        fetchPolicy: 'network-only',
        variables: {
          orgToken: localStorage.getItem('orgToken'),
          team: selectedTeamId,
        },
        onCompleted: (data) => {
          setAttendanceData(data.getTeamAttendance);
          formatAttendanceData(attendanceData);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
  }, [selectedTeam, attendanceData]);

  useEffect(() => {
    teamsData?.forEach((team) => {
      if (team.id === selectedTeamId) {
        setSelectedTeam(team.name);
      }
    });
  }, [selectedTeamId]);

  // New week for team attendance
  useEffect(() => {
    const tempTeam = teamsData?.find((team) => team.id === selectedTeamId);
    let lastDayDate = '';
    if (tempTeam) {
      const tempWeeks: string[] = traineeAttendanceData
        .map((attendanceData) => {
          if (
            attendanceData.phase === tempTeam?.cohort.phase.id &&
            attendanceData.phase === selectedPhase?.id &&
            attendanceData.data
          ) {
            if (attendanceData.dates.fri)
              lastDayDate = attendanceData.dates.fri;
            return attendanceData.week;
          }
          return '';
        })
        .filter((week) => week);

      if (tempWeeks.length) {
        tempWeeks.push(String(tempWeeks.length + 1));
        const isInSameWeek = isSameWeek(new Date(lastDayDate), new Date(), {
          weekStartsOn: 1,
        });
        const baseDate = isInSameWeek
          ? Date.now() + 7 * 24 * 60 * 60 * 1000
          : Date.now();

        const dates = getDateForDays(baseDate.toString());

        setTraineeAttendanceData((prevData) => [
          ...prevData,
          {
            week: String(tempWeeks[tempWeeks.length - 1]),
            data: false,
            phase: tempTeam!.cohort.phase.id,
            dates,
            days: {
              mon: [],
              tue: [],
              wed: [],
              thu: [],
              fri: [],
            },
          },
        ]);

        !selectedWeek && setSelectedWeek(tempWeeks[0]);
        setWeeks([]);
        setWeeks((prevData) => tempWeeks);
      }
    }
  }, [selectedPhase, selectedTeamId]);

  // Change Date for selected Day
  useEffect(() => {
    const result = traineeAttendanceData.find((attendanceData) => {
      setSelectedDayHasData(!!attendanceData.days[selectedDay].length);
      if (
        attendanceData.phase === selectedPhase?.id &&
        attendanceData.week === selectedWeek
      ) {
        return true;
      }
      return null;
    });

    result && setSelectedDayDate(result.dates[selectedDay]);
  }, [selectedDay, selectedPhase, selectedWeek, traineeAttendanceData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (teamMembersData) {
      openModal();
      setRefetchTrainee(true);
    }
  }, [teamMembersData, refetchTrainee]);

  const submitAttendance = async () => {
    if (
      isValidAttendanceDay &&
      selectedTeamData?.cohort.phase.id === selectedPhase?.id
    ) {
      await getTeamMembers({ variables: { orgToken, team: selectedTeam } });
      setRefetchTrainee(false);
      return;
    }
    toast.error('Something went wrong, Please Try again');
  };

  const handleUpdateAttendance = () => {
    const attendanceToUpdate = traineeAttendanceData.find(
      (attendance) =>
        attendance.week === selectedWeek &&
        attendance.phase === selectedPhase?.id,
    );
    if (!attendanceToUpdate) {
      toast.error('This day has no attendance yet');
      return;
    }
    const traineesAttendance = attendanceToUpdate.days[selectedDay];
    const updatedRecords = traineesAttendance.map((attendance) => ({
      trainee: attendance.trainee.id,
      status: {
        day: selectedDay,
        score: attendance.status.toString(),
      },
    }));
    setUpdateTrainees(updatedRecords);
  };

  const handleDeleteAttendance = () => {
    if (loadingDeleteAttendance) return;
    const date = new Date().toISOString().split('T')[0];
    if (!selectedDayHasData) {
      toast.warning(
        'You cannot delete attendance for the day without any entries.',
        { style: { color: '#000', lineHeight: '.95rem' } },
      );
      return;
    }
    if (selectedTeamData?.cohort.phase.id !== selectedPhase?.id) {
      toast.warning(
        'Attendance records from previous phase cannot be deleted; they can only be updated.',
        { style: { color: '#000', lineHeight: '.95rem' } },
      );
      return;
    }

    if (!isValidAttendanceDay) {
      toast.warning(
        'Attendance records from more than one previous day cannot be deleted; they can only be updated.',
        { style: { color: '#000', lineHeight: '.95rem' } },
      );
      return;
    }

    deleteAttendance({
      variables: {
        team: selectedTeamId,
        week: selectedWeek,
        day: selectedDay,
      },
      onCompleted: (data) => {
        toast.success('Attendance has been deleted successfully');
        setAttendanceData(data.deleteAttendance);
        formatAttendanceData(attendanceData);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const handleAttendanceDay = () => {
    const today = new Date();
    const input = new Date(selectedDayDate);

    today.setHours(0, 0, 0, 0);
    input.setHours(0, 0, 0, 0);

    const previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);

    if (input.getTime() === today.getTime()) {
      return true;
    }

    if (input.getTime() === previousDay.getTime()) {
      return true;
    }

    // Check if today is Monday  and selectedDayDate is last Friday
    if (today.getDay() === 1 && input.getDay() === 5) {
      const lastFriday = new Date(today);
      lastFriday.setDate(today.getDate() - 3);

      return input.getTime() === lastFriday.getTime();
    }

    return false;
  };
  useEffect(() => {
    SetIsValidAttendanceDay(handleAttendanceDay());
  }, [selectedDayDate]);

  useEffect(() => {
    if (window.innerWidth < 600 && isUpdatedMode && editColumnRef.current) {
      editColumnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isUpdatedMode]);

  return (
    <div className="bg-tertiary dark:bg-dark-bg p-5 xmd:p-10 rounded-lg font-serif">
      {teamMembersData && (
        <Modal
          isVisible={isModalOpen}
          onClose={closeModal}
          trainees={teamMembersData}
          week={Number(selectedWeek)}
          date={selectedDayDate}
          day={selectedDay}
          team={selectedTeamId}
          teamName={selectedTeam}
          setAttendanceData={setAttendanceData}
        />
      )}
      <div className="">
        <div className="flex flex-col gap-y-5 xmd:gap-y-9 rounded-md w-full mt-1 xmd:mt-0">
          <div className="text-lg xmd:text-xl font-semibold">
            <h2>{t('Attendance')}</h2>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[.9rem] xmd:text-[.95rem]">Team</p>
              <div className="flex px-1 h-[1.85rem] xmd:h-8 w-24 xmd:w-32 rounded-[4px] border dark:border-white border-black text-black dark:text-white ">
                <select
                  data-testid="team-test"
                  className="w-full pl-1 bg-tertiary dark:bg-dark-bg border-none outline-none cursor-pointer text-[.83rem] xmd:text-[.9rem]"
                  onChange={(event) => {
                    if (
                      isUpdatedMode &&
                      selectedTeamId !== event.target.value.toString() &&
                      updated
                    ) {
                      toast.warning('First Discard or Update your changes', {
                        style: { color: '#000', lineHeight: '.95rem' },
                      });
                      return;
                    }
                    setSelectedPhase(undefined);
                    setSelectedTeamId(event.target.value.toString());
                    const teamData = teamsData?.find(
                      (team) => team.id === event.target.value.toString(),
                    );
                    setSelectedTeamData(teamData);
                  }}
                >
                  {teamsData &&
                    teamsData.map((teamData) => (
                      <option key={teamData.id} value={teamData.id}>
                        {teamData.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <button
              onClick={submitAttendance}
              data-testid="submitAttend"
              className={`${
                isValidAttendanceDay &&
                !selectedDayHasData &&
                selectedTeamData?.cohort.phase.id === selectedPhase?.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-400/60 dark:bg-neutral-500 text-black dark:text-white cursor-not-allowed'
              }   text-[.84rem] xmd:text-[.9rem] font-semibold w-[8.9rem] xmd:w-[10rem] h-[1.9rem] xmd:h-[2.3rem] rounded-[4px] tracking-tight`}
              type="button"
              disabled={
                !isValidAttendanceDay ||
                selectedDayHasData ||
                selectedTeamData?.cohort.phase.id !== selectedPhase?.id
              }
            >
              {!loadingTeamMembers ? t('Submit Attendance') : 'Loading...'}
            </button>
          </div>

          <div className="flex justify-between mt-5">
            <div className="flex">
              {phases.map((phase, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`${
                    phase.id === selectedPhase?.id
                      ? 'border-black dark:border-white dark:text-white'
                      : 'dark:border-neutral-500 dark:text-neutral-400 border-neutral-400  text-black'
                  } h-7 px-3 border-b-2 capitalize cursor-pointer`}
                  onClick={() => {
                    if (isUpdatedMode && selectedPhase !== phase && updated) {
                      toast.warning('First Discard or Update your changes', {
                        style: { color: '#000', lineHeight: '.95rem' },
                      });
                      return;
                    }
                    setIsUpdatedMode(false);
                    setSelectedPhase(phase);
                  }}
                >
                  <span>{phase.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center pl-2 pr-1 h-[1.85rem] xmd:h-8 w-24 xmd:w-28 rounded-[4px] border dark:border-white border-black text-black dark:text-white text-[.86rem] xmd:text-[.9rem]">
              <span>Week:</span>
              <select
                data-testid="week-test"
                className="w-full text-center bg-tertiary dark:bg-dark-bg border-none outline-none cursor-pointer "
                onChange={(event) => {
                  if (
                    isUpdatedMode &&
                    selectedWeek !== event.target.value &&
                    updated
                  ) {
                    toast.warning('First Discard or Update your changes', {
                      style: { color: '#000', lineHeight: '.95rem' },
                    });
                    return;
                  }
                  setSelectedWeek(event.target.value);
                }}
              >
                {weeks.length &&
                  weeks.map((week) => (
                    <option key={week} value={week}>
                      {week}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between items-center border border-neutral-400/60 dark:border-neutral-600 h-[1.85rem] xmd:h-9 text-[.88rem] xmd:text-base">
            {['mon', 'tue', 'wed', 'thu', 'fri'].map((day, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${
                  selectedDay === day
                    ? 'bg-neutral-400/60 dark:bg-neutral-600'
                    : 'hover:bg-neutral-400/20 dark:hover:bg-neutral-400/15'
                } flex justify-center items-center basis-1/5 capitalize border-l border-neutral-400/60 dark:border-neutral-600 cursor-pointer h-full`}
                onClick={() => {
                  if (isUpdatedMode && selectedDay !== day && updated) {
                    toast.warning('First Discard or Update your changes', {
                      style: { color: '#000', lineHeight: '.95rem' },
                    });
                    return;
                  }
                  setIsUpdatedMode(false);
                  setSelectedDay(day as 'mon' | 'tue' | 'wed' | 'thu' | 'fri');
                }}
                data-testid="days-test"
              >
                <span>{day}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-[2px] ">
                {selectedDayDate && (
                  <>
                    <MdOutlineCalendarMonth className="text-[1.2rem]" />
                    <span className="text-[.8rem] xmd:text-[.85rem] leading-3">
                      {selectedDayDate}
                    </span>
                  </>
                )}
              </div>
              <div className="flex xmd:hidden text-[.9rem] gap-2">
                <div
                  className="flex gap-x-1 items-center cursor-pointer"
                  onClick={() => {
                    if (!selectedDayHasData) {
                      return toast.warning(
                        'You cannot update attendance for the day without any entries.',
                        { style: { color: '#000', lineHeight: '.95rem' } },
                      );
                    }
                    return setIsUpdatedMode(true);
                  }}
                  data-testid="update-link"
                >
                  <LuClipboardEdit className="text-xl" />
                </div>
                <div
                  onClick={() => {
                    if (isUpdatedMode) {
                      toast.warning(
                        'You cannot delete the attendance while it is being updated.',
                        { style: { color: '#000', lineHeight: '.95rem' } },
                      );
                      return;
                    }
                    handleDeleteAttendance();
                  }}
                  className="flex gap-x-1 items-center cursor-pointer"
                >
                  <RiDeleteBin6Line className="text-xl" />
                </div>
              </div>
            </div>
            <div className="overflow-x-scroll xmd:overflow-hidden">
              <table className="w-full overflow-hidden border border-neutral-400 dark:border-neutral-600">
                <thead>
                  <tr className="bg-neutral-400/60 dark:bg-neutral-600 h-10 text-[.88rem] xmd:text-base">
                    <th
                      className={`${
                        isUpdatedMode ? 'w-[35%] ' : 'w-[40%]'
                      } text-left pl-2 xmd:pl-10`}
                    >
                      Names
                    </th>
                    <th
                      className={`${
                        isUpdatedMode ? 'w-[35%] ' : 'w-[40%]'
                      } text-left pl-2 xmd:pl-10`}
                    >
                      Email
                    </th>
                    <th className={`${isUpdatedMode ? 'w-[15%]' : 'w-[20%]'}`}>
                      Score
                    </th>
                    {isUpdatedMode && (
                      <th ref={editColumnRef} className="w-[15%]">
                        Action
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="min-h-32 text-[.83rem] lg:text-[.9rem]">
                  {!teamAttendanceLoading &&
                    traineeAttendanceData.length > 0 &&
                    traineeAttendanceData.map((attendanceData) => {
                      if (
                        attendanceData.phase === selectedPhase?.id &&
                        attendanceData.week === selectedWeek &&
                        attendanceData.days[selectedDay].length
                      ) {
                        return attendanceData.days[selectedDay].map(
                          (dayData, index) => (
                            <tr
                              // eslint-disable-next-line react/no-array-index-key
                              key={index}
                              className="even:bg-neutral-400/20 dark:even:bg-black/20  h-10 font-light"
                            >
                              <td
                                className="pl-2 xmd:pl-10 whitespace-nowrap"
                                title={dayData.trainee.profile.name}
                              >
                                {
                                  // eslint-disable-next-line no-nested-ternary
                                  window.innerWidth < 520 &&
                                  dayData.trainee.profile.name.length > 16
                                    ? `${dayData.trainee.profile.name.slice(
                                        0,
                                        16,
                                      )}..`
                                    : dayData.trainee.profile.name
                                }
                              </td>
                              <td
                                className="px-2 xmd:pl-10"
                                title={dayData.trainee.email}
                              >
                                {
                                  // eslint-disable-next-line no-nested-ternary
                                  window.innerWidth < 600 &&
                                  dayData.trainee.email.length > 20
                                    ? window.innerWidth > 530
                                      ? `${dayData.trainee.email.slice(
                                          0,
                                          22,
                                        )}..`
                                      : `${dayData.trainee.email.slice(
                                          0,
                                          16,
                                        )}..`
                                    : dayData.trainee.email
                                }
                              </td>
                              {
                                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                                <td className="text-center">
                                  <div className="flex justify-center">
                                    <AttendanceSymbols
                                      status={dayData.status}
                                    />
                                  </div>
                                </td>
                              }
                              {isUpdatedMode && (
                                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                                <td
                                  className={`${
                                    isUpdatedMode
                                      ? 'px-3 xmd:px-0 w-[10%]'
                                      : 'w-[20%]'
                                  }  text-center`}
                                >
                                  <EditAttendanceButton
                                    week={selectedWeek}
                                    day={selectedDay}
                                    phase={selectedPhase.id}
                                    traineeId={dayData.trainee.id}
                                    setTraineeAttendanceData={
                                      setTraineeAttendanceData
                                    }
                                    setUpdated={setUpdate}
                                  />
                                </td>
                              )}
                            </tr>
                          ),
                        );
                      }
                      if (
                        traineeAttendanceData.length > 0 &&
                        attendanceData.phase === selectedPhase?.id &&
                        attendanceData.week === selectedWeek &&
                        !attendanceData.days[selectedDay].length
                      ) {
                        return (
                          <tr key="no-attendance-xyz">
                            <td colSpan={3} className="text-center h-20">
                              There is no attendance for the selected day
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  {teamAttendanceLoading && (
                    <tr key="no-attendance-abc">
                      <td colSpan={3} className="text-center h-20">
                        Loading Data...
                      </td>
                    </tr>
                  )}
                  {!teamAttendanceLoading && !traineeAttendanceData.length && (
                    <tr key="no-attendance-xyz">
                      <td colSpan={3} className="text-center h-20">
                        There is no attendance for the selected day
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {isUpdatedMode && (
              <div className="w-full flex gap-2 justify-end mt-2 xmd:mt-3 text-[.85rem] xmd:text-[.9rem] text-white font-semibold">
                <button
                  type="button"
                  className="border border-primary px-3 xmd:px-4 py-[3px] xmd:py-[5px] rounded-[4px] text-primary"
                  onClick={() => {
                    setUpdate(false);
                    setTraineeAttendanceData(initialTraineeAttendanceData);
                    setIsUpdatedMode(false);
                  }}
                  data-testid="cancel-button"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={!updated}
                  className={`w-20 xmd:w-24 xmd:px-4 py-[3px] xmd:py-[5px] rounded-[4px] ${
                    !updated || loadingupdateAttendance
                      ? 'bg-neutral-400/60 dark:bg-neutral-500 text-black dark:text-white cursor-not-allowed'
                      : 'bg-primary text-white hover:bg-purple-600'
                  }`}
                  onClick={() => {
                    if (updated) {
                      handleUpdateAttendance();
                    }
                  }}
                  data-testid="update-button"
                >
                  {loadingupdateAttendance ? (
                    <div className="flex items-center justify-center">
                      <PulseLoader size={9} color="#FFFFFF" />
                    </div>
                  ) : (
                    'Update'
                  )}
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <div className="hidden xmd:flex flex-col text-[.9rem] gap-2 capitalize">
              <h2 className="mb-1 font-semibold">ATTENDANCE ACTIONS</h2>
              <div
                className="flex gap-x-1 items-center ml-4 cursor-pointer"
                onClick={() => {
                  if (!selectedDayHasData) {
                    return toast.warning(
                      'You cannot update attendance for the day without any entries.',
                      { style: { color: '#000', lineHeight: '.95rem' } },
                    );
                  }
                  return setIsUpdatedMode(true);
                }}
                data-testid="update-link-2"
              >
                <LuClipboardEdit className="text-lg" />
                <span>Update Attendance ({selectedDay})</span>
              </div>
              <div
                onClick={() => {
                  if (isUpdatedMode) {
                    toast.warning(
                      'You cannot delete the attendance while it is being updated.',
                      { style: { color: '#000', lineHeight: '.95rem' } },
                    );
                    return;
                  }
                  handleDeleteAttendance();
                }}
                className="flex gap-x-1 items-center ml-4 cursor-pointer"
                data-testid="delete-btn-test"
              >
                <RiDeleteBin6Line className="text-xl" />
                <span>
                  {loadingDeleteAttendance
                    ? 'Loading Data...'
                    : `Delete Attendance (${selectedDay})`}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm tracking-tight">
              <div className="flex gap-x-1 items-center">
                <AttendanceSymbols status={2} />
                <span>[2] Attended and communicated</span>
              </div>
              <div className="flex gap-x-1 items-center ">
                <AttendanceSymbols status={1} />
                <span>[1] Attended and communicated</span>
              </div>
              <div className="flex gap-x-1 items-center">
                <AttendanceSymbols status={0} />
                <span>[0] Attended and communicated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeAttendanceTracker;
