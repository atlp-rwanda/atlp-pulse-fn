import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import CustomSkeleton from '../Skeletons/CustomSkeleton';
import Button from '../components/Buttons';
import GET_TICKETS from '../queries/tickets.queries';
import timePassedCalculator from '../utils/timePassedFormating';
import useDocumentTitle from '../hook/useDocumentTitle';

function Tickets() {
  const { t } = useTranslation();
  useDocumentTitle('Tickets');
  const [page, setPage] = useState(0);
  const { loading, error, data } = useQuery(GET_TICKETS, {
    fetchPolicy: 'cache-and-network',
  });

  let messages: Array<any> = [];
  const numOfItemsPerPage: number = 5;

  if (data) {
    const previousMessages = data?.getAllTickets?.slice(
      0,
      page * numOfItemsPerPage,
    );

    const nextPage = data?.getAllTickets?.slice(
      page * numOfItemsPerPage,
      (page + 1) * numOfItemsPerPage,
    );
    messages = [...previousMessages, ...nextPage];
  }

  return (
    <div className="flex flex-col grow items-center bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-col items-center gap-4 sm:w-[90%] md:w-[70%] lg:w-[45%] lg:ml-[38vh] mt-5 lg:mr-[2vh] lg:mb-10 pt-12">
        <h2 className="text-4xl font-bold dark:text:white mb-3">
          {t('Tickets')}
        </h2>

        {loading ? (
          <>
            <div className="w-full bg-white rounded overflow-hidden shadow-xl">
              <CustomSkeleton />
            </div>
            <div className="w-full bg-white rounded overflow-hidden shadow-xl">
              <CustomSkeleton />
            </div>
            <div className="w-full bg-white rounded overflow-hidden shadow-xl">
              <CustomSkeleton />
            </div>
          </>
        ) : (
          data &&
          messages.map((msg: any) => (
            <div
              // eslint-disable-next-line no-underscore-dangle
              key={String(msg._id)}
              className="w-full bg-white dark:bg-dark-bg rounded overflow-hidden shadow-xl"
            >
              <div className="px-6 py-8">
                <div className="font-bold text-xl text-blue-600 mb-5">
                  {msg.user.firstName} {msg.user.lastName}
                  <span className="block text-sm font-thin text-gray-500 mt-0 dark:text-white">
                    {msg.user.email}
                  </span>
                </div>
                <p className="text-gray-800 font-semibold text-lg mb-2 dark:text-white">
                  {msg.subject}
                </p>
                <p className="text-gray-700 break-keep text-base dark:text-white">
                  {msg.message}
                </p>
              </div>
              <div className="flex flex-row justify-between px-6 pt-0 pb-6">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {msg.status}
                </span>

                <span className="text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:text-white">
                  {timePassedCalculator(new Date(+msg.createdAt))}
                </span>
              </div>
            </div>
          ))
        )}

        {messages?.length === data?.getAllTickets?.length ? (
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
        )}
      </div>
    </div>
  );
}

export default Tickets;
