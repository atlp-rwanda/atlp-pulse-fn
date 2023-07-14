/* eslint-disable no-console */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface eventType {
  eventData: {
    title: string;
    extendedProps: {
      guests: string[];
    };
  };
  removeEvent: (e: any) => void;
}
/* istanbul ignore next */
function EventComponent({ removeEvent, eventData }: eventType) {
  const { t } = useTranslation();
  const { title, extendedProps } = eventData;
  const { guests } = extendedProps;

  return (
    <div
      className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 `}
    >
      <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-3/4   xl:w-5/12 rounded-lg p-4 pb-8">
        <h1>{title}</h1>

        <button
          type="button"
          data-testid="removeModel"
          className="py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white"
          onClick={(e) => removeEvent(e)}
        >
          {t('cancel')}
        </button>
      </div>
    </div>
  );
}

export default EventComponent;
