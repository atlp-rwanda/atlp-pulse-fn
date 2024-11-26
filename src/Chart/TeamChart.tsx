/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
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
  CurrentTeam: any[];
  loginsbyDate: any[];
}

function TeamChart({
  timeframe = 'daily',
  CurrentTeam,
  loginsbyDate,
}: TeamChartProps) {
  function organizeLoginData(loginData: any) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    function getWeekNumber(date: any) {
      const tempDate: any = new Date(date);
      tempDate.setUTCDate(
        tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7),
      );
      const yearStart: any = new Date(
        Date.UTC(tempDate.getUTCFullYear(), 0, 1),
      );
      return Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
    }
    // Initialize result arrays
    const weeklyData = Array(54)
      .fill(0)
      .map((_, i) => ({ week: i + 1, success: 0, failed: 0 }));
    const monthlyData = Array(12)
      .fill(0)
      .map((_, i) => ({ month: i + 1, success: 0, failed: 0 }));
    const dailyData = Array(7)
      .fill(0)
      .map((_, i) => ({ day: i, success: 0, failed: 0 }));
    for (const [dateString, { success, failed }] of Object.entries(
      loginData,
    ) as any) {
      const date = new Date(dateString);
      const isoWeekNumber = getWeekNumber(date);
      const month = date.getUTCMonth();
      const dayOfWeek = (date.getUTCDay() + 6) % 7;
      const weekStart = new Date(currentDate);
      weekStart.setUTCDate(
        currentDate.getUTCDate() - currentDate.getUTCDay() + 1,
      );
      const weekEnd = new Date(weekStart);
      weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
      if (date >= weekStart && date <= weekEnd) {
        dailyData[dayOfWeek].success += success;
        dailyData[dayOfWeek].failed += failed;
      }
      // Weekly data
      if (isoWeekNumber <= 54) {
        weeklyData[isoWeekNumber - 1].success += success;
        weeklyData[isoWeekNumber - 1].failed += failed;
      }
      // Monthly data
      monthlyData[month].success += success;
      monthlyData[month].failed += failed;
    }
    const weekDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const currentWeekData = dailyData.map((data, index) => ({
      day: weekDays[index],
      success: data.success,
      failed: data.failed,
    }));
    return {
      currentWeek: currentWeekData,
      weekly: weeklyData,
      monthly: monthlyData.map((data, index) => ({
        month: new Date(0, index).toLocaleString('en', { month: 'long' }),
        success: data.success,
        failed: data.failed,
      })),
    };
  }

  const organizedData = organizeLoginData(loginsbyDate);

  const weeklyDataset = organizedData.weekly
    .filter((_, index) => index % 3 === 0)
    .map((item) => item.success);

  const chartData = {
    daily: {
      labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      datasets: [
        {
          label: CurrentTeam[0].name,
          data: organizedData.currentWeek.map((item: any) => item.success),
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
          label: CurrentTeam[0].name,
          data: weeklyDataset,
          fill: false,
          borderColor: '#4F46E5',
          tension: 0.4,
        },
      ],
    },
    monthly: {
      labels: Array.from({ length: 12 }, (_, i) =>
        String(i + 1).padStart(2, '0'),
      ),
      datasets: [
        {
          label: CurrentTeam[0].name,
          data: organizedData.monthly.map((item: any) => item.success),
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
