/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './../../components/Buttons';
import rolemanagement from '../../dummyData/rolemanagement.json';
import Pagination from '../../components/Pagination';

const AdminSission = () => {
  const { t } = useTranslation();

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
  const removeDeleteModel = (e:any) => {
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
                  onClick={(e:void) => removeDeleteModel(e)}
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

      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen pb-16">
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg lg:px-5 pt-6 md:pb-6 mt-20 lg:mt-28 rounded-md w-full lg:w-[80%] lg:ml-60">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="text-gray-800 dark:text-white font-semibold mb-3 px-2">
                  {t('Manageaccess')}
                </h2>
                <div className="flex flex-cols items-center w-full justify-around">
                  <div className="flex cursor-pointer ">
                    <div
                      className="px-2 py-3 underline text-primary hover:underline hover:text-primary"
                      onClick={handleAll}
                    >
                      {t('All')}
                    </div>
                    <div
                      className="px-2 py-3 hover:underline hover:text-primary dark:text-white"
                      onClick={handleAdmin}
                    >
                      {t('Admins')}
                    </div>
                    <div
                      className="px-2 py-3 hover:underline hover:text-primary dark:text-white"
                      onClick={handleCoord}
                    >
                      {t('Coordinator')}
                    </div>
                    <div
                      className="px-2 py-3 hover:underline hover:text-primary dark:text-white"
                      onClick={handletrainee}
                    >
                      {t('Trainees')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-8 px-3">
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  value={findFilter}
                  className="bg-gray-50 dark:bg-dark-tertiary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-44 md:w-80 pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Search by Name or Status"
                  onChange={(e) => setFindFilter(e.target.value)}
                />
              </div>
              <Button variant="primary" size="lg" style="px-2">
                {' '}
                {t('AddMember')}{' '}
              </Button>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="py-6 px-5 md:px-12 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('name')}
                        </th>
                        <th className="py-[26px] px-5 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Status')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Role')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Action')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item: any, index: any) => {
                        let rowTheme =
                          index % 2 !== 0
                            ? 'bg-light-bg dark:bg-dark-tertiary'
                            : 'bg-white dark:bg-dark-bg';

                        let Data;
                        if (
                          findFilter.toLowerCase() == item.name.toLowerCase() ||
                          findFilter.length == 0 ||
                          findFilter.toLowerCase() == item.status.toLowerCase()
                        ) {
                          Data = item;
                          item = Data;
                        } else {
                          return;
                        }

                        return (
                          <tr className={`${rowTheme}`} key={index}>
                            <td className="border-b border-gray-200 py-2">
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
                                  <h3 className="dark:text-white sm:text-xs">
                                    {item.name}
                                  </h3>
                                  <p className="text-sm sm:text-xs text-gray-400 dark:text-white">
                                    {item.email}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-5 border-b border-gray-200  text-sm sm:text-xs">
                              <p className="text-green-500 whitespace-no-wrap">
                                {item.status}
                              </p>
                            </td>
                            <td className="px-5 py-3 border-b border-gray-200  text-sm">
                              <div className="whitespace-no-wrap flex justify-left">
                                <div className="xl:w-24">{item.role}</div>
                              </div>
                            </td>
                            <td className="px-5 py-3 border-b border-gray-200  text-[9px] md:text-sm">
                              <p
                                className="text-red-500 whitespace-no-wrap cursor-pointer"
                                onClick={(e:any) => removeDeleteModel(e)}
                              >
                                {t('Remove')}
                              </p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 justify-center items-center text-center">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default AdminSission;
