import React from 'react';

function CalendarSkeleton() {
  // Define unique identifiers for calendar days
  const days = Array.from({ length: 35 }, (_, i) => ({ id: `day-${i + 1}` })); // 35 days with unique ids
  // Define unique identifiers for events
  const events = [{ id: 'event-1' }, { id: 'event-2' }]; // Define event placeholders with unique ids

  return (
    <div className="bg-light-bg dark:bg-dark-frame-bg pb-10">
      <div className="animate-pulse">
        {/* Month and Year Display */}
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 bg-gray-200 rounded w-24" />
          <div className="h-6 bg-gray-200 rounded w-16" />
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Weekdays Headers */}
          {[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ].map((day) => (
            <div key={day} className="h-6 bg-gray-200 rounded text-center">
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
            </div>
          ))}

          {/* Calendar Days */}
          {days.map((day) => (
            <div
              key={day.id}
              className="h-20 bg-gray-200 rounded p-2 flex flex-col justify-between"
            >
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              {/* Additional skeleton elements can be added here */}
            </div>
          ))}
        </div>

        {/* Event List */}
        <div className="mt-4 space-y-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-2 bg-gray-800 rounded"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarSkeleton;
