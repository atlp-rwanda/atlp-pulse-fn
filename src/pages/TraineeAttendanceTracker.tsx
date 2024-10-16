/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuClipboardEdit } from 'react-icons/lu';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { PulseLoader } from 'react-spinners';
import { FaRegCirclePause, FaRegCirclePlay } from 'react-icons/fa6';
import {
  DELETE_ATTENDANCE,
  PAUSE_AND_RESUME_ATTENDANCE,
  UPDATE_ATTENDANCE,
} from '../Mutations/Attendance';
import { GET_TEAM_ATTENDANCE } from '../queries/attendance.queries';
import 'react-circular-progressbar/dist/styles.css';
import { GET_ALL_TEAMS, GET_TTL_TEAMS } from '../queries/team.queries';
import AttendanceSymbols from '../components/AttendanceSymbols';
import Modal from '../components/ModalAttendance';
import EditAttendanceButton from '../components/EditAttendenceButton';
import { UserContext } from '../hook/useAuth';

/* istanbul ignore next */
interface UserInterface {
  id: string;
  email: string;
  role: string;
  status: {
    date: string;
    reason: string;
    status: string;
  };
  profile: {
    firstName?: string;
    lastName?: string;
    city?: string;
    country?: string;
    phoneNumber?: string;
    biography?: string;
    avatar?: string;
    id?: string;
    name?: string;
  };
}
interface TeamData {
  id: string;
  active: boolean;
  isJobActive: boolean;
  name: string;
  phase?: {
    id: string;
    name: string;
  };
  cohort: {
    name: string;
    phase: {
      id: string;
      name: string;
    };
  };
  members: UserInterface[];
}

export interface TraineeAttendanceDataInterface {
  trainee: {
    id: string;
    email: string;
    profile: {
      name: string;
    };
  };
  score: number;
}
interface DayInterface {
  date: string;
  isValid: boolean;
}
export interface WeekdaysInterface {
  mon: DayInterface;
  tue: DayInterface;
  wed: DayInterface;
  thu: DayInterface;
  fri: DayInterface;
}

interface PhaseInterface {
  id: string;
  name: string;
}
export interface TraineeAttendanceDayInterface {
  week: number;
  phase: PhaseInterface;
  dates: WeekdaysInterface;
  days: {
    mon: TraineeAttendanceDataInterface[];
    tue: TraineeAttendanceDataInterface[];
    wed: TraineeAttendanceDataInterface[];
    thu: TraineeAttendanceDataInterface[];
    fri: TraineeAttendanceDataInterface[];
  };
}

interface ValidDatesInterface {
  today: string;
  yesterday: string;
}

export interface AttendanceDataInterface extends ValidDatesInterface {
  attendanceWeeks: Array<PhaseInterface & { weeks: Array<number> }>;
  attendance: Array<TraineeAttendanceDayInterface>;
}

