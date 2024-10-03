import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../App';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPlayCircle,
} from 'react-icons/fa';
import i18next from 'i18next';
import LogoFooter from '../assets/logo.svg';
import getLanguage from '../utils/getLanguage';
import LogoIcon from './logoIcon';

function Footer({ styles }: any) {
  const { t } = useTranslation();
  const lan = getLanguage();
  const userLang = window.navigator.language;
  const changeLan = (e: { target: { value: string } }) => {
    const { value } = e.target;
    i18next.changeLanguage(value);
  };
  const lanRef = useRef<any>();

  useEffect(() => {
    if (lanRef.current) {
      lanRef.current.value = lan;
    }
  }, []);
  return (
    <div
      className={`w-full bg-indigo-100 dark:bg-dark-bg ${styles} page-footer font-serif px-6 py-10`}
    >
      <div className="flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full md:w-[20%]   flex flex-col justify-start pt-4 mb-8 md:mb-0 ">
          <div className="flex  items-center justify-center  ">
            <div className="w-[15%] sm:w-[20%] md:w-[20%]  flex justify-end">
              <LogoIcon className="ml-5 w-full h-10 w-10 " />
            </div>
            <div className="w-[30%] sm:w-[25%] md:w-[30%]  mr-7 md:mr-0 flex justify-start">
              <h1
                className="text-3xl font-bold m-0 leading-none text-center"
                data-testid="pulse"
              >
                PULSE
              </h1>
            </div>
          </div>
          <div className="flex  justify-center space-x-4 mt-4">
            <FaFacebook className=" w-6 h-6" />
            <FaInstagram className=" w-6 h-6" />
            <FaTwitter className=" w-6 h-6" />
            <FaLinkedin className=" w-6 h-6" />
            <FaPlayCircle className=" w-6 h-6" />
          </div>
        </div>
        {/* center */}
        <div className="w-full md:w-[60%] ">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full sm:w-1/2 md:w-1/4 p-4  text-center lg:text-left">
              <h3 className="font-bold mb-2">{t('Dev Pulse')}</h3>
              <ul>
                <li className="mb-1">{t('About us')}</li>
                <li className="mb-1">{t('Contact us')}</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4  text-center lg:text-left">
              <h3 className="font-bold mb-2 ">{t('Product')}</h3>
              <ul>
                <li className="mb-1">{t('Features')}</li>
                <li className="mb-1">{t('Integrations')}</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4   text-center lg:text-left">
              <h3 className="font-bold mb-2">{t('Resources')}</h3>
              <ul>
                <li className="mb-1">{t('Community')}</li>
                <li className="mb-1">{t('Help Center')}</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 p-4   text-center lg:text-left">
              <h3 className="font-bold mb-2">{t('Basic Settings')}</h3>
              <ul>
                <li className="mb-1">{t('Terms and conditions')}</li>
                <li className="mb-1">{t('Privacy and Policies')}</li>
              </ul>
              <select
                name="language"
                defaultValue={userLang}
                data-testid="lanChange"
                ref={lanRef}
                onChange={(e) => {
                  changeLan(e);
                }}
                className="mt-2 outline rounded-md px-2 py-1 dark:text-dark-text-fill dark:bg-dark-bg mx-auto sm:mx-0"
              >
                <option value="en">English</option>
                <option value="kn">Kinyarwanda</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-[20%]  flex items-center justify-center mt-10 mb-8 md:mt-0">
          <span className="text-center lg:text-left">
            © {new Date().getFullYear()} Pulse Technologies
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
