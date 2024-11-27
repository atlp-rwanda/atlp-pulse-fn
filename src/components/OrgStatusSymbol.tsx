import React from 'react';

interface PropsInterface {
  type: 'active' | 'pending' | 'rejected';
  label?: boolean;
}

function OrgStatusSymbol({ type, label }: PropsInterface) {
  const colorClasses = {
    active: 'border-[#11AF0E] bg-[#11AF0E]',
    pending: 'border-[#FFA500] bg-[#FFA500]',
    rejected: 'border-[#C30909] bg-[#C30909]',
  };

  const selectedColor = colorClasses[type];

  return (
    <div className="flex gap-x-1 items-center capitalize text-[.85rem] tracking-tight">
      <div
        className={`border ${selectedColor.split(' ')[0]} rounded-full p-[3px]`}
      >
        <div
          className={`h-[5px] w-[5px] rounded-full ${
            selectedColor.split(' ')[1]
          }`}
        />
      </div>
      {label && <span>{type}</span>}
    </div>
  );
}

export default OrgStatusSymbol;
