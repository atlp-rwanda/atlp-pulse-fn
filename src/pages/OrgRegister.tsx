import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaRegUser, FaRegEnvelope, FaPen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Button from '../components/Buttons';
import useDocumentTitle from '../hook/useDocumentTitle';

export default function OrgRegister() {
  useDocumentTitle('Register organization');
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
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full min-h-screen -mt-3 -mb-16 xl:-mt-14  xl:-mb-28 text-left dark:bg-dark-frame-bg bg-gray-100 sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="bg-white sm:rounded-2xl py-8 md:py-0 md:shadow-2xl md:flex xl:w-3/4 md:w-[90%] md:max-w-4xl sm:w-full px-2 md:px-0 mx-20 md:mx-0 sm:shadow-none dark:shadow-2xl ">
        <div className="2xl:w-3/5 md:w-screen md:pl-14 lg:pl-32 xl:pl-24 py-20 md:py-8 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-tl-xl dark:rounded-bl-xl">
          <div className="">
            <h2 className="text-2xl ml-4 md:ml-0 lg:text-3xl pb-6 font-bold text-primary dark:text-dark-text-fill ">
              {t('Register your organization')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-left" data-testid="dataid">
                <label className="tracking-wide text-gray-700 dark:text-white font-normal">
                  {t('Email')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email',
                      },
                    })}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                </div>
                <div className="-mt-6">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>
                <label className="tracking-wide mt-3 text-gray-700 dark:text-white font-normal mb-2">
                  {t('Organization name')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaRegUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    data-testid="input1"
                    {...register('name', { required: 'Name is required' })}
                    onChange={(e) => handleChange(e.target.value)}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="-mt-6">
                  {errors.name && (
                    <small className="text-red-600">
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <label className="tracking-wide text-gray-700 mt-3 dark:text-white font-normal mb-2">
                  {t('Organization Description')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-3 dark:bg-dark-bg ">
                  <FaPen className="text-gray-400 mr-2 -mt-5" />
                  <textarea
                    {...register('description', {
                      required: 'Description is required',
                    })}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
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
                  <label className="flex items-left text-xs dark:text-dark-text-fill ">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    />
                    {t('I agree to the')}
                    <span className="text-primary mx-1">
                      {t('Terms & Conditions of')}{' '}
                    </span>{' '}
                    <span>DevPulse</span>
                  </label>
                </div>
                <Button variant="primary" size="lg" style="w-1/4 mx-[20%]">
                  {' '}
                  {t('Register')}{' '}
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="md:w-2/5 bg-primary text-white rounded-tr-2xl rounded-br-2xl dark:rounded-br-2xl dark:rounded-tr-2xl md:py-4 md:px-2 sm:w-full sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill ">
          <h2 className="2xl:text-xl md:text-xl md:font-bold md:pb-6 text-center">
            {t('Get Started')}
          </h2>
          <h2 className="text-lg font-bold text-dark-text-fill text-center pb-4 px-2 font-sans">
            {t('Registration_page_heading')}
          </h2>
          <p className="max-w-[600px] text-left text-white pl-5 pb-6 text-md">
            {t('Registration_page_paragraph')}
            <Link
              to="get-started"
              className="border-b-1 font-bold text-white ml-4 pr-52"
            >
              {t('Explore')}
            </Link>
          </p>
          <h3 className="font-bold text-left text-white text-lg mb-2 px-5">
            {t("Your organization's link")}
          </h3>
          <button
            type="button"
            className="rounded bg-white text-primary ml-20 px-3 font-bold py-2 mt-3"
          >
            {name.replaceAll(' ', '-').toLowerCase()}
            <span>.pulse.org</span>
          </button>
        </div>
      </div>
    </div>
  );
}
