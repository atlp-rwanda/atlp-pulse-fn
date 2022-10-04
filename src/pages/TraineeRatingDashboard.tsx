/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import developers from '../dummyData/developers3.json';
import useDocumentTitle from '../hook/useDocumentTitle';

const TraineeRatingDashboard = () => {
  useDocumentTitle('Ratings');
  const { t } = useTranslation();
  const [showCohorts, setShowCohorts] = useState(false);
  const [showPhases, setShowPhases] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [rowId, setRowId] = useState('');
  const [updateTraineeModel, setUpdateTraineeModel] = useState(false);
  const [deleteTraineeModel, setDeleteTraineeModel] = useState(false);

  const handleCloseDropdown = () => {
    if (showCohorts || showPhases) {
      setShowCohorts(false);
      setShowPhases(false);
    }
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

  const data = developers;
  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Sprint', accessor: 'sprint' },
    { Header: 'Quantity', accessor: 'quantity' },
    { Header: 'Quality', accessor: 'quality' },
    { Header: 'Professional skills', accessor: 'professionalSkills' },
  ];

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
        data-testid="close"
        onClick={handleCloseDropdown}
      >
        <div className="flex flex-col h-screen bg-light-bg">
          <div className="flex flex-row">
            <Sidebar toggle={handleClick} style="hidden lg:flex" />
            <div className="w-full">
              <div>
                <div className="flex flex-col h-screen bg-light-bg">
                  <div className="px-3 md:px-8 mt-20">
                    <DataTable
                      data={data}
                      columns={columns}
                      title="Performance score"
                    />
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
