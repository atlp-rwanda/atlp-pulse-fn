/* eslint-disable */
import { useApolloClient, useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonLoading from '../../components/ButtonLoading';
import Button from '../../components/Buttons';
import { UserContext } from '../../hook/useAuth';
import useDocumentTitle from '../../hook/useDocumentTitle';
import LOGIN_MUTATION from './LoginMutation';

function AdminLogin() {
  const orgToken: any = localStorage.getItem('orgToken');
  const orgName: any = localStorage.getItem('orgName');
  useDocumentTitle('Login');
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  /* istanbul ignore next */
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [LoginUser, { loading }] = useMutation(LOGIN_MUTATION);
  const client = useApolloClient();
  const onSubmit = async (userInput: any) => {
    userInput.orgToken = orgToken;
    try {
      const { data }: any = await LoginUser({
        variables: { loginInput: userInput },

        onCompleted: async (data) => {
          /* istanbul ignore next */
          toast.success(data.addMemberToCohort);
           /* istanbul ignore next */
          login(data.loginUser);
           /* istanbul ignore next */
          await client.resetStore();
           /* istanbul ignore next */
          toast.success(t(`Welcome`));
          if (state) {
            navigate(`${state}`);
          } else {
            navigate('/dashboard/');
          }
           /* istanbul ignore if */
          if (data.loginUser) {
            //navigate to ${state},in case you want to make it default (/dashboard),  
             /* istanbul ignore next */
            {data.loginUser.user.role === 'superAdmin'? 
            navigate(`/dashboard/organizations`):(data.loginUser.user.role === "admin")? 
            navigate(`/dashboard/trainees`):(data.loginUser.user.role === 'coordinator')? 
            navigate(`/dashboard/trainees`):(data.loginUser.user.role === 'manager')? 
            navigate(`/dashboard/coordinators`): navigate('/dashboard/performance') }
          } 
           /* istanbul ignore next */
          return;
        },
        onError: (err) => {
          /* istanbul ignore next */
          if (err.message.toLowerCase() !== 'invalid credential') {
            toast.error(err.message);
          } else {
             /* istanbul ignore next */
            setError('password', {
              type: 'custom',
              message: t('Invalid credentials'),
            });
            /* istanbul ignore next */
            setError('email', {
              type: 'custom',
              message: t('Invalid credentials'),
            });
          }
        },
      });
    } catch (error: any) {
      /* istanbul ignore next */
      setError('password', {
        type: 'custom',
        message: t('Invalid credentials'),
      });
      /* istanbul ignore next */
      setError('email', {
        type: 'custom',
        message: t('Invalid credentials'),
      });
    }
  };

  return (
    <div className="w-full text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:items-center sm:justify-center h-full">
      <div className="md:rounded-xl md:shadow-xl md:w-full mt-20 sm:max-w-xl sm:rounded-none sm:shadow-none dark:shadow-2xl mb-8">
        <div className="py-10 sm:py-8 ">
          <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
            {t('Welcome to')} {orgName}
          </h2>
          <div className="border-[1px] w-10 bg-primary border-primary inline-block mb-2" />
          <div className=" text-sm text-center dark:text-dark-text-fill">
            <Link
              to="/login/org"
              className="mx-1 text-primary"
              data-testid="switch"
            >
              {t('Switch')} {t('your organization')}
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <form
              action="#none"
              onSubmit={handleSubmit(onSubmit)}
              data-testid="loginForm"
            >
              <div className="w-full border border-gray rounded-md bg-gray-100 p-2 my-4 flex items-center mb-2 dark:bg-dark-bg ">
                <FaRegEnvelope className="text-gray-400 mr-2" />
                <input
                  data-testid="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder={t('Email')}
                  className="bg-gray-100 outline-none text-sm flex-1 px-2 dark:border-white dark:bg-dark-bg dark:text-white "
                />
              </div>
              <div className="text-left mb-1 pl-4">
                {errors.email && (
                  <small className="text-red-600">{errors.email.message}</small>
                )}
              </div>

              <div className="md:w-full border border-gray rounded-md bg-gray-100 p-2 my-4 flex items-center  mb-2 dark:border-white dark:bg-dark-bg">
                <MdLockOutline className="text-gray-400 mr-2 " />
                <input
                  data-testid="password"
                  type={passwordShown ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  placeholder={t('Password')}
                  className="bg-gray-100 outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                />
                <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                  {passwordShown ? (
                    <FaRegEye onClick={tooglePassword} />
                  ) : (
                    <FiEyeOff onClick={tooglePassword} />
                  )}
                </div>
              </div>
              <div className="text-left mb-1 pl-4">
                {errors.password ? (
                  <small className="text-red-600">
                    {errors.password.message}
                  </small>
                ) : (
                  ''
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
                  {t('Remember me')}
                </label>
                <Link
                  to="/reset-password"
                  className="text-xs dark:text-dark-text-fill "
                >
                  {t('Forgot Password?')}
                </Link>
              </div>
              <div className="w-full justify-center ml-[-7px]">
                {loading ? (
                  <ButtonLoading style={'rounded-full inline-block'} />
                ) : (
                  <Button
                    type="submit"
                    variant="transparentbtn"
                    size="md"
                    style=" w-full bg-primary inline-block rounded-md lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium text-white"
                  >
                    {t('Sign In')}
                  </Button>
                )}
              </div>
            </form>
          </div>

          <div className="my-4 text-sm text-center dark:text-dark-text-fill">
            {t('First time here?')}
            <Link to="/signup/org" className="mx-1 text-primary">
              {t('Register')}
            </Link>
            {t('your organization')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
