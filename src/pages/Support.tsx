import React from 'react';
import { useTranslation } from 'react-i18next';

function Support() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg pl-60 pt-28">
      <div className="mt-10 text-xl text-light-text dark:text-dark-text-fill md:text-3xl">
        {t('Support')}
      </div>
    </div>
  );
}

export default Support;
