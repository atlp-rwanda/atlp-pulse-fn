/* eslint-disable */
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventContentArg, EventInput } from '@fullcalendar/core';
import { useTranslation } from 'react-i18next';
import interactionPlugin from '@fullcalendar/interaction';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactTooltip from 'react-tooltip';
import useDocumentTitle from '../hook/useDocumentTitle';
import { useLazyQuery, useMutation } from '@apollo/client';
import { ADD_EVENT, EDIT_EVENT, CANCEL_EVENT } from '../Mutations/event';
import { GET_EVENTS } from '../queries/event.queries';
import moment from 'moment';
import CalendarSkeleton from '../Skeletons/Calender.skeleton'
import { toast } from 'react-toastify';
import EventGuestList from './EventGuestList';
/* istanbul ignore next */

const Calendar = () => {
  useDocumentTitle('Calendar');
  const [addEventModel, setAddEventModel] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    hostName: '',
    timeToStart: '',
    timeToEnd: '',
  });

  const [getEvents, { loading, data }] = useLazyQuery(GET_EVENTS);
  const [createEvent] = useMutation(ADD_EVENT);

  const [showTraineeDropdown, setShowTraineeDropdown] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState<string[]>([]);

  const { t } = useTranslation();

  const fetchData = async () => {
    /* istanbul ignore next */
    try {
      await getEvents({
        variables: {
          authToken: localStorage.getItem('auth_token'),
        },
        fetchPolicy: 'network-only',
      });
    } catch (error: any) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  const renderEvent = (e: EventContentArg) => (
    <div
      data-testid={`event-${e.event.id}`}
      data-html={true}
      data-tip={`<div>${e.event.title}<br> ${e.event.extendedProps.hostName}  <br> ${e.event.extendedProps.timeToStart} - ${e.event.extendedProps.timeToEnd}</div> `}
      className="bg-primary text-white max-w-full min-w-full overflow-auto text-xs md:text-sm"
    >
      <p className="px-3 py-1 ">{e.event.title}</p>
      <p className="px-3 py-1 ">{e.event.extendedProps.hostName}</p>
      <p className="px-3 py-1 ">
        {e.event.extendedProps.timeToStart} - {e.event.extendedProps.timeToEnd}
      </p>
      <ReactTooltip data-html={true} />
    </div>
  );

  const removeModel = (e: any) => {
    e.preventDefault();
    const newState = !addEventModel;
    setAddEventModel(newState);
  };

  const handleAddEventModal = () => {
    const newState = !addEventModel;
    setAddEventModel(newState);
  };

  const handleAddEvent = (e: any) => {
    e.preventDefault();
    createEvent({
      variables: {
        ...newEvent,
        authToken: localStorage.getItem('auth_token'),
        orgToken: localStorage.getItem('orgToken'),
        invitees: selectedGuests,
      }
    })
      .then(() => {
        fetchData()
        toast.success('Event has been added!'); // {{ edit_1 }}
        setNewEvent({
          title: '',
          start: new Date(),
          end: new Date(),
          hostName: '',
          timeToStart: '',
          timeToEnd: '',
        });
        setSelectedGuests([])
        setTimeout(() => {
          setAddEventModel(false);
        }, 1000);

      })
      .catch((error) => {
        toast.error(error.message); // Handle error if needed
      });
  };

  const handleAddGuest = (guestEmail: string) => {
    setSelectedGuests((prev) =>
      prev.includes(guestEmail)
        ? prev.filter((id) => id !== guestEmail)
        : [...prev, guestEmail],
    );
  };

  //edit section
  const [editEvent] = useMutation(EDIT_EVENT)
  const [editEventModel, setEditEventModel] = useState(false)
  const [editedEvent, setEditedEvent] = useState({
    id: '',
    title: '',
    start: '',
    end: '',
    hostName: '',
    timeToStart: '',
    timeToEnd: '',
  });

  const handleEditEventModel = async (e: EventInput) => {
    const event = data?.getEvents.find((event: any)=> event.id === e.event?.id)
    if (event) {
      if(event.user !== JSON.parse(localStorage.getItem('auth')!).userId) return
      setEditedEvent((prev) => {
        return {
          ...prev,
          id: event.id,
          title: event.title,
          start: event.start,
          end: event.end,
          hostName: event.hostName,
          timeToStart: event.timeToStart,
          timeToEnd: event.timeToEnd,
        }
      })
      setSelectedGuests(event.invitees.map((invitee: any) => invitee.email))
      setEditEventModel(true);
    }
  };

  const handleEditEvent = async (e: any) => {
    e.preventDefault()
    const { id, ...rest } = editedEvent
    editEvent({
      variables: {
        eventId: id,
        ...rest,
        authToken: localStorage.getItem('auth_token'),
        orgToken: localStorage.getItem('orgToken'),
        invitees: selectedGuests,
      },
    })
      .then(() => {
        fetchData()
        toast.success('Event has been updated!');
        setEditedEvent({
          id: '',
          title: '',
          start: '',
          end: '',
          hostName: '',
          timeToStart: '',
          timeToEnd: '',
        });
        setSelectedGuests([])
        setTimeout(() => {
          setEditEventModel(false);
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.message); // Handle error if needed
      });
  }

  const removeEditModel = (e: any) => {
    e.preventDefault()
    setSelectedGuests([])
    setEditEventModel(!editEventModel)
  }

  // delete section
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [cancelEvent] = useMutation(CANCEL_EVENT)

  const handleDeleteConfirmation = (e: any) => {
    e.preventDefault()
    setShowDeleteModal(prev => !prev)
  }

  const handleDelete = async (e: any) => {
    e.preventDefault()
    cancelEvent({
      variables: {
        eventId: editedEvent.id,
        authToken: localStorage.getItem('auth_token')
      },
    })
      .then(() => {
        fetchData()
        toast.success('Event cancelled successfully')
        setEditedEvent({
          id: '',
          title: '',
          start: '',
          end: '',
          hostName: '',
          timeToStart: '',
          timeToEnd: '',
        });
        setSelectedGuests([])
        setTimeout(() => {
          setShowDeleteModal(false)
          setEditEventModel(false);
        }, 1000);
      }
      )
      .catch(err => {
        toast.error(err.message)
      })
  }

  return (
    <>
      <div
        data-testid="addEventModal" className={`font-serif h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${addEventModel === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Add event')}
            </h3>
            <hr className=" bg-primary border-gray-300 my-3 w-full" />
          </div>
          <div className="card-body">
            <form
              data-testid="addEventForm"
              className=" py-3 px-8 overflow-y-auto h-full "
              onSubmit={(e) => handleAddEvent(e)}
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
                    onChange={(e) =>
                      setNewEvent({
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
                    onChange={(start: any) =>
                      setNewEvent({
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
                    onChange={(end: any) => setNewEvent({ ...newEvent, end })}
                  />
                </div>
              </div>

              <div className="input my-3">
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <input
                      type="time"
                      name="startTime"
                      className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-3 font-sans text-xs py-2 w-full"
                      placeholder={t('Start time')}
                      value={newEvent.timeToStart}
                      onChange={(e) =>
                        setNewEvent({
                          ...newEvent,
                          timeToStart: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="time"
                      name="endTime"
                      className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-3 font-sans text-xs py-2 w-full"
                      placeholder={t('End time')}
                      value={newEvent.timeToEnd}
                      onChange={(e) =>
                        setNewEvent({
                          ...newEvent,
                          timeToEnd: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="input my-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm mb-2">{t('Add guests')}</span>
                  <button
                    type="button"
                    className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mb-2"
                    onClick={() => setShowTraineeDropdown(!showTraineeDropdown)}
                  >
                    {showTraineeDropdown ? '-' : '+'}
                  </button>
                </div>
                {showTraineeDropdown ?
                  <EventGuestList
                    selectedGuests={selectedGuests}
                    handleAddGuest={handleAddGuest}
                  /> : ''}
              </div>

              <div className="w-full flex justify-between">
                <button
                  data-testid="removeAddEventModal"
                  className="py-2 w-[40%] md:w-1/3 bg-violet-400 rounded font-sans text-sm text-white"
                  onClick={(e) => removeModel(e)}
                >
                  {t('cancel')}
                </button>
                <button data-testid="handleAddEventButton" className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('save')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        data-testid="editEventModal" className={`font-serif h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${editEventModel === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Edit event')}
            </h3>
            <hr className=" bg-primary border-gray-300 my-3 w-full" />
          </div>
          <div className="card-body">
            <form
              data-testid="editEventForm"
              className=" py-3 px-8 overflow-y-auto h-full "
              onSubmit={(e) => handleEditEvent(e)}
            >
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    data-testid="editEventTitle"
                    name="eventTitle"
                    className=" dark:bg-dark-tertiary border dark:text-white border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Event title')}
                    value={editedEvent.title}
                    onChange={(e) =>
                      setEditedEvent({ ...editedEvent, title: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    data-testid="editEventHostname"
                    name="hostName"
                    className=" dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholder={t('Host name')}
                    value={editedEvent.hostName}
                    onChange={(e) =>
                      setEditedEvent({
                        ...editedEvent,
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
                    selected={editedEvent.start ? new Date(editedEvent.start) : new Date()}
                    onChange={(start: any) =>
                      setEditedEvent({
                        ...editedEvent,
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
                    selected={editedEvent.end ? new Date(editedEvent.end) : new Date()}
                    onChange={(end: any) => setEditedEvent({ ...editedEvent, end })}
                  />
                </div>
              </div>

              <div className="input my-3">
                <div className="flex space-x-2">
                  <div className="w-1/2">
                    <input
                      type="time"
                      name="startTime"
                      className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-3 font-sans text-xs py-2 w-full"
                      placeholder={t('Start time')}
                      value={editedEvent.timeToStart}
                      onChange={(e) =>
                        setEditedEvent({
                          ...editedEvent,
                          timeToStart: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="time"
                      name="endTime"
                      className="dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-3 font-sans text-xs py-2 w-full"
                      placeholder={t('End time')}
                      value={editedEvent.timeToEnd}
                      onChange={(e) =>
                        setEditedEvent({
                          ...editedEvent,
                          timeToEnd: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="input my-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm mb-2">{t('Add guests')}</span>
                  <button
                    type="button"
                    className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mb-2"
                    onClick={() => {
                      setShowTraineeDropdown(!showTraineeDropdown);
                    }}
                  >
                    {showTraineeDropdown ? '-' : '+'}
                  </button>
                </div>
                {showTraineeDropdown ?
                  <EventGuestList
                    selectedGuests={selectedGuests}
                    handleAddGuest={handleAddGuest}
                  /> : ''}
              </div>

              <div className="w-full flex justify-between">
                <button
                  data-testid="removeModel"
                  className="py-2 w-[40%] md:w-1/3 bg-violet-400 rounded font-sans text-sm text-white"
                  onClick={(e) => removeEditModel(e)}
                >
                  {t('cancel')}
                </button>
                <div className='flex justify-end gap-x-1.5 w-[50%]'>
                  <button data-testid="handleDeleteModal" type='button' className="text-white py-2 md:w-1/3 bg-red-600 rounded" onClick={(e) => handleDeleteConfirmation(e)}>
                    {t('Delete')}
                  </button>
                  <button type='submit' className="text-white py-2 md:w-1/3 bg-primary rounded">
                    {t('save')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        data-testid="deleteEventModal" className={`font-serif h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${showDeleteModal === true ? 'block' : 'hidden'
          }`}
      >
        <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Confirm Dialog')}
            </h3>
            <hr className=" bg-primary border-gray-300 my-3 w-full" />
          </div>
          <p data-testid="deletePrompt" className="text-sm dark:text-white text-center my-8">Please confirm the cancellation of event <strong>{editedEvent.title}</strong>.</p>
          <div className="w-full flex justify-between">
            <button
              data-testid="removeDeleteModal"
              className="py-2 w-[40%] md:w-1/3 bg-violet-400 rounded font-sans text-sm text-white"
              onClick={(e) => setShowDeleteModal(prev => !prev)}
            >
              {t('cancel')}
            </button>
            <button data-testid="handleDelete" className="text-white py-2 w-[40%] md:w-1/3 bg-red-600 rounded" onClick={(e) => handleDelete(e)}>
              {t('Delete')}
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-20  w-full dark:bg-dark-frame-bg dark:text-white h-full overflow-y-scroll font-serif">
        <div className="w-full flex justify-center text-xl md:text-4xl dark:text-primary mb-10">
          <h2>{t('Calendar')}</h2>
        </div>
        {JSON.parse(localStorage.getItem('auth')!).role !== "trainee" ?
         <button
          data-testid="handleAddEventModal"
          className="text-white py-2 w-1/2 md:w-1/3 bg-primary rounded"
          onClick={handleAddEventModal}
        >
          {t('Add event')}
        </button>
        :''}
        {loading ? (
          <CalendarSkeleton />
        ) : (
        <FullCalendar
          eventContent={renderEvent}
          events={data?.getEvents.map((event: any) => ({
            id: event.id,
            end: moment(event.end).add({days:1}).format('YYYY-MM-DD'),
            start: moment(event.start).format('YYYY-MM-DD'),
            hostName: event.hostName,
            timeToStart: event.timeToStart,
            title: event.title,
            timeToEnd: event.timeToEnd,
            allDay: true,
          }))}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          eventClick={handleEditEventModel}
        />
        )}
      </div>
    </>
  );
};

export default Calendar;
