import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

function Tooltip({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center group font-serif">
      {children}
      <div className="absolute bottom-0 hidden flex-col items-center mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {t(message)}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600" />
      </div>
    </div>
  );
}

export default Tooltip;
