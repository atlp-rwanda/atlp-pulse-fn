/* eslint-disable */
import Cleave from 'cleave.js/react';
import React, { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../../Buttons';
import { FormContext } from '../contexts/StepperContex';

const Account = () => {
  const { t } = useTranslation();

  const { setCurrentStep } = useContext(FormContext);
  const {
    register,
    control,
    formState: { errors },
  }: any = useFormContext();

  return (
    <div className="flex flex-col  justify-center items-center w-3/4 mx-auto ">
      <div className="w-full md:items-center">
        <p className="text-lg font-semibold">{t('Enter your card details')}</p>

        <div className="flex flex-col w-full items-center flex-wrap mx-auto">
          <div className="md:flex md:flex-row w-full gap-3 ">
            <div className="flex flex-col py-2 w-full">
              <label
                htmlFor="holdername"
                className="text-light-text dark:text-dark-text-fill text-base mb-2"
              >
                {t('Card holder name')}
              </label>

              <input
                {...register('cardName', {
                  required: `${t('A valid card holder name is required')}`,
                })}
                className="dark:bg-dark-frame-bg py-2 appearance-none border rounded w-full  px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                id="holder"
                type="text"
                data-testid="cardname"
                placeholder={t('name')}
              />
              {errors?.cardName && (
                <span className="font-bold text-red-300">
                  {errors.cardName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col py-2 w-full">
              <label
                htmlFor="Cardnumber"
                className="text-light-text dark:text-dark-text-fill text-base mb-2"
              >
                {t('Card number')}
              </label>
              <Controller
                name="cardNumber"
                rules={{ required: `${t('The card number is required')}` }}
                control={control}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <Cleave
                    options={{ creditCard: true }}
                    name="card name"
                    value={value}
                    className="dark:bg-dark-frame-bg py-2 appearance-none border w-full rounded px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline masked"
                    onChange={onChange}
                    data-testid="cardnumber"
                    placeholder={t('Enter Credit card number')}
                  />
                )}
              ></Controller>
              {errors?.cardNumber && (
                <span className="font-bold text-red-300">
                  {errors.cardNumber.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex lg:flex-row flex-col  justify-around  my-3 w-full ">
            <div className="flex flex-col md:flex-row md:gap-3 w-full ">
              <div className="flex flex-col py-2 w-full">
                <label
                  htmlFor="holdername"
                  className="text-light-text dark:text-dark-text-fill text-base mb-2"
                >
                  {t('Expiration')}
                </label>
                <Controller
                  name="mm"
                  control={control}
                  rules={{ required: `${t('The expiration date is required')}` }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                  }) => (
                    <Cleave
                      onChange={onChange}
                      className="dark:bg-dark-frame-bg py-2 appearance-none border w-full rounded px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                      id="holder"
                      type="text"
                      value={value}
                      data-testid="mm"
                      placeholder={t('MM / YY')}
                      options={{ date: true, datePattern: ['m', 'y'] }}
                    />
                  )}
                ></Controller>
                {errors?.mm && (
                  <span className="font-bold text-red-300">
                    {errors.mm.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col py-2 w-full">
                <label
                  htmlFor="Cardnumber"
                  className="text-light-text dark:text-dark-text-fill text-base mb-2"
                >
                  {t('CVV')}
                </label>
                <input
                  {...register('cvv', {
                    required: `${t('CVV Must be 3 number')}`,
                  })}
                  maxLength={3}
                  onInput={(e: any) => {
                    if (e.target.value.length > e.target.maxLength)
                      e.target.value = e.target.value.slice(
                        0,
                        e.target.maxLength,
                      );
                  }}
                  className="dark:bg-dark-frame-bg py-2 appearance-none border  rounded  w-full px-3 text-light-text dark:text-dark-text-fill leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  data-testid="cvv"
                  data-slots="0"
                  placeholder={t('000')}
                />
                {errors?.cvv && (
                  <span className="font-bold text-red-300">
                    {errors.cvv.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-around mt-4 mb-8">
          <Button variant="primary" size="lg" data-testid="btn-2" onClick={() => setCurrentStep(1)}>
            Back
          </Button>
          <Button variant="primary" size="lg" type={'submit'}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
