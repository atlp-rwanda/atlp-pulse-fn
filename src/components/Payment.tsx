/* eslint-disable */
import React, { useContext } from 'react';
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import '../style.css';
import { FormContext } from './Payment-steps/contexts/StepperContex';
import Steper from './Payment-steps/Steper';
import Account from './Payment-steps/steps/Account';
import Complete from './Payment-steps/steps/Complete';
import Details from './Payment-steps/steps/Details';
function Pay() {
  const { t } = useTranslation();
  const { currentStep, setCurrentStep } = useContext(FormContext);
  const steps = [
    `${t('Account Information')}`,
    `${t('Payment')}`,
    `${t('Complete')}`,
  ];
  const methods: any = useForm<any>({ mode: 'all' });

  const onSubmit = async (data: any) => {
    if (currentStep == 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
      toast.success(`${t('The payment from')} ${data.cardName} ${t('has been logged')}`);
    }
  };

  return (
    <HookFormProvider {...methods}>
      <div className="md:flex md:flex-col md:items-center md:justify-center w-full  grow  py-2  dark:bg-dark-bg bg-gray-100  sm:flex sm:flex-row sm:items-center sm:justify-center">
        <div className="md:w-3/4 mx-auto md:mx-auto  rounded-2xl dark:bg-dark-frame-bg bg-light-bg py-2 my-16">
          <div className="my-4">
            <p
              className="text-primary text-center text-lg md:w-96 sm:w-56 mx-auto"
              data-testid="text1"
            >
              {t("Let's get started with the realistic management in edutech")}
            </p>
          </div>
          <form action="" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="container horizontal mt-5 mx-auto">
              {/* Stepper */}
              <Steper steps={steps} currentStep={currentStep} />

              <div className="my-10 p-10">
                {currentStep === 1 && <Account />}
                {currentStep === 2 && <Details />}
                {currentStep === 3 && <Complete />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </HookFormProvider>
  );
}

export default Pay;
