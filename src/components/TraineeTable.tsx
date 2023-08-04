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
    <div className="">
      <table className=" w-[90%] rounded-lg border-collapse">
        <thead className="bg-[#B8CDBA]">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Week</th>
            <th className="border border-gray-400 px-4 py-2">Quality</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
            <th className="border border-gray-400 px-4 py-2">
              Professionalism
            </th>
            <th className="border border-gray-400 px-4 py-2">Attendance</th>
            <th className="border border-gray-400 px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the existing data rows */}
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{row.week}</td>
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
                {row.attendance}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {row.comment}
              </td>
            </tr>
          ))}
          {/* Render the empty rows */}
          {emptyRows.map((_, index) => (
            <tr key={index + data.length}>
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2" />
              <td className="border border-gray-400 px-4 py-2">
                <Comment/>
                 </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

interface AddIPaddressProps {
  // Add any props if needed
}

function Comment(props: AddIPaddressProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [randomIP, setRandomIP] = useState<string>(''); // Initialize with an empty string

  const closeModel = () => {
    if (dialog.current?.close) dialog.current.close();
  };

  const openModel = () => {
    if (dialog.current?.showModal) dialog.current.showModal();
  };

  const close = (e: React.MouseEvent<HTMLElement>) => {
    const dialogDimensions = dialog.current?.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions!.left ||
      e.clientX > dialogDimensions!.right ||
      e.clientY < dialogDimensions!.top ||
      e.clientY > dialogDimensions!.bottom
    ) {
      closeModel();
    }
  };
  

  return (
    <>
      <dialog
        ref={dialog}
        className="rounded-lg shadow-lg w-[40%]  "
        data-testid="dialog"
        onClick={(e) => close(e)}
      >
        <div className="p-3 rounded">
        <div
                // className="bg-[#f5f8ff] flex border-2 items-center justify-center  mt-20 mr-24 float-right rounded-xl "
                // style={{ width: '535px', height: '156px' }}
              >
                <p
                  className="font-semibold my-2 text-lg"
                 
                >
                  From manager
                </p>
                <div
                  className=" font-light font-9 text-md"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
         
        </div>
      </dialog>
      <button
        className="bg-[#333131]   flex   px-4 py-1 flex-row justify-evenly  items-center rounded-xl text-white"
        onClick={() => openModel()}
      >
        <AiOutlineEye className="m-1  " />

        <div className=" flex felx-col justify-center items-center">
          <span className="text-sm">view</span>
        </div>
      </button>
    </>
  );
}
