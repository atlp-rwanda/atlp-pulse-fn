/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
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
import {
  useLazyQuery
} from '@apollo/client';
import { GET_PROFILE } from '../Mutations/User';
import { UserContext } from '../hook/useAuth';
import { toast } from 'react-toastify';


function DashHeader() {
  /* istanbul ignore next */
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);
  const [profileData, setProfileData] = useState<any>();
  const [getProfile, { refetch }] = useLazyQuery(GET_PROFILE);
  const { user } = useContext(UserContext);

  const [colorTheme] = useDarkMode();
  const [nav, setNav] = useState(false);
  /* istanbul ignore next*/

  const handleClick = () => setNav(!nav);
  const handleShowNotification = () => setShowNotification(!showNotification);
  /* istanbul ignore next */
  const handleShowProfileDropdown = () =>
    setShowprofileDropdown(!showProfileDropdown);
  /* istanbul ignore next*/

  useEffect(() => {
    /* istanbul ignore next*/

    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        /* istanbul ignore next*/
        setProfileData(data);
      } catch (error: any) {
        /* istanbul ignore next*/
        toast.error(error?.message || 'Something went wrong');
      }
    };
    /* istanbul ignore next*/
    fetchData();
  }, []);

  return (
    <>
      {showNotification && (
        <Notification handleShowNotification={handleShowNotification} />
      )}
      {showProfileDropdown && (
        <ProfileDropdown
          handleShowProfileDropdown={handleShowProfileDropdown}
        />
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
              <h1 className="text-3xl font-bold font-lexend text-primary dark:text-dark-text-fill">
                PULSE
              </h1>
            </Link>
          </div>
          <BellIcon
            className="w-6 cursor-pointer ml-auto dark:text-dark-text-fill"
            onClick={handleShowNotification}
          />
          <div onClick={handleShowProfileDropdown}>
            <img
              className="w-8 cursor-pointer ml-4 mr-4 h-8 rounded-full"
              src={
                user?.profileImage
                  ? user?.profileImage
                  : profileData?.getProfile?.avatar
                  ? profileData?.getProfile?.avatar
                  : Avatar
              }
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
          <Sidebar toggle={handleClick} style="flex pt-2 h-[92%]" />
        </ul>
      </div>
    </>
  );
}

export default DashHeader;
