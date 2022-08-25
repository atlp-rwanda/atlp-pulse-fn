import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../Buttons';
import { FormContext } from '../contexts/StepperContex';

export default function Final() {
  const { t } = useTranslation();
  const { setCurrentStep } = useContext(FormContext);
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="mt-3 text-xl font-semibold uppercase text-primary">
          {t('Congratulations!')}
        </div>
        <div className="text-lg font-semibold text-gray-500">
          {t('Your Payment is successfully done!!')}
        </div>
        <div className="my-4">
          <Button variant="primary" size="lg" data-testid="link1" onClick={() => setCurrentStep(2)}>
            {t('Back')}
          </Button>
          <Link to="/register-organization">
            <Button variant="primary" size="lg" data-testid="link">
              {t('Continue registration')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
