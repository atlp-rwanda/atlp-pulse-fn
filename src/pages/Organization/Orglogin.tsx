import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';

function Orglogin() {
  useDocumentTitle('Login');
  const { t } = useTranslation();
  return (
    <div className="grow bg-neutral-100 dark:bg-dark-frame-bg flex flex-col justify-center font-sans">
      <div className="max-w-lg w-full mx-auto my-28 bg-white dark:bg-dark-bg p-14">
        <div className="text-center  text-black-600 text-2xl font-bold dark:text-dark-text-fill ">
          {t('Sign in to your Organization')}
        </div>
        <div className="text-md  text-black-600 mt-2 text-center font-semibold dark:text-dark-text-fill sm:text-xs">
          {t('Enter your organization’s Dev-Pulse URL')}
        </div>
        <form action="#none" className="space-y-6 mt-4">
          <div>
            <input
              type="text"
              placeholder={t('your-organization.pulse.com')}
              className="w-full p-2 border border-primary rounded mt-1 dark:bg-dark-bg"
            />
          </div>

          <div>
            <Link to="/signin">
              <Button
                variant="primary"
                size="lg"
                style="w-full ml-0 hover:bg-cyan-700 text-sm"
              >
                {' '}
                {t('Continue')}
                {' '}
              </Button>
            </Link>
          </div>
          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
            {t('Don’t know your organization URL?')}
            <a href="#link" className="text-primary">
              {t('Find your organizations')}
            </a>
          </div>
          <div className="w-full text-sm  text-light-text dark:text-dark-text-fill">
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
