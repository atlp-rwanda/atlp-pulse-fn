/* eslint-disable react/function-component-definition */
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
}

interface TraineeChartProps {
  barChartData: TableRow[];
}

const TraineeChart: React.FC<TraineeChartProps> = ({ barChartData }) => {
  const chartData = barChartData
    .map((entry) => ({
      name: entry.sprint,
      professionalism: entry.professionalism,
      quality: entry.quality,
      quantity: entry.quantity,
    }))
    .sort((a, b) => a.name - b.name); // Corrected placement of sort function

  const xAxisTickValues = chartData.map((entry) => entry.name);

  return (
    <div className="">
      <LineChart width={1185} height={209} data={chartData}>
        <Line
          type="monotone"
          dataKey="professionalism"
          stroke="#1b5e20"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="quality"
          stroke="#8667f2"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="quantity"
          stroke="#b5a72a"
          strokeWidth={2}
          dot={false}
        />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend iconType="circle" iconSize={10} />
      </LineChart>
    </div>
  );
};

export default TraineeChart;