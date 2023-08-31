/* eslint-disable */
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../components/DataTable';
import Sidebar from '../../components/Sidebar';
import SessionData from '../../dummyData/session.json';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from './../../components/Buttons';

const AdminSission = () => {
  useDocumentTitle('Sessions');
  const { t } = useTranslation();

  const [deleteSessionModel, setDeleteSessionModel] = useState(false);
  const [updateTraineeModel, setUpdateTraineeModel] = useState(false);
  const [addSessionModel, setAddSessionModel] = useState(false);

  const removeModel = () => {
    let newState = !addSessionModel;
    setAddSessionModel(newState);
  };
  const removeDeleteModel = () => {
    let newState = !deleteSessionModel;
    setDeleteSessionModel(newState);
  };


  const data = SessionData;
  const columns = [
    { Header: 'Session', accessor: 'session' },
    { Header: 'Description', accessor: 'desc' },
    { Header: 'Platform', accessor: 'place' },
    { Header: 'Duration', accessor: 'duration' },
    { Header: 'Organizer', accessor: 'organizer' },
    {
      Header: 'Action',
      accessor: '',
      Cell: () => <Icon icon="entypo:dots-three-vertical" color="#9e85f5" />,
    },
  ];

  return (
    <>
      {/* =========================== Start:: add Session Model =============================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
          addSessionModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 text-center w-11/12 uppercase">
              {t('AddSession')}
            </h3>
            <hr className=" bg-primary border-gray-400 my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary rounded outline-none px-5 font-sans dark:bg-dark-frame-bg dark:text-white text-xs py-2 w-full"
                    placeholder={t('SessionName')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" border border-primary py-2 rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs w-full"
                    placeholder={t('Description')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className="border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Platform')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="time"
                    name="name"
                    className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Duration')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="name"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('Organizer')}
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
      {/* =========================== End::  Add Session Model =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteSessionModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
              {t('DeleteSession')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">
                  {t('reallydeleteSession')}
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

      {/* =========================== Start::  update Session Model =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          updateTraineeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
              {t('UpdateSession')}
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
                    defaultValue={t('demo')}
                    className="border border-primary rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs py-2 w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="desc"
                    defaultValue={t('Jointime')}
                    className=" border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    defaultValue={t('Zoom')}
                    name="place"
                    className="border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full"
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="duration"
                    defaultValue={t('11am-12am')}
                    className="border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full"
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="organizer"
                    defaultValue={'John deo'}
                    className="border border-primary py-2 rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs w-full"
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
      {/* =========================== End::  update Session Model =============================== */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  ">
                <div className="flex items-left pb-8">
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      data-testid="registerModel"
                      style="m-0"
                      onClick={removeModel}
                    >
                      {' '}
                      {t('register')} +{' '}
                    </Button>
                  </div>
                </div>
                <div className="">
                  <DataTable
                    data={data}
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

export default AdminSission;
