/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  style?: any;
}
const ButtonLoading: React.FC<Props> = ({ style }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex w-fit py-1 px-3 bg-primary justify-center font-bold ${style}`}
    >
      <div className="flex w-full gap-2 justify-center items-center">
        <div className="loader" />
        <button className=" text-white font-bold" disabled>
          {t('Processing...')}
        </button>
      </div>
    </div>
  );
};

export default ButtonLoading;
