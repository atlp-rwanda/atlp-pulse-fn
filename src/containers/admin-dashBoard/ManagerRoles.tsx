/* eslint-disable */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const AdminSission = () => {
    const { t } = useTranslation();

    const [addMemberModel, setAddMemberModel] = useState(false);
    const [deleteModel, setDeleteModel] = useState(false);

    const removeModel = () => {
        let newState = !addMemberModel;
        setAddMemberModel(newState);
    }
    const removeDeleteModel = () => {
        let newState = !deleteModel;
        setDeleteModel(newState);
    }
    return (

        <>
            {/* =========================== Start:: add Session Model =============================== */}
            <div className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${addMemberModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12 uppercase'>
                            {t('AddMember')}
                        </h3>
                        <hr className=' bg-primary border-b my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form className=" py-3 px-8" >

                            <div className="input my-3 h-9 ">
                                <div className="grouped-input flex items-center h-full w-full rounded-md">
                                    <input
                                        type="text"
                                        name="name"
                                        className="border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                                        placeholder={t("Name")}
                                    />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input flex items-center h-full w-full rounded-md">
                                    <input
                                        type="text"
                                        name="name"
                                        className=" border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                                        placeholder="Status"
                                    />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input flex items-center h-full w-full rounded-md">
                                    <input
                                        type="text"
                                        name="name"
                                        className="border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                                        placeholder="Role"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <button className='py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white' data-testid="remove" onClick={(e) => removeModel()}>{t('Cancel')}</button>
                                <button id='Add' className='text-white py-2 w-[40%] md:w-1/3 bg-primary rounded'>{t('Add')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* =========================== End::  CreateCohortModel =============================== */}

            {/* =========================== Start::  delete Session Model =============================== */}
            <div className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${deleteModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-gray-700 dark:text-white text-center w-11/12'>
                            {t('Removerole')}
                        </h3>
                        <hr className=' bg-primary border-b my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form className=" py-3 px-8" >
                            <div>
                                <h2 className='text-base dark:text-white m-4'>{t('suredelete')}</h2>
                            </div>
                            <div className="w-full flex justify-between">
                                <button className='py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white' data-testid="delete" onClick={(e) => removeDeleteModel()}>{t('Cancel')}</button>
                                <button className='text-white py-2 w-[40%] md:w-1/3 bg-red-700 rounded'>{t('Delete')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* =========================== End::  delete Session Model =============================== */}

            <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen lg:px-8">
                <div className="px-3 md:px-8">
                    <div className="bg-white dark:bg-dark-bg shadow-lg lg:px-5 pt-6 md:pb-6 mt-20 lg:mt-28 rounded-md w-full lg:w-[80%] lg:ml-52 ">
                        <div className=" flex items-center justify-between pb-6">
                            <div>
                                <h2 className="text-gray-800 dark:text-white font-semibold mb-3 px-2">{t('Manageaccess')}</h2>
                                <div className='flex flex-cols items-center w-full justify-around'>
                                    <div className='flex cursor-pointer '>
                                        <div className='px-2 py-3 underline text-primary hover:underline hover:text-primary'>{t('All')}</div>
                                        <div className='px-2 py-3 hover:underline hover:text-primary dark:text-white'>{t('Admins')}</div>
                                        <div className='px-2 py-3 hover:underline hover:text-primary dark:text-white'>{t('Coordinator')}</div>
                                        <div className='px-2 py-3 hover:underline hover:text-primary dark:text-white'>{t('Trainees')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center space-x-8 px-3'>
                            <div className="relative mt-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-white" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" id="table-search" className="bg-gray-50 dark:bg-dark-tertiary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-44 md:w-80 pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Search for items" />
                            </div>
                            <button className='cursor-pointer bg-primary text-white rounded p-2'>{t('AddMember')}</button>
                        </div>
                        <div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="py-6 px-5 md:px-12 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                                    {t("name")}
                                                </th>
                                                <th
                                                    className="py-[26px] px-5 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                                    {t("Status")}
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                                    {t('Role')}
                                                </th>
                                                <th
                                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                                    {t('Action')}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-b border-gray-200 bg-white dark:bg-dark-bg">
                                                    <div className="flex items-left">
                                                        <div className='md:grid md:grid-cols-2'>
                                                            <p></p>
                                                            <div className="flex items-left">
                                                                <span className="hidden md:-ml-20 ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
                                                                    <svg className="h-full w-full text-gray-300 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                    </svg>
                                                                </span>
                                                                <div className='flex flex-col  leading-4 px-3 py-2'>
                                                                    <h3 className='dark:text-white'>John deo</h3>
                                                                    <p className='text-sm text-gray-400 dark:text-white'>john@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                                    <p className="text-green-500 whitespace-no-wrap">Active</p>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                                    <div className="whitespace-no-wrap flex justify-left">
                                                        <div className="xl:w-24">
                                                            <select className="form-select cursor-pointer appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-dark-bg bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                                                                <option selected>{t('Role')}</option>
                                                                <option value="1">{t('Admins')}</option>
                                                                <option value="2">{t('Coordinator')}</option>
                                                                <option value="3">{t('Trainees')}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-[9px] md:text-sm">
                                                    <p className="text-red-500 whitespace-no-wrap cursor-pointer" onClick={() => removeDeleteModel()}>
                                                    {t('Remove')}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary">
                                                    <div className="flex items-left">
                                                        <div className='md:grid md:grid-cols-2'>
                                                            <p></p>
                                                            <div className="flex items-left">
                                                                <span className="hidden md:-ml-20 ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
                                                                    <svg className="h-full w-full text-gray-300 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                    </svg>
                                                                </span>
                                                                <div className='flex flex-col leading-4 px-3 py-2'>
                                                                    <h3 className='dark:text-white'>John deo</h3>
                                                                    <p className='text-sm text-gray-400 dark:text-white'>john@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                                                    <p className="text-red-500 whitespace-no-wrap">Inactive</p>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                                                    <div className="whitespace-no-wrap flex justify-left">
                                                        <div className="xl:w-24">
                                                            <select className="form-select cursor-pointer appearance-none block w-full px-3 py-1 text-base font-normal text-gray-500 dark:text-white bg-white dark:bg-dark-tertiary bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                                                                <option selected>{t('Role')}</option>
                                                                <option value="1">{t('Admins')}</option>
                                                                <option value="2">{t('Coordinator')}</option>
                                                                <option value="3">{t('Trainees')}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-[9px] md:text-sm">
                                                    <p className="text-red-500 whitespace-no-wrap cursor-pointer" onClick={() => removeDeleteModel()}>
                                                    {t('Remove')}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 bg-white dark:bg-dark-bg">
                                                    <div className="flex items-left">
                                                        <div className='md:grid md:grid-cols-2'>
                                                            <p></p>
                                                            <div className="flex items-left">
                                                                <span className="hidden md:-ml-20 ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-bg">
                                                                    <svg className="h-full w-full text-gray-300 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                    </svg>
                                                                </span>
                                                                <div className='flex-col leading-4 px-3 py-2'>
                                                                    <h3 className='dark:text-white'>John deo</h3>
                                                                    <p className='text-sm text-gray-400 dark:text-white'>john@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-5 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                                    <p className="text-green-500 whitespace-no-wrap">Active</p>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-sm">
                                                    <div className="whitespace-no-wrap flex justify-left">
                                                        <div className="xl:w-24">
                                                            <select className="form-select cursor-pointer appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-dark-bg bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                                                                <option selected>{t('Role')}</option>
                                                                <option value="1">{t('Admins')}</option>
                                                                <option value="2">{t('Coordinator')}</option>
                                                                <option value="3">{t('Trainees')}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-white dark:bg-dark-bg text-[9px] md:text-sm">
                                                    <p className="text-red-500 whitespace-no-wrap cursor-pointer" onClick={() => removeDeleteModel()}>
                                                    {t('Remove')}
                                                    </p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary">
                                                    <div className="flex items-left">
                                                        <div className='md:grid md:grid-cols-2'>
                                                            <p></p>
                                                            <div className="flex items-left">
                                                                <span className="hidden md:-ml-20 ml-2 md:inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-tertiary">
                                                                    <svg className="h-full w-full text-gray-300 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                    </svg>
                                                                </span>
                                                                <div className='flex flex-col leading-4 px-3 py-2'>
                                                                    <h3 className='dark:text-white'>John deo</h3>
                                                                    <p className='text-sm text-gray-400 dark:text-white'>john@gmail.com</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-5 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                                                    <p className="text-green-500 whitespace-no-wrap">Inactive</p>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-sm">
                                                    <div className="whitespace-no-wrap flex justify-left">
                                                        <div className="xl:w-24">
                                                            <select className="form-select cursor-pointer appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-dark-tertiary bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none">
                                                                <option selected>{t('Role')}</option>
                                                                <option value="1">{t('Admins')}</option>
                                                                <option value="2">{t('Coordinator')}</option>
                                                                <option value="3">{t('Trainees')}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-3 border-b border-gray-200 bg-gray-100 dark:bg-dark-tertiary text-[9px] md:text-sm">
                                                    <p className="text-red-500 whitespace-no-wrap cursor-pointer" onClick={() => removeDeleteModel()}>
                                                        {t('Remove')}
                                                    </p>
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
    )
}

export default AdminSission