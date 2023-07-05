import React, { useContext, useState } from 'react';
import { ToastContent, toast } from 'react-toastify';
import { useMutation, useSubscription } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TicketsContext } from '../hook/ticketsContext';
import timePassedCalculator from '../utils/timePassedFormating';
import Button from '../components/Buttons';
import Avatar from '../assets/avatar.png';
import ButtonLoading from '../components/ButtonLoading';
import { REPLY_TO_TICKET, CLOSE_TICKET } from '../Mutations/help.mutation';
import { NEW_REPLY_SUB } from '../queries/tickets.queries';
import { UserContext } from '../hook/useAuth';

function Ticket() {
  const { ticketId } = useParams();
  const navigate = useNavigate();
  const { tickets, updateTicketStatus, addReply } = useContext(TicketsContext);
  const { user } = useContext(UserContext);
  const [replyMessage, setReplyMessage] = useState('');
  const { t } = useTranslation();
  const [closingTicket, setClosingTicket] = useState(false);

  useSubscription(NEW_REPLY_SUB, {
    onData(data: any) {
      if (data.data.data.replyAdded.ticket === ticketId) {
        const status =
          user.role !== 'superAdmin' ? 'customer-reply' : 'admin-reply';
        addReply(ticketId, data.data.data.replyAdded, status);
      }
    },
  });

  const ticket = tickets?.find((ticket: any) => ticketId === ticket.id);
  const replies = ticket ? [...ticket.replies] : [];
  replies.sort((a: any, b: any) => +a.createdAt - +b.createdAt);

  const [replyToTicket, { data, loading, error }] =
    useMutation(REPLY_TO_TICKET);

  const [closeTicket] = useMutation(CLOSE_TICKET);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await replyToTicket({
      variables: { ticketId, replyMessage },

      onCompleted({ replyToTicket }) {
        setReplyMessage('');
        // eslint-disable-next-line no-param-reassign
        replyToTicket.sender = {
          id: user.userId,
          profile: [{ firstName: 'Me' }],
        };

        const status =
          user.role !== 'superAdmin' ? 'customer-reply' : 'admin-reply';
        addReply(ticketId, replyToTicket, status);
        toast.success(t(`Reply sent!`) as ToastContent<unknown>);
      },

      onError(error) {
        /* istanbul ignore next */
        toast.error(t(`${error.message}`) as ToastContent<unknown>);
      },
    });
  };

  function handleOnChange(e: any) {
    setReplyMessage(e.target.value);
  }

  const handleResolveTicket = async (e: any) => {
    e.preventDefault();
    setClosingTicket(true);
    const res = await closeTicket({
      variables: { ticketId },

      onCompleted() {
        setClosingTicket(false);
        updateTicketStatus(ticketId, 'closed');
        toast.success(t(`Ticket Resolved!`) as ToastContent<unknown>);
      },

      onError(error) {
        setClosingTicket(false);
        /* istanbul ignore next */
        toast.error(t(`${error.message}`) as ToastContent<unknown>);
      },
    });
  };

  return (
    <div className="flex flex-col grow items-center bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-col items-center bg-white dark:bg-dark-bg py-8 px-8 overflow-hidden shadow-xl sm:w-[90%] md:w-[70%] lg:w-[60%] lg:ml-[38vh] mt-20 lg:mr-[2vh] lg:mb-10 rounded">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="bg-gray-300 self-start dark:bg-black dark:text-white hover:bg-gray-400 font-normal py-1 px-2 rounded"
        >
          &larr; {t('Go back')}
        </button>
        {!ticket ? null : (
          <>
            <h2 className="text-4xl font-bold dark:text:white mb-3">
              {ticket?.subject}
            </h2>
            <div className="font-bold text-medium text-center text-blue-600 mb-5">
              {ticket?.user && ticket?.user.firstName}{' '}
              {ticket?.user && ticket.user.lastName}
              <span className="block text-sm font-thin text-gray-500 mt-0 dark:text-white">
                {ticket?.user && ticket?.user.email}
              </span>
            </div>

            {ticket && ticket.status === 'closed' ? (
              <span className="inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20 self-start">
                {t(`${ticket?.status}`)}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-blue-700/10 self-start">
                {t(`${ticket?.status}`)}
              </span>
            )}
            <div className="w-full">
              <p className="text-gray-700 break-keep text-base dark:text-white">
                {ticket?.message}
              </p>
              <div className="flex justify-between items-end">
                <span className="text-gray-500 block text-sm font-medium mt-4 py-0.5 rounded dark:text-white">
                  {timePassedCalculator(new Date(Number(ticket?.createdAt)))}
                </span>

                {user.role !== 'superAdmin' &&
                  ticket &&
                  ticket.status !== 'closed' && (
                    <button
                      type="button"
                      className="bg-red-700 disabled:bg-red-200 text-white sm py-1/2 mx-0 my-0 py-0 h-7 text-sm rounded"
                      disabled={closingTicket}
                      onClick={handleResolveTicket}
                    >
                      {closingTicket
                        ? `${t('Processing...')}`
                        : `${t('Resolve')}`}
                    </button>
                  )}
              </div>
            </div>
          </>
        )}

        <hr className="w-48 h-1 mx-auto my-1/2 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

        <div className="flex flex-col w-full gap-4 mt-4">
          {replies?.map((reply: any) => (
            <div key={reply.id}>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="reply__user-photo">
                    <img
                      className="w-8 cursor-pointer h-8 rounded-full"
                      src={Avatar}
                      alt="avatar"
                    />
                  </div>
                  <div className="text-gray-500 mb-1/2 font-medium dark:text-white">
                    {((reply.sender?.profile === null ||
                      reply.sender.id === user.userId) &&
                      'Me') ||
                      (reply.sender?.profile?.length > 0 &&
                        `${reply.sender.profile[0].firstName} ${reply.sender.profile[0].lastName}`) ||
                      (user.role === 'superAdmin' && ticket?.user.email) ||
                      'Admin'}{' '}
                  </div>
                </div>

                <div
                  className={
                    user.userId !== reply.sender.id
                      ? 'bg-gray-100  rounded p-3'
                      : 'bg-primary text-white rounded p-3'
                  }
                >
                  <p
                    className={
                      user.userId !== reply.sender.id ? 'text-gray-500' : ''
                    }
                  >
                    {reply.replyMessage}
                  </p>
                </div>

                <span className="text-gray-500 block text-sm font-medium -mt-2 rounded dark:text-white text-center">
                  {timePassedCalculator(new Date(+reply.createdAt))}
                </span>
              </div>
            </div>
          ))}
        </div>

        {ticket && ticket.status !== 'closed' && (
          <form
            action="#none"
            className="flex flex-col w-full"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <label htmlFor="reply" className="mb-1/2">
                {t('Reply')}
              </label>
              <textarea
                rows={2}
                placeholder={t('Reply...')}
                name="reply"
                id="reply"
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  resize: 'none',
                }}
                className="dark:bg-dark-bg"
                required
                onChange={handleOnChange}
                value={replyMessage}
              />
            </div>

            {loading ? (
              <ButtonLoading style="w-full rounded-full inline-block" />
            ) : (
              <Button
                type="submit"
                variant="primary"
                data-testid="loginForm"
                size="lg"
                style="btn primary sm ml-0 hover:bg-cyan-700 text-sm"
              >
                {t('Send')}
              </Button>
            )}
          </form>
        )}
      </div>
    </div>
  );
}

export default Ticket;
