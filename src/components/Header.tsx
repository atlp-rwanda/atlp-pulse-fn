import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';

import { MenuIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logoWhite.svg';
import { UserContext } from '../hook/useAuth';
import useDarkMode from '../hook/useDarkMode';

import Button from './Buttons';
import WithClickOutside from './WithClickOutside';

const Header = forwardRef(({ open, setOpen, ...props }: any, ref: any) => {
  // eslint-disable-next-line no-console
  console.log(open);
  const orgToken: any = localStorage.getItem('orgToken');
  const { t } = useTranslation();
  const [colorTheme, setTheme] = useDarkMode();
  /* istanbul ignore next */
  const handleClick = () => setOpen(!open);
  const { user, logout } = useContext(UserContext);

  const handleTheme = () => {
    /* istanbul ignore next */
    localStorage.setItem('color-theme', colorTheme);
    setTheme(colorTheme);
  };
  const goTo = orgToken ? '/users/login' : '/login/org';

  // scroll behaviour to header
  const [showElm, setShowElm] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition >= 50 ? setShowElm(true) : setShowElm(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-screen h-[10vh] z-10 fixed ${props?.styles} ${
        showElm && 'bg-light-footer dark:bg-card-dark'
      }`}
    >
      <div className="px-3 flex items-center w-full h-full justify-between">
        <div className="flex items-center h-full justify-between lg:w-[95%]">
          <div>
            <Link to="/" className="flex flex-row ">
              {colorTheme === 'dark' ? (
                <img
                  className="w-full cursor-pointer w-17"
                  src={LogoWhite}
                  alt="logo"
                />
              ) : (
                <img
                  className="w-full cursor-pointer w-17"
                  src={LogoWhite}
                  alt="logoWhite"
                />
              )}

              <h1 className="text-2xl font-bold font-lexend text-white dark:text-dark-text-fill">
                PULSE
              </h1>
            </Link>
          </div>

          <div className="flex flex-row items-center">
            <ul className="hidden lg:flex cursor-pointer">
              <li className="px-5 text-lg dark:text-dark-text-fill">
                <NavLink
                  to="/"
                  className={(navData) => {
                    if (navData.isActive) return 'text-white';
                    return '';
                  }}
                >
                  {t('Home')}
                </NavLink>
              </li>
              <li className="px-5 text-lg dark:text-dark-text-fill">
                <NavLink
                  className={(navData) => {
                    if (navData.isActive) return 'text-white';
                    return '';
                  }}
                  to="#"
                >
                  {t('About')}
                </NavLink>
              </li>
            </ul>

            <div className="hidden lg:flex lg:w-full justify-end ">
              <Link to={user?.auth ? '/dashboard' : goTo}>
                <Button variant="primary" size="lg">
                  {' '}
                  {!user?.auth ? t('Login') : t('Dashboard')}{' '}
                </Button>
              </Link>

              <button
                type="button"
                id="theme-switch"
                className="px-4 mt-1 cursor-pointer"
                onClick={() => handleTheme()}
              >
                {colorTheme === 'dark' ? (
                  <MoonIcon className="w-6" />
                ) : (
                  <SunIcon className="w-6 text-dark-text-fill" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* DarkMode icon in small size */}

        <div className="flex px-5 lg:hidden">
          <button type="button" className="px-3" onClick={() => handleTheme()}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-6 mr-2" />
            ) : (
              <SunIcon className="w-6 mr-2 text-dark-text-fill" />
            )}
          </button>
          <button type="button" onClick={handleClick}>
            {!open ? (
              <MenuIcon className="w-7 dark:text-dark-text-fill" />
            ) : (
              <XIcon className="w-7 dark:text-dark-text-fill" />
            )}
          </button>
        </div>
      </div>

      {/* For responsive part */}
      <div>
        <ul
          ref={ref}
          className={
            !open
              ? 'hidden'
              : 'absolute bg-white dark:bg-dark-bg w-[280px] justify-end px-8 m-1 right-0 lg:hidden'
          }
        >
          <li className="p-2 w-full mt-2 dark:text-dark-text-fill">
            <Link to="/">{t('Home')}</Link>
          </li>
          {!user?.auth ? (
            <li className="p-2 w-full dark:text-dark-text-fill">
              <Link to="/">About</Link>
            </li>
          ) : (
            ' '
          )}

          <li className="p-2 w-full dark:text-dark-text-fill mt-6 mb-2 bg-primary text-white rounded-md px-[35%]">
            <Link to={user?.auth ? '/dashboard' : goTo} className="w-full">
              {' '}
              {!user?.auth ? t('Sign In') : t('Dashboard')}
            </Link>
          </li>
          {user?.auth ? (
            <Button
              variant="transparentbtn"
              size="lg"
              onClick={() => logout()}
              style="text-red-500 font-bolf dark:text-dark-text-fill mr-8 border border-red-600 dark:border-dark-text-fill"
            >
              {' '}
              {t('Logout')}{' '}
            </Button>
          ) : (
            ''
          )}
        </ul>
      </div>
    </div>
  );
});

export default WithClickOutside(Header);
