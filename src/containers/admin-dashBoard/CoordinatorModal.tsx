import React, { useState, useEffect, useMemo } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import Draggable from 'react-draggable';
import Dialog from '@mui/material/Dialog';
import Paper, { PaperProps } from '@mui/material/Paper';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { toast } from 'react-toastify';
import Avatar from '../../assets/avatar.png';
import { GET_COHORTS_QUERY } from '../../queries/manageStudent.queries';
import ControlledSelect from '../../components/ControlledSelect';
import Button from '../../components/Buttons';
import TtlSkeleton from '../../Skeletons/ttl.skeleton';
import DataTable from '../../components/DataTable';
import { DROP_COORDINATOR, UNDROP_COORDINATOR } from '../../Mutations/User';
import DropOrUndropUser from '../../components/DropOrUndropUser';

const GET_COORDINATORS = gql`
  query Query($orgToken: String) {
    getAllCoordinators(orgToken: $orgToken) {
      id
      email
      profile {
        name
        avatar
      }
      status {
        status
      }
      organizations
      role
    }
  }
`;

const GIVE_COORDINATOR_COHORT = gql`
  mutation GiveCoordinatorCohort($coordinatorId: String!, $cohortId: String!) {
    giveCoordinatorCohort(coordinatorId: $coordinatorId, cohortId: $cohortId)
  }
`;

interface StatusType {
  status: string;
}

interface Cohort {
  name: string;
  coordinator: any;
  id: string;
}
interface Coordinator {
  id?: string;
  email?: string;
  profile?: {
    name: string | null;
    avatar?: string;
  };
  status: StatusType;
  organizations?: string[];
  role?: string;
  cohorts?: Cohort[];
}

