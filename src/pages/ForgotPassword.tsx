import React, { useState, useEffect } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { FaPen, FaAddressBook, FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useMutation, useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import Button from '../components/Buttons';
import useDocumentTitle from '../hook/useDocumentTitle';
import ButtonLoading from '../components/ButtonLoading';
import {
  FORGOT_PASSWORD,
  VERIFY_RESET_PASSWORD_TOKEN,
} from '../Mutations/resetPassword';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const token: any = window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1,
  );
  const originalToken: any = token.replaceAll('*', '.');
  const [passwordShown, setPasswordShown] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const tooglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useDocumentTitle('Forgot Password');
  const { t } = useTranslation();

  const [name, setName] = useState('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();

  const [ResetPassword, { loading }] = useMutation(FORGOT_PASSWORD, {
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(
          t('You have Successfully reset your password!') as TFunction,
        );
        navigate('/login/org');
      }, 2000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  const [VerifyResetPassword] = useLazyQuery(VERIFY_RESET_PASSWORD_TOKEN, {
    variables: {
      token: originalToken,
    },
    onError: (err: any) => {
      navigate('/pageNotFound');
    },
  });

  const onSubmit = async (userInput: any) => {
    setButtonLoading(true);
    setTimeout(async () => {
      try {
        await ResetPassword({
          variables: {
            password: userInput.password,
            confirmPassword: userInput.confirmPassword,
            token: originalToken,
          },
        });
      } catch (error: any) {
        toast.error(error.message);
      }
    }, 2000);
  };

  useEffect(() => {
    VerifyResetPassword();
  }, []);

  return (
    <div className="font-serif md:flex md:flex-col md:items-center md:justify-center w-full min-h-screen -mt-3 -mb-16 xl:-mt-14  xl:-mb-28 text-left dark:bg-dark-frame-bg bg-gray-100 sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="bg-white sm:rounded-2xl py-8 md:py-0 md:shadow-2xl md:flex xl:w-3/4 md:w-[90%] md:max-w-4xl sm:w-full px-2 md:px-0 mx-20 md:mx-0 sm:shadow-none dark:shadow-2xl ">
        <div className="2xl:w-3/5 md:justify-center md:w-screen md:pl-14 lg:pl-48 xl:pl-24 py-20 md:py-8 sm:w-full sm:p-2 dark:bg-dark-bg dark:rounded-tl-xl dark:rounded-bl-xl">
          <div className="">
            <h2 className="text-2xl ml-4 md:ml-32 lg:text-3xl pb-6 font-bold text-primary dark:text-dark-text-fill ">
              {t('Reset your password')}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="flex flex-col items-left md:justify-center"
                data-testid="dataid"
              >
                <label className="tracking-wide text-gray-700 dark:text-white font-normal">
                  {t('Enter new password')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    data-testid="password"
                    type={passwordShown ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    placeholder={t('Password')}
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
                  {t('Re-write your password')}
                </label>
                <div className="rounded border border-primary dark:border-white w-full md:w-3/4 p-2 flex items-center mb-6 dark:bg-dark-bg ">
                  <FaPen className="text-gray-400 mr-2" />
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    data-testid="input1"
                    {...register('confirmPassword', {
                      required: 'Password confirmation is Required',
                    })}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder={t('Confirm password')}
                    className="bg-white outline-none text-sm flex-1 dark:border-white dark:bg-dark-bg dark:text-white"
                  />
                </div>
                <div className="-mt-6">
                  {errors.name && (
                    <small className="text-red-600">
                      {errors.name.message}
                    </small>
                  )}
                </div>
                <div className="-mt-4">
                  {errors.description && (
                    <small className="text-red-600">
                      {errors.description.message}
                    </small>
                  )}
                </div>
                <br />
                <div className="w-full md:w-3/4 p-2 flex items-center mb-6 justify-center">
                  {loading ? (
                    <ButtonLoading style="rounded-full inline-block" />
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      style="w-2/4 ml-0 hover:bg-cyan-700 text-sm"
                    >
                      {' '}
                      {t('Confirm')}
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
