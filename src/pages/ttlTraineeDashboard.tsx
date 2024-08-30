/* istanbul ignore file */
/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import useDocumentTitle from '../hook/useDocumentTitle';
import Draggable from 'react-draggable';
import Dialog from '@mui/material/Dialog';
import Paper, { PaperProps } from '@mui/material/Paper';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { toast } from 'react-toastify';
import { useLazyQuery } from '@apollo/client';
import { GET_TTL_TRAINEES } from '../Mutations/User';
import { GET_GITHUB_STATISTICS } from '../Mutations/manageStudentMutations';
import Button from '../components/Buttons';
import Avatar from '../assets/avatar.png';
import Spinner from '../components/Spinner';
import GitHubActivityChart from '../components/chartGitHub';
const organizationToken = localStorage.getItem('orgToken');
``;
/* istanbul ignore next */
const TtlTraineeDashboard = () => {
  useDocumentTitle('Trainees');
  const { t }: any = useTranslation();

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
  const [traineeData, setTraineeData] = useState<any[]>([]);
  const [traineeLoading, setTraineeLoading] = useState<boolean>(true);
  const [nav, setNav] = useState(false);
  const [fetchError, setFetchError] = useState(false); // New state variable to track the fetch error

  const [isLoaded, setIsLoaded] = useState(false);
  const [traineeDetails, setTraineeDetails] = useState<any>({});
  const [gitHubStatistics, setGitHubStatistics] = useState<any>({});
  const [hasData, setHasData] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => setNav(!nav);

  const [getGitHubStatistics] = useLazyQuery(GET_GITHUB_STATISTICS, {
    onCompleted: (data) => {
      setGitHubStatistics(data.gitHubActivity);
      setIsLoaded(false);
    },
    onError: (error) => {
      setIsLoaded(false);
    },
  });
  const handleClickOpen = async (rowData: any) => {
    setIsLoaded(true);
    const filteredUser = traineeData.filter((item) => item.email == rowData);
    setTraineeDetails(filteredUser[0]);
    setOpen(true);
    getGitHubStatistics({
      variables: {
        organisation: localStorage.getItem('orgName')?.split('.')[0],
        username: filteredUser[0].profile?.githubUsername,
      },
    });
  };
  /* istanbul ignore next */
  const columns = [
    { Header: t('name'), accessor: 'name' },
    { Header: t('email'), accessor: 'email' },

    { Header: t('Team'), accessor: 'team' },
    {
      Header: t('action'),
      accessor: '',
      Cell: ({ row }: any) =>
        hasData && ( // Only render the button if there is data
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              handleClickOpen(row.original?.email);
            }}
            style="px-4 py-0 text-sm"
          >
            {t('View more')}
          </Button>
        ),
    },
  ];

  let datum: any = [];

  const [getTTLTrainees] = useLazyQuery(GET_TTL_TRAINEES, {
    variables: {
      orgToken: organizationToken,
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  /* istanbul ignore if */

  if (traineeData && traineeData.length > 0) {
    traineeData?.map((data: any, index: number) => {
      datum[index] = {};
      datum[index].name = data.profile ? data.profile.name : 'undefined';
      datum[index].email = data.email;
      datum[index].rating = '2';
      datum[index].team = data.team?.name;
      datum[index].program = data.team?.cohort?.program?.name;
    });
  }
  /* istanbul ignore next */
  useEffect(() => {
    getTTLTrainees({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTraineeLoading(false);
        setTraineeData(data.getTTLTrainees);
        setHasData(data.getTTLTrainees.length > 0);
        setFetchError(false); // Reset the fetch error state on success
      },
      onError: (error) => {
        setTraineeLoading(false);
        setFetchError(true); // Set fetch error state to true on error
        toast.error(error.message);
      },
    });
  }, []);
  return (
    <>
      {/* Get Trainee user details */}
      <div className="rounded-lg dark:bg-dark-bg font-serif">
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          className="rounded-lg font-serif"
          fullWidth
        >
          <DialogContent className="font-serif dark:bg-dark-bg">
            <DialogContentText className="font-serif dark:bg-dark-bg">
              <div className="font-serif text-sm font-bold text-center dark:text-white dark:bg-dark-bg">
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
                      traineeData &&
                      traineeDetails.profile &&
                      traineeDetails.profile.avatar
                        ? traineeDetails.profile.avatar
                        : Avatar
                    }
                    alt="Logo"
                  />
                </div>

                <h2
                  className="font-bold text-[18px]  capitalize pt-5 dark:text-white text-right dark:bg-dark-bg text-sm font-serif"
                  style={{ cursor: 'move', fontWeight: 'bold' }}
                  id="draggable-dialog-title"
                >
                  {traineeDetails && traineeDetails.profile
                    ? traineeDetails.profile.name
                    : 'Unavailable'}
                </h2>

                <div
                  className="font-serif text-sm"
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
                      {traineeDetails.email
                        ? traineeDetails.email
                        : 'Unavailable'}
                    </i>
                  </p>
                </div>
                <div
                  className="font-serif text-sm"
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
                    <b>Github username</b>{' '}
                  </h3>
                  <p>
                    <i>
                      {' '}
                      {traineeDetails.profile
                        ? traineeDetails.profile?.githubUsername
                        : 'Unavailable'}
                    </i>
                  </p>
                </div>
                <div
                  className="font-serif text-sm"
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
                        : 'Unavailable'}
                    </i>
                  </p>
                </div>

                <div
                  className={'text-sm font-serif'}
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginBottom: '20px',
                  }}
                >
                  {isLoaded ? (
                    <p>
                      <div className="flex items-center justify-center h-48">
                        <i>Loading gitHub statistics...</i>
                        <Spinner />
                        <div className="spinner" />
                      </div>
                    </p>
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
                  style="w-[20%] md:w-1/4 text-sm font-serif"
                  onClick={() => handleClose()}
                >
                  {t('Close')}
                </Button>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          {/* <Sidebar toggle={handleClick} style="hidden lg:flex" /> */}
          <div className="w-full">
            <div>
              <div className="min-h-screen overflow-x-hidden overflow-y-auto bg-light-bg dark:bg-dark-frame-bg">
                <div className="">
                  {fetchError || traineeData?.length === 0 ? ( // Check both fetchError and traineeData length
                    <DataTable
                      data={[]} // Pass an empty array as data
                      columns={columns}
                      loading={traineeLoading}
                      title={t('Trainees list')}
                    />
                  ) : (
                    <DataTable
                      data={traineeData?.length > 0 ? datum : [{}]}
                      columns={columns}
                      loading={traineeLoading}
                      title={t('Trainees list')}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TtlTraineeDashboard;