export default function CoordinatorsPage() {
  const { t } = useTranslation();
  const orgToken = localStorage.getItem('orgToken');
  const {
    loading,
    data,
    refetch: refetchCoordinators,
  } = useQuery(GET_COORDINATORS, {
    variables: {
      orgToken,
    },
    pollInterval: 3000,
  });
  const [coordinators, setCoordinators] = useState<Coordinator[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [viewCoordinator, setViewCoordinator] = useState<Coordinator | null>(
    null,
  );
  const cohortOptions: any = [];
  const [coordinatorModle, setCoordinatorModle] = useState<boolean>(false);
  const [unAssignedCohorts, setUnAssignedCohorts] = useState<Cohort[]>([]);
  const [editModel, setEditModel] = useState<boolean>(false);
  const [removalReason, setRemovalReason] = useState('');
  const [dropModle, setDropModel] = useState(false);
  const [undropModle, setUndropModel] = useState(false);
  const [coordinatorId, setCoordinatorId] = useState(null);
  const [cohortId, setCohortId] = useState<string>('');

  const { data: cohortsData, refetch: refetchCohorts } = useQuery(
    GET_COHORTS_QUERY,
    {
      variables: {
        orgToken,
      },
    },
  );

  const [giveCoordinatorCohort, { loading: givingLoading }] = useMutation(
    GIVE_COORDINATOR_COHORT,
  );

  const [dropCordinator, { loading: dropLoading }] =
    useMutation(DROP_COORDINATOR);

  const [undropCordinator, { loading: undropLoading }] =
    useMutation(UNDROP_COORDINATOR);

  useEffect(() => {
    if (cohortsData) {
      setCohorts(cohortsData.getCohorts);
    }
  }, [cohortsData]);

  useEffect(() => {
    if (data && cohorts.length > 0) {
      const extractedCoordinators = data.getAllCoordinators.map(
        (coordinator: any) => {
          const coordinatorCohorts = cohorts.filter(
            (cohort) =>
              cohort.coordinator && cohort.coordinator.id === coordinator.id,
          );
          return {
            email: coordinator.email,
            id: coordinator.id,
            status: coordinator.status,
            profile: coordinator.profile || { name: null },
            organizations: coordinator.organizations || [],
            role: coordinator.role,
            cohorts: coordinatorCohorts,
          };
        },
      );
      setCoordinators(extractedCoordinators);
    }
  }, [data, cohorts]);

  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel='[class*="MuiDialogContent-root"]'
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const handleEdit = (id: string) => {
    const unAssgnedCohorts = cohorts.filter((cohort, index) => {
      if (cohort.coordinator == null) {
        return true;
      }
      return cohort.coordinator.id !== id;
    });

    setUnAssignedCohorts(unAssgnedCohorts);
    setEditModel(true);
  };

  useEffect(() => {
    if (unAssignedCohorts.length > 0) {
      unAssignedCohorts.forEach((cohort: any, index: any) => {
        cohortOptions[index] = {};
        cohortOptions[index].value = cohort.id;
        cohortOptions[index].label = cohort.name;
      });
    }
  }, [unAssignedCohorts]);

  const handleCloseDropModle = () => {
    setDropModel(false);
  };
  const handleCloseUnropModle = () => {
    setUndropModel(false);
  };

  const handleViewCoordinator = (id: string) => {
    const coordinatorToView = coordinators.find(
      (coordinator) => coordinator.id === id,
    );
    if (coordinatorToView) {
      setViewCoordinator(coordinatorToView);
      setCoordinatorModle(true);
    }
  };

  const handleGiveCoordinatorCohort = () => {
    if (!coordinatorId) return;
    if (!cohortId) {
      toast.error('First select cohort');
      return;
    }
    const coordinatorToGive = coordinators.find(
      (coordinator) => coordinator.id === coordinatorId,
    );

    if (
      coordinatorToGive?.cohorts &&
      coordinatorToGive?.cohorts.length &&
      coordinatorToGive?.cohorts[0].id === cohortId
    ) {
      return;
    }
    giveCoordinatorCohort({
      variables: {
        coordinatorId,
        cohortId,
      },
    })
      .then((response) => {
        toast.success(response.data.giveCoordinatorCohort);
        refetchCohorts();
        refetchCoordinators();
        setEditModel(false);
        setCoordinatorId(null);
      })
      .catch((error) => {
        toast.error(error.message || 'An error occurred');
      });
  };

  const handleDropCoordinator = (reason: string) => {
    if (!coordinatorId) return;
    dropCordinator({
      variables: {
        id: coordinatorId,
        reason,
      },
    })
      .then((response) => {
        toast.success('Coordinator Dropped Successfully');
        refetchCohorts();
        refetchCoordinators();
        handleCloseDropModle();
        setCoordinatorId(null);
      })
      .catch((error) => {
        toast.error(error.message || 'An error occurred');
      });
  };

  const handleUndropCoordinator = () => {
    if (!coordinatorId) return;
    undropCordinator({
      variables: {
        id: coordinatorId,
      },
    })
      .then((response) => {
        toast.success('Coordinator Undropped Successfully');
        refetchCohorts();
        refetchCoordinators();
        handleCloseUnropModle();
        setCoordinatorId(null);
      })
      .catch((error) => {
        toast.error(error.message || 'An error occurred');
      });
  };

  const handleClose = () => {
    setCoordinatorModle(false);
  };

  const columns = [
    {
      Header: t('Name'),
      accessor: 'profile.name',
      Cell: ({ value }: any) => value || '-',
    },
    { Header: t('Email'), accessor: 'email' },
    {
      Header: t('Cohorts'),
      accessor: 'cohorts',
      Cell: ({ value }: any) => (
        <div className="flex flex-col ml-2 gap-2">
          {value && value.length > 0 ? (
            value.map((cohort: Cohort) => (
              <div key={cohort.id}>{cohort.name}</div>
            ))
          ) : (
            <div>{t('Not assigned')}</div>
          )}
        </div>
      ),
    },
    {
      Header: t('actions'),
      accessor: '',
      /* istanbul ignore next */
      Cell: useMemo(
        () =>
          function ({ row }: any) {
            return (
              <div className=" items-center flex ml-1">
                <Icon
                  icon="el:file-edit-alt"
                  className="mr-2"
                  width="25"
                  height="25"
                  cursor="pointer"
                  color="#9e85f5"
                  /* istanbul ignore next */
                  onClick={() => {
                    if (row.original.status?.status === 'active') {
                      setCoordinatorId(row.original.id);
                      handleEdit(row.original.id);
                    } else {
                      toast.error('This Coordinator is Dropped out');
                    }
                  }}
                />

                {row.original.status?.status === 'active' ? (
                  <Icon
                    icon="mdi:close-circle-outline"
                    width="30"
                    height="30"
                    cursor="pointer"
                    color="#9e85f5"
                    onClick={() => {
                      setCoordinatorId(row.original.id);
                      setDropModel(true);
                    }}
                  />
                ) : (
                  <Icon
                    icon="mdi:restore"
                    width="30"
                    height="30"
                    cursor="pointer"
                    color="#9e85f5"
                    onClick={() => {
                      setCoordinatorId(row.original.id);
                      setUndropModel(true);
                    }}
                  />
                )}
                <Icon
                  icon="flat-color-icons:view-details"
                  width="30"
                  height="30"
                  cursor="pointer"
                  color="#9e85f5"
                  /* istanbul ignore next */
                  onClick={() => {
                    handleViewCoordinator(row.original.id);
                  }}
                />
              </div>
            );
          },
        [coordinators],
      ),
    },
  ];

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg overflow-y-auto overflow-x-hidden">
      <div className="flex items-left pb-8">
        <div className="flex gap-2" />
      </div>
      <div className=" overflow-x-auto">
        {loading ? (
          <TtlSkeleton />
        ) : (
          <DataTable
            columns={columns}
            data={coordinators}
            title={t('Coordinators List')}
          />
        )}
        {coordinators.length === 0 && !loading && (
          <div className="flex justify-center items-center h-48">
            {t('No coordinators found.')}
          </div>
        )}
      </div>
      <div className="rounded-lg dark:bg-dark-bg">
        <Dialog
          open={coordinatorModle}
          onClose={handleClose}
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
                      viewCoordinator &&
                      viewCoordinator.profile &&
                      viewCoordinator.profile.avatar
                        ? viewCoordinator.profile.avatar
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
                  {viewCoordinator && viewCoordinator.profile
                    ? viewCoordinator.profile.name
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
                      {viewCoordinator ? viewCoordinator.email : 'Unavailable'}
                    </i>
                  </p>
                </div>

                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
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
                      {viewCoordinator?.cohorts &&
                      viewCoordinator.cohorts.length > 0
                        ? viewCoordinator?.cohorts.map((cohort) => (
                            <div className="" key={cohort.id}>
                              {cohort.name}
                            </div>
                          ))
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
                    <b>STATUS</b>{' '}
                  </h3>
                  <p>
                    <i> {viewCoordinator?.status?.status}</i>
                  </p>
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
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
      {editModel && (
        <div className="h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ">
          <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
            <div className="flex flex-wrap items-center justify-center w-full card-title ">
              <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                {t('Edit Coordinator')}
              </h3>
              <hr className="w-full my-3 border-b bg-primary" />
            </div>
            <div className="card-body">
              <form className="px-8 py-3 ">
                <div className="flex flex-wrap items-center justify-center w-full card-title ">
                  <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                    {t(
                      'Choose a cohort to assign Coordinator from the dropdown below.',
                    )}
                  </h3>
                </div>

                <div className="my-3 text-white input h-9 ">
                  <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                    <ControlledSelect
                      placeholder={t('Select cohort')}
                      noRegister={{
                        onChange: (e) => {
                          setCohortId(e.value);
                        },
                      }}
                      options={cohortOptions}
                    />
                  </div>
                </div>

                <div className="flex justify-between w-full">
                  <Button
                    data-testid="removeModel1"
                    variant="info"
                    size="sm"
                    style="w-[8rem] h-[2.3rem] text-sm p-0 mx-0 flex justify-center items-center"
                    onClick={() => setEditModel(false)}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    style="w-[8rem] h-[2.3rem] text-sm p-0 mx-0 flex justify-center items-center"
                    onClick={handleGiveCoordinatorCohort}
                    loading={givingLoading}
                  >
                    {t('Proceed')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {dropModle && (
        <DropOrUndropUser
          subject="Drop Coordinator"
          title="Are you sure you want to drop this Coordinator from the organisation?"
          loading={dropLoading}
          drop
          setRemovalReason={setRemovalReason}
          onClose={handleCloseDropModle}
          onSubmit={() => {
            handleDropCoordinator(removalReason);
          }}
        />
      )}
      {undropModle && (
        <DropOrUndropUser
          subject="Undrop Coordinator"
          title="Are you sure you want to undrop this Coordinator?"
          loading={undropLoading}
          onClose={handleCloseUnropModle}
          onSubmit={handleUndropCoordinator}
        />
      )}
    </div>
  );
}
