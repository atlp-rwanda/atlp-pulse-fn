import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser, FaRegEnvelope, FaPen } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import Button from '../components/Buttons';
import useDocumentTitle from '../hook/useDocumentTitle';
import REGISTER_ORGANIZATION_REQUEST from './RegisterOrgMutation';
import functionTree from '../assets/Functionality_Tree.svg';
import pulseStars from '../assets/Property 1=Logo_flie (1).svg';
import OrgRegisterSuccessModel from './OrgRegisterSuccessModel';

export default function OrgRegister() {
  useDocumentTitle('Register organization');
  const { t } = useTranslation();
  const [addOrganization, { loading }] = useMutation(
    REGISTER_ORGANIZATION_REQUEST,
  );
  const [name, setName] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();

  const [orgRegisterSuccessModel, setOrgRegisterSuccessModel] = useState(false);
  const [orgName, setOrgName] = useState('');
  const removeModel = () => {
    /* istanbul ignore next */
    setOrgRegisterSuccessModel(false);
  };
  /* istanbul ignore next */
  const onSubmit = async (organizationInput: any) => {
    setOrgName(name);
    /* istanbul ignore next */
    try {
      await addOrganization({
        variables: { organizationInput },
        onError(error) {
          toast.error(error.message);
        },
        onCompleted(data) {
          // toast.success(data.requestOrganization);
          setOrgRegisterSuccessModel(true);
          setName('');
          reset();
        },
      });
    } catch (error: any) {
      setError('name', {
        type: 'custom',
        message: t('Organisation Name already exist'),
      });
    }
  };
  return (
    <>
      <OrgRegisterSuccessModel
        removeModel={removeModel}
        OrgRegisterSuccessModel={orgRegisterSuccessModel}
        orgName={orgName}
      />
      <div className="grow  dark:bg-dark-frame-bg bg-indigo-50 flex flex-row font-sans">
        <div className="hidden lg:flex w-[50%] h-full  flex-col justify-center items-center mt-10 ">
          <div className=" flex flex-col justify-center items-center ">
            <div className="relative flex flex-row justify-center">
              <img
                src={pulseStars}
                alt="pulses"
                className="absolute inset-0 w-[41rem] h-[12rem] dark:hidden"
              />
              <p className="relative w-[70%] text-gray-700 text-[1.9em] p-5 text-center italic font-bold  dark:text-dark-text-fill">
                {t('Boost your organization')}
              </p>
            </div>

            <div className="w-[30vw] h-[42vh]  flex flex-row ">
              <img
                src={functionTree}
                alt="functions"
                className="w-sm dark:brightness-150"
              />
            </div>
          </div>
        </div>

        <div className=" w-full  lg:w-[50%] lg:p-5 flex flex-row items-end p-5">
          <div className="max-w-lg w-full mx-auto my-28 bg-indigo-100 dark:bg-dark-bg  p-5 sm:p-5 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
            <div className="w-full sm dark:bg-dark-bg    p-4 dark:rounded-tl-xl dark:rounded-bl-xl">
              <div className="">
                <h2 className="text-[1.2em] ml-4 md:ml-0  pb-6 font-bold text-primary dark:text-dark-text-fill ">
                  {t('Register your organization')}
                </h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full"
                  data-testid="dataid"
                >
                  <label className="tracking-wide text-gray-700 dark:text-white font-normal">
                    {t('Email')}
                  </label>
                  <div className="rounded border border-primary dark:border-white w-full p-2 flex items-center mb-3 bg-white  dark:bg-dark-bg ">
                    <FaRegEnvelope className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email',
                        },
                      })}
                      className="outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                    />
                  </div>
                  <div className="mt-1">
                    {errors.email && (
                      <small className="text-red-600">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                  <label className="tracking-wide mt-3 text-gray-700 dark:text-white font-normal mb-2">
                    {t('Organization name')}
                  </label>
                  <div className="rounded border border-primary dark:border-white w-full p-2 flex items-center mb-3 bg-white  dark:bg-dark-bg ">
                    <FaRegUser className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Your organization name"
                      data-testid="input1"
                      {...register('name', { required: 'Name is required' })}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className=" outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                    />
                  </div>
                  <div className="mt-1">
                    {errors.name && (
                      <small className="text-red-600">
                        {errors.name.message}
                      </small>
                    )}
                  </div>
                  <label className="tracking-wide text-gray-700 mt-3 dark:text-white font-normal mb-2">
                    {t('Organization Description')}
                  </label>
                  <div className="rounded border border-primary dark:border-white w-full  p-2 flex bg-white  dark:bg-dark-bg ">
                    <FaPen className="text-gray-400 mr-2" />
                    <textarea
                      placeholder="Description of your organisation"
                      {...register('description', {
                        required: 'Description is required',
                      })}
                      className="outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                    />
                  </div>
                  <div className="mt-1">
                    {errors.description && (
                      <small className="text-red-600">
                        {errors.description.message}
                      </small>
                    )}
                  </div>
                  <div className="flex w-80  md:w-[75%] justify-between rounded mb-3 mt-5">
                    <label className="Terms flex items-left text-xs dark:text-dark-text-fill ">
                      <input
                        type="checkbox"
                        name="remember"
                        className="mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                      />
                      {t('I agree to the')}
                      <span className="text-primary mx-1">
                        {t('Terms & Conditions of')}
                      </span>
                      <span>DevPulse</span>
                    </label>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    style=" "
                    loading={loading}
                  >
                    {' '}
                    {t('Register')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
