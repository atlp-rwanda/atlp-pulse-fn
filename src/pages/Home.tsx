import { useTranslation } from 'react-i18next';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { add } from 'date-fns';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { UserContext } from '../hook/useAuth';
import useDocumentTitle from '../hook/useDocumentTitle';

import Button from '../components/Buttons';

function LandingPage() {
  /* istanbul ignore next */
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  useDocumentTitle('Welcome');

  return (
    <div className="hero">
      <Header styles="bg-opacity-50 dark:bg-opacity-50" />
      <div className="hero w-full min-h-full   flex flex-col justify-center grow items-center py-20">
        <div className="grid h-full lg:grid-cols-2 w-full justify-around content-center pb-6">
          <div className="flex h-full flex-col items-center justify-start  w-full px-4 py-2">
            <h1 className="mt-10 sm:mt-10 text-2xl sm:text-3xl md:pl-10 md:text-5xl font-bold text-white dark:text-dark-text-fill font-lexend md:text-left">
              The brilliant management platform around the word
            </h1>

            {!user?.auth ? (
              <div className="w-full items-center mt-6 ml-14">
                <Link to="/signup/org">
                  <Button
                    variant="primary"
                    size="lg"
                    style="mt-12 lg:mt-0 px-8 text-xl font-bold uppercase my-4"
                  >
                    {' '}
                    {t('Join Us')}{' '}
                  </Button>
                </Link>
              </div>
            ) : (
              ' '
            )}
          </div>
        </div>
      </div>
      <Footer styles="dark:bg-opacity-75 bg-opacity-100" />
    </div>
  );
}

export default LandingPage;
