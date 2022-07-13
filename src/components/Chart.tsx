/* eslint-disable */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      title: { display: true, text: 'Organizations' },
    },
    x: {
      title: { display: true, text: 'Months' },
    },
  },
};

const labels = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      lineTension: 0.5,
      label: 'Dataset 1',
      data: [
        { x: 0, y: 0.6 },
        { x: 2.5, y: 1.3 },
        { x: 4, y: 1.2 },
        { x: 7, y: 2 },
        { x: 10, y: 1 },
        { x: 16, y: 1.8 },
        { x: 18, y: 1.5 },
      ],
      borderColor: '#148FB6',
      backgroundColor: '#1490b62f',
    },
  ],
};

const Chart = () => {
  return (
    <div className="w-[100%] h-[46vh] lg:h-[62vh] pb-20 lg:w-[90%] lg:ml-14 lg:mr-2 p-4 mt-8 bottom-0 bg-white dark:bg-dark-bg">
      <h1 className="mb-2 text-lg dark:text-dark-text-fill">Organizations</h1>
      <h2 className="text-xs mb-6 dark:text-dark-text-fill">
        As of 18 July 2022, 12:00 PM
      </h2>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
