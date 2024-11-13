import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {}

// eslint-disable-next-line react/function-component-definition
const BarChart: React.FC<Props> = () => {
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
    ],
    datasets: [
      {
        label: 'Last 8 days',
        data: [12, 19, 3, 5, 2, 3, 12, 14, 5, 7, 9, 11],
        backgroundColor: '#5A6ACF',
        borderRadius: 0,
        barThickness: 8,
      },
      {
        label: 'Last Week',
        data: [10, 15, 5, 8, 6, 9, 13, 9, 6, 8, 7, 10],
        backgroundColor: '#D1D5DB',
        borderRadius: 0,
        barThickness: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#121212',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#737B8B',
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Bar data={data} options={options} className="-ml-8" />
    </div>
  );
};

export default BarChart;
