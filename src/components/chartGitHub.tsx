/* eslint-disable */

import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
  data: {
    totalCommits: string;
    pullRequest: {
      closed: string;
      merged: string;
      opened: string;
    };
  };
}

const GitHubActivityChart: React.FC<Props> = ({ data }) => {
  const chartData = {
    labels: ['Merged Pull Requests', 'Opened Pull Requests'],
    datasets: [
      {
        label: 'GitHub Activity',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: ['#D23D4F', '#5F3E8E'],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [
          parseInt(data.pullRequest?.merged),
          parseInt(data.pullRequest?.opened),
        ],
      },
    ],
  };

  const options = {};

  // eslint-disable-next-line no-nested-ternary
  return (
    <div className="font-serif">
      <h2>GitHub Activity Chart</h2>
      <Doughnut data={chartData} options={options} width={300} height={300} />
    </div>
  );
};

export default GitHubActivityChart;
