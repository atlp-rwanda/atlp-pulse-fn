import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink , useLocation} from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserContext } from '../hook/useAuth';
import Button from './Buttons';
import WithClickOutside from './WithClickOutside';
import ToggleThemeButton from './TogglethemeIcon';
import LogoIcon from './logoIcon';

const Header = forwardRef(({ open, setOpen, ...props }: any, ref: any) => {
  const orgToken: any = localStorage.getItem('orgToken');
  const { t } = useTranslation();

  /* istanbul ignore next */
  const location = useLocation()
  const pathname = location.pathname.split("/")[1]
  const handleClick = () => setOpen(!open);
  const { user, logout } = useContext(UserContext);

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
      className={`w-screen h-[8vh] z-10 dark:bg-dark-bg fixed ${props?.styles}
      ${showElm && 'bg-indigo-300 dark:bg-card-dark'}`}
    >
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center h-full justify-between lg:w-[60%]">
          <Link
            to="/"
            className="flex flex-row lg:px-5 text-white dark:text-dark-text-fill"
          >
            <LogoIcon />

            <h1 className="text-3xl font-bold font-lexend">PULSE</h1>
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
              <li className="px-5 text-xl text-white dark:text-dark-text-fill">
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
             <li className="px-5 text-xl  text-white dark:text-dark-text-fill">
                <NavLink
                  className={(navData) => {
                    if (navData.isActive) return 'text-primary';
                    return '';
                  }}
                  to="/pricing"
                >
                  {t('Pricing')}
                </NavLink>
              </li>
          
             <li className="px-5 text-xl  text-white dark:text-dark-text-fill">
              <NavLink
                className={() => {
                  if (pathname==="docs") return 'text-primary';
                  return '';
                }}
                to="/docs/org-signin"
              >
                {t('Docs')}
              </NavLink>
            </li>
            
          </ul>
        </div>
        <div className="hidden lg:flex lg:w-[300px] justify-end ">
          <ToggleThemeButton className="text-white dark:text-inherit" />
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
              <Button
                variant="bg-transparent text-primary text-white border border-primary dark:border-dark-text-fill"
                size="lg"
                style="mr-8"
              >
                {' '}
                {t('Register an organization')}{' '}
              </Button>
            </Link>
          )}
        </div>
        <div className="flex px-5 lg:hidden items-center">
          <ToggleThemeButton className="w-6 text-white dark:text-inherit" />
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
            : 'absolute bg-indigo-200 dark:bg-dark-bg w-1/8 justify-end px-8 m-1 right-0 lg:hidden'
        }
      >
        <li className="p-2 w-full mt-2 dark:text-dark-text-fill text-primary">
          <Link to="/">{t('Home')}</Link>
        </li>
        {!user?.auth ? (
          <li className="p-2 w-full dark:text-dark-text-fill">
            <Link to="/About">About</Link>
          </li>
        ) : (
          ' '
        )}
        <li className="p-2 w-56 text-center dark:text-dark-text-fill mt-6 mb-2 bg-primary text-white rounded-md">
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
            style="text-red-500 w-56 font-bolf dark:text-dark-text-fill ml-0 border border-red-600 dark:border-dark-text-fill"
          >
            {' '}
            {t('Logout')}{' '}
          </Button>
        ) : (
          <Link to="/signup/org">
            <Button variant="transparentbtn  ml-0" size="lg" style="mr-8">
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
