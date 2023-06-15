/* eslint-disable */
import React, { useEffect, useState } from 'react';
import FullCalendar, { EventInput, EventContentArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useTranslation } from 'react-i18next';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactTooltip from 'react-tooltip';
import useDocumentTitle from '../hook/useDocumentTitle';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_EVENT, GET_EVENTS } from '../Mutations/event';
import moment from 'moment';
/* istanbul ignore next */

const initialData: EventInput[] = [
  {
    title: 'Event title 1',
    start: '2023-06-12',
    end: '2023-06-14',
    hostName: 'Samuel NISHIMWE',
    timeToStart: '14:00',
    timeToFinish: '16:00',
  },
  {
    title: 'Event title 2',
    start: '2022-07-29',
    end: '2022-07-29',
    hostName: 'Jean MAKARA',
    timeToStart: '11:00',
    timeToFinish: '12:00',
  },
  {
    title: 'Event title 3',
    start: '2022-07-23',
    end: '2022-07-23',
    hostName: 'Eric MALABA',
    timeToStart: '8:00',
    timeToFinish: '11:00',
  },
];

const Calendar = () => {
  useDocumentTitle('Calendar');
  const [addEventModel, setAddEventModel] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    hostName: '',
    timeToStart: '',
    timeToFinish: '',
  });
  const [data, setData] = useState<EventInput[]>([]);
  const [getEvents] = useLazyQuery(GET_EVENTS);
  const [createEvent] = useMutation(ADD_EVENT);

  useEffect(() => {
    console.log(data);
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      /* istanbul ignore next */
      try {
        const { data: out } = await getEvents({
          variables: {
            authToken: localStorage.getItem('auth_token'),
          },
        });
        let all = out.getEvents.map((one: EventInput) => ({
          end: moment(one.end).format('YYYY-MM-DD'),
          start: moment(one.start).format('YYYY-MM-DD'),
          hostName: one.hostName,
          timeToStart: one.timeToStart,
          title: one.title,
          timeToFinish: one.timeToEnd,
        }));
        setData(all);
      } catch (error) {
        console.log({ eventsError: data });
        // toast.error(error?.message || 'Something went wrong');
      }
    };
    fetchData();
  }, []);
  const { t } = useTranslation();
  const renderEvent =
    /* istanbul ignore next */

    (e: EventContentArg) => (
      /* istanbul ignore next */
      <div
        data-html={true}
        data-tip={`<div>${e.event.title}<br> ${e.event.extendedProps.hostName}  <br> ${e.event.extendedProps.timeToStart} - ${e.event.extendedProps.timeToFinish}</div> `}
        className="bg-primary text-white max-w-full min-w-full overflow-auto text-xs md:text-sm"
      >
        <p className="px-3 py-1 ">{e.event.title}</p>
        <p className="px-3 py-1 ">{e.event.extendedProps.hostName}</p>
        <p className="px-3 py-1 ">
          {e.event.extendedProps.timeToStart} -{' '}
          {e.event.extendedProps.timeToFinish}
        </p>
        <ReactTooltip data-html={true} />
      </div>
    );

  const removeModel = (e: any) => {
    e.preventDefault();
    const newState = !addEventModel;
    setAddEventModel(newState);
  };

  const handleDateClick = () => {
    const newState = !addEventModel;
    setAddEventModel(newState);
  };
  /* istanbul ignore next */

  const handleAddEvent = (e: any) => {
    e.preventDefault();
    createEvent({
      variables: { ...newEvent, authToken: localStorage.getItem('auth_token') },
    });
    setData([...data, newEvent]);
    setNewEvent({
      title: '',
      start: '',
      end: '',
      hostName: '',
      timeToStart: '',
      timeToFinish: '',
    });
    setTimeout(() => {
      setAddEventModel(false);
    }, 1000);
  };

  return (
    <>
      {/* =========================== Start::  RegisterTraineeModel =========================== */}
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          addEventModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Add event')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            {/* istanbul ignore next */}
            <form
              data-testid="handleAddEvent"
              className=" py-3 px-8"
              onSubmit /* istanbul ignore next */={(e) =>
                /* istanbul ignore next */
                handleAddEvent(e)
              }
            >
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    data-testid="setNewEvent"
                    name="eventTitle"
                    className=" dark:bg-dark-tertiary border dark:text-white border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Event title')}
                    value={newEvent.title}
                    // eslint-disable-next-line prettier/prettier
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, title: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="hostName"
                    className=" dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Host name')}
                    value={newEvent.hostName}
                    onChange /* istanbul ignore next */={(e) =>
                      /* istanbul ignore next */ setNewEvent({
                        ...newEvent,
                        hostName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <DatePicker
                    className=" dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholderText={t('Start Date')}
                    style={{ marginRight: '10px' }}
                    selected={newEvent.start}
                    onChange /* istanbul ignore next */={(start: any) =>
                      /* istanbul ignore next */ setNewEvent({
                        ...newEvent,
                        start,
                      })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <DatePicker
                    className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholderText={t('End Date')}
                    style={{ marginRight: '10px' }}
                    selected={newEvent.end}
                    onChange=/* istanbul ignore next */ {(end: any) =>
                      /* istanbul ignore next */
                      setNewEvent({ ...newEvent, end })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="time"
                    name="hostName"
                    className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Start time')}
                    value={newEvent.timeToStart}
                    onChange /* istanbul ignore next */={(e) =>
                      /* istanbul ignore next */
                      setNewEvent({ ...newEvent, timeToStart: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="time"
                    name="hostName"
                    className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('End time')}
                    value={newEvent.timeToFinish}
                    onChange=/* istanbul ignore next */ {(e) =>
                      /* istanbul ignore next */
                      setNewEvent({ ...newEvent, timeToFinish: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="w-full flex justify-between">
                <button
                  data-testid="removeModel"
                  className="py-2 w-[40%] md:w-1/3 bg-[#31699C] rounded font-sans text-sm text-white"
                  onClick={(e) => removeModel(e)}
                >
                  {t('cancel')}
                </button>
                <button className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  RegisterTraineeModel =============================== */}

      <div className="pt-24 px-4 md:px-40 md:pl-80 pb-20  w-full dark:bg-dark-frame-bg dark:text-white h-full overflow-y-scroll">
        <div className="w-full flex justify-center text-xl md:text-4xl dark:text-primary mb-10">
          <h2>{t('Calendar')}</h2>
        </div>
        <button
          data-testid="handleDateClick"
          className="text-white py-2 w-1/2 md:w-1/3 bg-primary rounded"
          onClick={handleDateClick}
        >
          {t('Add event')}
        </button>
        <FullCalendar
          eventContent={renderEvent}
          events={data}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    </>
  );
};

export default Calendar;
