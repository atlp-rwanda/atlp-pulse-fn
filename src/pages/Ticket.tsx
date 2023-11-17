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
    <div className="flex flex-col items-center justify-center bg-white dark:bg-dark-frame-bg p-4 sm:w-full md:w-[90%] lg:w-full xl:w-[100%] mx-3 overflow-x-hidden">
      <div className="flex flex-col items-center bg-[#e0e7ff] dark:bg-dark-bg py-8 px-8 overflow-hidden shadow-xl sm:w-[90%] md:w-[60%] lg:w-[40%] mt-20  lg:mb-10 rounded">
        {!ticket ? null : (
          <>
            <div className="w-full mb-4">
              <h2 className="text-2xl font-bold dark:text:white mb-3 text-center">
                {ticket?.subject}
              </h2>
            </div>

            <div className="w-full">
              <p className="text-gray-500 break-keep text-base border p-3   rounded-md bg-[#E8EFE9] ">
                {ticket?.message}
              </p>

              <div className="flex flex-col w-full gap-8 mt-3 mb-3">
                {replies?.map((reply: any) => (
                  <div
                    key={reply.id}
                    className={`${
                      user.userId !== reply.sender.id
                    } w-full md:w-[70%] lg:w-[100%] xl:w-[50%]`}
                  >
                    <div className="flex flex-col gap-2">
                      <div
                        className={`flex items-center gap-2 ${
                          user.userId !== reply.sender.id
                        }`}
                      >
                        <div className="reply__user-photo">
                          <img
                            className="w-8 cursor-pointer h-8 rounded-full"
                            src={Avatar}
                            alt="avatar"
                          />
                        </div>
                        <div className=" mb-1/2 font-medium dark:text-white">
                          {((reply.sender?.profile === null ||
                            reply.sender.id === user.userId) &&
                            'Me') ||
                            (reply.sender?.profile?.length > 0 &&
                              `${reply.sender.profile[0].firstName} ${reply.sender.profile[0].lastName}`) ||
                            (user.role === 'superAdmin' &&
                              ticket?.user.email) ||
                            'Admin'}{' '}
                        </div>
                      </div>

                      <div
                        className={
                          user.userId !== reply.sender.id
                            ? 'bg-[#EDEDED] rounded p-3 w-full'
                            : 'bg-[#E8EFE9]  rounded p-3 w-fit'
                        }
                      >
                        <p
                          className={
                            user.userId !== reply.sender.id
                              ? 'dark:text-gray-500'
                              : 'dark:text-gray-500'
                          }
                        >
                          {reply.replyMessage}
                        </p>
                      </div>

                      <span className="text-gray-500 block text-xs  font-medium -mt-2 rounded dark:text-white text-left">
                        {timePassedCalculator(new Date(+reply.createdAt))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {ticket && ticket.status !== 'closed' && (
          <form
            action="#none"
            className="flex flex-col w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col items-start md:flex-row justify-between md:items-end">
              <div className="mb-0 flex flex-row">
                <h2 className="text-[black] py-0.5 text-xs rounded dark:text-white font-normal">
                  status :
                </h2>

                {ticket && ticket.status === 'closed' ? (
                  <h1 className="flex items-center text-xs font-thin text-red-700">
                    {t(`${ticket?.status}`)}
                  </h1>
                ) : (
                  <h1 className="dark:text-green text-xs font-thin flex items-center ">
                    {t(`${ticket?.status}`)}
                  </h1>
                )}
              </div>
            </div>
            <div className="relative">
              <textarea
                rows={2}
                placeholder={t('Reply...')}
                name="reply"
                id="reply"
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  border: '1px solid #8667F2',
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
                style="btn w-[100%]  text-white bg-[#8667F2] hover:bg-[#c7b9f9] sm ml-0  text-sm"
              >
                {t('Send')}
              </Button>
            )}

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mt-3 space-y-2 md:space-y-0 md:space-x-2">
              <button
                onClick={() => navigate(-1)}
                type="button"
                className="mr-2 md:mr-0 bg-[#8667F2] dark:text-white hover:bg-gray-400 font-normal py-1/2 md:py-0 h-8 md:w-1/2 lg:w-1/4 px-2 rounded"
              >
                {t('Go back')}
              </button>

              {user.role !== 'superAdmin' &&
                ticket &&
                ticket.status !== 'closed' && (
                  <button
                    type="button"
                    className="bg-[#382B66] disabled:bg-red-200 text-white md:py-0 h-8 md:w-1/2 lg:w-1/4 text-sm px-2 rounded"
                    disabled={closingTicket}
                    onClick={handleResolveTicket}
                  >
                    {closingTicket
                      ? `${t('Processing...')}`
                      : `${t('Resolve')}`}
                  </button>
                )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Ticket;
