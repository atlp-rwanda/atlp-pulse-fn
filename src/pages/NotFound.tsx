import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="notFound dark:bg-dark-frame-bg flex flex-row py-12 px-5  md:flex-row items-center justify-end md:justify-evenly grow h-full w-full ">
      <div />
      <div className="bg-light-bg dark:bg-dark-bg px-4 py-5 rounded-3xl max-w-md flex flex-col h-full">
        <h3 className="text-2xl font-sans font-bold dark:text-dark-text-fill ">
          {t('Ooops... What just happened!?')}
        </h3>
        <h2 className="text-[4rem] font-bold text-primary ">{t('NOT FOUND')}</h2>
        <p className="text-base font-bold dark:text-dark-text-fill whitespace-pre-wrap">
          {t(
            '404_page_paragraph',
          )}
        </p>
        <Link
          className="px-5 py-3 bg-primary font-bold mt-5 rounded-md text-white w-fit"
          to="/"
        >
          {t('Back Home')}
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
