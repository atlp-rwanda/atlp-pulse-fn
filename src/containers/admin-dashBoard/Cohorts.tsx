/* eslint-disable */
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Button from './../../components/Buttons';

const AdminCohort = () => {
  const { t } = useTranslation();

  const [createCohortModel, setCreateCohortModel] = useState(false);
  const [deleteCohortModel, setDeleteCohortModel] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const removeModel = () => {
    let newState = !createCohortModel;
    setCreateCohortModel(newState);
  };

  const handleShowActions = () => {
    setShowActions(!showActions);
  };

  const removeDeleteModel = () => {
    let newState = !deleteCohortModel;
    setDeleteCohortModel(newState);
  };
  
  return (
    <>
      {/* =========================== Start:: CreateCohortModel =============================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          createCohortModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
              {t('AddCohort')}
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
                    className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full"
                    placeholder={t('name')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Coordinator')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Phase')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('StartingDate')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="date"
                    name="name"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('ClosingDate')}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="remove"
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
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteCohortModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
              {t('DeleteCohort')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('reallyRemoveCohort')}
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="delete"
                  onClick={() => removeDeleteModel()}
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
        <div className="flex items-left px-7 lg:px-60 pt-24 pb-8">
          <div className="space-x-8 lg:ml-10">
            <Button
              variant="primary"
              size="lg"
              onClick={removeModel}
              data-testid="removeModel"
            >
              {' '}
              {t('Cohort')} +{' '}
            </Button>
          </div>
        </div>
        <div className="px-3 md:px-8">
          <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-full lg:w-[80%] lg:ml-64">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="text-gray-800 dark:text-white font-semibold">
                  {t('CohortList')}
                </h2>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('name')}
                        </th>
                        <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Coordinator')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Phase')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('StartingDate')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('ClosingDate')}
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                          {t('Action')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                Cohort 5
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            john doe
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Core Concept
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            1st Jan 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            11th Dec 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                          <div className="flex relative flex-row ">
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                handleShowActions();
                              }}
                            >
                              <FaEllipsisV />
                            </div>
                            {showActions ? (
                              <div className="absolute top-0 bg-white z-20 dark:bg-dark-bg text-gray-500 dark:text-white ml-4 flex justify-center items-center border rounded dark:border-white">
                                <div className=" px-3 cursor-pointer">
                                  <ul>
                                    <li className="hover:text-primary">
                                      {t('Edit')}
                                    </li>
                                    <li
                                      className="hover:text-primary"
                                      onClick={() => removeDeleteModel()}
                                    >
                                      {t('Delete')}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              ''
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                Cohort 6
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            john doe
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Core Concept
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            1st Jan 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            11th Dec 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-gray-100 dark:bg-dark-tertiary text-lg">
                          <FaEllipsisV />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                Cohort 7
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            john doe
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Core Concept
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            1st Jan 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            11th Dec 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                          <FaEllipsisV />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                Cohort 8
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            john doe
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Core Concept
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            1st Jan 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            11th Dec 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-gray-100 dark:bg-dark-tertiary text-lg">
                          <FaEllipsisV />
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                Cohort 9
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            john doe
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            Core Concept
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            1st Jan 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                            11th Dec 2022
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 text-gray-500 cursor-pointer bg-white dark:bg-dark-bg text-lg">
                          <FaEllipsisV />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCohort;
