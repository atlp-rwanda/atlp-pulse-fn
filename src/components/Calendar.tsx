import React from 'react';
import FullCalendar, { EventInput, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const data: EventInput[] = [
  {
    title: 'Event title 1',
    start: '2022-07-21',
    hostName: 'Samuel NISHIMWE',
  },
  {
    title: 'Event title 2',
    start: '2022-07-21',
    hostName: 'Jean MAKARA',
  },
  {
    title: 'Event title 3',
    start: '2022-07-23',
    hostName: 'Eric MALABA',
  },
];

function Calendar() {
  const viewEvent = (e: EventContentArg) => (
    <p className="px-3 py-1 bg-[#005FF8]">{e.event.title}</p>
  );

  return (
    <div className="pt-24 px-28 dark:bg-dark-frame-bg dark:text-white">
      <FullCalendar
        eventContent={viewEvent}
        events={data}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}

export default Calendar;
