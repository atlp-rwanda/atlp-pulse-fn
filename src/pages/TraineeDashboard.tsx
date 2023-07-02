import React from 'react';
import { t } from 'i18next';
import Chart from '../components/Chart';
import Card from '../components/Card';
import Comingsoon from './Comingsoon';

function SupAdDashboard() {
  return (
    <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
      <div className="flex flex-row pb-8 justify-center">
        <div className="lg:ml-44 w-[90%] pt-[8vh] h-[100%]">
          {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <Card text="Cohort" number={5} />
            <Card text="Curret phase" number={2} />
            <Card text="Perfomance" number={2} />
            <Card text="Attendance" number={1} />
          </div>
          <Chart title={t('Overall performance')} /> */}

          <Comingsoon title="Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
