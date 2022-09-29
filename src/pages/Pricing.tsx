import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PricingCard from '../components/PricingCard';
import useDocumentTitle from '../hook/useDocumentTitle';
import storedData from '../dummyData/comingSoonPage.json';

export default function Pricing() {
  const [data, setData] = useState(storedData);
  useDocumentTitle('Pricing');
  const { t } = useTranslation();
  return (
    <>
      {data
        ? data.map((item: any) => (
          <div className="flex items-center justify-center h-screen bg-light-bg dark:bg-dark-frame-bg md:-mt-16 md:-mb-44" key={item.id}>
            <div className="dark:bg-dark-bg bg-gray-100 rounded-lg shadow-lg p-5 md:p-20 mx-2">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-light-text dark:text-dark-text-fill sm:text-5xl sm:leading-none md:text-6xl">
                  {item.title}
                </h2>
                <h3 className="text-xl text-light-text dark:text-dark-text-fill md:text-3xl mt-10">{item.name}</h3>
                <p className="text-md md:text-xl mt-10 text-light-text dark:text-dark-text-fill">{item.content}</p>
              </div>
            </div>
          </div>
        )) : (
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
        )}

    </>
  );
}
