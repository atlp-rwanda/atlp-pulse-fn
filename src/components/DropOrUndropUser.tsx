import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Buttons';

interface DropOrUndropUserProps {
  subject: string;
  title: string;
  drop?: boolean;
  loading: boolean;
  removalReason?: string;
  setRemovalReason?: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (data: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
}

function DropOrUndropUser({
  subject,
  title,
  drop,
  loading,
  removalReason,
  setRemovalReason,
  onSubmit,
  onClose,
}: DropOrUndropUserProps) {
  const { t } = useTranslation();

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onSubmit) onSubmit(e);
  };

  return (
    <div className="h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4">
      <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
        <div className="flex flex-wrap items-center justify-center w-full card-title ">
          <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
            {t(subject)}
          </h3>
          <hr className="w-full my-3 border-b bg-primary" />
        </div>
        <div className="card-body w-full">
          <form className="px-8 py-3 w-full">
            <div className="flex flex-wrap items-center justify-center w-full card-title ">
              <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                {t(title)}
              </h3>
            </div>
            {/* Reason input field */}
            {drop && setRemovalReason && (
              <div className="mt-4">
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-primary dark:bg-dark-bg dark:border-gray-600 dark:text-white"
                  placeholder={t('Enter reason')}
                  value={removalReason}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRemovalReason(e.target.value)
                  }
                  id="removalReason"
                />
                <p
                  id="errorMessage"
                  className="text-red-500 text-xs mt-1 hidden"
                >
                  Reason is required!
                </p>
              </div>
            )}

            <div className="flex justify-between w-full pt-3">
              <Button
                data-testid="removeModel2"
                variant="info"
                size="sm"
                style="w-[8rem] h-[2.3rem] text-sm p-0 mx-0 flex justify-center items-center"
                onClick={() => {
                  if (drop && setRemovalReason) {
                    setRemovalReason('');
                    document
                      .getElementById('errorMessage')!
                      .classList.add('hidden');
                  }
                  onClose();
                }}
              >
                {t('Cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[8rem] h-[2.3rem] text-sm p-0 mx-0 flex justify-center items-center"
                onClick={() => {
                  if (removalReason && !removalReason.trim() && drop) {
                    document
                      .getElementById('errorMessage')!
                      .classList.remove('hidden');
                  } else {
                    handleConfirm(
                      new MouseEvent(
                        'click',
                      ) as unknown as React.MouseEvent<HTMLButtonElement>,
                    );
                  }
                }}
                loading={loading}
              >
                {loading ? t('Loading') : t('Proceed')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DropOrUndropUser;
