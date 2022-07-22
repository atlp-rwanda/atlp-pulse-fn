/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegEnvelope, FaPen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

export default function OrgRegister() {
  const { t } = useTranslation();
  const [name, setName] = useState('');

  const handleChange = (value: string) => {
    setName(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm();
  const onSubmit = () => {
    reset();
  };

  return (
    <div className="w-full min-h-screen -mt-3 -mb-16 text-left bg-gray-100 md:flex md:flex-col md:items-center md:justify-center xl:-mt-14 xl:-mb-28 dark:bg-dark-frame-bg sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="bg-white sm:rounded-2xl py-8 md:py-0 md:shadow-2xl md:flex xl:w-3/4 md:w-[90%] md:max-w-4xl sm:w-full px-2 md:px-0 mx-20 md:mx-0 sm:shadow-none dark:shadow-2xl ">
        <div className="py-20 2xl:w-3/5 md:w-screen md:pl-14 lg:pl-32 xl:pl-24 md:py-8 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-tl-xl dark:rounded-bl-xl">
          <div className="">
            <h2 className="pb-6 ml-4 text-2xl font-bold md:ml-0 lg:text-3xl text-primary dark:text-dark-text-fill ">
              {t('Register your organization')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-left">
                <label className="font-normal tracking-wide text-gray-700 dark:text-white">
                  {t('Email')}
                </label>
                <div className="flex items-center w-full p-2 mb-6 border rounded border-primary dark:border-white md:w-3/4 dark:bg-dark-bg ">
                  <FaRegEnvelope className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email',
                      },
                    })}
                    className="flex-1 text-sm bg-white outline-none dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                </div>
                <div className="-mt-6">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <label className="mt-3 mb-2 font-normal tracking-wide text-gray-700 dark:text-white">
                  {t('Organization name')}
                </label>
                <div className="flex items-center w-full p-2 mb-6 border rounded border-primary dark:border-white md:w-3/4 dark:bg-dark-bg ">
                  <FaRegUser className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    onChange={(e) => handleChange(e.target.value)}
                    className="flex-1 text-sm bg-white outline-none dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="-mt-6">
                  {errors.name && (
                    <small className="text-red-600">
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <label className="mt-3 mb-2 font-normal tracking-wide text-gray-700 dark:text-white">
                  {t('Organization Description')}
                </label>
                <div className="flex items-center w-full p-2 mb-3 border rounded border-primary dark:border-white md:w-3/4 dark:bg-dark-bg ">
                  <FaPen className="mr-2 -mt-5 text-gray-400" />
                  <textarea
                    {...register('description', {
                      required: 'Description is required',
                    })}
                    className="flex-1 text-sm bg-white outline-none dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                </div>
                <div className="-mt-4">
                  {errors.description && (
                    <small className="text-red-600">
                      {errors.description.message}
                    </small>
                  )}
                </div>
                <div className="flex w-80  md:w-[75%] justify-between rounded mb-5 mt-5">
                  <label className="flex text-xs items-left dark:text-dark-text-fill ">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    />
                    {t('I agree to the')}
                    <span className="mx-1 text-primary">
                      {t('Terms & Conditions of')}{' '}
                    </span>{' '}
                    <span>DevPulse</span>
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
        <div className="text-white md:w-2/5 bg-primary rounded-tr-2xl rounded-br-2xl dark:rounded-br-2xl dark:rounded-tr-2xl md:py-4 md:px-2 sm:w-full sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill ">
          <h2 className="text-center 2xl:text-xl md:text-xl md:font-bold md:pb-6">
            {t('Get Started')}
          </h2>
          <h2 className="px-2 pb-4 font-sans text-lg font-bold text-center text-dark-text-fill">
            {t('Registration_page_heading')}
          </h2>
          <p className="max-w-[600px] text-left text-white pl-5 pb-6 text-md">
            {t('Registration_page_paragraph')}
            <Link
              to="get-started"
              className="ml-4 font-bold text-white border-b-1 pr-52"
            >
              {t('Explore')}
            </Link>
          </p>
          <h3 className="px-5 mb-2 text-lg font-bold text-left text-white">
            {t("Your organization's link")}
          </h3>
          <button
            type="button"
            className="px-3 py-2 mt-3 ml-20 font-bold bg-white rounded text-primary"
          >
            {name.replaceAll(' ', '-').toLowerCase()}
            <span>.pulse.org</span>
          </button>
        </div>
      </div>
    </div>
  );
}
