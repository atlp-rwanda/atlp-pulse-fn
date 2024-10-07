import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon } from '@heroicons/react/outline';
import { BellIcon, MoonIcon } from '@heroicons/react/solid';
import { useLazyQuery, useSubscription, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import Avatar from '../assets/avatar.png';
import Notification from './Notification';
import ProfileDropdown from './ProfileDropdown';
import { GET_PROFILE } from '../queries/user.queries';
import { UserContext } from '../hook/useAuth';
import {
  NotificationSubscription,
  PUSH_NOTIFICATION_SUB,
} from '../Mutations/notificationMutation';
import { getAllNotification } from '../queries/notification.queries';
import { MenuContext } from '../hook/menuProvider';
import ToggleThemeButton from './TogglethemeIcon';
import LogoIcon from './logoIcon';

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
  const { minimized, toggleMinMenu, showNav, toggleNav } =
    useContext(MenuContext);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);
  const [profileData, setProfileData] = useState<any>();
  const [getProfile] = useLazyQuery(GET_PROFILE);
  const { user, setNotificationData, addNotification } =
    useContext(UserContext);
  const [getNotification] = useLazyQuery(getAllNotification);

  const notifications = user?.notifications;

  /* istanbul ignore next */
  const handleShowNotification = () => setShowNotification(!showNotification);

  /* istanbul ignore next */
  useSubscription(TICKETS_NOTS_SUB, {
    onData: (data: any) => {
      /* istanbul ignore next */
      if (user.userId === data.data.data.sendNotsOnTickets.receiver)
        addNotification(data.data.data.sendNotsOnTickets);
    },
  });

  /* istanbul ignore next */
  useSubscription(NotificationSubscription, {
    onData: (data) => {
      /* istanbul ignore next */
      setNotificationData([data.data.data.newRating, ...notifications]);
    },
    variables: {
      receiver: user?.userId,
    },
  });
  useSubscription(PUSH_NOTIFICATION_SUB, {
    onData: (data) => {
      setNotificationData([data.data.data.pushNotification, ...notifications]);
    },
    variables: {
      receiverId: user?.userId,
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
        setProfileData(data);
      } catch (error: any) {
        toast.error(error?.message || 'Something went wrong');
      }
    };
    /* istanbul ignore next */
    fetchData();
  }, []);
  // eslint-disable-next-line no-nested-ternary
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
      <div className="font-serif w-full py-4 z-20 bg-indigo-100 dark:bg-dark-bg page-header">
        <div className="px-3 flex items-center w-full font-serif">
          <div className="flex px-5 lg:hidden">
            <div
              onClick={toggleNav}
              onKeyDown={toggleNav}
              role="button"
              tabIndex={0}
            >
              {!showNav ? (
                <MenuIcon className="w-7 dark:text-dark-text-fill" />
              ) : (
                <XIcon className="w-7 dark:text-dark-text-fill" />
              )}
            </div>
          </div>
          <div className="hidden lg:flex">
            <div
              onClick={toggleMinMenu}
              className="w-7"
              role="button"
              tabIndex={0}
            >
              {minimized ? (
                <MenuIcon className="w-full dark:text-dark-text-fill" />
              ) : (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full box-border px-0.5"
                    style={{
                      verticalAlign: 'middle',
                      fill: 'currentColor',
                      overflow: 'hidden',
                    }}
                    version="1.1"
                    viewBox="204.77 256 563.28 460.8"
                  >
                    <path d="M445.1328 325.8368a35.3792 35.3792 0 0 1-35.84-34.9184c0-19.3024 16.0256-34.9184 35.84-34.9184H732.16c19.8144 0 35.8912 15.616 35.8912 34.9184a35.3792 35.3792 0 0 1-35.84 34.9184H445.0816z m-14.336 195.4816a35.3792 35.3792 0 0 1-35.84-34.9184c0-19.3024 16.0256-34.9184 35.84-34.9184h301.312c19.8144 0 35.8912 15.616 35.8912 34.9184a35.3792 35.3792 0 0 1-35.84 34.9184H430.7456zM283.0336 388.608l44.3392 68.7104a34.3552 34.3552 0 0 1-11.264 48.128 36.4544 36.4544 0 0 1-49.5104-11.008l-56.32-87.2448a34.0992 34.0992 0 0 1 0-37.1712l56.32-87.2448a36.4544 36.4544 0 0 1 49.4592-11.008c16.7936 10.24 21.8624 31.7952 11.264 48.128l-44.288 68.7104zM251.4432 716.8a35.3792 35.3792 0 0 1-35.84-34.9184c0-19.2512 16.0256-34.9184 35.84-34.9184h480.6656c19.8144 0 35.8912 15.6672 35.8912 34.9184a35.3792 35.3792 0 0 1-35.84 34.9184H251.392z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center h-full lg:w-full">
            <Link
              to="/super-admin"
              className="flex flex-row lg:px-5 text-dark dark:text-dark-text-fill"
            >
              <LogoIcon />
              <h1 className="text-3xl font-bold font-lexend">PULSE</h1>
            </Link>
          </div>

          <div className="inline-flex relative items-center p-0 text-sm font-medium text-center text-black  ml-auto dark:bg-dark-bg rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300   dark:focus:ring-blue-800">
            <ToggleThemeButton className="dark:text-dark-text-fill" />
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
          </div>

          <div onClick={handleShowProfileDropdown}>
            <img
              className="w-8 cursor-pointer ml-4 mr-4 h-8 rounded-full object-cover"
              src={
                // eslint-disable-next-line no-nested-ternary
                user?.profileImage
                  ? // eslint-disable-next-line no-nested-ternary
                    user?.profileImage
                  : profileData?.getProfile?.avatar
                  ? // eslint-disable-next-line no-nested-ternary
                    profileData?.getProfile?.avatar
                  : Avatar
              }
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashHeader;
