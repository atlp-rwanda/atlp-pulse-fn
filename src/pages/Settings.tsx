import React, { useState, useEffect, useRef, useContext } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Switch } from '@headlessui/react';
import { useMutation, useQuery } from '@apollo/client';
import getLanguage from '../utils/getLanguage';
import useDocumentTitle from '../hook/useDocumentTitle';
import {
  updatePushNotifications,
  updateEmailNotifications,
  updatedEmailNotifications,
  updatedPushNotifications,
} from '../Mutations/notificationMutation';
import { UserContext } from '../hook/useAuth';
import { ThemeContext } from '../hook/ThemeProvider';

function Settings() {
  useDocumentTitle('Settings');
  const { t } = useTranslation();
  const lanRef = useRef<any>();
  const lan = getLanguage();
  const { colorTheme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const [updateEmailNotificationsMutation] = useMutation(
    updateEmailNotifications,
  );
  const [updatePushNotificationsMutation] = useMutation(
    updatePushNotifications,
  );
  const { data: pushData } = useQuery(updatedPushNotifications, {
    variables: { getUpdatedPushNotificationsId: user?.userId },
  });
  const [pushEnabled, setPushEnabled] = useState(
    pushData?.getUpdatedPushNotifications || false,
  );
  const { data } = useQuery(updatedEmailNotifications, {
    variables: { getUpdatedEmailNotificationsId: user?.userId },
  });
  const [emailEnabled, setEmailEnabled] = useState(
    data?.getUpdatedEmailNotifications || false,
  );

  const handleThemeChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setTheme(value);
    localStorage.setItem('color-theme', colorTheme);
  };
  const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const defaultTheme: any = localStorage.getItem('color-theme')
    ? localStorage.getItem('color-theme')
    : systemMode;
  const userLang = window.navigator.language;

  const handleLanChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    i18next.changeLanguage(value);
  };

  const handleEmailNotificationChange = async () => {
    try {
      const { data } = await updateEmailNotificationsMutation({
        variables: { updateEmailNotificationsId: user?.userId },
      });
      setEmailEnabled((prevEmailEnabled: any) => !prevEmailEnabled);
      return data;
    } catch (error: any) {
      return `Error updating email notifications:${error}`;
    }
  };

  const handlePushNotificationChange = async () => {
    try {
      const { data: pushData } = await updatePushNotificationsMutation({
        variables: { updatePushNotificationsId: user?.userId },
      });
      setPushEnabled((prevPushEnabled: any) => !prevPushEnabled);
      return pushData;
    } catch (error: any) {
      return `Error updating push notifications: ${error}`;
    }
  };

  useEffect(() => {
    if (data?.getUpdatedEmailNotifications !== undefined) {
      setEmailEnabled(data.getUpdatedEmailNotifications);
    }
  }, [data]);

  useEffect(() => {
    if (pushData?.getUpdatedPushNotifications !== undefined) {
      setPushEnabled(pushData.getUpdatedPushNotifications);
    }
  }, [pushData]);

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
                value={defaultTheme}
                data-testid="themeChange"
                onChange={(e) => handleThemeChange(e)}
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
                onChange={(e) => handleLanChange(e)}
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
                  {t('Privacy and Security')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('Privacy and Security')}
                </p>
              </div>
              <Link
                className="ml-auto mt-2 text-xs md:text-base text-gray-600 dark:text-dark-text-fill"
                to="#link"
              >
                <h4>{t('Change')}</h4>
              </Link>
            </li>
            <li className="flex items-center pt-2 pb-1">
              <div className="w-[33vw]">
                <h1 className="font-bold dark:text-dark-text-fill">
                  {t('Login Activity')}
                </h1>
                <p className="text-sm text-gray-600 dark:text-dark-text-fill">
                  {t('History of your login sessions')}
                </p>
              </div>
              <Link
                to="#link"
                className="ml-auto mt-2 text-xs md:text-base text-gray-600 dark:text-dark-text-fill"
              >
                <h4>{t('View')}</h4>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;