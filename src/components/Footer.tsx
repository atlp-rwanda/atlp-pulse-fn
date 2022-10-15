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
import LogoFooter from '../assets/logoWhite.svg';
import getLanguage from '../utils/getLanguage';

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
      className={`w-full bg-primary dark:bg-dark-bg text-gray-300 mt-auto ${styles}`}
    >
      <div className="px-2 flex flex-col lg:flex-row justify-between items-center w-full h-full">
        <div className="flex flex-col lg:flex-row items-center py-5">
          <div className="flex flex-col mr-12 lg:mr-0">
            <div className="flex mb-2">
              <img className="mr-2 lg:mr-0" src={LogoFooter} alt="logo" />
              <h1
                className="text-3xl font-bold text-primary dark:text-dark-text-fill"
                data-testid="pulse"
              >
                PULSE
              </h1>
            </div>
            <div className="flex border-none justify-around items-center ml-6 mt-4 cursor-pointer">
              <FaFacebook className=" fa-xs " />
              <FaInstagram className=" " />
              <FaTwitter className="mr-1 " />
              <FaLinkedin className="mr-1 " />
              <FaPlayCircle className="" />
            </div>
          </div>
          <div className="flex flex-col py-4 lg:py-0 lg:flex-row">
            <div className="flex py-4">
              <ul className="lg:flex lg:flex-col mr-[8vh] md:mr-[16vh] lg:mr-0 lg:ml-28 cursor-pointer">
                <li className="py-2 text-sm font-bold">{t('Dev Pulse')}</li>
                <li className="py-2 text-xs">{t('About us')}</li>
                <li className="py-2 text-xs">{t('Contact us')}</li>
              </ul>
              <ul className="lg:flex lg:flex-col ml-[8vh] md:ml-[16vh] lg:ml-28 cursor-pointer">
                <li className="py-2 text-sm font-bold">{t('Product')}</li>
                <li className="py-2 text-xs">{t('Features')}</li>
                <li className="py-2 text-xs">{t('Integrations')}</li>
              </ul>
            </div>
            <div className="flex py-4">
              <ul className="lg:flex lg:flex-col mr-[8vh] md:mr-[16vh] lg:mr-0 lg:ml-28 cursor-pointer">
                <li className="py-2 text-sm font-bold">{t('Resources')}</li>
                <li className="py-2 text-xs">{t('Community')}</li>
                <li className="py-2 text-xs">{t('Help Center')}</li>
              </ul>
              <ul className="lg:flex lg:flex-col ml-[8vh] md:ml-[16vh] lg:ml-28 cursor-pointer">
                <li className="py-2 text-xs">{t('Terms and conditions')}</li>
                <li className="py-2 text-xs">{t('Privacy and Policies')}</li>
                <select
                  name="language"
                  defaultValue={userLang}
                  data-testid="lanChange"
                  ref={lanRef}
                  onChange={(e) => {
                    changeLan(e);
                  }}
                  className="bg-dark-bg mt-2 outline rounded-md px-2 py-1 text-white dark:text-dark-text-fill dark:bg-dark-bg "
                >
                  <option value="en">English</option>
                  <option value="kn">Kinyarwanda</option>
                  <option value="fr">Français</option>
                </select>
              </ul>
            </div>
          </div>
        </div>
        <div className=" lg:flex">
          <span className="px-4 lg:py-3 cursor-pointer text-lg">
            © {new Date().getFullYear()} Pulse Technologies
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
