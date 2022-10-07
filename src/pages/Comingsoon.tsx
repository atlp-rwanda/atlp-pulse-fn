import React from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hook/useDocumentTitle';

export default function Comingsoon() {
  useDocumentTitle('Product');
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen bg-light-bg dark:bg-dark-frame-bg md:-mt-16 md:-mb-44">
      <div className="dark:bg-dark-bg bg-gray-100 rounded-lg shadow-lg p-5 md:p-20 mx-2">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-light-text dark:text-dark-text-fill sm:text-5xl sm:leading-none md:text-6xl">
            {t('Productpage')}
          </h2>
          <h3 className="text-xl text-light-text dark:text-dark-text-fill md:text-3xl mt-10">
            {t('comingsoon')}
          </h3>
          <p className="text-md md:text-xl mt-10 text-light-text dark:text-dark-text-fill">
            {t('Somethingnewiscoming')}
          </p>
        </div>
      </div>
    </div>
  );
}
