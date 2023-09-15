/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

import { Lexer } from 'graphql';
import React from 'react';
import { PieChart, Pie, Cell, Label, Legend } from 'recharts';

const data = [
  { name: 'Qty', value: 1.6 },
  { name: 'Remaining', value: 0.4 }, // Calculate the remaining value (2 - performance value)
];

const qualityData = [
  { name: 'Qty', value: 0.7 },
  { name: 'Remaining', value: 2 - 0.7 }, // Calculate the remaining value (2 - quality value)
];

const quantityData = [
  { name: 'professional_Skills', value: 1 },
  { name: 'Remaining', value: 1 }, // In this case, the remaining value for quantity is 1 since the original value is 1.
];

const qualityColors = ['#b71c1c', '#D9D9D9'];
const quantityColors = ['#ffeb3b', '#D9D9D9'];
const COLORS = ['#1b5e20', '#D9D9D9'];

export default function TraineePieCharts() {
  return (
    <div className="flex flex-row gap-4  max-w-[30%] max-h-[50%] ">
      {/* Performance Doughnut Chart */}

      <div className='flex flex-col gap-4'>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={60}
            startAngle={-160}
            endAngle={450}
            labelLine={false}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            <Label
              value={data[0].value}
              position="center"
              fill="#1b5e20"
              fontSize={20}
              fontWeight="bold"
              offset={0}
            />
          </Pie>
          <Legend
             payload={[
              {
                value: data[0].name,
                type: "circle",
                color: "#6F6F6F",
              },
            ]}
            iconSize={10}

          />
        </PieChart>
        <p  className=' text-[#1b5e20] ml-16'>Good</p>

      </div>

      {/* Quality Doughnut Chart */}
      <div className='flex flex-col gap-2'>
        <PieChart width={200} height={200}>
        <Pie
            data={qualityData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={60}
            startAngle={-40}
            endAngle={450}
            labelLine={false}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {qualityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={qualityColors[index]} />
            ))}
            <Label
              value={qualityData[0].value}
              position="center"
              fill="#b71c1c"
              fontSize={20}
              fontWeight="bold"
              offset={0}
            />
          </Pie>
          <Legend
             payload={[
              {
                value: qualityData[0].name,
                type: "circle",
                color: "#6F6F6F",
              },

            ]}
            iconSize={10}
          />

        </PieChart>
        <p  className='text-[#b71c1c] ml-20 '>Need to improve</p>

      </div>
 
      {/* Quantity Doughnut Chart */}
      <div className='flex flex-col gap-2'>
        <PieChart width={200} height={200}>
        <Pie
            data={quantityData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={60}
            startAngle={-80}
            endAngle={450}
            labelLine={false}
            paddingAngle={0}
            isAnimationActive={false}
          >
            {quantityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={quantityColors[index]} />
            ))}
            <Label
              value={quantityData[0].value}
              position="center"
              fill="#ffeb3b"
              fontSize={20}
              fontWeight="bold"
              offset={0}
            />
          </Pie>
          <Legend
             payload={[
              {
                value: quantityData[0].name,
                type: "circle",
                color: "#6F6F6F",
              },
            ]}
            iconSize={10}

          />

        </PieChart>
        <p  className='text-[#ffeb3b] ml-20'>Good</p>

      </div>
    </div>
  );
}