/* eslint-disable no-restricted-globals */



import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { MenuIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import { MoonIcon , BellIcon } from '@heroicons/react/solid';
import { useLazyQuery, useSubscription, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logoWhite.svg';
import Avatar from '../assets/avatar.png';
import useDarkMode from '../hook/useDarkMode';
import Sidebar from './Sidebar';
import Notification from './Notification';
import ProfileDropdown from './ProfileDropdown';
import { GET_PROFILE } from '../Mutations/User';
import { UserContext } from '../hook/useAuth';
import {
  getAllNotification,
  NotificationSubscription,
} from '../Mutations/notificationMutation';

export const TICKETS_NOTS_SUB = gql`
  subscription OnTicket {
    sendNotsOnTickets {
      id
      message
      createdAt
      read
      receiver

      sender {
        id
        email
        role
        profile {
          name
        }
      }
    }
  }
`;

function DashHeader() {
  /* istanbul ignore next */
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);
  const [profileData, setProfileData] = useState<any>();
  const [getProfile] = useLazyQuery(GET_PROFILE);
  const { user, setNotificationData, addNotification } =
    useContext(UserContext);
  const [getNotification] = useLazyQuery(getAllNotification);

  const notifications = user?.notifications;

//   const [colorTheme] = useDarkMode();
  const [colorTheme, setTheme] = useDarkMode();
  const [nav, setNav] = useState(false);

  /* istanbul ignore next */
  const handleClick = () => setNav(!nav);
  const handleShowNotification = () => setShowNotification(!showNotification);

  useSubscription(TICKETS_NOTS_SUB, {
    onData: (data: any) => {
      if (user.userId === data.data.data.sendNotsOnTickets.receiver)
        addNotification(data.data.data.sendNotsOnTickets);
    },
  });

  const { data, loading } = useSubscription(NotificationSubscription, {
    onData: (data:any) => {
      setNotificationData([data.data.data.newRating, ...notifications]);
    },
    variables: {
      receiver: user?.userId,
    },
  });

  /* istanbul ignore next */
  const handleShowProfileDropdown = () =>
    setShowprofileDropdown(!showProfileDropdown);

  /* istanbul ignore next */
  useEffect(() => {
    /* istanbul ignore next */
    const fetchData = async () => {
      try {
        const { data } = await getProfile();
        /* istanbul ignore next */
        setProfileData(data);
      } catch (error: any) {
        /* istanbul ignore next */
        toast.error(error?.message || 'Something went wrong');
      }
    };
    /* istanbul ignore next */
    fetchData();
  }, []);
  const handleTheme = () => {
    /* istanbul ignore next */
    localStorage.setItem('color-theme', colorTheme);
    setTheme(colorTheme);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNotification();
        setNotificationData(data.getAllNotification);
      } catch (error: any) {
        // eslint-disable-next-line no-console
        console.log('error');
      }
    };
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
      <div className="w-screen h-[8vh] z-10 bg-[#E0E7FF] dark:bg-dark-bg fixed border-b">
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

          <div className="inline-flex relative items-center p-0 text-sm font-medium text-center text-black  ml-auto dark:bg-dark-bg rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800">
         
            <BellIcon
              className="w-6 cursor-pointer ml-auto  dark:text-dark-text-fill"
              onClick={handleShowNotification}
            />
            <span className="sr-only">Notifications</span>
            {notifications?.filter((item: any) => `${item.read}` === 'false')
              .length ? (
              <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                {
                  notifications?.filter(
                    (item: any) => `${item.read}` === 'false',
                  ).length
                }
              </div>
            ) : (
              ''
            )}
             <button
            type="button"
            id="theme-switch"
            className="px-3 mt-1 cursor-pointer"
            onClick={() => handleTheme()}
          >
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-6 mr-2" />
            ) : (
              <SunIcon className="w-6 mr-2 text-dark-text-fill" />
            )}
          </button>
           {/* <button type="button" className="px-3" onClick={() => handleTheme()}>
            {colorTheme === 'dark' ? (
              <MoonIcon className="w-6 mr-2" />
            ) : (
              <SunIcon className="w-6 mr-2 text-dark-text-fill" />
            )}
          </button> */}
          </div>

          <div onClick={handleShowProfileDropdown}>
            <img
              className="w-8 cursor-pointer ml-4 mr-4 h-8 rounded-full"
              src={
                // eslint-disable-next-line no-nested-ternary
                user?.profileImage
                  ? user?.profileImage
                  : profileData?.getProfile?.avatar
                  ? profileData?.getProfile?.avatar
                  : Avatar
              }
              alt="avatar"
            />
          </div>
          <div className="flex px-5 lg:hidden">
         
          {/* <button type="button" onClick={handleClick}>
            {!open ? (
              <MenuIcon className="w-7 dark:text-dark-text-fill" />
            ) : (
              <XIcon className="w-7 dark:text-dark-text-fill" />
            )}
          </button> */}
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
