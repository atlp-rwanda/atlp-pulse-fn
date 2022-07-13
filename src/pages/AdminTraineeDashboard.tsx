/* eslint-disable */
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useTranslation } from 'react-i18next';
import developers from '../dummyData/developers2.json'


const AdminTraineeDashboard = () => {
  const { t } = useTranslation();
  const [registerTraineeModel, setRegisterTraineeModel] = useState(false);

  const removeModel = () => {
    let newState = !registerTraineeModel;
    setRegisterTraineeModel(newState);
  };


  
  return (
    <>
      {/* =========================== Start::  RegisterTraineeModel =============================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          registerTraineeModel === true ? 'block' : 'hidden'
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
                    className="border-gray-300 dark:bg-dark-tertiary border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder= {t('name')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="email"
                    name="email"
                    className="border-gray-300 dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('email')}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="cohort"
                    className="border-gray-300 dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('cohort')}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="program"
                    className="border-gray-300 dark:bg-dark-tertiary border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('program')}
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <button
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
      {/* =========================== End::  RegisterTraineeModel =============================== */}

      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Sidebar style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  max-h-full overflow-y-auto overflow-x-hidden">
                <div className="flex items-left px-10 lg:px-60 pt-24 pb-8">
                  <div className="space-x-8">
                    <button
                      className="bg-primary px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
                      onClick={removeModel}
                    >
                      {t('register')} +
                    </button>
                  </div>
                </div>
                <div className="px-3 md:px-8">
                  <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-52 mb-10">
                    <div className=" flex items-center justify-between pb-6">
                      <div>
                        <h2 className="text-gray-800 dark:text-white font-semibold text-xl">
                        {t('Develpers Info')}
                        </h2>
                        {/* <span className="text-xs text-gray-600">Current cohort</span> */}
                      </div>
                    </div>
                    <div>
                      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                          <table className="min-w-full leading-normal">
                            <thead className=" w-full">
                              <tr>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                {t('name')}
                                </th>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {t('email')}
                                </th>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {t('role')}
                                </th>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {t('cohort')}
                                </th>
                                <th className="p-6 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                {t('program')}
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
                                  <tr className={`${rowTheme} `} key={index}>
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
                                        {developer.email}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.role}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.cohort}
                                      </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                      <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                                        {developer.program}
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

export default AdminTraineeDashboard;
