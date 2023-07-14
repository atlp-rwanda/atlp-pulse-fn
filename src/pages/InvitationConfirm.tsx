import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Buttons';
import ButtonLoading from '../components/ButtonLoading';
import { ACCEPT_EVENT_MUTATION } from '../Mutations/manageStudentMutations';

function InvitationConfirm() {
  const [reasonInput, setReasonInput] = useState<string>('');
  const [reject, setReject] = useState<boolean>(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('e');

  // accept and reject envitation
  const [confirmEvent, { loading }] = useMutation(ACCEPT_EVENT_MUTATION, {
    onCompleted: (data) => {
      setTimeout(() => {
        toast.success(data.inviteUser);
        // inviteModel();
        navigate('/dashboard/calendar');
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        toast.error(err.message);
      }, 1000);
    },
  });
  return (
    <div>
      <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
        <div className="bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[80%] lg:ml-60 mb-10 mt-20">
          <div className="conf_box flex justify-center">
            {/* =========================== Start::  confirmTraineeModel =============================== */}
            {!reject ? (
              <div className=" bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
                <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                  <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                    {t('Confirm Invitation')}
                  </h3>
                  <hr className=" bg-primary border-b my-3 w-full" />
                </div>
                <div className="card-body">
                  <form className=" py-3 px-8">
                    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                      <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                        {t('Accept and reject this Invitation.')}
                      </h3>
                    </div>

                    <div className="w-full flex justify-between">
                      <Button
                        data-testid="removeInviteModel"
                        variant="info"
                        size="sm"
                        style="w-[30%] md:w-1/4 text-sm font-sans bg-red-900"
                        onClick={() => setReject(true)}
                      >
                        {t('Reject')}
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        style="w-[30%] md:w-1/4 text-sm font-sans"
                        onClick={() => {
                          confirmEvent({
                            variables: {
                              eventId: eventId ?? '',
                              status: 'accepted',
                              reason: '',
                              authToken: localStorage.getItem('auth_token'),
                            },
                          });
                        }}
                        // loading={ButtonLoading}
                      >
                        {t('Accept')}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className=" bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
                <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                  <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                    {t('Confirm Invitation')}
                  </h3>
                  <hr className=" bg-primary border-b my-3 w-full" />
                </div>
                <div className="card-body">
                  <form className=" py-3 px-8">
                    <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                      <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                        {t('Add a reason for you rejection.')}
                      </h3>
                    </div>

                    <div className="text-white input my-3 h-9 ">
                      <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                        <input
                          onChange={(e) => {
                            setReasonInput(e.target.value);
                          }}
                          type="text"
                          name="reason"
                          className=" dark:bg-dark-tertiary text-black border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                          placeholder={t('some reason')}
                        />
                      </div>
                    </div>

                    <div className="w-full flex justify-between">
                      <Button
                        data-testid="removeInviteModel"
                        variant="info"
                        size="sm"
                        style="w-[30%] md:w-1/4 text-sm font-sans bg-red-900"
                        onClick={() => setReject(false)}
                      >
                        {t('Cancel')}
                      </Button>

                      <Button
                        variant="primary"
                        size="sm"
                        style="w-[30%] md:w-1/4 text-sm font-sans"
                        onClick={() => {
                          confirmEvent({
                            variables: {
                              eventId: eventId ?? '',
                              status: 'rejected',
                              reason: reasonInput,
                              authToken: localStorage.getItem('auth_token'),
                            },
                          });
                        }}
                        // loading={ButtonLoading}
                      >
                        {t('Submit')}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvitationConfirm;
