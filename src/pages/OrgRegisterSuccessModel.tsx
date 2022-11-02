import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Buttons';

export default function OrgRegisterSuccessModel({
  OrgRegisterSuccessModel,
  removeModel,
  orgName,
}: {
  OrgRegisterSuccessModel: Boolean;
  removeModel: Function;
  orgName: String;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        OrgRegisterSuccessModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
            {t('New Organization Signup')}
          </h3>
          <hr className=" bg-primary border-b my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div>
              <h2 className="text-base dark:text-white text-center m-4">
                {t('Request to create')} <b>{orgName}</b>{' '}
                {t(
                  'has been sent. You should receive an email with login credentials once the organization is approved.',
                )}
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <Button
                variant="info"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="delete"
                onClick={() => removeModel()}
              >
                {t('Ok')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
