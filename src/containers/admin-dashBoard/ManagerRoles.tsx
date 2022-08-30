/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Pagination from '../../components/Pagination';
import rolemanagement from '../../dummyData/rolemanagement.json';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from './../../components/Buttons';

const AdminSission = () => {
  const { t } = useTranslation();
  useDocumentTitle('Roles & Access');
  const [addMemberModel, setAddMemberModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  const [tabName, setTabName] = useState('all');
  const [data, setData] = useState(rolemanagement);

  const [findFilter, setFindFilter] = useState('');

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
      setData(rolemanagement);
    } else {
      setData(rolemanagement.filter((item: any) => item.role === tabName));
    }
  }, [tabName]);

  useEffect(() => {
    const filtered = rolemanagement.filter(
      (data: any) =>
        data.value.toLowerCase().includes(findFilter.toLowerCase()) ||
        data.email.toLowerCase().includes(findFilter.toLowerCase()) ||
        data.name.toLowerCase().includes(findFilter.toLowerCase()) ||
        data.role.toLowerCase().includes(findFilter.toLowerCase()) ||
        data.status.toLowerCase().includes(findFilter.toLowerCase()),
    );
    setData(filtered);
  }, [findFilter]);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = Pagination({
    contentPerPage: 3,
    count: rolemanagement.length,
  });
  const columns = [
    {
      Header: 'Name',
      accessor: 'name',
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
            <h3 className="dark:text-white sm:text-xs">{row.original.name}</h3>
            <p className="text-sm sm:text-xs text-gray-400 dark:text-white">
              {row.original.email}
            </p>
          </div>
        </div>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ row }: any) => (
        <p className="text-green-500 whitespace-no-wrap">
          {row.original.status}
        </p>
      ),
    },
    { Header: 'Role', accessor: 'role' },
    {
      Header: 'Action',
      accessor: '',
      Cell: () => <span className="text-red-500">Remove</span>,
    },
  ];

  return (
    <>
      {/* =========================== Start::  CreateCohortModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          addMemberModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Add Trainee')}
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
                    placeholder={t('name')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="email"
                    name="email"
                    className="dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('email')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="cohort"
                    className="dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('cohort')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="program"
                    className="dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('program')}
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
              {t('Removerole')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('suredelete')}
                </h2>
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
                  variant="danger"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                >
                  {' '}
                  {t('Delete')}{' '}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  delete Session Model =============================== */}

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen">
        <div className="flex items-left px-7 lg:px-60 pt-20 pb-8">
          <div className="space-x-8 lg:ml-10">
            <Button
              variant="primary"
              size="lg"
              onClick={removeModel}
              data-testid="removeModel"
            >
              {' '}
              {t('Member')} +{' '}
            </Button>
          </div>
        </div>
        <div className="px-3 md:px-8">
          <DataTable
            data={rolemanagement}
            columns={columns}
            title="Manageaccess"
          />
        </div>
      </div>
    </>
  );
};

export default AdminSission;
