import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import e from 'express';
import Button from '../components/Buttons';
import useDocumentTitle from '../hook/useDocumentTitle';
import { RESET_PASSWORD_EMAIL } from '../Mutations/resetPassword';
import ButtonLoading from '../components/ButtonLoading';

function ResetPassword() {
  useDocumentTitle('Reset Password');
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [ResetPasswordEmail, { loading }] = useMutation(RESET_PASSWORD_EMAIL, {
    onCompleted: (data) => {
      setTimeout(() => {
        toast.success(t('Check your email to proceed!'));
        navigate('/');
      }, 2000);
    },
    onError: (err) => {
      setTimeout(() => {
        toast.error(err.message);
      }, 1000);
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();

  const onSubmit = async (Input: any) => {
    // Input.presentDefault()
    await ResetPasswordEmail({
      variables: {
        email: Input.email,
      },
    });
  };
  return (
    <div className="grow bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans">
      <div className="max-w-lg w-full mx-auto my-28 bg-white dark:bg-dark-bg p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
        <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
          {t('Reset Password')}
        </div>
        <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
          {t('You will receive an email to proceed with resetting password')}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#none"
          className="space-y-6 mt-4"
        >
          <div>
            <input
              type="text"
              data-testid="email"
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder={t('Enter your email address')}
              className="w-full p-2 border border-primary rounded mt-1 dark:bg-dark-bg"
            />
          </div>
          <div className="-mt-6">
            {errors.name && (
              <small className="text-red-600">{errors.name.message}</small>
            )}
          </div>
          <div>
            {loading ? (
              <ButtonLoading style="rounded-full inline-block" />
            ) : (
              <Button
                type="submit"
                // onClick={handleSubmit(onSubmit)}
                variant="primary"
                data-testid="loginForm"
                size="lg"
                style="w-full ml-0 hover:bg-cyan-700 text-sm"
              >
                {' '}
                {t('Continue')}
              </Button>
            )}
          </div>

          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
            {t('New to DevPulse?')}
            <Link to="/register">
              <a href="#link" className="text-primary">
                {t('Sign Up')}
              </a>
            </Link>
          </div>

          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
            {t('Don’t know your organization URL?')}
            <a href="#link" className="text-primary">
              {t('Find your organizations')}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
