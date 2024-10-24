import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoginActivitiesSkeleton() {
  // Define an array with unique keys
  const skeletonRows = [{ id: 'row-1' }, { id: 'row-2' }, { id: 'row-3' }];

  return (
    <div
      className="w-full p-4 overflow-auto"
      data-testid="login-activities-skeleton"
    >
      <table className="w-full table-fixed border border-gray-700 min-w-[600px]">
        <thead className="bg-[#27167439] text-white">
          <tr>
            <th className="p-4 border text-center w-1/6">Date</th>
            <th className="p-4 border text-center w-1/6">Country Name</th>
            <th className="p-4 border text-center w-1/6">City</th>
            <th className="p-4 border text-center w-1/6">State</th>
            <th className="p-4 border text-center w-1/6">IPV4</th>
            <th className="p-4 border text-center w-1/6">Attempt</th>
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
              <td className="py-2 px-4 border">
                <Skeleton height={35} width="100%" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
