import React from 'react';
import { useTranslation } from 'react-i18next';

function Docs() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-white grow bg-light-bg dark:bg-dark-frame-bg pt-28 font-serif">
      <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10">
        <div className="pb-8 mt-10 text-xl text-light-text dark:text-dark-text-fill md:text-3xl">
          {t('How to Rate Trainees')}
        </div>

        <div className=" text-light-text dark:text-dark-text-fill">
          {t('Doc introduction Coordinator')}
        </div>

        <div>{t('Coordinator docs contents')}</div>
      </div>
    </div>
  );
}

export default Docs;
