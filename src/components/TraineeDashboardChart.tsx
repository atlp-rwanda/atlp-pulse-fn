/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useContext } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ThemeContext } from '../hook/ThemeProvider';

interface TableRow {
  sprint: number;
  quality: number;
  quantity: number;
  professionalism: number;
  attendance: number;
  comment: string;
}

interface TraineeChartProps {
  barChartData: TableRow[];
}

const TraineeChart: React.FC<TraineeChartProps> = ({ barChartData }) => {
  const { colorTheme } = useContext(ThemeContext);
  const chartData = barChartData
    .map((entry) => ({
      name: entry.sprint,
      Professionalism: entry.professionalism,
      Quality: entry.quality,
      Quantity: entry.quantity,
    }))
    .sort((a, b) => a.name - b.name);

  return (
    <ResponsiveContainer
      className="-ml-6 xmd:-ml-4 text-[.82rem] xmd:text-[.88rem] md:text-[.95rem] capitalize"
      width="100%"
      height={250}
    >
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="4 4" stroke="#7d7d7d" />
        <XAxis
          dataKey="name"
          // axisLine={false}
          tickLine={false}
          label={{ value: 'Sprints', position: 'insideBottom', offset: -10 }}
          interval={0}
          stroke={colorTheme === 'dark' ? '#fff' : '#000'}
          tickFormatter={(value) => `${value}`}
        />
        <YAxis
          stroke={colorTheme === 'dark' ? '#fff' : '#000'}
          tickLine={false}
          label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          wrapperStyle={{
            padding: 0,
            margin: 0,
            fontSize: '.85rem',
          }}
          itemStyle={{
            marginInline: '.2rem', // Remove margin from each item
            lineHeight: '1', // Control line spacing if needed
          }}
          labelStyle={{
            display: 'none',
          }}
        />
        <div className="mt-3" />
        <Legend
          iconType="circle"
          iconSize={10}
          wrapperStyle={{
            paddingTop: '1.5rem',
          }}
        />

        <Line
          type="monotone"
          dataKey="Professionalism"
          stroke="#1b5e20"
          strokeWidth={2}
          dot
        />
        <Line
          type="monotone"
          dataKey="Quality"
          stroke="#8667f2"
          strokeWidth={2}
          dot
        />
        <Line
          type="monotone"
          dataKey="Quantity"
          stroke="#b5a72a"
          strokeWidth={2}
          dot
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TraineeChart;
