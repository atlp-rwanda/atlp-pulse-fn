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

interface TeamChartProps {
  timeframe?: 'daily' | 'weekly' | 'monthly';
}

function TeamChart({ timeframe = 'daily' }: TeamChartProps) {
  const chartData = {
    daily: {
      labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [
        {
          label: 'Andela',
          data: [1, 3, 0, 2, 1, 3, 2],
          fill: false,
          borderColor: '#4F46E5',
          tension: 0.4,
        },
      ],
    },
    weekly: {
      labels: [
        '03',
        '06',
        '09',
        '12',
        '15',
        '18',
        '21',
        '24',
        '27',
        '30',
        '31',
        '34',
        '37',
        '40',
        '43',
        '46',
        '49',
        '54',
      ],
      datasets: [
        {
          label: 'Andela',
          data: [1, 3, 0, 2, 1, 3, 2, 0, 2, 1, 3, 0, 2, 1, 4, 1, 2, 4],
          fill: false,
          borderColor: '#4F46E5',
          tension: 0.4,
        },
      ],
    },
    monthly: {
      labels: Array.from({ length: 31 }, (_, i) =>
        String(i + 1).padStart(2, '0'),
      ),
      datasets: [
        {
          label: 'Andela',
          data: Array.from({ length: 31 }, () => Math.floor(Math.random() * 8)),
          fill: false,
          borderColor: '#4F46E5',
          tension: 0.4,
        },
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#D1D5DB',
        },
        ticks: {
          color: '#6B7280',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-4xl h-[60vh] max-h-[500px] mx-auto p-4 md:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <Line data={chartData[timeframe]} options={options} />
    </div>
  );
}

export default TeamChart;
