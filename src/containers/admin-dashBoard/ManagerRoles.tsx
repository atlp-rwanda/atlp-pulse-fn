/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Pagination from '../../components/Pagination';
import rolemanagement from '../../dummyData/rolemanagement.json';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from './../../components/Buttons';
import devs from '../../dummyData/rolemanagement.json';
import USER_QUERY from '../admin-dashBoard/UserMutation';
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

const AdminSission = () => {
  const { t } = useTranslation();
  const client = useApolloClient();
  useDocumentTitle('Roles & Access');
  const [addMemberModel, setAddMemberModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const [GetAllRoles, { loading }] = useLazyQuery(GET_ROLE_QUERY);
  const [developers, setDevelopers] = useState(devs);
  const [tabName, setTabName] = useState('all');
  const [dataDev, setDataDev] = useState(rolemanagement);

  const [showRoles, setShowRoles] = useState(false);
  const [roleName, setRoleName] = useState('');
  const [userId, setUserId] = useState();
  const [err, setErr] = useState();
  const [selectedRole, setSelectedRole] = useState('');
  const [subTitle, setSubTitle] = useState('Available roles');
  const [users, setUsers] = useState();
  const [createUserRole] = useMutation(CREATE_ROLE_MUTATION);
  const [updateUserRole] = useMutation(ASSIGN_ROLE_MUTATION);
  const [findFilter, setFindFilter] = useState('');
  const [allRoles, setallRoles] = useState<any>();
  let newUsers: any = [];

  const handleAll = () => {
    setTabName('all');
  };
  const handleAdmin = () => {
    setTabName('admin');
  };
  const handleCoord = () => {
    setTabName('coordinator');
  };
  const handletrainee = () => {
    setTabName('trainee');
  };

  const removeModel = () => {
    let newState = !addMemberModel;
    setAddMemberModel(newState);
  };
  const removeDeleteModel = (e: any) => {
    e.preventDefault();
    let newState = !deleteModel;
    setDeleteModel(newState);
  };
  useEffect(() => {
    if (tabName === 'all') {
      setDataDev(rolemanagement);
    } else {
      setDataDev(rolemanagement.filter((item: any) => item.role === tabName));
    }
  }, [tabName]);

  const removeAssignModel = (id: any) => {
    // e.preventDefault();
    setUserId(id);
    let newState = !deleteModel;
    setDeleteModel(newState);
  };

  const handleShowRole = () => {
    setShowRoles(!showRoles);
    if (showRoles) setSubTitle('Available Roles');
    else setSubTitle('Manage Roles');
  };

  // const handleCreateRole = async () => {
  //   // e.preventDefault();
  //   try {
  //     const { data }: any = await createUserRole({
  //       variables: { name: roleName },
  //     });
  //     let newState = !addMemberModel;
  //     setTimeout(() => {
  //       setAddMemberModel(newState);
  //     }, 1000);

  //   } catch (error) {}
  // };

  const [handleCreateRole] = useMutation(CREATE_ROLE_MUTATION, {
    variables: { name: roleName },
    onCompleted: (data) => {
      setToggle(!toggle);
      let newState = !addMemberModel;
      setTimeout(() => {
        setAddMemberModel(newState);
      }, 1000);
    },
    onError: (err) => {
      console.log('Error ', err);
    },
  });

  const handleSelectRole = (e: any, name: any) => {
    e.preventDefault();
    setSelectedRole(name);
  };

  const [toggle, setToggle] = useState(false);

  // const handleAssignRole = async () => {
  //   // e.preventDefault()
  //   try {
  //     const { data }: any = await updateUserRole({
  //       variables: { updateUserRoleId: userId, name: selectedRole },
  //     });
  //     console.log('data ', data.updateUserRole)
  //     console.log('users ', users)

  //   // setUsers(rolemanagement)
  //   setToggle(!toggle)
  //     console.log("Toggle ", toggle)

  //   await client.resetStore();
  //     let newState = !deleteModel;
  //     setTimeout(() => {
  //       setDeleteModel(newState);
  //     }, 1000);
  //   } catch (error) {}
  // };

  const [handleAssignRole2] = useMutation(ASSIGN_ROLE_MUTATION, {
    variables: { updateUserRoleId: userId, name: selectedRole },
    onCompleted: (data) => {
      console.log('Data from mutation ', data);
      setToggle(!toggle);
      let newState = !deleteModel;
      setTimeout(() => {
        setDeleteModel(newState);
      }, 1000);
    },
    onError: (err) => {
      console.log('Error ', err);
    },
  });

  const [fetchData2] = useLazyQuery(GET_ROLE_QUERY, {});

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const { data } = await GetAllRoles();
    //     console.log("Runned==")
    //     setUsers(data?.getAllUsers);
    //     console.log("Users ** ", users)

    //     setallRoles(data?.getAllRoles);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    fetchData2({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        console.log('data: ', data.getAllUsers);
        setUsers(data?.getAllUsers);
        data.getAllUsers.map((user: any, index: any) => {
          newUsers[index] = {};
          newUsers[index].role = user.role;
          newUsers[index].email = user.email;
          newUsers[index].id = user.id;
        });
        console.log('newUsers ', newUsers);
        setallRoles(data?.getAllRoles);
      },
      onError: (error) => {
        console.log(error, 'error');
      },
    });

    // fetchData();
  }, [handleAssignRole2, toggle]);

  const columns = [
    {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ row }: any) => (
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
      Header: 'Action',
      accessor: '',
      Cell: ({ row }: any) => (
        <p
          className="text-red-500 whitespace-no-wrap cursor-pointer"
          onClick={() => {
            removeAssignModel(row.original.id);
          }}
        >
          {t('Assign')}
        </p>
      ),
    },
  ];

  return (
    <>
      {users && allRoles ? (
        <>
          {/* =========================== Start::  CreateCohortModel =============================== */}
          <div
            className={`h-screen w-screen z-20 fixed bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center px-4 ${
              addMemberModel === true ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
                  {t('AddRole')}
                </h3>
                <hr className=" bg-primary border-b my-3 w-full" />
              </div>
              <div className="card-body">
                <form className=" py-3 px-8">
                  <div className="input my-3 h-9 ">
                    <div className="grouped-input flex items-center h-full w-full rounded-md">
                      <input
                        type="text"
                        name="name"
                        className="dark:bg-dark-tertiary border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                        placeholder={t('Role')}
                        value={roleName}
                        onChange={(e) => setRoleName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-between">
                    <Button
                      variant="info"
                      size="sm"
                      style="w-[30%] md:w-1/4 text-sm font-sans"
                      onClick={() => removeModel()}
                    >
                      {' '}
                      {t('Cancel')}{' '}
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      style="w-[30%] md:w-1/4 text-sm font-sans"
                      onClick={() => handleCreateRole()}
                    >
                      {' '}
                      {t('Save')}{' '}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* =========================== End::  CreateCohortModel =============================== */}

          {/* =========================== Start::  delete Session Model =============================== */}
          <div
            className={`min-h-screen w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm fixed flex items-center justify-center px-4 ${
              deleteModel === true ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
                  {/* {t('Removerole')} */}
                  {t('Select role')}
                </h3>
                <hr className=" bg-primary border-b my-3 w-full" />
              </div>
              <div className="card-body">
                <form className=" py-3 px-8">
                  <div>
                    <div className="flex justify-center">
                      <div className="flex flex-wrap">
                        {allRoles?.map((obj: any, index: any) => (
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
                  <div className="w-full flex justify-between">
                    <Button
                      variant="info"
                      size="sm"
                      style="w-[30%] md:w-1/4 text-sm font-sans"
                      data-testid="delete"
                      onClick={(e: void) => removeDeleteModel(e)}
                    >
                      {' '}
                      {t('Cancel')}{' '}
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
          <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen pb-16">
            <div className="flex items-left px-7 lg:px-60 pt-24 pb-8">
              <div className="space-x-8 lg:ml-10">
                <Button
                  onClick={() => removeModel()}
                  variant="primary"
                  size="lg"
                  style="px-2"
                >
                  {' '}
                  {t('AddRole')}{' '}
                </Button>
              </div>
            </div>
            <div className="px-3 md:px-8">
              <DataTable
                data={newUsers.length > 0 ? newUsers : users}
                columns={columns}
                title="Manageaccess"
              />
            </div>
          </div>
        </>
      ) : (
        <Square />
      )}
    </>
  );
};

export default AdminSission;
