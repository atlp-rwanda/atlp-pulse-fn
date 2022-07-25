import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const notificationDummy = [
  {
    id: 1,
    names: 'Danny deMontes',
    description:
      'Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/39t1o.jpg',
    read: true,
  },
  {
    id: 2,
    names: 'Bruno delaVega',
    description:
      'Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/9iz9.jpg',
    read: false,
  },
  {
    id: 4,
    names: 'Hugo Belalouse',
    description: 'Lorem ipsum',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/3oevdk.jpg',
    read: false,
  },
  {
    id: 5,
    names: 'Johan daGamma',
    description:
      'Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'http://i.imgflip.com/1bij.jpg',
    read: true,
  },
  {
    id: 6,
    names: 'Petriz Schwartz',
    description:
      'Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ ',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/39t1o.jpg',
    read: false,
  },
  {
    id: 7,
    names: 'Alano Snitzel',
    description: 'Lorem ipsum is a placeholder text or a typ',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/39t1o.jpg',
    read: true,
  },
  {
    id: 8,
    names: 'Augusto llorente',
    description:
      'Lorem ipsum is a placeholder text commonly commonly used to demonstrate the visual form of a document or a typ placeholder text commonly commonly used to demonstrate the visual',
    created: '2022-07-22T07:24:07.053Z',
    profile: 'https://i.imgflip.com/3oevdk.jpg',
    read: false,
  },
];

function markRead(
  id: number,
  notifications: typeof notificationDummy,
  setNotifications: Function,
): void {
  setNotifications(
    notifications.map((notification) => {
      if (notification.id === id) {
        return {
          ...notification,
          read: true,
        };
      }
      return notification;
    }),
  );
}
function markAllRead(
  notifications: typeof notificationDummy,
  setNotifications: Function,
): void {
  setNotifications(
    notifications.map((notification) => {
      if (notification.read !== true) {
        return { ...notification, read: true };
      }

      return notification;
    }),
  );
}
function deleteNotification(
  id: number,
  notifications: typeof notificationDummy,
  setNotifications: Function,
): void {
  setNotifications(
    notifications.filter((notification) => notification.id !== id),
  );
}

function Notification({
  handleShowNotification,
}: {
  handleShowNotification: any;
}) {
  const [notifications, setNotifications] = useState(notificationDummy);
  const { t } = useTranslation();
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 px-4">
      <div
        className="bg-[rgba(0,0,0,0.45)] w-full h-full absolute top-0 left-0 z-1"
        role="button"
        aria-label="background"
        tabIndex={0}
        onClick={handleShowNotification}
        onKeyDown={handleShowNotification}
        data-testid="keyClick"
      />
      <div className="absolute top-[60px] right-0 left-0 mx-auto px-2 md:mx-0 md:left-auto md:right-[80px] z-2  w-full max-w-[392px] h-[calc(100%-70px)]">
        <div className="flex flex-col flex-nowrap w-full h-max max-h-full bg-[#E5EAFF] dark:bg-dark-tertiary rounded-[20px]">
          <div className="w-full p-3 border-[rgba(95,91,91,0.5)] dark:border-white border-b-[0.5px]">
            <p className="font-semibold dark:text-white">{t('Notification')}</p>
          </div>
          <div
            className="flex flex-col w-full overflow-auto"
            data-testid="notificationsContainer"
          >
            {notifications.map((notification, index) => (
              <div
                className="w-full p-5 border-[rgba(95,91,91,0.5)] dark:border-white border-b-[0.5px]"
                key={notification.id}
              >
                <div className="flex flex-row justify-between align-center gap-x-[20px] ">
                  <img
                    src={notification.profile}
                    alt="oldMan"
                    className="rounded-[1000px] w-[60px] h-[60px] object-cover cursor-pointer"
                  />

                  <div
                    className="flex flex-col w-full gap-[5px] cursor-pointer"
                    onClick={() => {
                      markRead(
                        notification.id,
                        notifications,
                        setNotifications,
                      );
                    }}
                    data-testid={index === 0 && 'read'}
                  >
                    <p className="font-bold dark:text-white">
                      {notification.names}
                    </p>
                    <p className="text-[#111827] dark:text-white text-[12px]">
                      {notification.description}
                    </p>
                    <p className="text-[12px] dark:text-white">
                      {format(new Date(notification.created), 'MMMM dd, p')}
                    </p>
                  </div>

                  <div className="flex flex-col items-center transition-all">
                    <div
                      className={`h-[10px] w-[10px] rounded-full ${
                        !notification.read
                          ? 'bg-[#148FB6]'
                          : 'border-[rgba(95,91,91,0.5)] dark:border-white border-[1px]'
                      }  mt-[7px] mb-[10px]`}
                    />
                    <XIcon
                      className="border-[rgba(95,91,91,0.5)] dark:fill-white h-[20px] w-[20px] cursor-pointer"
                      onClick={() => {
                        deleteNotification(
                          notification.id,
                          notifications,
                          setNotifications,
                        );
                      }}
                      data-testid={index === 0 && 'delete'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full p-3 flex flex-row align-center justify-between">
            {/* <p className="font-normal text-xs m-1 dark:text-white cursor-pointer">
              See all notification
            </p> */}
            <div
              className="font-normal text-xs m-1 dark:text-white cursor-pointer ml-auto"
              onClick={() => {
                markAllRead(notifications, setNotifications);
              }}
              data-testid="markAllRead"
            >
              {t('Mark all as read')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
