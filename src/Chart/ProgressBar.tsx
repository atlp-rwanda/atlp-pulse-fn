import React from 'react';

interface ProgressBarProps {
  passedPercentage: number; // Percentage of passed logins
  failedPercentage: number; // Percentage of failed logins
}

function ProgressBar({ passedPercentage, failedPercentage }: ProgressBarProps) {
  return (
    <div className="w-1/2 space-y-4">
      <div className="relative h-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div
          className="absolute h-full bg-green-500 text-white text-center"
          style={{ width: `${passedPercentage}%` }}
        >
          {passedPercentage}%
        </div>
        <div
          className="absolute h-full bg-red-500 text-white text-center"
          style={{
            width: `${failedPercentage}%`,
            left: `${passedPercentage}%`,
          }}
        >
          {failedPercentage}%
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="text-green-500 font-semibold">Green</span>: Passed
          Logins
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <span className="text-red-500 font-semibold">Red</span>: Failed Logins
        </p>
      </div>
    </div>
  );
}

export default ProgressBar;
