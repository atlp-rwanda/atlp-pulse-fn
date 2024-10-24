import React from 'react';

interface SkeletonTableProps {
  columns: Array<any>;
}

function SkeletonTable({ columns }: SkeletonTableProps) {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {columns.map((column: any, index: React.Key | null | undefined) => (
            <th
              key={column.id || column.name}
              className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider dark:bg-[#0A1729] dark:text-gray-400"
            >
              <div
                className="h-4 bg-gray-300 rounded w-3/4 dark:bg-gray-700"
                aria-label="Loading skeleton"
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, rowIndex: any) => (
          <tr key={rowIndex.id || rowIndex.name}>
            {columns.map((_, colIndex: any) => (
              <td
                key={colIndex.id || colIndex.name}
                className="px-6 py-4 border-b border-gray-200 bg-white text-sm dark:bg-[#0A1731] dark:border-gray-400"
              >
                <div
                  className="h-4 bg-gray-300 rounded w-full dark:bg-gray-700"
                  aria-label="Loading skeleton"
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SkeletonTable;
