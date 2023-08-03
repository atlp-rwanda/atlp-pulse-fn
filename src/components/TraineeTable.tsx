/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';

interface TableRow {
  week: number;
  quality: number;
  quantity: number;
  professionalism: number;
  attendance: number;
  comment: string;
}

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Create an array of length 9 to represent the empty rows
  const emptyRows = Array.from({ length: 10 });

  return (
    <div className="w-full">
      <table className="table-auto w-full border-collapse ">
        <thead className='bg-[#B8CDBA]'>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Week</th>
            <th className="border border-gray-400 px-4 py-2">Quality</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">Professionalism</th>
            <th className="border border-gray-400 px-4 py-2">Attendance</th>
            <th className="border border-gray-400 px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the existing data rows */}
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{row.week}</td>
              <td className="border border-gray-400 px-4 py-2">{row.quality}</td>
              <td className="border border-gray-400 px-4 py-2">{row.quantity}</td>
              <td className="border border-gray-400 px-4 py-2">{row.professionalism}</td>
              <td className="border border-gray-400 px-4 py-2">{row.attendance}</td>
              <td className="border border-gray-400 px-4 py-2">{row.comment}</td>
            </tr>
          ))}
          {/* Render the empty rows */}
          {emptyRows.map((_, index) => (
            <tr key={index + data.length}>
              <td className="border border-gray-400 px-4 py-2" >1</td>
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

