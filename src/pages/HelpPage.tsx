import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { TFunction, useTranslation } from 'react-i18next';
import { useMutation, gql } from '@apollo/client';
import Button from '../components/Buttons';
import ButtonLoading from '../components/ButtonLoading';
import CREATE_TICKET from '../Mutations/help.mutation';
import useDocumentTitle from '../hook/useDocumentTitle';

function Help() {
  const { t } = useTranslation();
  useDocumentTitle('Support');
  const [msg, setMsg] = useState({
    subject: '',
    message: '',
  });
  const [createTicket, { data, loading, error }] = useMutation(CREATE_TICKET);

  if (error) {
    toast.success(error.message);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await createTicket({
      variables: { subject: msg.subject, message: msg.message },

      onCompleted() {
        setMsg({
          subject: '',
          message: '',
        });
        toast.success(
          t(`Message successfully received! We will get back to you shortly.`) as TFunction
        );
      },
      onError(error) {
        /* istanbul ignore next */
        toast.error(t(`${error.message}`) as TFunction);
      },
    });
  };

  function handleOnChange(e: any) {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row justify-center pt-[12vh]">
        <div className="rounded-lg sm:w-[90%] md:w-[70%] lg:w-[50%] lg:ml-[38vh] mt-5 lg:mr-[2vh] lg:mb-10 p-6 bg-white dark:bg-dark-bg">
          <h2 className="text-4xl font-bold dark:text:white mb-10">
            {t('Support')}
          </h2>
          <form action="#none" onSubmit={handleSubmit} data-testid="loginForm">
            <div className="relative mb-6">
              <label htmlFor="exampleInput7">{t('Subject')}</label>
              <input
                type="text"
                name="subject"
                value={msg.subject}
                placeholder={t('Subject')}
                onChange={handleOnChange}
                className="dark:bg-dark-bg"
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  resize: 'none',
                }}
                required
              />
            </div>

            <div className="relative mb-6">
              <label htmlFor="exampleFormControlTextarea13">
                {t('Message')}
              </label>
              <textarea
                rows={3}
                placeholder={t('Message')}
                name="message"
                value={msg.message}
                onChange={handleOnChange}
                style={{
                  width: '100%',
                  height: '150px',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                  resize: 'none',
                }}
                className="dark:bg-dark-bg"
                required
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
                style="w-full ml-0 hover:bg-cyan-700 text-sm"
              >
                {' '}
                {t('Send')}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
