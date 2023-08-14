/* eslint-disable react/function-component-definition */
<<<<<<< HEAD
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
=======
/* eslint-disable import/no-extraneous-dependencies */

// import React from 'react';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,  PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


// const data = [
//   { name: "1", performance: 0.6, quality: 0.9, quantity: 1.2 },
//   { name: "2", performance: 0.5, quality: 1.5, quantity: 1.0 },
//   { name: "3", performance: 1.0, quality: 0.7, quantity: 1.8 },
//   { name: "4", performance: 1.2, quality: 1.2, quantity: 1.4 },
//   { name: "5", performance: 1.2, quality: 0.5, quantity: 0.9 },
//   { name: "6", performance: 1.6, quality: 0.9, quantity: 1.7 },
//   { name: "7", performance: 1.8, quality: 0.8, quantity: 1.5 },
//   { name: "8", performance: 2.0, quality: 1.6, quantity: 1.3 },
//   { name: "9", performance: 1.2, quality: 1.4, quantity: 1.1 },
//   { name: "11", performance: 0.9, quality: 1.2, quantity: 1.9 },
//   { name: "13", performance: 1.3, quality: 0.6, quantity: 1.6 },
//   { name: "15", performance: 1.6, quality: 1.0, quantity: 1.2 },
//   { name: "17", performance: 1.0, quality: 1.5, quantity: 1.7 },
//   { name: "19", performance: 1.4, quality: 0.9, quantity: 1.3 },
//   { name: "21", performance: 1.8, quality: 1.3, quantity: 1.5 },
//   { name: "23", performance: 1.1, quality: 1.7, quantity: 1.0 },
//   { name: "25", performance: 2, quality: 1.9, quantity: 2 },
//   { name: "27", performance: '', quality: '', quantity: '' },
//   { name: "29", performance: '', quality: '', quantity: '' },
// ];

// export default function TraineeChart() {
//   const xAxisTickValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

//   return (
  
//     <div className='Trainee-chart'>
//     <LineChart width={998} height={209} data={data}>
//       <Line type="monotone" dataKey="performance" stroke="#1b5e20" strokeWidth={2} dot={false} />
//       <Line type="monotone" dataKey="quality" stroke="#8667f2" strokeWidth={2} dot={false} />
//       <Line type="monotone" dataKey="quantity" stroke="#b5a72a" strokeWidth={2} dot={false} />
//       <CartesianGrid stroke="#ccc" />
//       <XAxis dataKey="name" />
//       <YAxis  />
//       <Tooltip />
//       <Legend iconType='circle' iconSize={10} />
//     </LineChart>
//     </div>
//   );
// }

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
>>>>>>> rebase develop

interface TableRow {
  sprint: number;
  quality: number;
  quantity: number;
  professionalism: number;
  attendance: number;
<<<<<<< HEAD
  
=======
  comment: string;
>>>>>>> rebase develop
}

interface TraineeChartProps {
  barChartData: TableRow[];
}

const TraineeChart: React.FC<TraineeChartProps> = ({ barChartData }) => {
<<<<<<< HEAD

  const chartData = barChartData
    .map((entry) => ({
      name: entry.sprint,
      professionalism: entry.professionalism,
=======
  const chartData = barChartData
    .map((entry) => ({
      name: entry.sprint,
      performance: entry.professionalism,
>>>>>>> rebase develop
      quality: entry.quality,
      quantity: entry.quantity,
    }))
    .sort((a, b) => a.name - b.name); // Corrected placement of sort function

  const xAxisTickValues = chartData.map((entry) => entry.name);

  return (
<<<<<<< HEAD
    <div className="">
      <LineChart  width={1185} height={209} data={chartData}>
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
=======
    <div className='Trainee-chart'>
      <LineChart width={998} height={209} data={chartData}>
        <Line type="monotone" dataKey="performance" stroke="#1b5e20" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="quality" stroke="#8667f2" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="quantity" stroke="#b5a72a" strokeWidth={2} dot={false} />
>>>>>>> rebase develop
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
<<<<<<< HEAD
        <Legend iconType="circle" iconSize={10} />
=======
        <Legend iconType='circle' iconSize={10} />
>>>>>>> rebase develop
      </LineChart>
    </div>
  );
};

<<<<<<< HEAD
export default TraineeChart;
=======
export default TraineeChart;


>>>>>>> rebase develop
