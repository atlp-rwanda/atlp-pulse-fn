/* eslint-disable */
/* istanbul ignore file */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import rolemanagement from '../../dummyData/rolemanagement.json';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from './../../components/Buttons';
import devs from '../../dummyData/rolemanagement.json';
import DELETE_USER_MUTATION from '../admin-dashBoard/DeleteUserMutation';
import CREATE_ROLE_MUTATION from '../admin-dashBoard/createRoleMutation';
import GET_ROLE_QUERY from '../admin-dashBoard/GetRolesQuery';
import ASSIGN_ROLE_MUTATION from '../admin-dashBoard/AssignRolesMutation';
import {
  useApolloClient,
  useLazyQuery,
  useMutation,
  useQuery,
} from '@apollo/client';
import roles from '../../dummyData/roles.json';
import Square from '../../Skeletons/Square';
import { toast } from 'react-toastify';
import { UNDROP_TRAINEE } from '../../Mutations/manageStudentMutations';
import TtlSkeleton from '../../Skeletons/ttl.skeleton';
import GET_TEAMS from '../../queries/team.queries';
const AdminSission = () => {
  const { t } = useTranslation();
  useDocumentTitle('Roles & Access');
  const [addMemberModel, setAddMemberModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [GetAllRoles] = useLazyQuery(GET_ROLE_QUERY);
  const [developers, setDevelopers] = useState(devs);
  const [tabName, setTabName] = useState('all');
  const [dataDev, setDataDev] = useState(rolemanagement);

  const [showRoles, setShowRoles] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [selectedUser, setSelectedUser] = useState({ id: '', role: '' });
  const [err, setErr] = useState();
  const [selectedRole, setSelectedRole] = useState('');
  const [subTitle, setSubTitle] = useState('Available roles');
  const [users, setUsers] = useState();
  const [createUserRole] = useMutation(CREATE_ROLE_MUTATION);
  const [updateUserRole] = useMutation(ASSIGN_ROLE_MUTATION);

  const [traineeID, setTraineeID] = useState('');
  const [findFilter, setFindFilter] = useState('');
  const [loggedUser, setLoggedUser] = useState('');
  const [allRoles, setallRoles] = useState<any>();
  const [selectingTTL, setSelectingTTL] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState('');

  const [deleteConfirmationModel, setDeleteConfirmationModel] = useState(false); // Modal for confirming deletion
  const [restoreConfirmationModel, setRestoreConfirmationModel] =
    useState(false); // Modal for confirming deletion

  const { loading, error, data } = useQuery(GET_TEAMS, {
    variables: { orgToken: localStorage.getItem('orgToken') },
  });
  let newUsers: any = [];
  /* istanbul ignore next */
  /* istanbul ignore next */
  /* istanbul ignore next */
  /* istanbul ignore next */

  /* istanbul ignore next */
  /* istanbul ignore next */
  const removeDeleteModel = (e: any) => {
    e.preventDefault();
    let newState = !deleteModel;
    setDeleteModel(newState);
  };

  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: (data) => {
      if (data.deleteUser.message) {
        toast.success('User suspended successfully');
        setToggle(!toggle); // Refresh or update state
      } else {
        toast.error('Failed to suspended user');
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    // Fetch the auth details from local storage
    const authData = localStorage.getItem('auth');

    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      const userId = parsedAuthData.userId;
      setLoggedUser(userId);
    }
  }, []);

  useEffect(() => {
    if (tabName === 'all') {
      setDataDev(rolemanagement);
    } else {
      /* istanbul ignore next */
      setDataDev(rolemanagement.filter((item: any) => item.role === tabName));
    }
  }, [tabName]);

  const removeAssignModel = /* istanbul ignore next */ (user: any) => {
    /* istanbul ignore next */
    setSelectedUser({ id: user.id, role: user.role });
    /* istanbul ignore next */
    let newState = !deleteModel;
    /* istanbul ignore next */
    setDeleteModel(newState);
  };

  const [handleCreateRole] = useMutation(CREATE_ROLE_MUTATION, {
    variables: { name: roleName },
    /* istanbul ignore next */
    onCompleted: /* istanbul ignore next */ () => {
      /* istanbul ignore next */
      setToggle(!toggle);
      /* istanbul ignore next */
      let newState = !addMemberModel;
      /* istanbul ignore next */
      setTimeout(
        /* istanbul ignore next */ () => {
          /* istanbul ignore next */
          setAddMemberModel(newState);
        },
        1000,
      );
    },
    onError: /* istanbul ignore next */ (err) => {
      /* istanbul ignore next */
      console.log('Error ', err);
    },
  });

  /* istanbul ignore next */
  const handleSelectRole = (e: any, name: any) => {
    /* istanbul ignore next */
    e.preventDefault();
    /* istanbul ignore next */
    setSelectedRole(name);

    if (name === 'TTL') {
      setSelectingTTL(true);
    } else {
      setSelectingTTL(false);
    }
  };

  const [toggle, setToggle] = useState(false);
  const [handleAssignRole2] = useMutation(ASSIGN_ROLE_MUTATION, {
    variables: {
      updateUserRoleId: selectedUser.id,
      name: selectedRole,
      orgToken: localStorage.getItem('orgToken'),
      team: selectedRole === 'TTL' ? selectedTeamId : undefined,
    },
    onCompleted: () => {
      /* istanbul ignore next */
      toast.success('Role assigned successful');
      /* istanbul ignore next */
      setToggle(!toggle);
      /* istanbul ignore next */
      let newState = !deleteModel;
      /* istanbul ignore next */
      setTimeout(() => {
        /* istanbul ignore next */
        setDeleteModel(newState);
      }, 1000);
    },
    /* istanbul ignore next */
    onError: /* istanbul ignore next */ (err) => {
      /* istanbul ignore next */
      toast.error(err.message);
      setToggle(!toggle);
      /* istanbul ignore next */
      let newState = !deleteModel;
      /* istanbul ignore next */
      setTimeout(() => {
        /* istanbul ignore next */
        setDeleteModel(newState);
      }, 1000);
    },
  });
  const [unDropTrainee] = useMutation(UNDROP_TRAINEE, {
    variables: {
      traineeId: traineeID,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        // setButtonLoading(false);
        if (data.undropTrainee) {
          // Check the response structure
          // handleAssignRole2();
          setToggle(!toggle);
          toast.success('User restored successfully');
          setRestoreConfirmationModel(false);
        } else {
          toast.error('Failed to restore trainee');
        }
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        handleAssignRole2();
        console.error('Mutation error:', err); // Log the error
        toast.error(err.message);
      }, 500);
    },
  });
  /* istanbul ignore next */
  const [fetchData2] = useLazyQuery(GET_ROLE_QUERY, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
  });

  useEffect(() => {
    fetchData2({
      fetchPolicy: 'network-only',

      /* istanbul ignore next */
      onCompleted: (data) => {
        /* istanbul ignore next */
        setUsers(data?.getAllUsers);
        /* istanbul ignore next */
        data.getAllUsers.map((user: any, index: any) => {
          /* istanbul ignore next */
          newUsers[index] = {};
          newUsers[index].role = user.role;
          newUsers[index].status = user?.status?.status;
          newUsers[index].email = user.email;
          newUsers[index].id = user.id;
          if (user.role === 'ttl') {
            newUsers[index].role = 'ttl'; // Update the role to 'ttl'
          }
        });
        /* istanbul ignore next */
        setallRoles(data?.getAllRoles);
      },

      /* istanbul ignore next */
      onError: (error) => {
        /* istanbul ignore next */
        console.log(error, 'error');
      },
    });

    // fetchData();
  }, [handleAssignRole2, toggle]);

  const columns = [
    {
      Header: 'Email',
      accessor: 'email',

      /* istanbul ignore next */
      Cell: ({ row }: any) => (
        /* istanbul ignore next */
        <div className="flex items-left">
          <span className="hidden  ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
            <svg
              className="h-full w-full text-gray-300 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <div className="flex flex-col  leading-4 px-3 py-2">
            {/* <h3 className="dark:text-white sm:text-xs">{row.original.name}</h3> */}
            <p className="text-sm sm:text-xs text-gray-400 dark:text-white">
              {row.original.email}
            </p>
          </div>
        </div>
      ),
    },
    { Header: 'Role', accessor: 'role' },

    {
      Header: 'Status',
      accessor: 'status',

      /* istanbul ignore next */
      Cell: ({ row }: any) => (
        /* istanbul ignore next */
        <div className="flex items-left">
          <span className="hidden  ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
            <svg
              className="h-full w-full text-gray-300 dark:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <div className="flex flex-col  leading-4 px-3 py-2">
            <p className="text-sm sm:text-xs text-gray-400 dark:text-white">
              {row.original.status.status}
            </p>
          </div>
        </div>
      ),
    },
    {
      Header: 'Action',
      accessor: '',
      // /* istanbul ignore next */  handleRestoreUser
      Cell: ({ row }: any) => (
        <div className="flex gap-4">
          {row.original.status.status == 'suspended' ? (
            <>
              {' '}
              <p
                className="text-red-500 whitespace-no-wrap cursor-pointer"
                onClick={
                  /* istanbul ignore next */ () => {
                    handleRestoreUser(row.original.id);
                  }
                }
              >
                {t('Restore')}
              </p>{' '}
            </>
          ) : (
            <>
              <p
                className="text-red-500  whitespace-no-wrap cursor-pointer"
                onClick={
                  /* istanbul ignore next */ () => {
                    /* istanbul ignore next */
                    removeAssignModel(row.original);
                  }
                }
              >
                {t('Assign')}
              </p>
              <p
                className="text-red-500 whitespace-no-wrap cursor-pointer"
                onClick={
                  /* istanbul ignore next */ () => {
                    handleDeleteUser(row.original.id);
                  }
                }
              >
                {t('Suspend')}
              </p>{' '}
            </>
          )}
        </div>
      ),
    },
  ];
  const allRoless = [
    {
      name: 'coordinator',
    },
    {
      name: 'manager',
    },
    {
      name: 'admin',
    },
    {
      name: 'ttl',
    },
  ];

  const handleDeleteUser = (userId: any) => {
    if (loggedUser === userId) {
      toast.warn('You can not suspended your self!');
    } else {
      setSelectedUser({ id: userId, role: 'user' });
      setDeleteConfirmationModel(true);
    }
  };

  const confirmDeleteUser = () => {
    deleteUser({
      variables: {
        input: { id: selectedUser.id },
        context: { userId: selectedUser.id },
      },
    });
    setDeleteConfirmationModel(false);
  };
  const handleRestoreUser = (userId: any) => {
    if (!userId) {
      toast.warn('No user selected! ');
    } else {
      setSelectedUser({ id: userId, role: 'user' });
      setTraineeID(userId);
      setRestoreConfirmationModel(true);
    }
  };
  const confirmRestoreUser = () => {
    unDropTrainee({
      variables: {
        input: { id: selectedUser.id },
        context: { userId: selectedUser.id },
      },
    });
    setRestoreConfirmationModel(false);
  };
  /* istanbul ignore next */
  return (
    <>
      {users && allRoless ? (
        <>
          {/* ... Existing code ... */}
          {/* =========================== Start:: restore Confirmation Modal =============================== */}
          <div
            className={`w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
              restoreConfirmationModel === true ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2 xl:w-4/12 rounded-lg p-4 pb-8">
              <div className="card-title w-full flex justify-center items-center flex-col">
                <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
                  {t('Are you sure you want to restore this user?')}
                </h3>
                <hr className=" bg-primary border-b my-3 w-full" />
              </div>
              <div className="card-body">
                <div className="w-full flex justify-between">
                  <Button
                    variant="info"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={() => setRestoreConfirmationModel(false)}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={confirmRestoreUser}
                  >
                    {t('Confirm')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* =========================== Start::  restore Session Model =============================== */}

          {/* =========================== Start:: Delete Confirmation Modal =============================== */}
          <div
            className={`w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
              deleteConfirmationModel === true ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2 xl:w-4/12 rounded-lg p-4 pb-8">
              <div className="card-title w-full flex justify-center items-center flex-col">
                <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
                  {t('Are you sure you want to suspended this user?')}
                </h3>
                <hr className=" bg-primary border-b my-3 w-full" />
              </div>
              <div className="card-body">
                <div className="w-full flex justify-between">
                  <Button
                    variant="info"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={() => setDeleteConfirmationModel(false)}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={confirmDeleteUser}
                  >
                    {t('Confirm')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* =========================== Start::  delete Session Model =============================== */}
          <div
            className={`w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
              deleteModel === true ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
                  {t('Select role')}
                </h3>
                <hr className=" bg-primary border-b my-3 w-full" />
              </div>
              <div className="card-body">
                <form className="py-3 px-8">
                  <div>
                    <div className="flex justify-center">
                      <div className="flex flex-wrap">
                        {allRoless
                          .filter((item) => item.name != selectedUser.role)
                          .map((obj: any, index: any) => (
                            <div
                              key={index}
                              onClick={(e) => handleSelectRole(e, obj.name)}
                              className="border-solid active:bg-sky-500 rounded-xl border-2 border-sky-500 flex justify-center cursor-pointer m-2 "
                            >
                              <button
                                type="button"
                                className="p-2  hover:bg-sky-500 focus:bg-sky-500 focus:ring-4 focus:ring-sky-700 focus:outline-none rounded-lg"
                              >
                                {obj.name}
                              </button>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                  {/* Render the team selector when selecting the "TTL" role */}

                  <div className="w-full flex justify-between">
                    <Button
                      variant="info"
                      size="sm"
                      style="w-[30%] md:w-1/4 text-sm font-sans"
                      data-testid="delete"
                      onClick={(e: void) => removeDeleteModel(e)}
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      style="w-[30%] md:w-1/4 text-sm font-sans"
                      onClick={() => handleAssignRole2()}
                    >
                      {t('Assign')}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* =========================== End::  delete Session Model =============================== */}
          <div className="bg-light-bg dark:bg-dark-frame-bg pb-16 overflow-y-auto overflow-x-hidden">
            <div>
              <DataTable
                data={newUsers.length > 0 ? newUsers : users}
                columns={columns}
                title="Manageaccess"
              />
            </div>
          </div>
        </>
      ) : (
        <TtlSkeleton />
      )}
    </>
  );
};

export default AdminSission;
