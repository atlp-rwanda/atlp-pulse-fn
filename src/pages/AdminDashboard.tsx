import React from 'react';
import { t } from 'i18next';
import Chart from '../components/Chart';
import Card from '../components/Card';
// eslint-disable-next-line import/no-useless-path-segments
import useDocumentTitle from '../hook/useDocumentTitle';
import Comingsoon from './Comingsoon';

function SupAdDashboard() {
  useDocumentTitle('Dashboard');
  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row pb-8 justify-center">
        <div className="lg:ml-56 w-[90%] pt-[8vh] h-[100%]">
          {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <Card text={t('Coordinators')} number={47} />
            <Card text={t('Trainees')} number={560} />
            <Card text={t('Cohorts')} number={8} />
            <Card text={t('Performance')} number={4} />
          </div>
          <Chart title={t('Overall performance')} /> */}
          
          <Comingsoon title='Dashboard'/>

        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
