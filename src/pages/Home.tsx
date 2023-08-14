import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { UserContext } from '../hook/useAuth';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from '../components/Buttons';
import About from './About';

import home from '../assets/Home_page_image.png'


const backgroundImageStyle: React.CSSProperties = {
  backgroundImage: `url(${home})`,
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100vh',
  width: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  // OBackgroundSize:'cover',
  // MozBackgroundSize:'cover', 
  // WebkitBackgroundSize:'cover', 

  // WebkitTransform: 'translateZ(0)',
};

function LandingPage() {
  /* istanbul ignore next */
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  useDocumentTitle('Welcome');
  return (
    <div className="">                 
      <Navbar styles="bg-opacity-100 dark:bg-opacity-100" />
    <div className='hero relative'>
        <p className='text-img absolute bottom-1/3 lg:left-44 lg:right-0 lg:text-5xl sm:text-2xl px-4 py-2 md:left-0 md:right-0'>
         The brilliant performance management <br/> platform around the word.</p>
         <div className='absolute items-center justify-start w-full text-2xl md:text-2xl lg:text-1xl md:mt-8 lg:mt-8 text-white top-2/3 lg:right-96'>
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
