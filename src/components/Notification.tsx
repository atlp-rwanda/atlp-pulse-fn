/* istanbul ignore file */
import React, { useContext } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import {
  deleteNotification,
  markAsRead,
  markAllAsRead,
} from '../Mutations/notificationMutation';

import Avatar from '../assets/avatar.png';
import { UserContext } from '../hook/useAuth';
/* istanbul ignore next */
function Notification({
  handleShowNotification,
}: {
  handleShowNotification: any;
}) {
  const [delNotification] = useMutation(deleteNotification);
  const [readNotification] = useMutation(markAsRead);
  const [readAllNotification] = useMutation(markAllAsRead);
  const { user, setNotificationData } = useContext(UserContext);
  const navigate = useNavigate();

  const notifications = user?.notifications;
  const { t } = useTranslation();
  /* istanbul ignore next */
 /* istanbul ignore next */
  function removeNotification(id: number): void {
     /* istanbul ignore next */
    setNotificationData(
      notifications.filter((notification: any) => notification.id !== id),
    );
     /* istanbul ignore next */
    delNotification({
      variables: {
        deleteNotificationsId: id,
      },
    });
  }
  /* istanbul ignore next */
// eslint-disable-next-line no-nested-ternary
 /* istanbul ignore next */
  function markRead(id: number): void {
    // eslint-disable-next-line no-nested-ternary
    setNotificationData(
       /* istanbul ignore next */
      notifications.map((notification: any) => {
        // eslint-disable-next-line no-nested-ternary
         /* istanbul ignore next */
        if (notification.id === id) {
          return {
            ...notification,
            read: true,
          };
        }
 /* istanbul ignore next */
        return notification;
      }),
    );
     /* istanbul ignore next */
    readNotification({
      variables: {
        markAsReadId: id,
      },
    });
  }

  /* istanbul ignore next */
  function markAllRead(): void {
     /* istanbul ignore next */
    setNotificationData(
       /* istanbul ignore next */
      notifications?.map((notification: any) => {
        // eslint-disable-next-line no-nested-ternary
         /* istanbul ignore next */
        if (notification.read !== true) {
          // eslint-disable-next-line no-nested-ternary
           /* istanbul ignore next */
          return { ...notification, read: true };
        }
 /* istanbul ignore next */
        return notification;
      }),
    );
    readAllNotification();
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 px-4">
      <div
        className="bg-dark-45 w-full h-full absolute top-0 left-0 z-1"
        role="button"
        aria-label="background"
        tabIndex={0}
        onClick={handleShowNotification}
        onKeyDown={handleShowNotification}
        data-testid="keyClick"
      />
      <div className="absolute top-[60px] right-0 left-0 mx-auto px-2 md:mx-0 md:left-auto md:right-[80px] z-2  w-full max-w-[392px] h-[calc(100%-70px)]">
        <div className="flex flex-col flex-nowrap w-full h-max max-h-full bg-[#E5EAFF] dark:bg-dark-tertiary rounded-[20px]">
          <div className="flex justify-between items-center w-full p-3 border-border-dark dark:border-white border-b-[0.5px]">
            <p className="font-semibold dark:text-white">{t('Notification')}</p>
            <XIcon
              fontSize="70px"
              data-testid="closeIcon"
              className="border-black dark:fill-white h-[25px] w-[25px] cursor-pointer md:hidden"
              onClick={handleShowNotification}
            />
          </div>
          <div
           /* istanbul ignore next */
            className="flex flex-col w-full overflow-auto"
            data-testid="notificationsContainer"
          >
            {notifications?.map((notification: any, index: any) => (
              <div
                className="w-full p-5 border-border-dark dark:border-white border-b-[0.5px] "
                key={notification.id}
              >
                <div
                  className={`flex flex-row justify-between align-center gap-x-[10px] ${
                    notification.read === 'false'
                      ? 'bg-[#E5EAFF] font-bold dark:bg-dark-tertiary'
                      : 'border-border-dark dark:border-white dark:bg-dark-tertiary opacity-30 hover:bg-[#E5EAFF] hover:opacity-100 dark:hover:bg-dark-tertiary'
                  }`}
                >
                  <img
                    src={
                      notification?.sender?.profile &&
                      notification?.sender?.profile.avatar
                        ? notification?.sender?.profile.avatar
                        : Avatar
                    }
                    alt="oldMan"
                    className="rounded-[1000px] w-[60px] h-[60px] object-cover cursor-pointer"
                  />

                  <div
                    className="flex flex-col w-full gap-[5px] cursor-pointer"
                     /* istanbul ignore next */
                    onClick={() => {
                       /* istanbul ignore next */
                      markRead(notification.id);
                      /* istanbul ignore next */
                      if (
                        notification.message.includes(
                          'Ticket has been sent to you.',
                        ) ||
                        notification.message.includes(
                          'A reply on ticket has been sent.',
                        )
                      ) {
                        const ticketId: string =
                        // eslint-disable-next-line no-nested-ternary
                         /* istanbul ignore next */
                          notification.message.split(' ')[
                            // eslint-disable-next-line no-nested-ternary
                            notification.message.split(' ').length - 1
                          ];
                           /* istanbul ignore next */
                        handleShowNotification();
                        return navigate(`/tickets/${ticketId}`);
                      }
                      /* istanbul ignore next */
                      if (user.role === 'trainee') {
                        navigate('/performance');
                      } else {
                        navigate('/ratings');
                      }
                         /* istanbul ignore next */
                      return handleShowNotification();
                    }}
                    data-testid={index === 0 && 'read'}
                  >
                    <p className="font-bold dark:text-white">
                      {notification?.sender?.profile &&
                      notification?.sender?.profile.name
                        ? notification.sender.profile.name
                        : notification.sender.email}
                    </p>
                    <p className="text-[#111827] dark:text-white text-[12px]">
                      {notification.message}
                    </p>
                    <p className="text-[12px] dark:text-white">
                      {format(new Date(notification.createdAt), 'MMMM dd, p')}
                    </p>
                  </div>

                  <div className="flex flex-col items-center transition-all">
                    <div
                      className={`h-[15px] w-[15px] rounded-full ${
                        notification.read === 'false'
                          ? 'bg-[#148FB6]'
                          : 'border-border-dark dark:border-white border-[1px]'
                      }  mt-[7px] mb-[10px]`}
                    />

                    <XIcon
                      className="border-border-dark dark:fill-white h-[20px] w-[20px] cursor-pointer"
                      onClick={() => {
                        // eslint-disable-next-line no-nested-ternary
                         /* istanbul ignore next */
                        removeNotification(notification.id);
                      }}
                      data-testid={index === 0 && 'delete'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full p-3 flex flex-row align-center justify-between">
            <p
              className="font-normal text-xs m-1 dark:text-white cursor-pointer"
              data-testid="seeAllNotification"
            >
              See all notification
            </p>
            <div
              className="font-normal text-xs m-1 dark:text-white cursor-pointer ml-auto"
              onClick={() => {
                markAllRead();
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