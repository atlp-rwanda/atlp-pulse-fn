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
        <div className="w-full p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Send Invitation')}
            </h3>
            <hr className="w-full my-3 border-gray-400  bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t(
                    'Fill in the email to invite an organisation to DevPulse.',
                  )}
                </h3>
              </div>

              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <input
                    data-testid="inviteInput"
                    value={inviteEmail}
                    onChange={(e) => {
                      setInviteEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    className="w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none  dark:bg-dark-tertiary border-primary"
                    placeholder={t('email')}
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
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
        <div className="flex flex-row justify-center pb-8">
          <div className="w-[100%] h-[100%]">
            <Comingsoon title="Dashboard" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SupAdDashboard;