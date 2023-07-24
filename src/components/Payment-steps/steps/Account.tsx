/* eslint-disable */
import { Icon } from '@iconify/react';
import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../../../style.css';
import Button from '../../Buttons';
import { FormContext } from '../contexts/StepperContex';

const Account = () => {
  const { t } = useTranslation();
  const { setCurrentStep } = useContext(FormContext);
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className="flex flex-col w-3/4 mx-auto ">
      <div className="md:w-full">
        <p className="text-lg font-semibold">1. {t('Billing Contact')}</p>

        <div className="flex flex-col flex-wrap">
          <div className="flex flex-col md:flex-row md:gap-3  my-2">
            <div className="flex flex-col mx-0 w-full">
              <label
                htmlFor="organizationName"
                className="text-light-text mb-2 required dark:text-dark-text-fill text-base pt-2"
              >
                {t('Organization name')}
              </label>
              <input
                {...register('organization', {
                  required: `${t('The organization name is required')}`,
                })}
                className="dark:bg-dark-frame-bg py-2 appearance-none border  rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="organization"
                type="text"
                data-testid="organization"
                placeholder={t('Organization')}
              />
              {errors?.organization && (
                <span className="font-bold text-red-300">
                  {errors.organization.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mx-0 w-full">
              <label
                htmlFor="streetAddress"
                className="text-light-text dark:text-dark-text-fill text-base mb-2 pt-2"
              >
                {t('Street address')}
              </label>
              <input
                {...register('street', {
                  required: `${t('Street name is required')}`,
                })}
                name="street"
                className="dark:bg-dark-frame-bg py-2 appearance-none border rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="street"
                type="text"
                data-testid="street"
                placeholder={t('Street')}
              />
              {errors?.street && (
                <span className="font-bold text-red-300">
                  {errors.street.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-3  my-2">
            <div className="flex flex-col mx-0 w-full">
              <label
                htmlFor="city"
                className="text-light-text mb-2 dark:text-dark-text-fill text-base pt-2"
              >
                {t('City')}
              </label>
              <input
                {...register('city', {
                  required: `${t('The city name is required')}`,
                })}
                className="dark:bg-dark-frame-bg py-2 appearance-none border my-1 rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder={t('City')}
              />
              {errors?.city && (
                <span className="font-bold text-red-300">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="flex flex-col mx-0 w-full">
              <label
                htmlFor="postal"
                className="text-light-text mb-2 dark:text-dark-text-fill text-base pt-2"
              >
                {t('Postal code')}
              </label>
              <input
                {...register('postal')}
                className="dark:bg-dark-frame-bg py-2 appearance-none border my-1 rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="Postal"
                type="text"
                data-testid="postal"
                aria-label="cost-input"
                placeholder={t(' Ex: 12345')}
              />
              {errors?.postal && (
                <span className="font-bold text-red-300">
                  {errors.postal.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">2. {t('Payment Method')}</p>
        <div
          className="flex w-full justify-around mx-auto py-4"
          data-testid="icon"
        >
          <div>
            <label
              htmlFor="credit-card"
              className="focus:bg-white selection:bg-white"
            >
              <div className="flex flex-col">
                <Icon
                  icon="bi:credit-card-fill"
                  color="#9e85f5"
                  width="59"
                  height="53"
                  data-testid="iconx"
                />
                <p className="text-sm">{t('Credit card')}</p>
              </div>
            </label>
            <input
              className="focus:bg-white cursor-pointer appearance-none selection:bg-white"
              type="radio"
              value="credit-card"
              {...register('method', {
                required: `${t('A payment method is required')}`,
              })}
              id="credit-card"
            />
          </div>
          <div>
            <label
              htmlFor="apple-pay"
              className="focus:bg-white selection:bg-white"
            >
              <div className="flex flex-col">
                <div className="flex flex-col  selection:bg-white">
                  <Icon
                    icon="la:cc-apple-pay"
                    color="#9e85f5"
                    width="59"
                    height="53"
                  />
                  <p className="text-sm">{t('Apple Pay')}</p>
                </div>
              </div>
            </label>
            <input
              className="focus:bg-white cursor-pointer appearance-none selection:bg-white"
              type="radio"
              value="apple-pay"
              {...register('method', {
                required: `${t('A payment method is required')}`,
              })}
              id="apple-pay"
            />
          </div>
          <div>
            <label
              htmlFor="paypal"
              className="focus:bg-white checked:bg-white selection:bg-white"
            >
              <div className="flex flex-col">
                <Icon
                  icon="fa:cc-paypal"
                  color="#9e85f5"
                  width="59"
                  height="53"
                />
                <p className="text-sm">PayPal</p>
              </div>
            </label>
            <input
              className="focus:bg-white cursor-pointer appearance-none selection:bg-white"
              type="radio"
              value="paypal"
              {...register('method', {
                required: `${t('A payment method is required')}`,
              })}
              id="paypal"
            />
          </div>
        </div>
        {errors?.method && (
          <span className="font-bold text-red-300 text-sm">
            {errors.method.message}
          </span>
        )}
      </div>
      <div className="container flex justify-end mt-4 mb-8">
        <Button variant="primary" size="lg" type={'submit'}>
          {t('Next')}
        </Button>
      </div>
    </div>
  );
};
export default Account;
