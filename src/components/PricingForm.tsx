import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function PricingForm() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-light-bg dark:bg-dark-frame-bg justify-center mx-auto w-full py-32">
      <h2 className="text-light-text dark:text-dark-text-fill text-4xl font-bold mb-4 mx-auto">
        {t('Pro')}
      </h2>
      <h3 className="text-light-text dark:text-dark-text-fill text-3xl mb-4 mx-auto">
        {t('Fill this form')}
      </h3>
      <div className="w-3/4 md:w-2/4 mx-auto">
        <form>
          <div className="mb-4">
            <div className="flex flex-row items-center">
              <span>
                <Icon icon="codicon:organization" color="#148fb6" />
              </span>
              <h4 className="text-light-text dark:text-dark-text-fill text-xl ml-2">
                {t('Organization')}
              </h4>
            </div>
            <div className="my-2 flex flex-col">
              <label
                htmlFor="country"
                className="text-light-text dark:text-dark-text-fill text-lg"
              >
                {t('Country')}
                <input
                  className="dark:bg-dark-frame-bg appearance-none border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="country"
                  type="text"
                  placeholder={t('Country')}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="organizationName"
                className="text-light-text dark:text-dark-text-fill text-lg"
              >
                {t('Organization name')}
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="organizationName"
                  type="text"
                  placeholder={t('Organization name')}
                />
              </label>
            </div>
            <div>
              <div>
                <label
                  htmlFor="streetAddress"
                  className="text-light text dark:text-dark-text-fill text-lg"
                >
                  {t('Street address')}
                  <input
                    className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                    id="streetAddress"
                    type="text"
                    placeholder={t('Street address')}
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  {t('City')}
                  <input
                    className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder={t('City')}
                  />
                </label>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="province"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  {t('Province')}
                  <input
                    className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                    id="province"
                    type="text"
                    placeholder={t('Province')}
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="pcode"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  {t('Postal Code')}
                  <input
                    className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                    id="pcode"
                    type="text"
                    placeholder={t('Postal code')}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-row items-center">
              <span>
                <Icon icon="fluent:payment-32-filled" color="#148fb6" />
              </span>
              <h4 className="text-light-text dark:text-dark-text-fill text-xl ml-2">
                {t('Payment method')}
              </h4>
            </div>

            <div />
            <div />
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <label
                htmlFor="name"
                className="text-light-text dark:text-dark-text-fill text-lg"
              >
                {t('Name')}
              </label>
              <input
                className="appearance-none border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill dark:bg-dark-frame-bg leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder={t('Name')}
              />
            </div>
            <div>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  {t('Card number')}
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="cardNumber"
                  type="text"
                  placeholder={t('Card number')}
                />
              </div>
              <div>
                <label
                  htmlFor="expiration"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  {t('Expiration')}
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="expiration"
                  type="text"
                  placeholder={t('Expiration')}
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="cvv"
                  className="text-light-text dark:text-dark-text-fill text-lg"
                >
                  CVV
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                />
              </div>
              <div>
                <label
                  htmlFor="pcode"
                  className="text-light-text dark:text-dark-text-fill text-lg "
                >
                  {t('Postal code')}
                </label>
                <input
                  className="appearance-none dark:bg-dark-frame-bg border my-1 rounded w-full py-2 px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  id="pcode"
                  type="text"
                  placeholder={t('Postal code')}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 mb-2 rounded"
          >
            {t('Request')}
          </button>
        </form>
      </div>
    );
};
