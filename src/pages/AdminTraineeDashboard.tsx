/* eslint-disable */
/* istanbul ignore file */

import React, { useState, useEffect, useContext, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import DataTable from '../components/DataTable';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from '../components/Buttons';
import Avatar from '../assets/avatar.png';

import {
  GET_USERS_QUERY,
  GET_TRAINEES_QUERY,
  GET_COHORTS_QUERY,
  REMOVE_MEMBER_FROM_COHORT_MUTATION,
  DROP_TRAINEE,
  EDIT_MEMBER_MUTATION,
  INVITE_USER_MUTATION,
  GET_TEAM_QUERY,
  ADD_MEMBER_TO_TEAM,
  GET_GITHUB_STATISTICS,
} from '../Mutations/manageStudentMutations';
import { useNavigate } from 'react-router-dom';

import ControlledSelect from '../components/ControlledSelect';
import { UserContext } from '../hook/useAuth';
import GitHubActivityChart from '../components/chartGitHub';
import Spinner from '../components/Spinner';
import { useTraineesContext } from '../hook/useTraineesData';
import Dropdown from 'react-dropdown-select';
import ViewWeeklyRatings from '../components/ratings/ViewWeeklyRatings';
import { FaTimes } from 'react-icons/fa';
const organizationToken = localStorage.getItem('orgToken');

function AdminTraineeDashboard() {
  useDocumentTitle('Trainees');
  const { t }: any = useTranslation();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [registerTraineeModel, setRegisterTraineeModel] = useState(false);
  const [removeTraineeModel, setRemoveTraineeModel] = useState(false);
  const [editTraineeModel, setEditTraineeModel] = useState(false);
  const [inviteTraineeModel, setInviteTraineeModel] = useState(false);
  const [allUserEmail, setAllUserEmail] = useState<any[]>([]);
  const [cohorts, setCohorts] = useState<any[]>([]);
  const [cohortName, setCohortName] = useState('');
  const [teams, setTeams] = useState<any[]>([]);
  const [email, setEmail] = useState<any[]>([]);
  const [traineeDetails, setTraineeDetails] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<any[]>([]);
  const [selectedOptionUpdate, setSelectedOptionUpdate] = useState<any>({});
  const [dropTraineeModel, setDropTraineeModel] = useState(false);
  const [dropTraineeID, setdropTraineeID] = useState('');
  const [selectedTeamOptionUpdate, setSelectedTeamOptionUpdate] = useState<any>(
    {},
  );
  const [selectedTeamOption, setSelectedTeamOption] = useState<any[]>([]);
  const [deleteEmail, setDeleteEmail] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editCohort, setEditCohort] = useState('');
  const [editTeam, setEditTeam] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const options: any = [];
  const teamsOptions: any = [];
  const traineeOptions: any = [];
  const teamOptions: any = [];
  const [isLoaded, setIsLoaded] = useState(false);
  const [gitHubStatistics, setGitHubStatistics] = useState<any>({});
  const { traineeData, setAllTrainees } = useTraineesContext() || [];
  const [actionTraineeOptions, setActionTraineeOptions] = useState<any>(null);

  const [selectedTraineeId, setSelectedTraineeId]= useState<string[]>()

  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const [deleteFromCohort, setDeleteFromCohort] = useState('');
  //const [status, setStatus] = useState(row.original?.Status?.status);
  // Define state variables to store reason and date
  const [reason, setReason] = useState('');
  //  const [date, setDate] = useState('');
  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date

  // Function to handle the reason input change
  const handleReasonChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const newReason = event.target.value;
    setReason(newReason);
  };

  const [getGitHubStatistics] = useLazyQuery(GET_GITHUB_STATISTICS, {
    onCompleted: (data) => {
      setGitHubStatistics(data.gitHubActivity);
      setIsLoaded(false);
    },
    onError: (error) => {
      setIsLoaded(false);
    },
  });

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = async (rowData: any) => {
    setIsLoaded(true);
    const filteredUser = traineeData.filter(
      (item: any) => item.email == rowData,
    );
    setTraineeDetails(filteredUser[0]);
    setOpen(true);
    getGitHubStatistics({
      variables: {
        organisation: localStorage.getItem('orgName')?.split('.')[0],
        username: filteredUser[0].profile?.githubUsername,
      },
    });
  };

  const handleClickOpen2 = async () => {
    setIsLoaded(true);

    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  /* istanbul ignore next */
  const removeTraineeMod = () => {
    const newState = !removeTraineeModel;
    setRemoveTraineeModel(newState);
  };

  const removeModel = () => {
    const newState = !registerTraineeModel;
    setRegisterTraineeModel(newState);
  };

  const dropModel = async (rowData: any) => {
    const filteredUser = traineeData.filter(
      (item: any) => item.email == rowData,
    );
    if (filteredUser.length > 0) {
      const user = filteredUser[0];
      if (
        user.profile &&
        user.profile.user &&
        user.profile.user.status &&
        user.profile.user.status.status
      ) {
        if (user.profile.user.status.status !== 'drop') {
          let newState = !dropTraineeModel;
          setDropTraineeModel(newState);
        } else {
          toast.success('Trainee is already dropped');
        }
      }
    }
  };

  /* istanbul ignore next */
  const removeEditModel = () => {
    const newState = !editTraineeModel;
    setEditTraineeModel(newState);
  };
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleOptions = (row: string) => {
    setSelectedRow(selectedRow === row ? null : row);
    setDropdownOpen(true);
  };

  const inviteModel = () => {
    const newState = !inviteTraineeModel;
    setInviteTraineeModel(newState);
  };
  /* istanbul ignore next */
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : '#9e85f5',
    }),
    valueLabel: (styles: any) => ({
      ...styles,
      text: 'white',
    }),
    control: (styles: any) => ({
      ...styles,
      height: 20,
      width: 370,
      backgroundColor: '#374151',
      borderColor: 'rgb(20 143 182)',
      text: 'white',
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      /* istanbul ignore next */
      return { ...provided, opacity, transition };
    },
  };

  const columns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('email'), accessor: 'email' },
    // { Header: t('rating'), accessor: 'rating' },
    // { Header: t('Team'), accessor: 'team' },
    { Header: t('cohort'), accessor: 'cohort' },
    { Header: t('program'), accessor: 'program' },
    {
      Header: t('Status'),
      accessor: 'status',

      Cell: ({ row }: any) => {
        return (
          <div
            className={
              'font-serif items-center' +
              (traineeData?.length > 0 ? ' flex' : ' hidden')
            }
          >
            <button
  className={`${row.original?.Status?.status === 'drop'
      ? 'bg-gray-500'
      : 'bg-black'
    } text-white rounded-xl px-3`}
  onClick={() => {
      setSelectedTraineeId(row.original?.email);
      handleClickOpen2();
  }}
>
  {row.original?.Status?.status === 'drop' ? 'Dropped' : 'View'}
</button>


          </div>
        );
      },
    },

    {
      Header: t('action'),
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="static">
          <div className="static inline-block">
            <Icon
              icon="entypo:dots-three-vertical"
              width="40"
              cursor="pointer"
              color="#9e85f5"
              onClick={() => toggleOptions(row.original.email)}
            />
            {selectedRow === row.original.email && (
              <div className="dropdown absolute right-4 mt-2 w-64 bg-light-bg max-h-30 dark:bg-dark-bg border border-gray-300 shadow-md z-50 p-4 rounded-lg overflow-hidden">
                <>
                  <div className="mb-4"></div>
                  <div className="mb-4">
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        setSelectedOptionUpdate({
                          value: row.original.cohort,
                          label: row.original.cohort,
                        });
                        setSelectedTeamOptionUpdate({
                          value: row.original.team,
                          label: row.original.team,
                        });
                        removeEditModel();
                        setEditEmail(row.original.email);
                        setEditCohort(row.original.cohort);
                        setEditTeam(row.original.team);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="el:file-edit-alt"
                        className="mr-2"
                        width="38"
                        height="38"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div>
                        <span className="font-bold">Edit</span>{' '}
                        <>
                          <br />
                          Change cohort and team
                        </>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        removeTraineeMod();
                        setDeleteEmail(row.original.email);
                        setDeleteFromCohort(row.original.team);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="mdi:close-circle-outline"
                        width="40"
                        height="40"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div>
                        <span className="font-bold">Remove</span>
                        <>
                          <br />
                          Remove trainee
                        </>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        dropModel(row.original.email);
                        setdropTraineeID(row.original.userId);
                        setReason(row.original.reason);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="mdi:close-circle"
                        width="40"
                        height="40"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div>
                        <span className="font-bold">Drop</span>{' '}
                        <>
                          <br />
                          Drop trainee
                        </>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        handleClickOpen(row.original.email);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="ph:eye-bold"
                        width="40"
                        height="40"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div className="ml-2">
                        <span className="font-bold">View</span>
                        <br />
                        <span>View detailed information</span>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];
  8;

  const datum: any = [];
  const [getUsers] = useLazyQuery(GET_USERS_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });
  const { loading, data, refetch } = useQuery(GET_TRAINEES_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
    fetchPolicy: 'network-only',
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message);
    },
  });

  useEffect(() => {
    if (data && data.getTrainees) {
      refetch();
      setAllTrainees(data.getTrainees);
    }
  }, [data, registerTraineeModel, removeTraineeModel, toggle]);

  const [getCohortsQuery] = useLazyQuery(GET_COHORTS_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });
  const [getTeamQuery] = useLazyQuery(GET_TEAM_QUERY, {
    variables: {
      orgToken: organizationToken,
      cohort: cohortName,
    },
  });

  function getTeam() {
    getTeamQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTeams(data.getAllTeamInCohort);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }

  /* istanbul ignore if */

  if (traineeData && traineeData.length > 0) {
    traineeData?.map((data: any, index: number) => {
      datum[index] = {};
      datum[index].name = data.profile ? data.profile.name : 'undefined';
      datum[index].email = data.email;
      datum[index].rating = data.ratings.length ? data.ratings : 'not rated.';
      datum[index].team = data.team?.name;
      datum[index].cohort = data.team?.cohort?.name;
      datum[index].program = data.team?.cohort?.program?.name;
      datum[index].userId = data.profile?.user?.id;
      datum[index].Status = data.profile?.user?.status;
    });
  }

  const [addMemberToTeam] = useMutation(ADD_MEMBER_TO_TEAM, {
    variables: {
      teamName: Object.values(selectedTeamOption)[1],
      email: Object.values(email)[1],
      orgToken: organizationToken,
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.addMemberToTeam);
        removeModel();
      }, 500);
    },
    /* istanbul ignore next */
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  const [editMemberMutation] = useMutation(EDIT_MEMBER_MUTATION, {
    variables: {
      removedFromTeamName: editTeam,
      addedToTeamName: selectedTeamOptionUpdate.value,
      email: editEmail,
      orgToken: organizationToken,
    },
    onCompleted: (data) => {
      handleToggle();

      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.editMember);
        removeEditModel();
      }, 500);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  const [dropMemberFromCohort] = useMutation(DROP_TRAINEE, {
    variables: {
      traineeId: dropTraineeID,
      reason: reason,
      date: currentDate,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        if (data.dropTrainee) {
          // Check the response structure
          refetch();
          toast.success('Trainee dropped successfully');
          setDropTraineeModel(false);
        } else {
          toast.error('Failed to drop trainee');
        }
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        console.error('Mutation error:', err); // Log the error
        toast.error(err.message);
      }, 500);
    },
  });

  const [removeMemberFromCohort] = useMutation(
    REMOVE_MEMBER_FROM_COHORT_MUTATION,
    {
      variables: {
        teamName: deleteFromCohort,
        orgToken: organizationToken,
        email: deleteEmail,
      },
      onCompleted: (data) => {
        setTimeout(() => {
          setButtonLoading(false);
          toast.success(data.removeMemberFromCohort);
          removeTraineeMod();
        }, 1000);
      },
      onError: (err) => {
        setTimeout(() => {
          setButtonLoading(false);
          toast.error(err.message);
        }, 500);
      },
    },
  );

  const HandleInvite = () => {
    // pass
    setButtonLoading(true);
    inviteUser();
  };
  const [inviteUser] = useMutation(INVITE_USER_MUTATION, {
    variables: {
      email: inviteEmail,
      orgToken: organizationToken,
      type: 'user',
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.inviteUser);
        inviteModel();
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });
  useEffect(() => {
    getUsers({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setAllUserEmail(data.getUsers);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
    getCohortsQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setCohorts(data.getCohorts);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [registerTraineeModel, removeTraineeModel, toggle]);
  /* istanbul ignore if */
  if (allUserEmail.length > 0) {
    allUserEmail.map((trainee: any, index: any) => {
      traineeOptions[index] = {};
      traineeOptions[index].value = trainee.email;
      traineeOptions[index].label = trainee.email;
    });
  }
  /* istanbul ignore if */
  if (cohorts.length > 0) {
    cohorts.map((cohort: any, index: any) => {
      options[index] = {};
      options[index].value = cohort.name;
      options[index].label = cohort.name;
    });
  }
  if (teams.length > 0) {
    teams.map((team: any, index: any) => {
      teamsOptions[index] = {};
      teamsOptions[index].value = team.name;
      teamsOptions[index].label = team.name;
    });
  }
  if (teams.length > 0) {
    teams.map((team: any, index: any) => {
      teamOptions[index] = {};
      teamOptions[index].value = team?.name;
      teamOptions[index].label = team?.name;
    });
  }
  

  return (
    <>
      {/* =========================== Start::  InviteTraineeModel =============================== */}
      <div className="font-serif rounded-lg dark:bg-dark-bg">
        <Dialog
          open={open2}
          onClose={handleClose2}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          className="rounded-lg"
          fullWidth
        >
          {traineeData?.map((data:any) => {
        if (data.email === selectedTraineeId) {
              return <ViewWeeklyRatings
            traineeName={data?.profile?.name || 'Unknown Name'}
            traineeEmail={data?.email || 'Unknown Email'}
            traineeId={data?.profile?.user?.id || 'Unknown ID'}
            traineeCohort={data?.team?.cohort?.id || 'Unknown Cohort'}
            traineeStatus={
              data?.profile?.user?.status || 'Status Unavailable'
            }
          />
            }
          }
            )}
          <FaTimes
            size={24}
            color="red"
            className="absolute right-5 top-2 cursor-pointer"
            onClick={() => handleClose2()}
          />
        </Dialog>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          className="rounded-lg"
          fullWidth
        >
          <DialogContent className="font-sans dark:bg-dark-bg">
            {/* <DialogContentText className="font-sans dark:bg-dark-bg"> */}
            <div className="font-sans text-sm font-bold text-center dark:text-white dark:bg-dark-bg">
              <div className="bg-[#4aa5be] h-[150px]">
                <img
                  className=" relative top-[50px] left-[20px] border-4 border-white font-sans"
                  style={{
                    borderRadius: '50%',
                    marginBottom: '20px',
                    width: '150px',
                    height: '150px',
                  }}
                  src={
                    traineeDetails &&
                    traineeDetails.profile &&
                    traineeDetails.profile.avatar
                      ? traineeDetails.profile.avatar
                      : Avatar
                  }
                  alt="Logo"
                />
              </div>

              <h2
                className="font-bold text-[18px]  capitalize pt-5 dark:text-white text-right dark:bg-dark-bg text-sm font-sans"
                style={{ cursor: 'move', fontWeight: 'bold' }}
                id="draggable-dialog-title"
              >
                {traineeDetails && traineeDetails.profile
                  ? traineeDetails.profile.name
                  : 'Unavailable'}
              </h2>

              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginTop: '30px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>EMAIL</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.profile
                      ? traineeDetails.email
                      : 'Unavailable'}
                  </i>
                </p>
              </div>
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginTop: '30px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>START DATE</b>
                </h3>
                <p>
                  {traineeDetails && traineeDetails.team
                    ? traineeDetails.team.cohort.startDate.split('T')[0]
                    : 'Unavailable'}
                </p>
              </div>
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>PROGRAM</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.team
                      ? traineeDetails.team.cohort.program.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>

              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>PHASE</b>{' '}
                </h3>
                <p>
                  <i>
                    {traineeDetails && traineeDetails.team
                      ? traineeDetails.team.cohort.phase.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>

              {/* show cohort  */}
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>COHORT</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.team
                      ? traineeDetails.team.cohort.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>
              {/* show team  */}
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginBottom: '20px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>TEAM</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.team
                      ? traineeDetails.team.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>
              {/* show team  */}
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginBottom: '20px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>RATINGS</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.ratings
                      ? traineeDetails.ratings[0]
                        ? traineeDetails.ratings[0]
                        : 'not yet rated'
                      : 'unavailable.'}
                  </i>
                </p>
              </div>

              {/* show manager  */}
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginBottom: '20px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>MANAGER</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.team
                      ? traineeDetails.team.cohort.program.manager.profile.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>

              {/* show coordinator  */}
              <div
                className="font-sans text-sm"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginBottom: '20px',
                  borderBottom: '0.5px solid #EAECEE',
                }}
              >
                {' '}
                <h3>
                  <b>COORDINATOR</b>{' '}
                </h3>
                <p>
                  <i>
                    {' '}
                    {traineeDetails && traineeDetails.cohort
                      ? traineeDetails.cohort.coordinator.profile.name
                      : 'Unavailable'}
                  </i>
                </p>
              </div>

              {/* Show resume URL for admins and managers */}
              {user &&
                (user.role === 'admin' || user.role === 'coordinator') && (
                  <div
                    className="font-sans text-sm"
                    style={{
                      display: 'flex',
                      gap: '50px',
                      justifyContent: 'space-between',
                      paddingBlock: '10px',
                      marginBottom: '20px',
                      borderBottom: '0.5px solid #EAECEE',
                    }}
                  >
                    <h3>
                      <b>RESUME</b>
                    </h3>
                    <p>
                      {traineeDetails?.profile?.resume ? (
                        <a
                          href={traineeDetails.profile.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      ) : (
                        'Unavailable'
                      )}
                    </p>
                  </div>
                )}

              <div
                className="text-sm font-sans"
                style={{
                  display: 'flex',
                  gap: '50px',
                  justifyContent: 'space-between',
                  paddingBlock: '10px',
                  marginBottom: '20px',
                }}
              >
                {isLoaded ? (
                  <div className="flex items-center justify-center h-48">
                    <i>Loading gitHub statistics...</i>
                    <Spinner />
                    <div className="spinner" />
                  </div>
                ) : (
                  <div
                    className={
                      traineeDetails?.profile &&
                      traineeDetails?.profile?.githubUsername
                        ? 'flex'
                        : 'hidden '
                    }
                  >
                    <div className="flex flex-col">
                      <i className="text-2xl ">
                        {gitHubStatistics?.totalCommits} total commits
                      </i>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        {traineeDetails?.profile &&
                        traineeDetails?.profile?.githubUsername ? (
                          <GitHubActivityChart data={gitHubStatistics} />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                data-testid="removeInviteModel"
                variant="info"
                size="sm"
                style="w-[20%] md:w-1/4 text-sm font-sans"
                onClick={() => handleClose()}
              >
                {t('Close')}
              </Button>
            </div>
            {/* </DialogContentText> */}
          </DialogContent>
        </Dialog>
      </div>
      {/* =========================== Start::  InviteTraineeModel =============================== */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          inviteTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Send Invitation')}
            </h3>
            <hr className="w-full my-3 border-gray-400 " />
          </div>
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="px-8 py-3 "
            >
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t('Fill in the email to invite a user to DevPulse.')}
                </h3>
              </div>

              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <input
                    value={inviteEmail}
                    onChange={(e) => {
                      setInviteEmail(e.target.value);
                    }}
                    onSubmit={() => inviteModel()}
                    type="email"
                    name="email"
                    className="w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary"
                    placeholder={t('email')}
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => inviteModel()}
                >
                  {t('Cancel')}
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={HandleInvite}
                  loading={buttonLoading}
                >
                  {t('Invite')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  InviteTraineeModel =============================== */}

      {/* =========================== Start::  EditTraineeModel =============================== */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          editTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Edit Trainee')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t(
                    'Choose a different cohort for the trainee from the dropdown below.',
                  )}
                </h3>
              </div>

              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <ControlledSelect
                    placeholder={t('Select cohort')}
                    defaultValue={selectedOptionUpdate}
                    noRegister={{
                      onChange: (e) => {
                        setSelectedOptionUpdate(e);
                        setSelectedTeamOptionUpdate({
                          value: '',
                          label: 'Select team',
                        });
                        setCohortName(e.value);
                        getTeam();
                      },
                    }}
                    options={options}
                  />
                </div>
              </div>
              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <ControlledSelect
                    placeholder={t('Select team')}
                    defaultValue={selectedTeamOptionUpdate}
                    noRegister={{
                      onChange: (e) => {
                        setSelectedTeamOptionUpdate(e);
                      },
                    }}
                    options={teamsOptions.filter(
                      (option: any) => option.value !== editTeam,
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel1"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeEditModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    setButtonLoading(true);
                    if (editEmail && editCohort) {
                      editMemberMutation();
                    } else {
                      toast.error('Please select the trainee again ');
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  EditTraineeModel =============================== */}

      {/* =========================== Start::  RemoveTraineeModel =============================== */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          removeTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Remove Trainee')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t(
                    'Are you sure you want to remove trainee from this cohort?',
                  )}
                </h3>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeTraineeMod()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    if (deleteEmail && deleteFromCohort) {
                      removeMemberFromCohort();
                    } else {
                      toast.error('Please select the trainee again ');
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  RemoveTraineeModel =============================== */}

      {/* =========================== start::  deleteTraineeModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 top-0 left-0 ${
          dropTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white">
              {t('Drop Trainee')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3">
              {/* ... (rest of your form) */}

              {/* Reason Field */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="reason"
                >
                  {t('Reason')}
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  value={reason}
                  onChange={handleReasonChange} // Capture reason input value
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary dark:bg-dark-bg dark:text-white"
                />
              </div>

              {/* Date Field */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold text-gray-700 dark:text-white"
                  htmlFor="date"
                >
                  {t('Date')}
                </label>
                <input
                  type="text" // Change the input type to text
                  id="date"
                  name="date"
                  value={currentDate} // Set the value to the current date
                  readOnly // Make the input read-only
                  className="mt-1 px-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary dark:bg-dark-bg dark:text-white"
                />
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="dropModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => setDropTraineeModel(false)}
                >
                  {t('Cancel')}
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  data-testid="dropMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);

                    if (dropTraineeID && reason) {
                      //  also pass the reason value to the dropMemberFromCohort function
                      dropMemberFromCohort();
                    } else {
                      setButtonLoading(false);
                      toast.error(
                        'Please enter a reason for dropping the trainee',
                      );
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Drop Trainee')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* =========================== End::  deleteTraineeModel =============================== */}

      {/* =========================== Start::  AddTraineeModel =============================== */}

      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center px-4 ${
          registerTraineeModel ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white">
              {t('Add Trainee')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3">
              <div className="my-3 input h-9">
                <div className="flex items-center w-full h-full rounded-md grouped-input">
                  <Select
                    placeholder={t('choose trainee')}
                    className="my-react-select-container"
                    classNamePrefix="my-react-select"
                    styles={customStyles}
                    value={email}
                    onChange={(e) => setEmail(e)}
                    options={traineeOptions}
                    isSearchable
                  />
                </div>
              </div>
              <div className="my-3 text-white input h-9">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <ControlledSelect
                    placeholder={t('Select cohort')}
                    // @ts-ignore
                    value={selectedOption}
                    noRegister={{
                      onChange: (e) => {
                        setSelectedOption(e);
                        setCohortName(e.value);
                        getTeam();
                      },
                    }}
                    options={options}
                  />
                </div>
              </div>
              <div className="my-3 text-white input h-9">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <ControlledSelect
                    placeholder={t('Select Team')}
                    // @ts-ignore
                    value={selectedTeamOption}
                    noRegister={{
                      onChange: (e) => setSelectedTeamOption(e),
                    }}
                    options={teamOptions}
                  />
                </div>
              </div>
              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="saveButton"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    if (
                      Object.values(email)[1] &&
                      Object.values(selectedOption)[1] &&
                      Object.values(selectedTeamOption)[1]
                    ) {
                      setButtonLoading(true);
                      addMemberToTeam()
                        .then(() => {
                          setEmail([null]);
                          setSelectedOption([null]);
                          setSelectedTeamOption([null]);
                          setButtonLoading(false);
                        })
                        .catch(() => {
                          setButtonLoading(false);
                        });
                    } else if (
                      !Object.values(email)[1] ||
                      !Object.values(selectedOption)[1] ||
                      !Object.values(selectedTeamOption)[1]
                    ) {
                      toast.error(t('Enter all the required information'));
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('save')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  AddTraineeModel =============================== */}

      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg">
                <div className="flex pb-8 items-left ">
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      data-testid="registerModel"
                      style="m-0"
                      onClick={removeModel}
                    >
                      {t('add')} +{' '}
                    </Button>

                    {user?.role === 'coordinator' || undefined ? (
                      ''
                    ) : (
                      <Button
                        variant="primary"
                        size="lg"
                        data-testid="inviteModel"
                        style="m-0"
                        onClick={inviteModel}
                      >
                        {t('Invite')}
                      </Button>
                    )}
                  </div>
                </div>
                <div className="">
                  <DataTable
                    data={traineeData?.length > 0 ? datum : []}
                    columns={columns}
                    loading={loading}
                    title={t('Trainee list')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminTraineeDashboard;
