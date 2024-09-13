import React, { useContext, useEffect, useState } from 'react';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
// eslint-disable-next-line import/no-useless-path-segments
import useDocumentTitle from '../hook/useDocumentTitle';
import Comingsoon from './Comingsoon';
import Button from '../components/Buttons';
import { UserContext } from '../hook/useAuth';
import { INVITE_USER_MUTATION } from '../Mutations/manageStudentMutations';

function SupAdDashboard() {
  const { user } = useContext(UserContext);
  const { t }: any = useTranslation();

  const organizationToken = localStorage.getItem('orgToken');

  const [inviteTraineeModel, setInviteTraineeModel] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [buttonLoading, setButtonLoading] = useState(false);

  const inviteModel = () => {
    const newState = !inviteTraineeModel;
    setInviteTraineeModel(newState);
    //  this is true
  };

  const [inviteUser] = useMutation(INVITE_USER_MUTATION, {
    variables: {
      email: inviteEmail,
      orgToken: organizationToken,
      type: 'organisation',
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.inviteUser);
        inviteModel();
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 1000);
    },
  });

  useDocumentTitle('Dashboard');

  useEffect(() => {
    localStorage.setItem('inviteEmail', inviteEmail);
  }, [inviteEmail]);
  return (
    <>
      {/* =========================== Start::  InviteTraineeModel =============================== */}

      <div
        className={`font-serif overflow-hidden h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${inviteTraineeModel === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
              {t('Send Invitation')}
            </h3>
            <hr className=" bg-primary border-gray-400 my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm dark:text-white text-center w-11/12 ">
                  {t(
                    'Fill in the email to invite an organisation to DevPulse.',
                  )}
                </h3>
              </div>

              <div className="text-white input my-3 h-9 ">
                <div className="text-white grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    data-testid="inviteInput"
                    value={inviteEmail}
                    onChange={(e) => {
                      setInviteEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className=" dark:bg-dark-tertiary text-black border border-primary py-2 rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('email')}
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => inviteModel()}
                >
                  {t('Cancel')}
                </Button>

                <Button
                  data-testid="invite"
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    inviteUser();
                  }}
                  loading={buttonLoading}
                >
                  {t('Invite')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  InviteTraineeModel =============================== */}

      <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
        <div className="flex flex-row pb-8 justify-center">
          <div className="w-[100%] h-[100%]">
            {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <Card text={t('Coordinators')} number={47} />
            <Card text={t('Trainees')} number={560} />
            <Card text={t('Cohorts')} number={8} />
            <Card text={t('Performance')} number={4} />
          </div>
          <Chart title={t('Overall performance')} /> */}
            <div>
              {/* <div className="bg-light-bg dark:bg-dark-frame-bg  ">
                <div className="flex items-left px-10 lg:px-60 pt-24 pb-8"> */}
              {/* <div className="flex gap-2 pt-5">
                {user?.role === 'coordinator' || undefined ? (
                  ''
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    data-testid="inviteModel"
                    style="m-0"
                    onClick={inviteModel}
                  >
                    {t('Invite an organization')}
                  </Button>
                )}
              </div> */}
            </div>

            {/* </div>
              </div> */}

            <Comingsoon title="Dashboard" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupAdDashboard;