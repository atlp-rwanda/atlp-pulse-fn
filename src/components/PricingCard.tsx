/* eslint-disable */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from './Buttons';

export default function PricingCard(props: any) {
  /* istanbul ignore next */
  const { t } = useTranslation();
  return (
    <div className="border-2 w-60 md:w-80 rounded-lg m-10">
      <div className="flex flex-col justify-center items-center m-6">
        <h2 className="text-light-text dark:text-dark-text-fill text-2xl font-bold m-4">
          {props.plan}
        </h2>
        <h2 className="text-light-text dark:text-dark-text-fill text-4xl font-bold m-4">
          $0
        </h2>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-light-text text-center dark:text-dark-text-fill text-sm">
            $1 {t('per month, paid annually')}
          </h4>
          <div className="flex flex-row">
            <h4 className="text-primary text-sm">{t('Annual plan')}</h4>{' '}
            <span>
              <Icon icon="bxs:hand-right" color="#148fb6" />
            </span>
          </div>
        </div>
        <div className="m-4">
          <Button variant="primary" size="lg">
            {' '}
            <Link to="/pricing-form">{t('Get Started')}</Link>{' '}
          </Button>
        </div>
        <div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
          <div className="flex flex-row">
            <span className="mr-2">
              <Icon icon="ant-design:check-circle-filled" color="#148fb6" />
            </span>
            <h4 className="text-light-text dark:text-dark-text-fill text-sm">
              {t('Comprehensive security')}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
