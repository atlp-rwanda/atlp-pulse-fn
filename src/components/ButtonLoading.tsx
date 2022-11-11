/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  style?: any;
}
const ButtonLoading: React.FC<Props> = ({ style }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex btn w-fit py-1 px-3 bg-primary font-bold ${style}`}>
      <div className="loader mr-1" />
      <button className="ml-1 text-white font-bold" disabled>
        {t('Processing...')}
      </button>
    </div>
  );
};

export default ButtonLoading;
