import React, { forwardRef, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { UserContext } from '../hook/useAuth';
import Button from './Buttons';
import WithClickOutside from './WithClickOutside';
import LogoIcon from './logoIcon';
import ToggleThemeButton from './TogglethemeIcon';
import MobileDropdown from './Docs/MobileDropdown';

const Header = forwardRef(({ open, setOpen, ...props }: any, ref: any) => {
  const orgToken: any = localStorage.getItem('orgToken');
  const { t } = useTranslation();

  /* istanbul ignore next */
  const handleClick = () => setOpen(!open);
  const { user, logout } = useContext(UserContext);
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  const [mobileDocsOpen, setMobileDocsOpen] = useState<boolean>(false);

  const goTo = orgToken ? '/users/login' : '/login/org';

  return (
    <div
      className={`w-screen h-[5em] z-10 bg-white dark:bg-dark-bg page-header ${props?.className} font-serif`}
      style={props?.style}
    >
      <div className="px-3 flex justify-between items-center w-full h-full">
        <div className="flex items-center h-full justify-between lg:w-full">
          <Link
            to="/"
            className="flex flex-row lg:px-5 text-primary dark:text-dark-text-fill"
          >
            <LogoIcon />
            <h1 className="text-3xl font-bold font-lexend">PULSE</h1>
          </Link>
          <ul className="hidden cursor-pointer lg:flex">
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
            {!user?.auth ? (
              <li className="px-5 text-xl dark:text-dark-text-fill">
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
            ) : (
              ' '
            )}
            <li className="px-5 text-xl dark:text-dark-text-fill">
              <NavLink
                className={() => {
                  if (pathname === 'docs') return 'text-primary';
                  return '';
                }}
                to="/docs/getting-started"
              >
                {t('Docs')}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex w-2/3 justify-end ">
          <ToggleThemeButton />
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
          <ToggleThemeButton />
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
            : 'absolute bg-white dark:bg-dark-bg w-[320px] justify-end px-4 m-1 right-0 lg:hidden'
        }
      >
        <li className="w-full p-2 mt-2 dark:text-dark-text-fill text-primary">
          <Link to="/">{t('Home')}</Link>
        </li>
        {!user?.auth ? (
          <li className="w-full p-2 dark:text-dark-text-fill">
            <Link to="/pricing">Pricing</Link>
          </li>
        ) : (
          ' '
        )}

        <li className="w-full p-2 dark:text-dark-text-fill">
          <Link to="/product" className="w-full">
            {t('Product')}
          </Link>
        </li>
        <div className="flex flex-col p-2 dark:text-dark-text-fill">
          <div
            onClick={() => setMobileDocsOpen((prev) => !prev)}
            className="inline-flex gap-2 items-center"
          >
            <p>{t('Docs')}</p>
            <span>{mobileDocsOpen ? '▲' : '▼'}</span>
          </div>
          {mobileDocsOpen && (
            <div className="ml-4">
              <MobileDropdown />
            </div>
          )}
        </div>

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
            {t('Logout')}
          </Button>
        ) : (
          <Link to="/signupOrg">
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
