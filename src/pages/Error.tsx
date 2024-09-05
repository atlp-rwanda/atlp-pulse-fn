import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../components/Buttons';
import NotFoundImg from '../assets/NotFoundImg.svg';
import useDocumentTitle from '../hook/useDocumentTitle';

function Error() {
  useDocumentTitle('Page not found');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <div className="errorImg flex items-center justify-center h-screen w-screen text-center pt-11 font-serif">
      <div>
        <img
          src={NotFoundImg}
          className="max-w-36 max-h-32 md:max-w-44 md:max-h-40 mt-10 lg:max-w-52 lg:max-h-48 xl:max-w-2xl xl:max-h-96"
          alt="404"
        />
      </div>
      <div className="max-w-screen-md mt-5 text-white">
        <h1 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {t('PAGE NOT FOUND')}
        </h1>
        <p className="my-3 px-8 md:px-14 lg:px-0">
          {t('error_page_paragraph')}
        </p>
        <Button
          onClick={navigateHome}
          variant="primary"
          size="lg"
          data-testid="button-back"
          style="mt-2 lg:mt-5 px-8 text-xl font-bold"
        >
          {t('Back Home')}
        </Button>
      </div>
    </div>
  );
}

export default Error;
