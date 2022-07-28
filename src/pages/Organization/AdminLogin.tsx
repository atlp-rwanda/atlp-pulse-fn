/* eslint-disable */
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserContext } from '../../hook/useAuth';
import Button from '../../components/Buttons';

function AdminLogin() {
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();
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
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full  grow  text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="md:rounded-2xl md:shadow-2xl md:flex md:w-2/3 mt-16 md:max-w-4xl sm:max-w-xl sm:rounded-none sm:shadow-none dark:shadow-2xl mb-8">
        <div className="md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-frame-bg  dark:rounded-none">
          <div className="py-10 sm:py-8 ">
            <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
              {t('Sign in using')}
            </h2>
            <div className="border-2 w-10 bg-primary border-primary inline-block mb-2" />
            <div className="flex justify-center my-2">
              <a
                href="#link"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm dark:text-white" />
              </a>
            </div>
            <p className="text-gray-400 my-3 dark:text-dark-text-fill ">
              {t('or use your email account')}
            </p>
            <div className="flex flex-col items-center">
              <form action="#none" onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2 dark:bg-dark-bg ">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    placeholder={t('Email')}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="text-left mb-1">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-2 dark:border-white dark:bg-dark-bg">
                  <MdLockOutline className="text-gray-400 mr-2 " />
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    placeholder={t('Password')}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                  <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                    {passwordShown ? (
                      <FaRegEye onClick={tooglePassword} />
                    ) : (
                      <FiEyeOff onClick={tooglePassword} />
                    )}
                  </div>
                </div>
                <div className="text-left mb-1">
                  {errors.password && (
                    <small className="text-red-600">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="flex w-64 justify-between rounded mb-5 mt-5">
                  <label
                    htmlFor="checkbox"
                    className="flex items-center text-xs dark:text-dark-text-fill "
                  >
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1  dark:text-dark-text-fill dark:border-white dark:bg-dark-frame-bg"
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
                <Button
                  variant="transparentbtn"
                  size="md"
                  style="border-2 hover:bg-primary inline-block rounded-full lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium hover:text-white"
                >
                  {' '}
                  Sign In{' '}
                </Button>
              </form>
            </div>
            <div className="md:hidden mt-2 text-xs text-center dark:text-dark-text-fill">
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
        <div className="md:w-2/5 bg-primary text-white  lg:rounded-tr-2xl lg:rounded-br-2xl md:py-36 md:px-12 sm:w-full sm:rounded-none sm:px-12 sm:py-4 md:block sm:hidden dark:text-dark-text-fill ">
          <h2 className="lg:text-3xl md:text-xl md:font-bold md:mb-2 ">
            {t('Hello, Friend!')}
          </h2>
          <div className="border-2 w-10 bg-white border-white inline-block mb-2" />
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
