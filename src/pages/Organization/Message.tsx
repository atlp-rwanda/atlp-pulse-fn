import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/logo.svg';
import LogoWhite from '../../assets/logoWhite.svg';
import { ThemeContext } from '../../hook/ThemeProvider';

function Message() {
  const { colorTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center w-full  grow  text-center py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
      <div className="mt-3  sm:mt-20 xs:mt-15 md:w-3/5 md:p-5 sm:w-full sm:p-2 dark:bg-dark-frame-bg  dark:rounded-none max-w-md">
        <div className="py-10 sm:py-8">
          <div className="flex justify-center m-auto w-1/2 h-20 ">
            <img
              className="w-full cursor-pointer mr-2"
              src={colorTheme === 'dark' ? Logo : LogoWhite}
              alt="logo"
            />
          </div>
          <h2 className="text-2xl font-bold text-primary dark:text-dark-text-fill mb-10">
            {t('Thanks for signing up.')}
          </h2>

          <p className="text-gray-400 mx-10 dark:text-dark-text-fill text-left mb-5">
            {t(
              'We are delighted to have you with us. Soon you shall be receiving an email that contains an organization you will be part of.',
            )}
          </p>

          <p className="text-gray-400 mx-10 dark:text-dark-text-fill text-left x">
            {t('DevPulse')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
