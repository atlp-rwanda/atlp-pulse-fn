/* eslint-disable */
import { useApolloClient, useMutation } from '@apollo/client';
import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContent } from 'react-toastify';
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
      const activity = await getLocation();
      const { data }: any = await LoginUser({
        variables: {
          loginInput: {
            ...userInput,
            activity,
          },
        },

        onCompleted: async (data) => {
          /* istanbul ignore next */
          toast.success(data.addMemberToCohort);
          /* istanbul ignore next */
          login(data.loginUser);
          /* istanbul ignore next */
          await client.resetStore();
          /* istanbul ignore next */
          toast.success(t(`Welcome`) as ToastContent<unknown>);
          if (state) {
            navigate(`${state}`);
          } else {
            navigate('/dashboard');
          }
          /* istanbul ignore if */
          if (data.loginUser) {
            //navigate to ${state},in case you want to make it default (/dashboard),
            /* istanbul ignore next */
            {
              data.loginUser.user.role === 'superAdmin'
                ? navigate(`/organizations`)
                : data.loginUser.user.role === 'admin'
                ? navigate(`/trainees`)
                : data.loginUser.user.role === 'coordinator'
                ? navigate(`/trainees`)
                : data.loginUser.user.role === 'manager'
                ? navigate(`/coordinators`)
                : navigate('/performance');
            }
          }
          /* istanbul ignore next */
          return;
        },
        onError: (err) => {
          console.log(err);
          /* istanbul ignore next */
          if (err.message.toLowerCase() !== 'invalid credential') {
            toast.error(err.message);
          } else {
            /* istanbul ignore next */
            setError('password', {
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
  
    }
  };
  const getLocation = async () => {
    const location = await fetch('https://geolocation-db.com/json/')
      .then(async (res) => {
        const activityResponse = await res.json();

        const activityResponseActual = {
          IPv4: activityResponse.IPv4,
          city: activityResponse.city,
          country_code: activityResponse.country_code,
          country_name: activityResponse.country_name,
          latitude:
            activityResponse.latitude === 'Not found'
              ? null
              : activityResponse.latitude,
          longitude:
            activityResponse.longitude === 'Not found'
              ? null
              : activityResponse.longitude,
          postal: activityResponse.postal,
          state: activityResponse.state,
        };
        return activityResponseActual;
      })
      .then((data) => {
        return data;
      });
    const date = new Date().toString();
    return { date, ...location } || null;
  };

  return (
    <div className="w-full h-full py-2 text-center bg-gray-100 dark:bg-dark-frame-bg sm:flex sm:items-center sm:justify-center">
      <div className="mt-20 mb-8 bg-indigo-100 md:rounded-xl md:shadow-xl md:w-full sm:max-w-xl dark:bg-dark-bg sm:rounded-none sm:shadow-none dark:shadow-2xl">
        <div className="py-10 sm:py-8 ">
          {/* <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
            {t('Welcome to')} {orgName}
          </h2> */}
          <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
            {t('Welcome to')}{' '}
            {orgName
              ? orgName.charAt(0).toUpperCase() + orgName.slice(1).toLowerCase()
              : ''}
          </h2>

          <div className="border-[1px] w-10 bg-primary border-primary inline-block mb-2" />
          <div className="text-sm text-center dark:text-dark-text-fill">
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
                   {errors.password && errors.password.message===t('Invalid credentials') ? (
                  <small className="text-red-600">
                    {errors.password.message}
                  </small>
                ) : (
                  ''
                )}
              <div className="flex items-center w-full p-2 my-2 mb-2 bg-gray-100 border rounded-md border-gray dark:bg-dark-bg ">

                <FaRegEnvelope className="mr-2 text-gray-400" />
                <input
                  data-testid="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder={t('Email')}
                  className="flex-1 px-2 text-sm bg-gray-100 outline-none dark:border-white dark:bg-dark-bg dark:text-white "
                />
              </div>
              <div className="pl-4 mb-1 text-left">
                {errors.email && (
                  <small className="text-red-600">{errors.email.message}</small>
                )}
              </div>

              <div className="flex items-center p-2 my-4 mb-2 bg-gray-100 border rounded-md md:w-full border-gray dark:border-white dark:bg-dark-bg">
                <MdLockOutline className="mr-2 text-gray-400 " />
                <input
                  data-testid="password"
                  type={passwordShown ? 'text' : 'password'}
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  placeholder={t('Password')}
                  className="flex-1 text-sm bg-gray-100 outline-none dark:border-white dark:bg-dark-bg dark:text-white"
                />
                <div className="text-gray-400 cursor-pointer onClick= {()=> handleShowPassword}">
                  {passwordShown ? (
                    <FaRegEye onClick={tooglePassword} />
                  ) : (
                    <FiEyeOff onClick={tooglePassword} />
                  )}
                </div>
              </div>
              <div className="pl-4 mb-1 text-left">
                {errors.password && errors.password.message!==t('Invalid credentials') ? (
                  <small className="text-red-600">
                    {errors.password.message}
                  </small>
                ) : (
                  ''
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
