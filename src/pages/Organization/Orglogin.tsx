/* eslint-disable */
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Orglogin() {
  const [url, setURL] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const errRef: any = useRef();

  const navigate = useNavigate();

  const URL_REGEX =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    navigate('/login-admin');
  };
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center font-sans grow bg-neutral-100 dark:bg-dark-frame-bg">
      <div className="w-full max-w-lg mx-auto bg-white my-28 dark:bg-dark-bg p-14">
        <div className="text-2xl font-bold text-center text-black-600 dark:text-dark-text-fill ">
          {t('Sign in to your Organization')}
        </div>
        <div className="mt-2 font-semibold text-center text-md text-black-600 dark:text-dark-text-fill sm:text-xs">
          {t('Enter your organization’s Dev-Pulse URL')}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-6">
          <div>
            <input
              {...register('url', {
                required: true,
                pattern: URL_REGEX,
              })}
              onChange={(e) => setURL(e.target.value)}
              type="text"
              placeholder={t('your-organization.pulse.com')}
              className="w-full p-2 mt-1 border rounded border-primary dark:bg-dark-bg"
            />
          </div>

          {errors.url && (
            <p className="text-red-700">
              {' '}
              <FontAwesomeIcon icon={faInfoCircle} /> URL must be a valid url
              address.
            </p>
          )}

          <div>
            <Link to="/login-admin">
              <button
                className="w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-cyan-700"
                onClick={handleSubmit(onSubmit)}
              >
                {t('Continue')}
              </button>
            </Link>
          </div>
          <div className="w-full text-sm text-light-text dark:text-dark-text-fill">
            {t('Don’t know your organization URL?')}
            <a href="#link" className="text-primary">
              {t('Find your organizations')}
            </a>
          </div>
          <div className="w-full text-sm text-light-text dark:text-dark-text-fill">
            {t('Looking to register an organization instead?')}
            <Link to="/register-organization">
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
