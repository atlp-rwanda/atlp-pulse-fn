/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

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
  const chartData = barChartData
    .map((entry) => ({
      name: entry.sprint,
      Professionalism: entry.professionalism,
      Quality: entry.quality,
      Quantity: entry.quantity,
    }))
    .sort((a, b) => a.name - b.name);

  return (
    <div className="Trainee-chart font-serif">
      <LineChart width={1000} height={220} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="name"
          label={{ value: 'Sprint', position: 'insideBottom', offset: -2 }}
        />
        <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend iconType="circle" iconSize={10} />

        <Line
          type="monotone"
          dataKey="Professionalism"
          stroke="#1b5e20"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Quality"
          stroke="#8667f2"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Quantity"
          stroke="#b5a72a"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default TraineeChart;
