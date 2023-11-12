import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import Button from '../components/Buttons';
import timePassedCalculator from '../utils/timePassedFormating';
import { TicketsContext } from '../hook/ticketsContext';

function AllTickets() {
  const { tickets } = useContext(TicketsContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [page, setPage] = useState(0);

  function handleSelectTicket(id: string) {
    navigate(`${id}`);
  }

  let messages: any;
  const numOfItemsPerPage: number = 10;

  if (tickets) {
    const previousMessages = tickets.slice(0, page * numOfItemsPerPage);

    const nextPage = tickets.slice(
      page * numOfItemsPerPage,
      (page + 1) * numOfItemsPerPage,
    );
    messages = [...previousMessages, ...nextPage];
  }

  return (
    <div className="flex flex-col grow items-center bg-white dark:bg-dark-frame-bg">
      <div className="flex flex-col items-center gap-4 sm:w-full md:w-[70%] lg:w-[60%] mt-5 lg:mb-10 pt-12 overflow-x-hidden">
        <h2 className="text-4xl font-bold dark:text:white mb-3">
          {t('Tickets')}
        </h2>

        {tickets &&
          messages?.map((msg: any) => (
            <div
              key={String(msg.id)}
              className="w-full bg-[#e0e7ff] dark:bg-dark-bg rounded overflow-hidden mb-5"
            >
              <div className="px-6 pt-8 mb-6">
                <div className="font-bold text-xl text-blue-600 mb-5 text-center md:text-left">
                  {msg.user && msg.user.profile && msg.user.profile.length > 0
                    ? `${msg.user.profile[0].firstName} ${msg.user.profile[0].lastName}`
                    : `${msg.user ? msg.user.email : ''}`}

                  <span className="block text-sm font-thin text-gray-500 mt-0 dark:text-white">
                    {msg.user && msg.user.email}
                  </span>
                </div>
                <p className="text-gray-800 font-semibold text-lg mb-1/2 dark:text-white">
                  {msg.subject}
                </p>
                <p className="text-gray-700 break-keep text-base dark:text-white">
                  {msg.message.slice(0, 100)}...
                  <span className="text-gray-500 block text-sm font-medium mt-2 py-0.5 rounded dark:text-white">
                    {timePassedCalculator(new Date(+msg.createdAt))}
                  </span>
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 pt-0 pb-6">
                {msg.status === 'closed' ? (
                  <span className="inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-lg text-white ring-1 ring-inset ring-green-600/20 mb-2 md:mb-0 md:mr-2">
                    {t(`${msg.status}`)}
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-[#E8EFE9] px-2 py-1 text-dark ring-1 ring-inset ring-blue-700/10 text-lg mb-2 md:mb-0 md:mr-2">
                    {t(`${msg.status}`)}
                  </span>
                )}

                <button
                  onClick={() => handleSelectTicket(msg.id)}
                  type="button"
                  className="bg-[#8667F2] text-white hover:bg-[#c7b9f9] py-1 px-2 rounded text-lg"
                >
                  {t('Read more')}
                </button>
              </div>
            </div>
          ))}

        {tickets &&
          (messages?.length === tickets?.length ? (
            <span className="block text-base font-thin text-gray-500 mt-0">
              {t('No more tickets found!')}
            </span>
          ) : (
            <Button
              type="submit"
              variant="primary"
              data-testid="loginForm"
              size="lg"
              style="ml-0 hover:bg-cyan-700 text-sm"
              onClick={() => setPage((page) => page + 1)}
            >
              {t('Load more')}
            </Button>
          ))}
      </div>
    </div>
  );
}

export default AllTickets;
