/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegEnvelope, FaPen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export default function OrgRegister() {
  const { t } = useTranslation();
  const [name, setName] = useState("")

  const handleChange = (value: string) => {
    setName(value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  }: any= useForm();
  const onSubmit = () => {
    reset();
  }


  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full  min-h-screen  text-center py-2 -mb-[10%] -mt-[4%] dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="bg-white  sm:rounded-2xl md:shadow-2xl md:flex 2xl:w-2/3 md:w-[90%] mt-6 md:mt-24 md:mb-24 xl:mt-16 xl:mb-0 md:max-w-4xl sm:max-w-2xl sm:shadow-none dark:shadow-2xl ">
        <div className="2xl:w-3/5 md:w-screen 2xl:p-5 md:p-14 sm:w-full sm:p-2 dark:bg-dark-frame-bg dark:rounded-tl-xl dark:rounded-bl-xl">
          <div className="py-10 sm:py-2 ">
            <h2 className="text-2xl pb-6 font-bold text-primary dark:text-dark-text-fill ">
              {t('RegisterOrg')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center">
                <label className="tracking-wide text-gray-700 pr-64 md:pr-48 lg:pr-80 dark:text-white font-normal">
                  {t('email')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    {...register("email", { required: "Email is required",
                  pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email"
                  } })}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                </div>
                <div className='-mt-6 pr-[65%] md:pr-[45%] lg:pr-[55%]'>
                  {errors.email && (<small className='text-red-600'>{errors.email.message}</small>)}
                </div>
                <label className="tracking-wide pr-40 md:pr-28 lg:pr-60 mt-3 text-gray-700 dark:text-white font-normal mb-2">
                  {t('OrgName')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaRegUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className='-mt-6 pr-[65%] md:pr-[45%] lg:pr-[55%]'>
                  {errors.name && (<small className='text-red-600'>{errors.name.message}</small>)}
                </div>
                <label className="tracking-wide text-gray-700 pr-32 md:pr-20 lg:pr-48 mt-3 dark:text-white font-normal mb-2">
                  {t('OrgDesc')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-3 dark:bg-dark-bg ">
                  <FaPen className="text-gray-400 mr-2 -mt-5" />
                  <textarea
                    {...register("description", { required: "Description is required" })}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                  >
                  </textarea>
                </div>
                <div className='-mt-4 pr-[60%] md:pr-[38%] lg:pr-[50%]'>
                  {errors.description && (<small className='text-red-600'>{errors.description.message}</small>)}
                </div>
                <div className="flex w-80  md:w-[75%] justify-between rounded mb-5 mt-5">
                  <label className="flex items-left text-xs dark:text-dark-text-fill ">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    />
                    {t('agree')} <span className='text-primary'>{('Terms')}</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-1/4 text-center mx-[20%] py-2 rounded-lg bg-primary text-white hover:bg-green-dark focus:outline-none"
                >
                  {t('Register')}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-2/5 bg-primary text-white lg:rounded-tr-2xl lg:rounded-br-2xl dark:rounded-br-2xl dark:rounded-tr-2xl md:py-14 md:px-2 sm:w-full dark:rounded-none sm:rounded-none sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill ">
          <h2 className="2xl:text-xl md:text-xl md:font-bold md:pb-6 ">
            {t('started')}
          </h2>
          <h2 className='text-lg font-bold text-dark-text-fill text-center pb-4 px-2 font-sans'>{t('WelcomePage')}</h2>
          <p className='max-w-[600px] text-left text-white pl-5 pb-6 text-md'>
            {t('organizationDesc')}
          <Link to="get-started" className='border-b-1 font-bold text-white ml-4 pr-52'>{t('Explore')}</Link>
          </p>
          <h3 className='font-bold text-left text-white text-lg mb-2 px-5'>{t('organizationLink')}</h3>
          <button className='rounded bg-white text-primary  px-3 font-bold py-2 mt-3'>
            {name.replaceAll(" ", "-").toLowerCase()}
            <span>.pulse.org</span>
          </button>
        </div>
      </div>
    </div>
  );
}
