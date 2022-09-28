/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import devs from '../dummyData/developers2.json';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from './../components/Buttons';
import { toast } from 'react-toastify';
import Select from 'react-select';
import {
  GET_TRAINEES_QUERY,
  GET_COORDINATOR_COHORTS_QUERY,
  ADD_MEMBER_TO_COHORT_MUTATION,
  REMOVE_MEMBER_FROM_COHORT_MUTATION,
  EDIT_MEMBER_MUTATION,
} from '../Mutations/manageStudentMutations';
import { useLazyQuery, useMutation } from '@apollo/client';

const organizationToken = localStorage.getItem('orgToken');
const AdminTraineeDashboard = () => {
  useDocumentTitle('Trainees');
  const { t }: any = useTranslation();

  const [registerTraineeModel, setRegisterTraineeModel] = useState(false);
  const [removeTraineeModel, setRemoveTraineeModel] = useState(false);
  const [editTraineeModel, setEditTraineeModel] = useState(false);
  const [traineeData, setTraineeData] = useState<any[]>([]);
  const [cohorts, setCohorts] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState<any[]>([]);
  const [selectedOption2, setSelectedOption2] = useState<any[]>([]);
  const [deleteEmail, setDeleteEmail] = useState('');
  const [deleteFromCohort, setDeleteFromCohort] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editCohort, setEditCohort] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const options: any = [];

  const removeTraineeMod = () => {
    let newState = !removeTraineeModel;
    setRemoveTraineeModel(newState);
  };

  const removeModel = () => {
    let newState = !registerTraineeModel;
    setRegisterTraineeModel(newState);
  };

  const removeEditModel = () => {
    let newState = !editTraineeModel;
    setEditTraineeModel(newState);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : '#148FB6',
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

      return { ...provided, opacity, transition };
    },
  };
  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Rating', accessor: 'rating' },
    { Header: 'Cohort', accessor: 'cohort' },
    { Header: 'Program', accessor: 'program' },
    {
      Header: 'Action',
      accessor: '',
      Cell: ({ row }: any) => (
        <div
          className={
            ' items-center' + (traineeData?.length > 0 ? ' flex' : ' hidden')
          }
        >
          <Icon
            icon="el:file-edit-alt"
            className="mr-2"
            width="25"
            height="25"
            cursor="pointer"
            color="#148fb6"
            onClick={() => {
              removeEditModel();
              setEditEmail(row.original.email);
              setEditCohort(row.original.cohort);
            }}
          />
          <Icon
            icon="mdi:close-circle-outline"
            width="30"
            height="30"
            cursor="pointer"
            color="#148fb6"
            onClick={() => {
              removeTraineeMod();
              setDeleteEmail(row.original.email);
              setDeleteFromCohort(row.original.cohort);
            }}
          />
        </div>
      ),
    },
  ];
  const data = devs;
  let datum: any = [];
  const [getTrainees] = useLazyQuery(GET_TRAINEES_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });
  const [getCohorts] = useLazyQuery(GET_COORDINATOR_COHORTS_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });

  if (traineeData && traineeData.length > 0) {
    traineeData?.map((data: any, index: number) => {
      datum[index] = {};
      datum[index].name = data.profile.name;
      datum[index].email = data.email;
      datum[index].rating = '2';
      datum[index].cohort = data.cohort.name;
      datum[index].program = data.cohort.phase;
    });
  }

  const [addMemberToCohort] = useMutation(ADD_MEMBER_TO_COHORT_MUTATION, {
    variables: {
      cohortName: Object.values(selectedOption)[0],
      email: email,
      orgToken: organizationToken,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.addMemberToCohort);
        removeModel();
      }, 2000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  const [editMemberMutation] = useMutation(EDIT_MEMBER_MUTATION, {
    variables: {
      removedFromcohortName: editCohort,
      addedTocohortName: Object.values(selectedOption2)[0],
      email: editEmail,
      orgToken: organizationToken,
    },
    onCompleted: (data) => {
      handleToggle();

      setTimeout(() => {
        setButtonLoading(false);
        toast.success("Edit trainee's cohort successfully done!");
        removeEditModel();
      }, 2000);
    },
    onError: (err) => {
      console.log(err);
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  const [removeMemberFromCohort] = useMutation(
    REMOVE_MEMBER_FROM_COHORT_MUTATION,
    {
      variables: {
        cohortName: deleteFromCohort,
        orgToken: organizationToken,
        email: deleteEmail,
      },
      onCompleted: (data) => {
        setTimeout(() => {
          setButtonLoading(false);
          toast.success(data.removeMemberFromCohort);
          removeTraineeMod();
        }, 3000);
      },
      onError: (err) => {
        setTimeout(() => {
          setButtonLoading(false);
          toast.error(err.message);
        }, 2000);
      },
    },
  );
  useEffect(() => {
    getTrainees({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setTraineeData(data.getCoordinatorTrainees);
      },
      onError: (error) => {
        console.log(error);
      },
    });

    getCohorts({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setCohorts(data.getCoordinatorCohorts);
        data.getAllCohorts.map((cohort: any, index: any) => {
          options[index] = {};
          options[index].value = cohort.name;
          options[index].label = cohort.name;
        });
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, [registerTraineeModel, removeTraineeModel, toggle]);

  if (cohorts.length > 0) {
    cohorts.map((cohort: any, index: any) => {
      options[index] = {};
      options[index].value = cohort.name;
      options[index].label = cohort.name;
    });
  }

  return (
    <>
      {/* =========================== Start::  EditTraineeModel =============================== */}

      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          editTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Edit Trainee')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t(
                    'Choose a different cohort for the trainee from the dropdown below.',
                  )}
                </h3>
              </div>

              <div className="text-white input my-3 h-9 ">
                <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                  <Select
                    placeholder={t('Select cohort')}
                    className="my-react-select-container"
                    classNamePrefix="my-react-select"
                    styles={customStyles}
                    defaultValue={selectedOption2}
                    onChange={(e: React.SetStateAction<any[]>) => {
                      setSelectedOption2(e);
                    }}
                    options={options.filter((option: any) => {
                      return option.value !== editCohort;
                    })}
                    isSearchable
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
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
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          removeTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Remove Trainee')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t(
                    'Are you sure you want to remove trainee from this cohort?',
                  )}
                </h3>
              </div>

              <div className="w-full flex justify-between">
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

      {/* =========================== Start::  RegisterTraineeModel =============================== */}

      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          registerTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Add Trainee')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className=" dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('email')}
                  />
                </div>
              </div>

              <div className="text-white input my-3 h-9 ">
                <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                  <Select
                    placeholder={t('Select cohort')}
                    className="my-react-select-container"
                    classNamePrefix="my-react-select"
                    styles={customStyles}
                    defaultValue={selectedOption}
                    onChange={(e: React.SetStateAction<any[]>) => {
                      setSelectedOption(e);
                    }}
                    options={options}
                    isSearchable
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
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
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    addMemberToCohort();
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
      {/* =========================== End::  RegisterTraineeModel =============================== */}

      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="flex items-left px-10 lg:px-60 pt-24 pb-8">
                  <div className="space-x-8 lg:ml-7">
                    <Button
                      variant="primary"
                      size="lg"
                      data-testid="registerModel"
                      onClick={removeModel}
                    >
                      {' '}
                      {t('register')} +{' '}
                    </Button>
                  </div>
                </div>
                <div className="px-3 md:px-8">
                  <DataTable
                    data={traineeData?.length > 0 ? datum : [{}]}
                    columns={columns}
                    title="Developers list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTraineeDashboard;
