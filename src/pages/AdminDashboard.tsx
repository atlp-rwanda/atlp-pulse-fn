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
        
          
          <Comingsoon title='Dashboard'/>

        </div>
      </div>
    </div>
  );
}

export default SupAdDashboard;
