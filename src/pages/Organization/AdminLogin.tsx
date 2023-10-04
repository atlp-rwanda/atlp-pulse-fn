/* eslint-disable */
import { useApolloClient, useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { toast, ToastContent } from 'react-toastify';
import ButtonLoading from '../../components/ButtonLoading';
import Button from '../../components/Buttons';
import { UserContext } from '../../hook/useAuth';
import useDocumentTitle from '../../hook/useDocumentTitle';
import LOGIN_MUTATION from './LoginMutation';
import functionTree from '../../assets/Functionality_Tree.svg';
import pulseStars from '../../assets/Property 1=Logo_flie (1).svg';

function AdminLogin() {
  const orgToken: any = localStorage.getItem('orgToken');
  const orgName: any = localStorage.getItem('orgName');
  const [loading, setLoading] = useState(false);

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
  const [LoginUser] = useMutation(LOGIN_MUTATION);
  const client = useApolloClient();
  const [searchParams] = useSearchParams();

  const onSubmit = async (userInput: any) => {
    userInput.orgToken = orgToken;
    try {
      setLoading(true);
      const redirect = searchParams.get('redirect');
      // const activity = await getLocation();
      await LoginUser({
        variables: {
          loginInput: {
            ...userInput,
            // activity, //disable geolocation
          },
        },

        /* istanbul ignore next */
        onCompleted: async (data) => {
          /* istanbul ignore next */
          toast.success(data.addMemberToCohort);
          /* istanbul ignore next */
          login(data.loginUser);
          /* istanbul ignore next */
          await client.resetStore();
          /* istanbul ignore next */
          toast.success(t(`Welcome`) as ToastContent<unknown>);
          /* istanbul ignore next */

          if (data.loginUser) {
            redirect
              ? navigate(`${redirect}`)
              : data.loginUser.user.role === 'superAdmin'
              ? navigate(`/organizations`)
              : data.loginUser.user.role === 'admin'
              ? navigate(`/trainees`)
              : data.loginUser.user.role === 'coordinator'
              ? navigate(`/trainees`)
              : data.loginUser.user.role === 'manager'
              ? navigate(`/dashboard`)
              : data.loginUser.user.role === 'ttl'
              ? navigate('/ttl-trainees')
              : navigate('/performance');
          } else {
            navigate('/dashboard');
          }
        },
        onError: (err) => {
          /* istanbul ignore next */
          if (err.message.toLowerCase() !== 'invalid credential' ) {
            const translateError = t('Please wait to be added to a program or cohort')
            toast.error(translateError);
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
    } finally {
      setLoading(false);
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
      .then((data) => data);
    const date = new Date().toString();
    return { date, ...location } || null;
  };

  return (
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
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
                {t('Welcome to')}{' '}
                {orgName
                  ? orgName.charAt(0).toUpperCase() +
                    orgName.slice(1).toLowerCase()
                  : ''}
              </h2>
              <div className="border-[1px] w-10 bg-primary border-primary inline-block mb-2" />
            </div>

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
                className="w-full"
                onSubmit={handleSubmit(onSubmit)}
                data-testid="loginForm"
              >
                {errors.password &&
                errors.password.message === t('Invalid credentials') ? (
                  <div className=" bg-red-400 rounded-md w-full text-center p-4 my-4">
                    <small className="text-white">
                      {errors.password.message}
                    </small>
                  </div>
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
                    className="bg-gray-100 outline-none text-sm flex-1 px-2 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="text-left mb-1 pl-4">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
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
                <div className="pl-4 mb-1 text-left">
                  {errors.password &&
                  errors.password.message !== t('Invalid credentials') ? (
                    <small className="text-red-600">
                      {errors.password.message}
                    </small>
                  ) : (
                    ''
                  )}

                </div>
                <div className="flex w-full flex-col sm:flex-row justify-between  items-center rounded mb-5 mt-5">
                  <div className="w-50%">
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
                  </div>
                  <div className="w-[50%] flex flex-row justify-end">
                    <Link
                      to="/reset-password"
                      className="text-xs dark:text-dark-text-fill "
                    >
                      {t('Forgot Password?')}
                    </Link>
                  </div>
                </div>
                <div className="w-full justify-center">
                  {loading ? (
                    <ButtonLoading
                      style={
                        'rounded-md inline-block w-full sm:px-4 sm:py-2 opacity-50'
                      }
                    />
                  ) : (
                    <Button
                      type="submit"
                      variant="transparentbtn"
                      size="md"
                      style=" w-full bg-primary m-0 inline-block rounded-md lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium text-white"
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
    </div>
  );
}

export default AdminLogin;
