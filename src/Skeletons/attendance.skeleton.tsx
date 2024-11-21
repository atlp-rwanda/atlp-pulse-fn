import React from 'react';

function AttendanceSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-gray-300 rounded w-1/4" />
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="h-8 bg-gray-300 rounded w-32" />
          <div className="h-8 bg-gray-300 rounded w-20" />
        </div>
        <div className="h-8 bg-gray-300 rounded w-40" />
      </div>
      <div className="flex space-x-2">
        {Array(5)
          .fill(null)
          .map((_) => (
            <div
              id={`day-skeleton-${_}`}
              className="h-8 bg-gray-300 rounded w-16"
            />
          ))}
      </div>

      <div className="border border-gray-300 rounded overflow-hidden">
        <div className="flex bg-gray-200">
          <div className="h-10 w-1/4 bg-gray-300" />
          <div className="h-10 w-1/4 bg-gray-300" />
          <div className="h-10 w-1/4 bg-gray-300" />
          <div className="h-10 w-1/4 bg-gray-300" />
        </div>

        {Array(5)
          .fill(null)
          .map((_, rowIndex) => (
            <div id={`row-skeleton-${rowIndex}`} className="flex space-x-1">
              {Array(4)
                .fill(null)
                .map((_, colIndex) => (
                  <div
                    id={`cell-skeleton-${rowIndex}-${colIndex}`}
                    className="h-8 bg-gray-300 w-1/4"
                  />
                ))}
            </div>
          ))}
      </div>

      <div className="flex justify-between">
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 w-32" />
          <div className="h-4 bg-gray-300 w-40" />
          <div className="h-4 bg-gray-300 w-24" />
        </div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded w-24" />
          <div className="h-6 bg-gray-300 rounded w-28" />
          <div className="h-6 bg-gray-300 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

export default AttendanceSkeleton;