function TraineeAttendanceTracker() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const [getTeamAttendance, { loading: teamAttendanceLoading }] =
    useLazyQuery(GET_TEAM_ATTENDANCE);
  const [selectedWeek, setSelectedWeek] = useState<number>();
  const [weeks, setWeeks] = useState<number[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [isValidAttendanceDay, setIsValidAttendanceDay] =
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
  const [getAllTeams, { loading: teamsLoading }] = useLazyQuery(GET_ALL_TEAMS);
  const [getTTLTeams, { loading: teamLoading }] = useLazyQuery(GET_TTL_TEAMS);
  const [initialTraineeAttendanceData, setInitialTraineeAttendanceData] =
    useState<TraineeAttendanceDayInterface[]>([]);
  const [traineeAttendanceData, setTraineeAttendanceData] = useState<
    TraineeAttendanceDayInterface[]
  >([]);
  const [attendanceData, setAttendanceData] =
    useState<AttendanceDataInterface>();
  const [orgToken, setOrgToken] = useState<string | null>('');
  const [resetDayAndWeek, setResetDayAndWeek] = useState<boolean>(true);
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [selectedTeamData, setSelectedTeamData] = useState<TeamData>();
  const [selectedTeamTrainees, setSelectedTeamTrainees] =
    useState<UserInterface[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdatedMode, setIsUpdatedMode] = useState<boolean>(false);
  const [pauseResumeAttendance, setPauseResumeAttendance] =
    useState<boolean>(false);
  const [deleteAttendance, { loading: loadingDeleteAttendance }] =
    useMutation(DELETE_ATTENDANCE);
  const [updated, setUpdate] = useState<boolean>(false);
  const [dayType, setDayType] = useState<'today' | 'yesterday' | 'others'>(
    'others',
  );
  const [validDate, setValidDate] = useState<ValidDatesInterface>({
    today: '',
    yesterday: '',
  });
  const editColumnRef = useRef<HTMLTableCellElement | null>(null);

  const [updateAttendance, { loading: loadingupdateAttendance }] = useMutation(
    UPDATE_ATTENDANCE,
    {
      onCompleted: (data) => {
        toast.success('Attendance updated successfully.');
        setUpdate(false);
        setIsUpdatedMode(false);
        setAttendanceData(data.updateAttendance);
        setResetDayAndWeek(false);
      },
      onError: (error) => {
        const errorMessage =
          error.graphQLErrors?.[0]?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      },
    },
  );
  const [pauseAndResumeTeamAttendance, { loading: loadingPRTeamAttendance }] =
    useMutation(PAUSE_AND_RESUME_ATTENDANCE, {
      onCompleted: (data) => {
        setPauseResumeAttendance(false);
        setSelectedWeek(undefined);
        setAttendanceData(
          data.pauseAndResumeTeamAttendance.sanitizedAttendance,
        );
        const { team } = data.pauseAndResumeTeamAttendance;

        toast.success(
          `Attendance for team '${team.name}' was successfully ${
            team.isJobActive ? 'resumed' : 'paused'
          }. `,
        );
        setSelectedTeamData((prevData) => {
          const result = prevData;
          if (result) {
            result.isJobActive = team.isJobActive;
          }
          return result;
        });
      },
      onError: (error) => {
        setPauseResumeAttendance(false);
        const errorMessage =
          error.graphQLErrors?.[0]?.message || 'An unexpected error occurred';
        toast.error(errorMessage);
      },
    });
  useEffect(() => {
    setOrgToken(localStorage.getItem('orgToken'));
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const orgToken = localStorage.getItem('orgToken');

      if (orgToken) {
        if (user.role === 'coordinator') {
          getAllTeams({
            fetchPolicy: 'no-cache',
            variables: { orgToken },
            onCompleted: (data) => {
              setTeamsData(data.getAllTeams);
              setSelectedTeam(data.getAllTeams[0].name);
              setSelectedTeamData(data.getAllTeams[0]);
              data.getAllTeams[0].isJobActive &&
                data.getAllTeams[0].active &&
                setSelectedPhase(
                  data.getAllTeams[0].phase || data.getAllTeams[0].cohort.phase,
                );
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
        if (user.role === 'ttl') {
          getTTLTeams({
            fetchPolicy: 'no-cache',
            variables: {
              orgToken,
            },
            onCompleted: (data) => {
              setTeamsData(data.getTTLTeams);
              setSelectedTeam(data.getTTLTeams[0].name);
              setSelectedTeamData(data.getTTLTeams[0]);
              setPhases([
                data.getTTLTeams[0].phase || data.getTTLTeams[0].cohort.phase,
              ]);
              data.getTTLTeams[0].isJobActive &&
                data.getTTLTeams[0].active &&
                setSelectedPhase(
                  data.getTTLTeams[0].phase || data.getTTLTeams[0].cohort.phase,
                );
              setSelectedTeamId(data.getTTLTeams[0].id);
            },
            onError: (error) => {
              const errorMessage =
                error.graphQLErrors?.[0]?.message ||
                'An unexpected error occurred';
              toast.error(errorMessage);
            },
          });
        }
      }
    };

    fetchData();
  }, [getAllTeams, getTTLTeams]);
  useEffect(() => {
    if (selectedTeamData) {
      const trainees = selectedTeamData?.members.filter(
        (member: UserInterface) => member.role === 'trainee',
      );
      setSelectedTeamTrainees(trainees);
    }

    setTraineeAttendanceData([]);
    setAttendanceData(undefined);
    teamsData?.forEach((team) => {
      if (team.id === selectedTeamId) {
        setSelectedTeam(team.name);
      }
    });
    selectedTeamId &&
      getTeamAttendance({
        fetchPolicy: 'network-only',
        variables: {
          orgToken: localStorage.getItem('orgToken'),
          team: selectedTeamId,
        },
        onCompleted: (data) => {
          selectedTeamData?.isJobActive &&
            selectedTeamData.active &&
            setSelectedPhase({
              id:
                selectedTeamData!.phase?.id ||
                selectedTeamData!.cohort.phase.id,
              name:
                selectedTeamData!.phase?.name ||
                selectedTeamData!.cohort.phase.name,
            });
          setAttendanceData(data.getTeamAttendance);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
  }, [selectedTeamId]);

  // Handle retrieved attendance data
  useEffect(() => {
    if (attendanceData) {
      setValidDate({
        today: attendanceData.today,
        yesterday: attendanceData.yesterday,
      });
      setTraineeAttendanceData(attendanceData.attendance);
      setInitialTraineeAttendanceData(attendanceData.attendance);
      const teamAttendancePhases: PhaseInterface[] = [];
      const attendanceWeek = attendanceData.attendanceWeeks.filter(
        (attendanceWeek: any, index) => {
          teamAttendancePhases.push(attendanceWeek.phase);
          if (
            (!selectedTeamData?.isJobActive || !selectedTeamData?.active) &&
            index === 0
          ) {
            return true;
          }
          return (
            attendanceWeek.phase.id ===
            (selectedTeamData?.phase?.id || selectedTeamData?.cohort.phase.id)
          );
        },
      );
      teamAttendancePhases.length &&
        (!selectedTeamData?.isJobActive || !selectedTeamData?.active) &&
        setSelectedPhase({
          id: teamAttendancePhases[0].id,
          name: teamAttendancePhases[0].name,
        });
      setPhases(teamAttendancePhases);
      const tempWeeks = attendanceWeek.length
        ? [...attendanceWeek[0].weeks]
        : [1];
      tempWeeks.sort((a, b) => a - b);
      setWeeks(tempWeeks);
      !selectedWeek && setSelectedWeek(tempWeeks[tempWeeks.length - 1]);
    }
  }, [attendanceData]);

  // Handle week on phase change
  useEffect(() => {
    if (attendanceData && selectedPhase) {
      const attendanceWeek = attendanceData.attendanceWeeks.filter(
        (attendanceWeek: any) => attendanceWeek.phase.id === selectedPhase?.id,
      );
      attendanceWeek.length ? setWeeks(attendanceWeek[0].weeks) : setWeeks([1]);
      const tempWeeks = attendanceWeek.length
        ? [...attendanceWeek[0].weeks]
        : [1];
      tempWeeks.sort((a, b) => a - b);
      setWeeks(tempWeeks);
      setSelectedWeek(tempWeeks[tempWeeks.length - 1]);
    }
  }, [selectedPhase]);

  // Change Date for selected Day
  useEffect(() => {
    const result = traineeAttendanceData.find((attendanceData) => {
      setSelectedDayHasData(!!attendanceData.days[selectedDay].length);
      if (
        attendanceData.phase.id === selectedPhase?.id &&
        attendanceData.week === selectedWeek
      ) {
        return true;
      }
      return null;
    });
    if (result) {
      const selectedDate = new Date(result.dates[selectedDay].date)
        .toISOString()
        .split('T')[0];
      const today = new Date(Number(validDate.today))
        .toISOString()
        .split('T')[0];
      const yesterday = new Date(Number(validDate.yesterday))
        .toISOString()
        .split('T')[0];

      (selectedDate === today && setDayType('today')) ||
        (selectedDate === yesterday && setDayType('yesterday')) ||
        (selectedDate !== today &&
          selectedDate !== yesterday &&
          setDayType('others'));

      setSelectedDayDate(result.dates[selectedDay].date);
    }
  }, [selectedDay, selectedPhase, selectedWeek, traineeAttendanceData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitAttendance = async () => {
    if (!selectedTeamData?.active) {
      toast.error('Attendance for inactive team can not be recorded.');
      return;
    }
    if (
      isValidAttendanceDay &&
      (selectedTeamData?.phase?.id || selectedTeamData?.cohort.phase.id) ===
        selectedPhase?.id
    ) {
      openModal();
      return;
    }
    toast.error('Something went wrong, Please Try again');
  };

  const handleUpdateAttendance = () => {
    const attendanceToUpdate = traineeAttendanceData.find(
      (attendance) =>
        attendance.week === selectedWeek &&
        attendance.phase.id === selectedPhase?.id,
    );
    if (!attendanceToUpdate) {
      toast.error('This day has no attendance yet');
      return;
    }
    const traineesAttendance = attendanceToUpdate.days[selectedDay];
    const updatedRecords = traineesAttendance.map((attendance) => ({
      trainee: attendance.trainee.id,
      score: attendance.score,
    }));

    updatedRecords.length &&
      updateAttendance({
        variables: {
          week: selectedWeek,
          day: selectedDay,
          team: selectedTeamId,
          phase: selectedPhase?.id,
          trainees: updatedRecords,
          orgToken: localStorage.getItem('orgToken'),
        },
      });
  };

  const handleDeleteAttendance = () => {
    if (loadingDeleteAttendance) return;
    if (!selectedDayHasData) {
      toast.warning(
        'You cannot delete attendance for the day without any entries.',
        { style: { color: '#000', lineHeight: '.95rem' } },
      );
      return;
    }
    if (
      (selectedTeamData?.phase?.id || selectedTeamData?.cohort.phase.id) !==
      selectedPhase?.id
    ) {
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
        setResetDayAndWeek(false);
      },
      onError: (error) => {
        toast.error("Couldn't delete attendance, please try again");
      },
    });
  };

  // Check if date for selected day is valid
  useEffect(() => {
    setIsValidAttendanceDay((prevData) =>
      Object.values(validDate).some(
        (date) =>
          new Date(Number(date)).toISOString().split('T')[0] ===
          selectedDayDate,
      ),
    );
  }, [selectedDayDate]);

  useEffect(() => {
    if (window.innerWidth < 600 && isUpdatedMode && editColumnRef.current) {
      editColumnRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isUpdatedMode]);
  return (
    <div className="bg-tertiary dark:bg-dark-bg p-5 xmd:p-7 md:p-10 rounded-lg font-serif">
      <Modal
        isVisible={isModalOpen}
        onClose={closeModal}
        trainees={selectedTeamTrainees}
        week={Number(selectedWeek)}
        dayType={dayType}
        date={selectedDayDate}
        team={selectedTeamId}
        teamName={selectedTeam}
        setAttendanceData={setAttendanceData}
      />
      {pauseResumeAttendance && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div className="flex flex-col justify-between bg-tertiary dark:bg-dark-bg h-[13rem] xmd:h-[15rem] w-[27rem] rounded-md p-4">
            <div className="xmd:pt-1 pb-2 xmd:pb-3 pl-2 border-b-2 border-neutral-600 dark:border-white font-bold text-[.92rem] xmd:text-[.98rem]">
              <p>
                {selectedTeamData?.isJobActive
                  ? 'Pause Attendance'
                  : 'Resume Attendance'}
              </p>
            </div>
            <p className="text-[.82rem] xmd:text-[.88rem] text-justify mx-2 font-normal">
              {selectedTeamData?.isJobActive
                ? "By confirming, automatic attendance week additions for upcoming weeks will be paused. You can still record attendance for the current week. Don't worry you can reactivate this feature at any time!."
                : "By confirming, automatic attendance week additions for upcoming weeks will be activated again. If you ever wish to pause this feature again, it's easy to do!"}
            </p>
            <div className="flex justify-end gap-x-3 text-[.83rem] xmd:text-[.93rem] font-medium mt-1 text-white">
              <button
                type="button"
                onClick={() => setPauseResumeAttendance(false) }
                className="bg-neutral-600/80 dark:bg-neutral-600 hover:bg-neutral-600/75 h-[1.9rem] xmd:h-[2.15rem] px-3 xmd:px-4 rounded-[4px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  !loadingPRTeamAttendance &&
                    pauseAndResumeTeamAttendance({
                      variables: {
                        team: selectedTeamId,
                        orgToken: localStorage.getItem('orgToken'),
                      },
                    });
                }}
                disabled={loadingPRTeamAttendance}
                className="bg-primary hover:bg-primary/75 h-[1.9rem] xmd:h-[2.15rem] px-3 xmd:px-4 rounded-[4px]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="">
        <div className="flex flex-col gap-y-5 xmd:gap-y-9 rounded-md w-full mt-1 xmd:mt-0">
          <div className="text-lg xmd:text-xl font-semibold">
            <h2>{t('Attendance')}</h2>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[.9rem] xmd:text-[.95rem] font-medium -mb-[2px]">
                Team
              </p>
              <div className="flex px-1 h-[1.85rem] xmd:h-8 w-24 xmd:w-32 rounded-[4px] border dark:border-white border-black text-black dark:text-white ">
                <select
                  data-testid="team-test"
                  className="w-full pl-1 bg-tertiary dark:bg-dark-bg border-none outline-none cursor-pointer text-[.83rem] xmd:text-[.9rem]"
                  value={selectedTeamId}
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
                    setIsUpdatedMode(false);
                    setSelectedTeamId(event.target.value.toString());
                    const teamData = teamsData?.find(
                      (team) => team.id === event.target.value.toString(),
                    );
                    setSelectedTeamData(teamData);
                  }}
                >
                  {teamsData?.length &&
                    teamsData.map((teamData) => (
                      <option key={teamData.id} value={teamData.id}>
                        {teamData.name}
                      </option>
                    ))}
                  {!teamLoading && !teamsData?.length && (
                    <option value="" disabled>
                      No teams
                    </option>
                  )}
                </select>
              </div>
            </div>
            <button
              onClick={submitAttendance}
              data-testid="submitAttend"
              className={`${
                isValidAttendanceDay &&
                !teamAttendanceLoading &&
                !selectedDayHasData &&
                (selectedTeamData?.phase?.id ||
                  selectedTeamData?.cohort.phase.id) === selectedPhase?.id
                  ? 'bg-primary text-white'
                  : 'bg-neutral-400/60 dark:bg-neutral-500 text-black dark:text-white cursor-not-allowed'
              }   text-[.84rem] xmd:text-[.9rem] font-semibold w-[8.9rem] xmd:w-[10rem] h-[1.9rem] xmd:h-[2.3rem] rounded-[4px] tracking-tight`}
              type="button"
              disabled={
                !isValidAttendanceDay ||
                teamAttendanceLoading ||
                selectedDayHasData ||
                (selectedTeamData?.phase?.id ||
                  selectedTeamData?.cohort.phase.id) !== selectedPhase?.id
              }
            >
              {!teamsLoading ? t('Submit Attendance') : 'Loading...'}
            </button>
          </div>

          <div className="flex justify-between items-end mt-5">
            <div className="flex flex-shrink-0 w-32 xm:w-44 xmd:w-[70%] overflow-x-scroll xmd:overflow-x-auto  xmd:custom-scrollbar">
              {phases.map((phase, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className={`${
                    phase.id === selectedPhase?.id
                      ? 'border-black dark:border-white dark:text-white'
                      : 'dark:border-neutral-600 dark:text-neutral-500 border-neutral-400 text-neutral-500 '
                  } h-6 xmd:h-7 px-2 xmd:px-3 border-b-[3px] capitalize cursor-pointer font-medium whitespace-nowrap text-[.85rem] xmd:text-[.95rem]`}
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
            <div className="flex items-center pl-2 pr-1 h-[1.85rem] xmd:h-8 w-24 xmd:w-28 rounded-[4px] border dark:border-white border-black text-black dark:text-white text-[.84rem] xmd:text-[.9rem]">
              <span>Week:</span>
              <select
                data-testid="week-test"
                className="w-full text-center bg-tertiary dark:bg-dark-bg border-none outline-none cursor-pointer "
                value={selectedWeek}
                onChange={(event) => {
                  if (
                    isUpdatedMode &&
                    selectedWeek !== Number(event.target.value) &&
                    updated
                  ) {
                    toast.warning('First Discard or Update your changes', {
                      style: { color: '#000', lineHeight: '.95rem' },
                    });
                    return;
                  }
                  setIsUpdatedMode(false);
                  setSelectedWeek(Number(event.target.value));
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

          <div className="flex justify-between items-center border-2 border-neutral-400/60 dark:border-neutral-600 h-[1.85rem] xmd:h-9 text-[.83rem] xmd:text-base">
            {['mon', 'tue', 'wed', 'thu', 'fri'].map((day, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={`${
                  selectedDay === day
                    ? 'bg-neutral-400/60 dark:bg-neutral-600'
                    : 'hover:bg-neutral-400/20 dark:hover:bg-neutral-400/15'
                } flex justify-center items-center basis-1/5 capitalize border-l-2 border-neutral-400/60 dark:border-neutral-600 cursor-pointer h-full`}
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
                  <LuClipboardEdit className="text-lg" />
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
                  <RiDeleteBin6Line className="text-lg" />
                </div>
                <div
                  onClick={() => {
                    setPauseResumeAttendance(true);
                  }}
                  className="flex gap-x-[5px] items-center cursor-pointer"
                >
                  {selectedTeamData?.isJobActive ? (
                    <FaRegCirclePause className="text-[1.12rem]" />
                  ) : (
                    <FaRegCirclePlay className="text-[1.12rem]" />
                  )}
                </div>
              </div>
            </div>
            <div className="overflow-x-scroll xmd:overflow-hidden">
              <table className="w-full overflow-hidden border border-neutral-400 dark:border-neutral-600">
                <thead>
                  <tr className="bg-neutral-400/60 dark:bg-neutral-600 h-8 xmd:h-10 text-[.84rem] xmd:text-base">
                    <th
                      className={`${
                        isUpdatedMode ? 'w-[35%] ' : 'w-[40%]'
                      } text-left pl-2 xmd:pl-10 font-semibold`}
                    >
                      Names
                    </th>
                    <th
                      className={`${
                        isUpdatedMode ? 'w-[35%] ' : 'w-[40%]'
                      } text-left pl-2 xmd:pl-10 font-semibold`}
                    >
                      Email
                    </th>
                    <th
                      className={`${
                        isUpdatedMode ? 'w-[15%]' : 'w-[20%]'
                      } font-semibold`}
                    >
                      Score
                    </th>
                    {isUpdatedMode && (
                      <th ref={editColumnRef} className="w-[15%] font-semibold">
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
                        attendanceData.phase.id === selectedPhase?.id &&
                        attendanceData.week === selectedWeek &&
                        attendanceData.days[selectedDay].length
                      ) {
                        return attendanceData.days[selectedDay].map(
                          (dayData, index) => (
                            <tr
                              // eslint-disable-next-line react/no-array-index-key
                              key={index}
                              className="even:bg-neutral-400/20 dark:even:bg-black/20  h-10 even:border-y border-neutral-400/30 dark:border-neutral-600/40"
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
                                    <AttendanceSymbols status={dayData.score} />
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
                        attendanceData.phase.id === selectedPhase?.id &&
                        attendanceData.week === selectedWeek &&
                        !attendanceData.days[selectedDay].length
                      ) {
                        return (
                          <tr key={`no-attendance-${selectedDay}`}>
                            <td colSpan={3} className="text-center h-28">
                              There is no attendance for the selected day
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  {(teamsLoading || teamAttendanceLoading) && (
                    <tr key="no-attendance-abc">
                      <td colSpan={3} className="text-center h-28">
                        Loading Data...
                      </td>
                    </tr>
                  )}
                  {!teamsLoading &&
                    !teamAttendanceLoading &&
                    !traineeAttendanceData.length && (
                      <tr key="no-attendance-xyz">
                        <td colSpan={3} className="text-center h-28">
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
            <div className="hidden xmd:flex flex-col text-[.78rem] md:text-[.84rem] gap-2 capitalize">
              <h2 className="mb-1 font-semibold">ATTENDANCE ACTIONS</h2>
              <div
                className="flex gap-x-1 items-center ml-4 cursor-pointer hover:text-primary font-medium"
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
                <LuClipboardEdit className="text-[1.1rem]" />
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
                className="flex gap-x-1 items-center ml-4 cursor-pointer hover:text-primary font-medium"
                data-testid="delete-btn-test"
              >
                <RiDeleteBin6Line className="text-[1.15rem]" />
                <span>
                  {loadingDeleteAttendance
                    ? 'Deleting Attendance ...'
                    : `Delete Attendance (${selectedDay})`}
                </span>
              </div>
              <div
                onClick={() => {
                  setPauseResumeAttendance(true);
                }}
                className="flex gap-x-[5px] items-center ml-4 cursor-pointer hover:text-primary font-medium leading-3"
              >
                {selectedTeamData?.isJobActive ? (
                  <FaRegCirclePause className="text-[1.125rem]" />
                ) : (
                  <FaRegCirclePlay className="text-[1.125rem]" />
                )}
                <span>
                  {loadingPRTeamAttendance
                    ? 'Please wait ...'
                    : `${
                        selectedTeamData?.isJobActive
                          ? 'Pause Attendance'
                          : 'Resume Attendance'
                      }`}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[.8rem] xmd:text-[.83rem] md:text-sm tracking-tight ml-2 xmd:ml-0">
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
      </div>
    </div>
  );
}

export default TraineeAttendanceTracker;
