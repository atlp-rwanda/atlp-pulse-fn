/* istanbul ignore file */
import React, { useContext } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { formatDistanceToNowStrict, subDays } from 'date-fns';
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
        if (!notification.read) {
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

  function convertTime(value: string) {
    if (value.includes('minutes')) {
      return value.replace('minutes', 'mins');
    }
    if (value.includes('minute')) {
      return value.replace('minute', 'min');
    }
    if (value.includes('seconds')) {
      return value.replace('seconds', 'secs');
    }
    if (value.includes('second')) {
      return value.replace('second', 'sec');
    }
    if (value.includes('hours')) {
      return value.replace('hours', 'hrs');
    }
    if (value.includes('hour')) {
      return value.replace('hour', 'hr');
    }
    return value;
  }

  // notifications

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen px-0 md:px-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-dark-45 z-1"
        role="button"
        aria-label="background"
        tabIndex={0}
        onClick={handleShowNotification}
        onKeyDown={handleShowNotification}
        data-testid="keyClick"
      />
      <div className="absolute top-[60px] right-0 left-0 mx-auto px-3 md:px-4 md:mx-0 md:left-auto md:right-[60px] z-2  w-full max-w-[34rem] h-[calc(100%-85px)]">
        <div className="flex flex-col flex-nowrap w-full h-max max-h-full bg-[#FFF] dark:bg-dark-frame-bg rounded-md px-1">
          <div className="flex items-center justify-between w-full px-1 py-4 md:px-4 md:py-6">
            <p className="font-semibold dark:text-white">
              {t('Notifications')}
            </p>
            <XIcon
              fontSize="70px"
              data-testid="closeIcon"
              className="w-6 h-6 border-black cursor-pointer dark:fill-white"
              onClick={handleShowNotification}
            />
          </div>
          <div
            /* istanbul ignore next */
            className="flex flex-col gap-3 w-[98%] md:w-[96.5%] overflow-auto pb-5 pl-2 md:pl-5 pr-[6px] mr-5 custom-scrollbar"
            data-testid="notificationsContainer"
          >
            {notifications.length === 0 ? (
              <p> {t('There are no notifications for you!')}</p>
            ) : (
              notifications?.map((notification: any, index: any) => (
                <div
                  className={`w-full py-3 shadow-[0px_3px_4px_rgba(0,0,0,0.4)] rounded-md hover:bg-primary/40 dark:hover:bg-primary/35 ${
                    notification.type ? 'cursor-pointer' : 'cursor-not-allowed'
                  } ${
                    !notification.read
                      ? 'border-primary dark:border-[#8667F2] border-l-[4px] bg-primary/35 dark:bg-[#2602A5]/45 px-3 md:px-4'
                      : 'bg-neutral-100 dark:bg-neutral-800/50  pl-4 pr-3 md:pl-5 md:pr-4'
                  }`}
                  key={notification.id}
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
                    if (notification.type) {
                      if (notification.type === 'rating') {
                        if (user.role === 'trainee') {
                          navigate('/performance');
                        } else {
                          navigate('/ratings');
                        }
                      } else if (notification.type === 'team') {
                        if (user.role === 'admin') {
                          navigate('/teams');
                        } else {
                          navigate('/cards');
                        }
                      } else if (notification.type === 'cohort') {
                        navigate('/cohorts');
                      } else if (notification.type === 'attendance') {
                        navigate('/attendance');
                      } else if (notification.type === 'ticket') {
                        navigate('/tickets');
                      }
                      /* istanbul ignore next */
                      return handleShowNotification();
                    }
                    return null;
                  }}
                  data-testid={index === 0 && 'read'}
                >
                  <div
                    className={`flex flex-row items-center justify-between align-center gap-x-[10px] ${
                      !notification.read ? ' ' : ' '
                    }`}
                  >
                    <div
                      className={`flex justify-center items-center p-1 rounded-md w-[35px] h-[30px] md:w-[40px] md:h-[35px] ${
                        !notification.read
                          ? 'bg-[#5856D6]/60 dark:bg-[#5856D6]/35'
                          : 'bg-neutral-300 dark:bg-neutral-800'
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
                        className="rounded-[1000px] object-cover"
                      />
                    </div>

                    <div className="flex flex-col w-full gap-1 md:gap-[6px]">
                      <p
                        className="text-[#111827] dark:text-white text-[12px] md:text-[13px] leading-3 text-justify"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                          __html: notification.message.replace(
                            /"([^"]+)"/g,
                            '<b>$1</b>',
                          ),
                        }}
                      />
                      <div className="flex items-center gap-1 text-[11px] md:text-[12px] text-neutral-700 italic dark:text-neutral-400">
                        <p>
                          {notification?.sender?.profile &&
                          notification?.sender?.profile.name
                            ? notification.sender.profile.name
                            : notification.sender.email}
                        </p>
                        <span>&#8208;</span>
                        <p>
                          {convertTime(
                            formatDistanceToNowStrict(
                              new Date(Number(notification.createdAt)),
                              { addSuffix: true },
                            ),
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center pl-2 transition-all ">
                      {/* <div
                      className={`h-[15px] w-[15px] rounded-full ${
                        !notification.read
                          ? 'bg-[#148FB6]'
                          : 'border-border-dark dark:border-white border-[1px]'
                      }  mt-[7px] mb-[10px]`}
                    /> */}

                      <XIcon
                        className="w-5 cursor-pointer border-border-dark dark:fill-white"
                        onClick={(event) => {
                          // eslint-disable-next-line no-nested-ternary
                          /* istanbul ignore next */
                          event.stopPropagation();
                          removeNotification(notification.id);
                        }}
                        data-testid={index === 0 && 'delete'}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex flex-row justify-between w-full px-2 md:p-4 align-center">
            {/* <p
              className="m-1 text-xs font-normal cursor-pointer dark:text-white"
              data-testid="seeAllNotification"
            >
              See all notification
            </p> */}
            {notifications.filter((notification: any) => !notification.read)
              .length > 0 && (
              <div
                className="m-1 ml-auto text-xs font-normal cursor-pointer dark:text-white"
                onClick={() => {
                  markAllRead();
                }}
                data-testid="markAllRead"
              >
                {t('Mark all as read')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;