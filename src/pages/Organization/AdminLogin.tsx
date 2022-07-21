/* eslint-disable */
import React, { useContext, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../hook/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AdminLogin() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  }: any = useForm();

  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const role = data?.email.split('@')[0];
    const validRoles = ['admin', 'trainee', 'coordinator', 'user', 'super'];
    if (!validRoles.includes(role)) {
      return toast.error(`Only these roles are accepted: ${validRoles}`);
    }
    login({ ...data, name: role.toUpperCase(), role });
    navigate('/dashboard/');
    return;
  };

  return (
    <div className="w-full py-2 text-center bg-gray-100 md:flex md:flex-col md:items-center md:justify-center grow dark:bg-dark-bg sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="mt-16 mb-8 md:rounded-2xl md:shadow-2xl md:flex md:w-2/3 md:max-w-4xl sm:max-w-xl sm:rounded-none sm:shadow-none dark:shadow-2xl">
        <div className="md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-frame-bg dark:rounded-none">
          <div className="py-10 sm:py-8 ">
            <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
              {t('Sign in using')}
            </h2>
            <div className="inline-block w-10 mb-2 border-2 bg-primary border-primary" />
            <div className="flex justify-center my-2">
              <a
                href="#link"
                className="p-3 mx-1 border-2 border-gray-200 rounded-full"
              >
                <FaGoogle className="text-sm dark:text-white" />
              </a>
            </div>
            <p className="my-3 text-gray-400 dark:text-dark-text-fill ">
              {t('or use your email account')}
            </p>
            <div className="flex flex-col items-center">
              <form action="#none" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center w-64 p-2 mb-2 bg-gray-100 dark:bg-dark-bg ">
                  <FaRegEnvelope className="mr-2 text-gray-400" />
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    placeholder={t('Email')}
                    className="flex-1 text-sm text-gray-400 bg-gray-100 outline-none dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="mb-1 text-left">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="flex items-center w-64 p-2 mb-2 bg-gray-100 rounded dark:border-white dark:bg-dark-bg">
                  <MdLockOutline className="mr-2 text-gray-400 " />
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    placeholder={t('Password')}
                    className="flex-1 text-sm text-gray-400 bg-gray-100 outline-none dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                  <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                    {passwordShown ? (
                      <FaRegEye onClick={tooglePassword} />
                    ) : (
                      <FiEyeOff onClick={tooglePassword} />
                    )}
                  </div>
                </div>
                <div className="mb-1 text-left">
                  {errors.password && (
                    <small className="text-red-600">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="flex justify-between w-64 mt-5 mb-5 rounded">
                  <label
                    htmlFor="checkbox"
                    className="flex items-center text-xs dark:text-dark-text-fill "
                  >
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1 dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
                    />
                    Remember me
                  </label>
                  <Link
                    to="/reset-password"
                    className="text-xs dark:text-dark-text-fill "
                  >
                    {t('Forgot Password?')}
                  </Link>
                </div>
                <button
                  type="submit"
                  className="inline-block border-2 rounded-full border-primary text-primary lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium hover:bg-primary hover:text-white "
                >
                  Sign In
                </button>
              </form>
            </div>
            <div className="mt-2 text-xs text-center md:hidden dark:text-dark-text-fill">
              {t('First time here?')}
              <Link to="/register-organization" className="mx-1">
                <a href="#link" className="text-primary">
                  {t('Register')}
                </a>
              </Link>
              {t('your organization')}
            </div>
          </div>
        </div>
        <div className="text-white md:w-2/5 bg-primary lg:rounded-tr-2xl lg:rounded-br-2xl md:py-36 md:px-12 sm:w-full sm:rounded-none sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill ">
          <h2 className="lg:text-3xl md:text-xl md:font-bold md:mb-2 ">
            {t('Hello, Friend!')}
          </h2>
          <div className="inline-block w-10 mb-2 bg-white border-2 border-white" />
          <p className="lg:mb-10 lg:text-center md:text-medium sm:text-center sm:mb-2 sm:text-sm md:text-justify dark:text-dark-text-fill ">
            {t('Sign_in_page_paragraph')}
          </p>
          <Link to="/register-organization">
            <a
              href="#link"
              className="border-2 border-white rounded-full lg:px-8 lg:py-2 inline-block lg:font-semibold md:font-xl md:mt-[72px] sm:font-medium sm:px-4 sm:py-1 hover:bg-white hover:text-primary dark:hover:bg-dark-bg dark:hover:text-dark-text-fill "
            >
              {t('Register')}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
