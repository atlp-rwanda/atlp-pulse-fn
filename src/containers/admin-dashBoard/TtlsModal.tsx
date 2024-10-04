/* istanbul ignore file */
/* eslint-disable */
/* istanbul ignore file */
import React, { useState, useEffect, useMemo, useContext } from 'react';
import { gql, useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Draggable from 'react-draggable';
import Dialog from '@mui/material/Dialog';
import Paper, { PaperProps } from '@mui/material/Paper';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Spinner from '../../components/Spinner';
import { Icon } from '@iconify/react';
import { UserContext } from '../../hook/useAuth';
import Button from '../../components/Buttons';
import Avatar from '../../assets/avatar.png';
import { DROP_TTL_USER } from '../../Mutations/User';
import { GET_ALL_TTL_USERS } from '../../queries/user.queries';
import { EDIT_MEMBER_MUTATION } from '../../Mutations/manageStudentMutations';
import {
  GET_COHORTS_QUERY,
  GET_TEAM_QUERY,
  GET_GITHUB_STATISTICS,
} from '../../queries/manageStudent.queries';
import ControlledSelect from '../../components/ControlledSelect';
import GitHubActivityChart from '../../components/chartGitHub';
import { toast } from 'react-toastify';
import TtlSkeleton from '../../Skeletons/ttl.skeleton'
/* istanbul ignore next */
export default function TtlsPage() {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const organizationToken = localStorage.getItem('orgToken');
  const { loading, error, data, refetch } = useQuery(GET_ALL_TTL_USERS, {
    variables: {
      orgToken: organizationToken,
    },
  });
  // State to store TTL users data
  const [ttlUsersData, setTTLUsersData] = useState([]);

  const [registerTraineeModel, setRegisterTraineeModel] = useState(false);
  const [removeTraineeModel, setRemoveTraineeModel] = useState(false);
  const [editTraineeModel, setEditTraineeModel] = useState(false);
  const [inviteTraineeModel, setInviteTraineeModel] = useState(false);
  const [traineeData, setTraineeData] = useState<any[]>([]);
  const [traineeLoading, setTraineeLoading] = useState<boolean>(true);
  const [allUserEmail, setAllUserEmail] = useState<any[]>([]);
  const [cohorts, setCohorts] = useState<any[]>([]);
  const [cohortName, setCohortName] = useState('');
  const [teams, setTeams] = useState<any[]>([]);
  const [email, setEmail] = useState<any[]>([]);
  const [removalReason, setRemovalReason] = useState('');
  const [traineeDetails, setTraineeDetails] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<any[]>([]);
  const [selectedOptionUpdate, setSelectedOptionUpdate] = useState<any>(null); // You can initialize it to null or an appropriate initial value
  const [selectedTeamOptionUpdate, setSelectedTeamOptionUpdate] = useState<any>(
    {},
  );

  const [open, setOpen] = React.useState(false);

  const [selectedOption2, setSelectedOption2] = useState<any[]>([]);
  const [selectedTeamOption, setSelectedTeamOption] = useState<any[]>([]);
  const [deleteEmail, setDeleteEmail] = useState('');
  const [deleteFromCohort, setDeleteFromCohort] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editCohort, setEditCohort] = useState('');
  const [editTeam, setEditTeam] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const cohortOptions: any = [];
  const teamsOptions: any = [];
  const traineeOptions: any = [];
  const teamOptions: any = [];
  const [isLoaded, setIsLoaded] = useState(false);
  const [gitHubStatistics, setGitHubStatistics] = useState<any>({});
  const [dropTTLUser, { loading: dropLoading }] = useMutation(DROP_TTL_USER);
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
  // Fetch the TTL users data when the component mounts
  useEffect(() => {
    refetch();
  }, [refetch]);
  const handleClickOpen = async (rowData: any) => {
    setIsLoaded(false);
    const filteredUser = ttlUsersData.filter(
      (item: any) => item.email === rowData,
    );
    setTraineeDetails(filteredUser[0]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [getCohortsQuery] = useLazyQuery(GET_COHORTS_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });
  /* istanbul ignore next */
  const removeTraineeMod = () => {
    let newState = !removeTraineeModel;
    setRemoveTraineeModel(newState);
  };

  const removeModel = () => {
    let newState = !registerTraineeModel;
    setRegisterTraineeModel(newState);
  };

  /* istanbul ignore next */
  const removeEditModel = () => {
    let newState = !editTraineeModel;
    setEditTraineeModel(newState);
  };
  const [getTeamQuery] = useLazyQuery(GET_TEAM_QUERY, {
    variables: {
      orgToken: organizationToken,
      cohort: cohortName,
    },
  });
  const [editMemberMutation] = useMutation(EDIT_MEMBER_MUTATION, {
    variables: {
      removedFromTeamName: editTeam || '',
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
        refetch();
      }, 500);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 300);
    },
  });

  // Update the TTL users data whenever new data is received from the query
  useEffect(() => {
    if (data && data.getAllTTLUsers) {
      setTTLUsersData(data.getAllTTLUsers);
    }

    getCohortsQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setCohorts(data.getCohorts);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, [data]);
  /* istanbul ignore next */
  // Define the Cell components using useMemo
  const columns = [
    {
      Header: t('Name'),
      accessor: 'profile.name',
      Cell: ({ value }: { value: string }) => value || '-',
    },
    { Header: t('Email'), accessor: 'email' },
    {
      Header: t('Cohort'),
      accessor: 'team.cohort.name',
      Cell: ({ value }: { value: string }) => value || t('Not assigned'),
    },
    {
      Header: t('Team'),
      accessor: 'team.name',
      Cell: ({ value }: { value: string }) => value || t('Not assigned'),
    },

    {
      Header: t('action'),
      accessor: '',
      /* istanbul ignore next */
      Cell: useMemo(
        () =>
          ({ row }: any) =>
            (
              <div
                className={
                  ' items-center' +
                  (ttlUsersData?.length > 0 ? ' flex' : ' hidden')
                }
              >
                <Icon
                  icon="el:file-edit-alt"
                  className="mr-2"
                  width="25"
                  height="25"
                  cursor="pointer"
                  color="#9e85f5"
                  /* istanbul ignore next */
                  onClick={() => {
                    setSelectedOptionUpdate({
                      value: row.original.team?.cohort?.name,
                      label: row.original.team?.cohort?.name,
                    });
                    setSelectedTeamOptionUpdate({
                      value: row.original?.team?.name,
                      label: row.original?.team?.name,
                    });
                    removeEditModel();
                    setEditEmail(row.original?.email);
                    setEditCohort(row.original.team?.cohort?.name);
                    setEditTeam(row.original.team?.name);
                  }}
                />
                <Icon
                  icon="mdi:close-circle-outline"
                  width="30"
                  height="30"
                  cursor="pointer"
                  color="#9e85f5"
                  /* istanbul ignore next */
                  onClick={() => {
                    removeTraineeMod();
                    setDeleteEmail(row.original?.email);
                  }}
                />

                <Icon
                  icon="flat-color-icons:view-details"
                  width="30"
                  height="30"
                  cursor="pointer"
                  color="#9e85f5"
                  /* istanbul ignore next */
                  onClick={() => {
                    handleClickOpen(row.original.email);
                  }}
                />
              </div>
            ),
        [ttlUsersData],
      ),
    },
  ];

  /* istanbul ignore next */
  if (error) {
    return <div>{t('Error fetching data. Please try again later.')}</div>;
  }

  // const cohortOptions = cohorts.map((cohort) => ({
  //   value: cohort.id,
  //   name: cohort.name,
  // }));
  if (cohorts.length > 0) {
    cohorts.map((cohort: any, index: any) => {
      cohortOptions[index] = {};
      cohortOptions[index].value = cohort.id;
      cohortOptions[index].label = cohort.name;
    });
  }
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
  if (teams.length > 0) {
    teams.map((team: any, index: any) => {
      teamsOptions[index] = {};
      teamsOptions[index].value = team?.name;
      teamsOptions[index].label = team?.name;
    });
  }
  /* istanbul ignore next */
  return (
    <>
      {/* =========================== Start::  EditTraineeModel =============================== */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          editTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Edit TTL')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t(
                    'Choose a different cohort for the TTL from the dropdown below.',
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
                        setCohortName(e.label);
                        getTeam();
                      },
                    }}
                    options={cohortOptions}
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
                    options={teamsOptions}
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
                    if (editEmail) {
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

      <div className="rounded-lg dark:bg-dark-bg">
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          className="rounded-lg"
          fullWidth
        >
          <DialogContent className="font-sans dark:bg-dark-bg">
            <DialogContentText className="font-sans dark:bg-dark-bg">
              <div className="font-sans text-sm font-bold text-center dark:text-white dark:bg-dark-bg">
                <div className="bg-[#4aa5be] h-[150px]">
                  <img
                    className="absolute top-[80px] left-[40px] border-4 border-white font-sans"
                    style={{
                      margin: '0 auto',
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
                      {traineeDetails ? traineeDetails.email : 'Unavailable'}
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
                    <b>TEAM</b>{' '}
                  </h3>
                  <p>
                    <i>
                      {' '}
                      {traineeDetails.team
                        ? traineeDetails.team.name
                        : 'Not assigned'}
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
                    marginBottom: '20px',
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
                      {traineeDetails.team
                        ? traineeDetails.team.cohort.name
                        : 'Not assigned'}
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
                        {''}
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
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>

      {/* =========================== Start::  RemoveTraineeModel =============================== */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          removeTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Remove TTL')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t('Are you sure you want to remove TTL from this cohort?')}
                </h3>
              </div>
              {/* Reason input field */}
              <div className="mt-4">
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-primary dark:bg-dark-bg dark:border-gray-600 dark:text-white"
                  placeholder={t('Enter reason')}
                  value={removalReason}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRemovalReason(e.target.value)
                  }
                />
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    removeTraineeMod();
                    setRemovalReason('');
                  }}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    if (deleteEmail) {
                      dropTTLUser({
                        variables: {
                          email: deleteEmail,
                          reason: removalReason,
                        },
                        onCompleted: () => refetch(),
                      })
                        .then((response) => {
                          toast.success('TLL Dropped Successfully');
                          setButtonLoading(true);
                          removeTraineeMod();
                        })
                        .catch((error) => {
                          {
                            setButtonLoading(true);
                            toast.error(error);
                            removeTraineeMod();
                          }
                        });
                    } else {
                      setButtonLoading(true);
                      toast.error('Please select the TTL again');
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

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
        <div className="">
        {loading ? (
            <TtlSkeleton />
          ) : (
            <DataTable
              columns={columns}
              data={ttlUsersData}
              title={t('TTL List')}
            />
          )}
          {ttlUsersData.length === 0 && !loading && (
            <div className="flex justify-center items-center h-48">
              {t('No TTL found.')}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
