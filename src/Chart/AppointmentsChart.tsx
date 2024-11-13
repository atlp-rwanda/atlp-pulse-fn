import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// eslint-disable-next-line react/function-component-definition
const AppointmentsChart: React.FC = () => {
  const data = {
    labels: [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ],
    datasets: [
      {
        label: 'Last days',
        data: [
          1, 3, 0, 2, 1, 3, 2, 0, 2, 1, 3, 0, 2, 1, 4, 1, 2, 4, 7, 2, 3, 4, 4,
          3, 8, 0, 3, 5, 7,
        ],
        fill: false,
        borderColor: '#4F46E5',
        tension: 0.4,
      },
      {
        label: 'Last days',
        data: [
          2, 3, 6, 4, 3, 4, 2, 1, 2, 6, 2, 2, 3, 2, 3, 5, 7, 2, 1, 2, 4, 6, 6,
          1, 2, 3, 4, 5, 6.5,
        ],
        fill: false,
        borderColor: '#8C8120',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#D1D5DB',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Line data={data} options={options} className="-ml-8" />
    </div>
  );
};

export default AppointmentsChart;
