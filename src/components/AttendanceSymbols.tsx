import React, { ReactElement } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaXmark } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import tilde from '../assets/tilde.svg';

interface Props {
  status: number | string;
}

interface Property {
  color: string;
  icon: ReactElement;
}
function AttendanceSymbols({ status }: Props) {
  const score = String(status);
  const property: Property = {
    color: 'bg-[#0E8E0B]',
    // icon: <i className="fa-solid fa-check font-semibold" />,
    icon: <FaCheck className="mt-[.1rem] md:mt-0 text-[.75rem] md:text-[.8rem]" />,
  };

  if (score === '1') {
    property.color = 'bg-[#FE8903]';
    property.icon = <img src={tilde} alt="" />;
  }
  if (score === '0') {
    property.color = 'bg-[#C30909]';
    property.icon = (
      <FaXmark className="-ml-[.1rem] md:ml-0 text-[.93rem] md:text-base" />
    );
  }
  return (
    <div
      className={`${property.color} flex items-center justify-center w-[1.3rem] h-[1.3rem] md:w-[1.5rem] md:h-[1.5rem] rounded-full text-white`}
    >
      {property.icon}
    </div>
  );
}

export default AttendanceSymbols;
