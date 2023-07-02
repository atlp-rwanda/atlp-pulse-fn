import React from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hook/useDocumentTitle';

export default function Comingsoon(props: { title: any }) {
  useDocumentTitle('Product');
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen bg-light-bg dark:bg-dark-frame-bg md:-mt-16 md:-mb-44">
      <div className="p-5 mx-2 bg-gray-100 rounded-lg shadow-lg dark:bg-dark-bg md:p-20">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-light-text dark:text-dark-text-fill sm:text-5xl sm:leading-none md:text-6xl">
            {t(`${props.title}`)}
          </h2>
          <h3 className="mt-10 text-xl text-light-text dark:text-dark-text-fill md:text-3xl">
            {t('comingsoon')}
          </h3>
          <p className="mt-10 text-md md:text-xl text-light-text dark:text-dark-text-fill">
            {t('Somethingnewiscoming')}
          </p>
        </div>
      </div>
    </div>
  );
}
