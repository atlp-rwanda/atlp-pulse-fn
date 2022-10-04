/* eslint-disable */
import { useApolloClient, useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaRegEnvelope, FaRegEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { MdLockOutline } from 'react-icons/md';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonLoading from '../../components/ButtonLoading';
import Button from '../../components/Buttons';
import { UserContext } from '../../hook/useAuth';
import useDocumentTitle from '../../hook/useDocumentTitle';
import SIGN_UP_MUTATION  from './Mutations';

function Signup() {
  useDocumentTitle('Login');
  const { t } = useTranslation();
  const [passwordShown, setPasswordShown] = useState(false);
  const [buttonLoading, setButtonLoading ] = useState(false);
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();
  const { UserSignup } = useContext(UserContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [Signup, { loading }] = useMutation(SIGN_UP_MUTATION);
 
  const [ SignupUser ] = useMutation(SIGN_UP_MUTATION, {
    
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success('You have successfully created an account!');
        navigate('/register-successful');
      }, 2000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });


  const onSubmit = async (userInput: any) => {
    setButtonLoading(true);
    setTimeout(async () => {
       try {
        await SignupUser({
         variables:{
          email:userInput.email,
          password:userInput.password
         } 
        })
        
        
        
        return;
      } catch (error: any) {
        setError('password', {
          type: 'custom',
          message: t('Invalid credentials'),
        });
        setError('email', {
          type: 'custom',
          message: t('Invalid credentials'),
        });
      }
    },2000)
    
    
  };

  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full  grow  text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
        <div className="mt-3  sm:mt-20 xs:mt-15 md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-frame-bg  dark:rounded-none max-w-md">
          <div className="py-10 sm:py-8 ">
            <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill ">
              {t('Sign up using')}
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
              <form
                action="#none"
                onSubmit={handleSubmit(onSubmit)}
                data-testid="loginForm"
              >
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2 dark:bg-dark-bg ">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    data-testid="email"
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    placeholder={t('Email')}
                    className="bg-gray-100 outline-none text-sm flex-1 text-gray-400 dark:border-white dark:bg-dark-bg dark:text-white "
                  />
                </div>
                <div className="text-left mb-1 pl-4">
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center rounded mb-2 dark:border-white dark:bg-dark-bg">
                  <MdLockOutline className="text-gray-400 mr-2 " />
                  <input
                    data-testid="password"
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
                <div className="text-left mb-1 pl-4">
                  {errors.password ? (
                    <small className="text-red-600">
                      {errors.password.message}
                    </small>
                  ) : (
                    ''
                  )}
                </div>
                <div className="flex w-64  rounded mb-5 mt-5 items-center ">
                  <div className=" text-sm mr-3">
                 {t('Already have an account?')}
                  </div>
                  <Link
                    to="/reset-password"
                    className="text-xs dark:text-dark-text-fill "
                  >
                    {t('Log in')}
                  </Link>
                </div>
                <div className="w-full justify-center">
                  {loading ? (
                    <ButtonLoading style={'rounded-full inline-block'} />
                  ) : (
                    <Button

                      type="submit"
                      variant="transparentbtn"
                      size="md"
                      style="border-2 hover:bg-primary inline-block rounded-full lg:px-12 lg:py-2 sm:px-4 sm:py-1 md:font-semibold sm:mt-2 sm:font-medium hover:text-white"
                      loading= { buttonLoading }
                    
                    >
                      {t('Sign Up')}
                    </Button>
                  )}
                </div>
              </form>
            </div>
            <div className="md:hidden mt-2 text-xs text-center dark:text-dark-text-fill">
              {t('First time here?')}
              <Link to="/register-organization" className="mx-1 text-primary">
                {t('Register')}
              </Link>
              {t('your organization')}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Signup;
