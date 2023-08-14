/* eslint-disable react/no-unknown-property */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useRef, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { useQuery } from '@apollo/client';
import { TRAINEE_RATING } from '../Mutations/Ratings';
import Comment from './ViewComment';

interface TableRow {
  sprint: number;
  quality: number;
  quantity: number;
  professionalism: number;
  comment: string;
}

interface TableProps {
  dat: TableRow[];
}

const Table: React.FC<TableProps> = ({ dat }) => {
  const emptyRows = Array.from({ length: 10 });
  
  

  return (
    <div className="trainee-table">
      <table className=" w-[90%] rounded-lg border-collapse">
        <thead className="bg-[#B8CDBA]">
          <tr>
            <th className="border border-gray-400 px-4 py-2">sprint</th>
            <th className="border border-gray-400 px-4 py-2">Quality</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">
              Professionalism
            </th>
            <th className="border border-gray-400 px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the existing dat rows */}
          {dat.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{row.sprint}</td>
              <td className="border border-gray-400 px-4 py-2">
                {row.quality}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.quantity}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.professionalism}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <Comment remark={row.comment}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;








