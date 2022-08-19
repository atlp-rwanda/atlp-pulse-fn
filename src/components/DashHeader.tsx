import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logoWhite.svg';
import Avatar from '../assets/avatar.png';
import useDarkMode from '../hook/useDarkMode';
import Sidebar from './Sidebar';
import Notification from './Notification';
import ProfileDropdown from './ProfileDropdown';

function DashHeader() {
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);

  const [colorTheme] = useDarkMode();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleShowNotification = () => setShowNotification(!showNotification);
  const handleShowProfileDropdown = () => setShowprofileDropdown(!showProfileDropdown);

  return (
    <>
      {showNotification && (
        <Notification handleShowNotification={handleShowNotification} />
      )}
      {showProfileDropdown && (
        <ProfileDropdown handleShowProfileDropdown={handleShowProfileDropdown} />
      )}
      <div className="w-screen h-[8vh] z-10 bg-white dark:bg-dark-bg fixed border-b">
        <div className="px-3 flex items-center w-full h-full">
          <div className="flex px-5 lg:hidden">
            <div
              onClick={handleClick}
              onKeyDown={handleClick}
              role="button"
              tabIndex={0}
            >
              {!nav ? (
                <MenuIcon className="w-7 dark:text-dark-text-fill" />
              ) : (
                <XIcon className="w-7 dark:text-dark-text-fill" />
              )}
            </div>
          </div>
          <div className="flex items-center h-full lg:w-full">
            <Link to="/dashboard/super-admin" className="flex flex-row lg:px-5">
              {colorTheme === 'dark' ? (
                <img
                  className="w-full cursor-pointer mr-2"
                  src={Logo}
                  alt="logo"
                />
              ) : (
                <img
                  className="w-full cursor-pointer"
                  src={LogoWhite}
                  alt="logoWhite"
                />
              )}
            </Link>
            <div className="relative">
              <SearchIcon className="hidden lg:flex w-5 absolute lg:ml-6 lg:mt-2 text-gray-400" />
              <input
                type="text"
                name="Search"
                placeholder="Search"
                id="search"
                className="hidden lg:flex text-gray-400 dark:text-dark-text-fill dark:bg-dark-bg border border-gray-600 rounded-md w-72 ml-4 pl-8 py-1"
              />
            </div>
          </div>
          <BellIcon
            className="w-6 cursor-pointer ml-auto dark:text-dark-text-fill"
            onClick={handleShowNotification}
          />
          <div onClick={handleShowProfileDropdown}>
            <img
              className="w-6 cursor-pointer ml-4 mr-8"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
        <ul
          className={
            !nav
              ? 'hidden'
              : 'bg-white dark:bg-dark-bg cursor-pointer lg:hidden'
          }
        >
          <Sidebar style="flex pt-2 h-[92%]" />
        </ul>
      </div>
    </>
  );
}

export default DashHeader;
