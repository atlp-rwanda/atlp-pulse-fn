/* eslint-disable */
import React, { useState, useEffect, useRef, useContext } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Switch } from '@headlessui/react';
import { gql, useMutation, useQuery } from '@apollo/client';
import getLanguage from '../utils/getLanguage';
import useDocumentTitle from '../hook/useDocumentTitle';
import {
  updatePushNotifications,
  updateEmailNotifications,
} from '../Mutations/notificationMutation';
import {
  EnableTwoFactorAuth,
  DisableTwoFactorAuth,
} from './Organization/2faMutation';
import {
  updatedEmailNotifications,
  updatedPushNotifications,
} from '../queries/notification.queries';
import { UserContext } from '../hook/useAuth';
import { ThemeContext } from '../hook/ThemeProvider';

const GetProfile = gql`
  query GetProfile {
    getProfile {
      user {
        twoFactorAuth
      }
    }
  }
`;

function Settings() {
  useDocumentTitle('Settings');
  const { t } = useTranslation();
  const lanRef = useRef<any>();
  const lan = getLanguage();
  const { colorTheme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [enableTwoFactorAuth] = useMutation(EnableTwoFactorAuth);
  const [disableTwoFactorAuth] = useMutation(DisableTwoFactorAuth);
  const [updateEmailNotificationsMutation] = useMutation(
    updateEmailNotifications,
  );
  const [updatePushNotificationsMutation] = useMutation(
    updatePushNotifications,
  );

  const { data: profileData } = useQuery(GetProfile, {
    onCompleted: (data) =>
      setIsTwoFactorEnabled(data.getProfile.user.twoFactorAuth),
  });
  const { data: pushData } = useQuery(updatedPushNotifications, {
    variables: { getUpdatedPushNotificationsId: user?.userId },
    onCompleted: (data) => setPushEnabled(data.getUpdatedPushNotifications),
  });
  const { data: emailData } = useQuery(updatedEmailNotifications, {
    variables: { getUpdatedEmailNotificationsId: user?.userId },
    onCompleted: (data) => setEmailEnabled(data.getUpdatedEmailNotifications),
  });

  const [pushEnabled, setPushEnabled] = useState(false);
  const [emailEnabled, setEmailEnabled] = useState(false);

  const handleEnableTwoFactor = async () => {
    try {
      await enableTwoFactorAuth({ variables: { email: user?.email } });
      setIsTwoFactorEnabled(true);
    } catch (error) {
      console.error('Error enabling two-factor authentication:', error);
    }
  };

  const handleDisableTwoFactor = async () => {
    try {
      await disableTwoFactorAuth({ variables: { email: user?.email } });
      setIsTwoFactorEnabled(false);
    } catch (error) {
      console.error('Error disabling two-factor authentication:', error);
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setTheme(value);
    localStorage.setItem('color-theme', value);
  };

  const userLang = window.navigator.language;
  const handleLanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    i18next.changeLanguage(value).catch((error) => {
      console.error('Error changing language:', error);
    });
  };

  const handleEmailNotificationChange = async () => {
    try {
      await updateEmailNotificationsMutation({
        variables: { updateEmailNotificationsId: user?.userId },
      });
      setEmailEnabled((prevEmailEnabled) => !prevEmailEnabled);
    } catch (error) {
      console.error('Error updating email notifications:', error);
    }
  };

  const handlePushNotificationChange = async () => {
    try {
      await updatePushNotificationsMutation({
        variables: { updatePushNotificationsId: user?.userId },
      });
      setPushEnabled((prevPushEnabled) => !prevPushEnabled);
    } catch (error) {
      console.error('Error updating push notifications:', error);
    }
  };

  useEffect(() => {
    if (lanRef.current) {
      lanRef.current.value = lan;
    }
  }, []);

  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row justify-center pt-10">
        <div className="rounded-lg w-[90%] mb-10 p-6 bg-indigo-100 dark:bg-dark-bg">
          <h1 className="mb-4 font-bold text-xl dark:text-dark-text-fill">
            {t('Settings')}
          </h1>
          <div>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Profile')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Edit profile, export account data, ...')}
                </p>
              </div>
              <Link
                className="ml-auto text-gray-600 text-xs md:text-base dark:text-dark-text-fill"
                to="/profile"
              >
                <h4>{t('Change')}</h4>
              </Link>
            </li>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Appearance')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Theme preferences')}
                </p>
              </div>
              <select
                value={colorTheme}
                data-testid="themeChange"
                onChange={handleThemeChange}
                className="ml-auto bg-white border border-gray-400 px-[2vh] h-8 rounded-md text-xs md:text-sm text-gray-600 dark:text-dark-text-fill dark:bg-dark-bg outline-none"
              >
                <option value="light">{t('Light theme')}</option>
                <option value="dark">{t('Dark theme')}</option>
              </select>
            </li>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Language')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Language preferences')}
                </p>
              </div>
              <select
                defaultValue={userLang}
                data-testid="lanChange"
                ref={lanRef}
                onChange={handleLanChange}
                className="ml-auto bg-white border px-2 h-8 rounded-md text-xs md:text-sm text-gray-600 dark:text-dark-text-fill dark:bg-dark-bg outline-none"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="kn">Ikinyarwanda</option>
              </select>
            </li>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Email notifications')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Feedback emails, reminder emails, news emails')}
                </p>
              </div>
              <Switch
                checked={emailEnabled}
                data-testid="emailChange"
                onChange={handleEmailNotificationChange}
                className={`ml-auto border ${
                  emailEnabled ? 'dark:border-primary' : ''
                } relative inline-flex h-6 w-12 items-center rounded-full`}
              >
                <span
                  className={`${
                    emailEnabled
                      ? 'bg-primary   translate-x-6'
                      : 'bg-gray-300 translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full`}
                />
              </Switch>
            </li>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Push notifications')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Grade updates, session reminders, performance comments')}
                </p>
              </div>
              <Switch
                checked={pushEnabled}
                data-testid="pushChange"
                onChange={handlePushNotificationChange}
                className={` ml-auto border ${
                  pushEnabled ? 'dark:border-primary' : ''
                } relative inline-flex h-6 w-12 items-center rounded-full`}
              >
                <span
                  className={`${
                    pushEnabled
                      ? 'bg-primary   translate-x-6'
                      : 'bg-gray-300 translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full `}
                />
              </Switch>
            </li>
            <li className="flex items-center border-b border-gray-400 pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Two-factor authentication')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Get extra security by receiving a code on your email')}
                </p>
              </div>
              <Switch
                checked={isTwoFactorEnabled}
                data-testid="2faChange"
                onChange={
                  isTwoFactorEnabled
                    ? handleDisableTwoFactor
                    : handleEnableTwoFactor
                }
                className={`ml-auto border ${
                  isTwoFactorEnabled ? 'dark:border-primary' : ''
                } relative inline-flex h-6 w-12 items-center rounded-full`}
              >
                <span
                  className={`${
                    isTwoFactorEnabled
                      ? 'bg-primary   translate-x-6'
                      : 'bg-gray-300 translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full`}
                />
              </Switch>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
