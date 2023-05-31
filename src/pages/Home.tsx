import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { UserContext } from '../hook/useAuth';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from '../components/Buttons';
import HomePageCardContainer from '../components/HomePageCardContainer';

function LandingPage() {
  /* istanbul ignore next */
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  useDocumentTitle('Welcome');
  return (
    <div className="hero">
      <Header styles="bg-opacity-50 dark:bg-opacity-50" />

      <div className="hero w-full min-h-full flex flex-col justify-center grow items-center py-20">
        <div className="grid h-full lg:grid-cols-2 w-full justify-around content-center pb-6">
          <div className="flex h-full flex-col items-center justify-start  w-full px-4 py-2">
            <h1 className="mt-28 sm:mt-20 text-3xl sm:text-4xl md:pl-10 md:text-6xl font-bold text-white dark:text-dark-text-fill font-lexend text-center md:text-left">
              {t('Welcome to DevPulse')}
            </h1>
            <p className="text-2xl md:text-4xl lg:text-3xl mt-8 md:mt-8 lg:mt-8 w-full sm:w-3/4 md:w-4/5 lg:w-full md:px-0 lg:px-8 text-white dark:text-dark-text-fill font-sans text-center">
              {t('The number one platform for')}
              <em>
                <b> {t('managing trainees')} </b>
              </em>
              {t('or')}
              <em>
                <b> {t('students')} </b>
              </em>
              {t('in any')}
              <em>
                <b> {t('ed-tech organization')} </b>
              </em>
            </p>
            {!user?.auth ? (
            <div className="w-full text-center justify-center items-center mt-8">
            <Link to="/signup/org">
              <Button
                variant="primary"
                size="lg"
                style="mt-12 lg:mt-0 px-8 text-xl font-bold uppercase my-4"
              >
                {' '}
                  {t('Get Started')}{' '}
              </Button>
              </Link>
            </div>
            ) : (
              ' '
            )}

          </div>
        </div>
      </div>
      <HomePageCardContainer/>
      <Footer styles="dark:bg-opacity-75 bg-opacity-100" />
    </div>
  );
}

export default LandingPage;
