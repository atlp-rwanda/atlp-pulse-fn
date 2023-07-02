import React, { forwardRef, useContext } from 'react';
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

  return (
    <div
      className={`w-screen h-[8vh] z-10 bg-white dark:bg-dark-bg fixed border-b ${props?.styles}`}
    >
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center h-full justify-between lg:w-full">
          <Link to="/" className="flex flex-row lg:px-5">
            {colorTheme === 'dark' ? (
              <img
                className="w-full cursor-pointer mr-2"
                src={Logo}
                alt="logo"
              />
            ) : (
              <img
                className="w-full cursor-pointer mr-2"
                src={LogoWhite}
                alt="logoWhite"
              />
            )}

            <h1 className="text-3xl font-bold font-lexend text-dark dark:text-dark-text-fill">
              PULSE
            </h1>
          </Link>
          <ul className="hidden lg:flex cursor-pointer">
            <li className="px-5 text-xl dark:text-dark-text-fill">
              <NavLink
                to="/"
                className={(navData) => {
                  if (navData.isActive) return 'text-primary';
                  return '';
                }}
              >
                {t('Home')}
              </NavLink>
            </li>
            {!user?.auth ? (
            <li className="px-5 text-xl dark:text-dark-text-fill">
              <NavLink
                className={(navData) => {
                  if (navData.isActive) return 'text-primary';
                  return '';
                }}
                to="/about"
              >
                {t('About')}
              </NavLink>
            </li>
            ) : (
              ' '
            )}
            {/* <li className="px-5 text-xl dark:text-dark-text-fill">
              <NavLink
                className={(navData) => {
                  if (navData.isActive) return 'text-primary';
                  return '';
                }}
                to="/product"
              >
                {t('Product')}
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="hidden lg:flex lg:w-full justify-end ">
          <button
            type="button"
            id="theme-switch"
            className="px-4 mt-1 cursor-pointer"
            onClick={() => handleTheme()}
          >
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-8" />
            ) : (
              <SunIcon className="w-8 text-dark-text-fill" />
            )}
          </button>
          <Link to={user?.auth ? '/dashboard' : goTo}>
            <Button variant="primary" size="lg">
              {' '}
              {!user?.auth ? t('Sign In') : t('Dashboard')}{' '}
            </Button>
          </Link>
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
            <Link to="/signup/org">
              <Button variant="transparentbtn" size="lg" style="mr-8">
                {' '}
                {t('Register an organization')}{' '}
              </Button>
            </Link>
          )}
        </div>
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
      <ul
        ref={ref}
        className={
          !open
            ? 'hidden'
            : 'absolute bg-white dark:bg-dark-bg w-1/8 justify-end px-8 m-1 right-0 lg:hidden'
        }
      >
        <li className="p-2 w-full mt-2 dark:text-dark-text-fill text-primary">
          <Link to="/">{t('Home')}</Link>
        </li>
        {!user?.auth ? (
          <li className="p-2 w-full dark:text-dark-text-fill">
            <Link to="/pricing">Pricing</Link>
          </li>
        ) : (
          ' '
        )}

        <li className="p-2 w-full dark:text-dark-text-fill">
          <Link to="/product" className="w-full">
            {t('Product')}
          </Link>
        </li>

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
          <Link to="/signup/org">
            <Button variant="transparentbtn" size="lg" style="mr-8">
              {' '}
              {t('Register an organization')}{' '}
            </Button>
          </Link>
        )}
      </ul>
    </div>
  );
});

export default WithClickOutside(Header);
