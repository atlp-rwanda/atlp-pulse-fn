import React from 'react';
import { useTranslation } from 'react-i18next';
import Chart from '../components/Chart';
import Card from '../components/Card';
import useDocumentTitle from '../hook/useDocumentTitle';
import Comingsoon from './Comingsoon';

function SupAdDashboard() {
  useDocumentTitle('Dashboard');
  const { t } = useTranslation();
  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row pb-8 justify-center">
        <div className="lg:ml-44 w-[90%] pt-[4vh] lg:pt-[6vh]">
          {/* <div className="grid grid-cols-2 lg:grid-cols-4">
            <Card text={t('All Organizations')} number={24} />
            <Card text={t('All Admins')} number={24} />
            <Card text={t('Domains')} number={24} />
            <Card text={t('Income')} number={`$${1000}`} />
          </div>
          <Chart title="Organizations" /> */}

          <Comingsoon title='Dashboard'/>
        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
