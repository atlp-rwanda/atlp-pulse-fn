/* eslint-disable */
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import developers from '../dummyData/developers3.json';
import Button from './../components/Buttons';
import useDocumentTitle from '../hook/useDocumentTitle';

const TraineeRatingDashboard = () => {
  useDocumentTitle("Ratings")
  const { t } = useTranslation();
  const [showCohorts, setShowCohorts] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [rowId, setRowId] = useState('');
  const [updateTraineeModel, setUpdateTraineeModel] = useState(false);
  const [deleteTraineeModel, setDeleteTraineeModel] = useState(false);

  const handleShowCohorts = () => {
    setShowCohorts(!showCohorts);
  };

  const handleShowPhases = () => {
    setShowPhases(!showPhases);
  };

  const handleCloseDropdown = () => {
    if (showCohorts || showPhases) {
      setShowCohorts(false);
      setShowPhases(false);
    }
  };

  const handleShowActions = (index: any) => {
    setRowId(index);
    setShowActions(!showActions);
  };

  const removeModel = () => {
    let newState = !updateTraineeModel;
    setUpdateTraineeModel(newState);
  };

  const removeDeleteModel = () => {
    let newState = !deleteTraineeModel;
    setDeleteTraineeModel(newState);
  };
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      {/* =========================== Start::  updateTraineeModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          updateTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Update Trainee')}
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
                    className="border border-primary  bg-dark-tertiary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('name')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="email"
                    name="email"
                    className="bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('email')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="cohort"
                    className="bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('cohort')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="program"
                    className=" bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('program')}
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <button
                  data-testid="removeModel"
                  className="py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white"
                  onClick={(e) => removeModel()}
                >
                  {t('cancel')}
                </button>
                <button className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  updateTraineeModel =============================== */}

      {/* =========================== Start::  deleteTraineeModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Delete Trainee')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white m-4">
                  {t('Are you sure you want to delete this person')} ?
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <button
                  data-testid="removeDeleteModel"
                  className="py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white"
                  onClick={(e) => removeDeleteModel()}
                >
                  {t('cancel')}
                </button>
                <button className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('supprimer')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  deleteTraineeModel =============================== */}

      <div
        className="flex flex-col h-screen bg-light-bg dark:bg-dark-frame-bg"
        onClick={handleCloseDropdown}
      >
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg max-h-full overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col relative items-left px-10 lg:px-60 pt-24 pb-8">
                  <div className="space-x-8 flex flex-row ">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleShowCohorts}
                      style="font-semibold flex flex-row"
                    >
                      {' '}
                      <div>{t('cohort')}</div>{' '}
                      <div className="mt-1">
                        <Icon
                          icon="ic:baseline-arrow-drop-down"
                          color="#f9f9fb"
                        />
                      </div>{' '}
                    </Button>
                    {/* <button
                      className="bg-primary px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex flex-row"
                      onClick={handleShowCohorts}
                    >
                      <div>{t('cohort')}</div>{' '}
                      <div>
                        <Icon
                          icon="ic:baseline-arrow-drop-down"
                          color="#f9f9fb"
                        />
                      </div>
                    </button> */}
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleShowPhases}
                      style="font-semibold flex flex-row"
                    >
                      {' '}
                      <div>{t('phases')}</div>{' '}
                      <div className="mt-1">
                        <Icon
                          icon="ic:baseline-arrow-drop-down"
                          color="#f9f9fb"
                        />
                      </div>{' '}
                    </Button>
                    {/* <button
                      className="bg-primary px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer flex flex-row"
                      onClick={handleShowPhases}
                    >
                      <div>{t('phases')}</div>{' '}
                      <div>
                        <Icon
                          icon="ic:baseline-arrow-drop-down"
                          color="#f9f9fb"
                        />
                      </div>
                    </button> */}
                  </div>
                  {showCohorts ? (
                    <div className="bg-primary h-40 w-32 mt-10 absolute rounded flex justify-center items-center">
                      <div className="text-white">
                        <ul>
                          <li>
                            <div>{t('cohort')} 5</div>
                          </li>
                          <li>
                            <div>{t('cohort')} 6</div>
                          </li>
                          <li>
                            <div>{t('cohort')} 7</div>
                          </li>
                          <li>
                            <div>{t('cohort')} 8</div>
                          </li>
                          <li>
                            <div>{t('cohort')} 9</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  {showPhases ? (
                    <div className="bg-primary h-40 w-32 mt-10 ml-40 absolute rounded flex justify-center items-center">
                      <div className="text-white">
                        <ul>
                          <li>
                            <div>{t('phase')} 1</div>
                          </li>
                          <li>
                            <div>{t('phase')} 2</div>
                          </li>
                          <li>
                            <div>{t('phase')} 3</div>
                          </li>
                          <li>
                            <div>{t('phase')} 4</div>
                          </li>
                          <li>
                            <div>{t('phase')} 5</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <div className="px-3 md:px-8">
                  <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-52 mb-10">
                    <div className=" flex items-center justify-between pb-6">
                      <div>
                        <h2 className="text-gray-800 dark:text-white font-semibold text-xl">
                          {t('Performance score')}
                        </h2>
                        {/* <span className="text-xs text-gray-600">Current cohort</span> */}
                      </div>
                    </div>
                    <div>
                      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                          <table className="min-w-full leading-normal">
                            <thead>
                              <tr>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('name')}
                                </th>
                                <th className="px-5  border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Sprint')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Quantity')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Quality')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Professional skills')}
                                </th>
                                {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Actions')}
                                </th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {developers.map((developer: any, index: any) => {
                                let rowTheme =
                                  index % 2 !== 0
                                    ? 'bg-light-bg dark:bg-dark-tertiary'
                                    : 'bg-white dark:bg-dark-bg';

                                return (
                                  <tr className={`${rowTheme}`}>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <div className="flex items-center">
                                        <div className="ml-3">
                                          <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                            {developer.name}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.sprint}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.quantity}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.quality}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.professionalSkills}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraineeRatingDashboard;
