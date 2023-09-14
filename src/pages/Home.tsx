import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { UserContext } from '../hook/useAuth';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from '../components/Buttons';
import About from './About';

function LandingPage() {
  /* istanbul ignore next */
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  useDocumentTitle('Welcome');
  return (
    <div className="">
      <Navbar styles="bg-opacity-100 dark:bg-opacity-100 " />
      <div className="relative hero mx-auto ">
        <p
          className="absolute text-center md:text-left text-2xl px-4 py-2  text-white bottom-1/3 lg:left-14 lg:right-0 lg:text-5xl sm:text-3xl md:left-0 md:right-0"
          dangerouslySetInnerHTML={{ __html: t('hero txt') }}
        />

        <div className=" absolute w-full md:w-9/12 text-xl text-white md:text-2xl lg:text-1xl md:mt-8 lg:mt-4 top-2/3">
          {!user?.auth ? (
            <div className="absolute w-full items-center justify-center md:justify-left  text-center flex md:w-fit md:ml-16">
              <Link to="/signup/org">
                <Button
                  variant="secondary"
                  size="md"
                  style="lg:mt-0 px-8 bg-[#7851ff] rounded-md my-4 py-3 font-normal "
                >
                  {t('Join Us')}
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
