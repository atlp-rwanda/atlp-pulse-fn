/* eslint-disable */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import developers from '../dummyData/developers.json';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from './../components/Buttons';

const UpdatedRatingDashboard = () => {
  useDocumentTitle('Updated Ratings');
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
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const data = developers;
  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Sprint', accessor: 'sprint' },
    { Header: 'Quantity', accessor: 'quantity' },
    { Header: 'Quality', accessor: 'quality' },
    { Header: 'Professional skills', accessor: 'professionalSkills' },
    {
      Header: 'Actions',
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex flex-row">
          <div
            className="cursor-pointer"
            onClick={() => {
              handleShowActions(row.index.toString());
            }}
          >
            <Icon icon="entypo:dots-three-vertical" color="#148fb6" />
          </div>
          {rowId == row.index.toString() && showActions ? (
            <div className="absolute bg-white z-20 dark:bg-dark-bg text-gray-500 dark:text-white ml-4 flex justify-center items-center border rounded dark:border-white">
              <div className=" p-3">
                <ul>
                  <li
                    className="hover:text-primary"
                    onClick={() => removeRejectModel()}
                  >
                    {t('Reject')}
                  </li>
                  <li
                    className="hover:text-primary"
                    onClick={() => removeApproveModel()}
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
      ),
    },
  ];

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
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="px-3 md:px-8 mt-20">
                  <DataTable
                    data={data}
                    columns={columns}
                    title="Updated ratings"
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

export default UpdatedRatingDashboard;
