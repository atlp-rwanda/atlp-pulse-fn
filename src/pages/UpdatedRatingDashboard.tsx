/* eslint-disable */
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import developers from '../dummyData/developers.json';
import Button from './../components/Buttons';

const UpdatedRatingDashboard = () => {
  const { t } = useTranslation();
  const [rowId, setRowId] = useState('');
  const [showActions, setShowActions] = useState(false);
  const [approveModel, setApproveModel] = useState(false);
  const [rejectModel, setRejectModel] = useState(false);

  const handleShowActions = (index: any) => {
    setRowId(index);
    setShowActions(!showActions);
  };

  const removeApproveModel = () => {
    let newState = !approveModel;
    setApproveModel(newState);
  };

  const removeRejectModel = () => {
    let newState = !rejectModel;
    setRejectModel(newState);
  };

  return (
    <>
      {/* =========================== Start::  approveModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          approveModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Approve updated ratings')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white m-4">
                  {t('Are you sure you want to approve this updated ratings')} ?
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeApproveModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeApproveModel()}
                >
                  {' '}
                  {t('Cancel')}{' '}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                >
                  {t('Approve')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  approveModel =============================== */}

      {/* =========================== Start::  rejectModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          rejectModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Reject Updated ratings')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white m-4">
                  {t('Are you sure you want to reject this updated ratings')} ?
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeRejectModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeRejectModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                >
                  {t('Reject')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  rejectModel =============================== */}

      <div className="flex flex-col h-screen bg-light-bg">
        <div className="flex flex-row">
          <Sidebar style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg max-h-full overflow-y-auto overflow-x-hidden">
                <div className="px-3 md:px-8 mt-20">
                  <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10">
                    <div className=" flex items-center justify-between pb-6">
                      <div>
                        <h2 className="text-gray-800 dark:text-white font-semibold text-xl">
                          {t('Updated Ratings')}
                        </h2>
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
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('sprint')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Quantity')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Quality')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
                                  {t('Professional skills')}
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                  {t('Actions')}
                                </th>
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
                                        {`${developer.quantity} -> 1`}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {`${developer.quality} -> 2`}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm text-center">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {`${developer.professionalSkills} -> 1`}
                                      </p>
                                    </td>
                                    <td className="relative px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <div className="flex flex-row">
                                        <div
                                          className="cursor-pointer"
                                          onClick={() => {
                                            handleShowActions(index.toString());
                                          }}
                                        >
                                          <Icon
                                            icon="entypo:dots-three-vertical"
                                            color="#148fb6"
                                          />
                                        </div>
                                        {rowId == index.toString() &&
                                        showActions ? (
                                          <div className="absolute bg-white z-20 dark:bg-dark-bg text-gray-500 dark:text-white ml-4 flex justify-center items-center border rounded dark:border-white">
                                            <div className=" p-3">
                                              <ul>
                                                <li
                                                  className="hover:text-primary"
                                                  onClick={() =>
                                                    removeRejectModel()
                                                  }
                                                >
                                                  {t('Reject')}
                                                </li>
                                                <li
                                                  className="hover:text-primary"
                                                  onClick={() =>
                                                    removeApproveModel()
                                                  }
                                                >
                                                  {t('Approve')}
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

export default UpdatedRatingDashboard;
