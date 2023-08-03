/* eslint-disable react/no-unescaped-entities */

// /* eslint-disable react/jsx-no-bind */
// import React from 'react';
// import { t } from 'i18next';
// // import Chart from '../components/Chart';
// import Card from '../components/Card';
// import Comingsoon from './Comingsoon';
// import TraineesHeader from '../components/TraineesHeader';
// import TraineeChart from '../components/TraineesChart';
// import Table from '../components/TraineeTable';
// // import DashHeader from '../components/DashHeader';



// function SupAdDashboard() {
//   return (
//     <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg">
//       <div className="flex flex-row pb-8 justify-center">
//         <div className="lg:ml-44 w-[90%] pt-[8vh] h-[100%]">
//           {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4"> */}
//             {/* <Card text="Cohort" number={5} />
//             <Card text="Curret phase" number={2} />
//             <Card text="Perfomance" number={2} />
//             <Card text="Attendance" number={1} /> */}
//           {/* </div> */}
//           {/* <Chart title={t('Overall performance')} /> */}
//           <TraineeChart/>

//           {/* <Comingsoon title='Dashboard'/> */}
//         </div>
//         <TraineesHeader/>
//         <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Table Component</h1>
//       <Table data={[]} />
//     </div>
//       </div>
//     </div>
//   );
// }

// export default SupAdDashboard;


import React from 'react';
import { t } from 'i18next';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Card from '../components/Card';
import Comingsoon from './Comingsoon';
import TraineesHeader from '../components/TraineesHeader';
import TraineeChart from '../components/TraineesChart';
import Table from '../components/TraineeTable';
import TraineePieCharts from '../components/TraineePieCharts';
// import TraineeTable from '../components/TraineeTable';
/* istanbul ignore next */

function SupAdDashboard() {
  return (
    <div className="flex flex-col grow bg-white dark:bg-dark-frame-bg">
      <div className="flex flex-row pb-8 justify-center">
        <div className="h-[100%]">
          {/* <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <Card text="Cohort" number={5} />
            <Card text="Curret phase" number={2} />
            <Card text="Perfomance" number={2} />
            <Card text="Attendance" number={1} /> */}
          {/* </div> */}
          {/* <Chart title={t('Overall performance')} /> */}
          <div className='flex justify-end'>
          <div className=' border-2 grid grid-cols-3 gap-2 max-w-[300px] rounded-lg my-4 mr-4'>
            <p>Period</p>
            <p>Last Month</p>
            <p><RiArrowDropDownLine/></p>

          </div>
         

          </div>
          <div className=' bg-[#B8CDBA] border-2 grid grid-cols-2 gap-2 max-w-[304px] max-h-[50px] rounded-lg ml-16 mb-10'>
          <p>Cohort 26</p>
          <p>Phase : 2</p>
          </div>

          <p className='text-2xl font-bold ml-20 my-10'> perfomance score</p>
          <div>

            
          <TraineePieCharts/>
          <p className='text-2xl font-bold ml-20 my-10'> Stats</p>

          </div>
          <div className='ml-8'>
          <TraineeChart/>
          </div>

          <div className=' bg-[#eaefff] flex border-2 items-center justify-center rounded-' style={{ width: '535px', height: '156px' }} >
             <p className='font-bold m-5 ' style={{ width: '126.62px', height: '24px', fontSize: '14px' }}>From manager</p>
                <div className=' p-4 font-light font-9' style={{ width: '308.39px', height: '61.67px', fontSize: '9px' }}>
                Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s,
                 </div>
</div>
         
          
          {/* <Comingsoon title='Dashboard'/> */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Recents feedback</h1>
            <div className="p-2 grid grid-cols-2 ">
            <p className=" mb-4">Phase: 1 | Phase: 2 | Phase: 3</p>
            <div className='flex justify-end'>
                <div className='border-2 grid grid-cols-3 gap-2 max-w-[300px] rounded-lg'>
                  <p className='flex items-center justify-center'>filter</p>
                  <p className='flex items-center justify-center'>week1</p>
                 <p className='flex items-center justify-center'> <RiArrowDropDownLine /></p>
                </div>
              </div>
          </div>
            <Table data={[]} /> {/* Render 10 empty rows */}
          </div>
        </div>
        <TraineesHeader />
      </div>
    </div>
  );
}

export default SupAdDashboard;


