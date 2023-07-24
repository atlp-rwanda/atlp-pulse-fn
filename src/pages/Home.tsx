import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { UserContext } from '../hook/useAuth';
import useDocumentTitle from '../hook/useDocumentTitle';
import Home from '../assets/Home.png'

import Button from '../components/Buttons';
import About from './About';

function LandingPage() {
  /* istanbul ignore next */
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  useDocumentTitle('Welcome');
  return (
    <div className="">                 
      <Header styles="bg-opacity-50 dark:bg-opacity-50" />
      <div className="relative">
        <img src={Home} alt=""/>
        <p className='text-img absolute bottom-1/3 left-44 right-0 px-4 py-2'>
         The brilliant performance management <br/> platform around the word.</p>
         <div className='absolute items-center justify-start w-full text-2xl md:text-2xl lg:text-1xl md:mt-8 lg:mt-8 text-white top-2/3 right-96'>
         {!user?.auth ? (
            <div className=" w-full font absolute text-center justify-center items-center">
            <Link to="/signup/org">
              <Button
                variant="primary"
                size="lg"
                style="lg:mt-0 px-8 rounded-2xl my-4"
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
      <About />
      <Footer styles="dark:bg-opacity-75 bg-opacity-100 " />
     
    </div>
  );
}

export default LandingPage;
