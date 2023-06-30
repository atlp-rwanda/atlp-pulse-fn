import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import Button from '../../components/Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
import LOGIN_ORGANIZATION_MUTATION from './LoginOrganisationMutation';
import ButtonLoading from '../../components/ButtonLoading';

function Orglogin() {
  useDocumentTitle('Login');
  const { t } = useTranslation();
  const [OrgLogin, { loading }] = useMutation(LOGIN_ORGANIZATION_MUTATION);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  }: any = useForm();
  const navigate = useNavigate();

  const onSubmit = async (orgInput: any) => {
    /* istanbul ignore next */
    await OrgLogin({
      /* istanbul ignore next */
      variables: { orgInput },
      /* istanbul ignore next */
      onCompleted({ loginOrg }) {
        /* istanbul ignore next */
        localStorage.setItem('orgToken', loginOrg.token);
        /* istanbul ignore next */
        localStorage.setItem('orgName', orgInput.name);
        toast.success('Welcome! Sign in to Continue');
        navigate('/users/login');
      },
      onError(error) {
        /* istanbul ignore next */
        setError('name', {
          message: t(`${error.message}`),
        });
      },
    });
  };

  return (
    <div className="grow bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans">
      <div className="max-w-lg w-full mx-auto my-28 bg-white dark:bg-dark-bg p-14 md:shadow-xl sm:shadow-none md:rounded-xl sm:rounded-none">
        <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
          {t('Sign in to your Organization')}
        </div>
        <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
          {t('Enter your organization’s Dev-Pulse URL')}
        </div>
        <form
          action="#none"
          className="space-y-6 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <input
              type="text"
              data-testid="orgName"
              {...register('name', {
                required: 'Organisation name is required',
              })}
              placeholder={t('your-organization.devpulse.co')}
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
            {t('Looking to register an organization instead?')}
            <Link to="/signup/org">
              <a href="#link" className="text-primary">
                {t('Register a new organization')}
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Orglogin;
