import React from 'react';
import { useTranslation } from 'react-i18next';
import PricingCard from '../components/PricingCard';
import useDocumentTitle from '../hook/useDocumentTitle';

export default function Pricing() {
  useDocumentTitle('Pricing');
  const { t } = useTranslation();
  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg flex-grow pt-14 md:pt-10">
      <div className="flex flex-col justify-center items-center mx-auto grow">
        <h1 className="text-primary text-lg text-center w-3/4 my-3 md:text-4xl flex justify-center md:my-9 mx-auto">
          {t('pricing_page_header')}
        </h1>
        <h3 className="text-light-text dark:text-dark-text-fill text-sm text-center w-3/4 md:text-2xl flex justify-center">
          {t('pricing_page_paragraph')}
        </h3>
        <div className="flex flex-wrap justify-center m-10">
          <PricingCard plan={t('Free')} />
          <PricingCard plan={t('Premium')} />
          <PricingCard plan={t('Pro')} />
        </div>
      </div>
    </div>
  );
}
