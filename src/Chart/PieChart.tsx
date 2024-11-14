import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line react/function-component-definition
const PieChart: React.FC = () => {
  const data = {
    labels: ['new pie chart'],
    datasets: [
      {
        label: 'rates',
        data: [30, 100],
        backgroundColor: ['#4F46E5', '#A5B4FC'],
        hoverOffset: 4,
      },
    ],
  };
  const data2 = {
    labels: ['new pie chart'],
    datasets: [
      {
        label: 'rates',
        data: [30, 70],
        backgroundColor: ['#4F46E5', '#A5B4FC'],
        hoverOffset: 4,
      },
    ],
  };
  const data3 = {
    labels: ['new pie chart'],
    datasets: [
      {
        label: 'rates',
        data: [60, 60],
        backgroundColor: ['#4F46E5', '#A5B4FC'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      tooltip: {
        callbacks: {
          // eslint-disable-next-line func-names, object-shorthand
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center -ml-8 mb-8">
      <div className="flex space-x-8">
        <div className="relative w-[200px] h-[200px] bg-red-200 p-2 rounded">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-500">10</p>
            </div>
          </div>
          <p className="text-center mt-2">New Invitations & Registration</p>
        </div>
        <div className="relative w-[200px] h-[200px] bg-green-200 p-2 rounded">
          <Doughnut data={data2} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-500">20</p>
            </div>
          </div>
          <p className="text-center mt-2">Upcoming Events</p>
        </div>
        <div className="relative w-[200px] h-[200px] bg-yellow-200 p-2 rounded">
          <Doughnut data={data3} options={options} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-500">50</p>
            </div>
          </div>
          <p className="text-center mt-2">Active& Progressive Tickets</p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
