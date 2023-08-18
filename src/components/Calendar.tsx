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
import {
  useLazyQuery,
  useMutation,
  gql,
  ApolloClient,
  InMemoryCache,
  useQuery,
} from '@apollo/client';
import { ADD_EVENT, GET_ACCEPTED_EVENTS, GET_EVENTS } from '../Mutations/event';
import moment from 'moment';
import { GET_TRAINEES_QUERY } from '../Mutations/manageStudentMutations';
import { SEND_INVITATION_EMAIL } from '../Mutations/event';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Button from './Buttons';

/* istanbul ignore next */

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // Add your GraphQL endpoint here...
});
function formatDate(dateString: string | number | Date) {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${day}-${month}-${year}`;
}
const sendInvitationEmail = (
  email: String,
  title: String,
  start: any,
  hostName: String,
  timeToStart: any,
  timeToFinish: any,
) => {
  const [sendInvitationEmailMutation] = useMutation(SEND_INVITATION_EMAIL);

  const formattedStartDate = formatDate(start);
  sendInvitationEmailMutation({
    variables: {
      email: email,
      title: title,
      start: start,
      hostName: hostName,
      timeToStart: timeToStart,
      timeToFinish: timeToFinish,
    },
  })
    .then((response) => {
      // Handle the response
    })
    .catch((error) => {
      // Handle any errors
    });
  console.log('dfgfsd', start);
};

const newEventTemp = {
  title: '',
  start: '',
  end: '',
  hostName: '',
  guests: [],
  timeToStart: '',
  timeToFinish: '',
};

const Calendar = () => {
  useDocumentTitle('Calendar');
  const [openEvent, setOpenEvent] = useState(false);
  console.log('?????', openEvent);
  const [addEventModel, setAddEventModel] = useState(false);
  const [newEvent, setNewEvent] = useState(newEventTemp);
  const [data, setData] = useState<EventInput[]>([]);
  const [getEvents] = useLazyQuery(GET_EVENTS);
  const [getAcceptedEvents] = useLazyQuery(GET_ACCEPTED_EVENTS);
  const [eventDetails, setEventDetails] = useState({
    title: '',
    hostname: '',
    extendedProps: {
      guests: [],
    },
  });
  function PaperComponent(props: PaperProps) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const [createEvent] = useMutation(ADD_EVENT, {
    update(cache, { data: { createEvent } }) {
      /* istanbul ignore next */
      const { data: eventData } = useQuery(GET_EVENTS, {
        variables: {
          authToken: localStorage.getItem('auth_token'),
        },
      });

      if (eventData && eventData.getEvents) {
        const { getEvents } = eventData;
        cache.writeQuery({
          query: GET_EVENTS,
          data: { getEvents: [...getEvents, createEvent] },
        });
      }
    },
  });

  const [selectedEvent, setSelectedEvent] = useState<EventContentArg | null>(
    null,
  );
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState<{ id: string; email: string }[]>([]);
  const customStyles = {
    /* istanbul ignore next */
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : '#148FB6',
    }),
    valueLabel: (styles: any) => ({
      ...styles,
      text: 'white',
    }),
    control: (styles: any) => ({
      ...styles,
      height: 20,
      width: 370,
      backgroundColor: '#374151',
      borderColor: 'rgb(20 143 182)',
      text: 'white',
    }),
    /* istanbul ignore next */
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      /* istanbul ignore next */
      return { ...provided, opacity, transition };
    },
  };

  const organizationToken = localStorage.getItem('orgToken');

  const [getTrainees, { data: queryData }] = useLazyQuery(GET_TRAINEES_QUERY, {
    variables: {
      orgToken: organizationToken,
    },
  });

  /* istanbul ignore next */
  useEffect(() => {
    console.log('!!!!!!', queryData);
    if (queryData?.getTrainees) {
      setUsers(queryData.getTrainees);
    }
  }, [queryData]);
  console.log('we are  users', users);
  console.log('getevents', getEvents);
  useEffect(() => {
    getTrainees();
  }, [queryData]);
  console.log(users);
  const traineeOptions = users.map((user: any) => ({
    value: user.email,
    label: user.email,
    id: user.id,
    email: user.email,
  }));
  /* istanbul ignore next */
  const handleUserChange = (event: any) => {
    if (event) {
      const selectedIds = event.map((user: any) => user.email);
      console.log('Event ID', event);
      setSelectedUsers(selectedIds);
      console.log('Selected IDs:', selectedIds);
    }
  };
  /* istanbul ignore next */
  useEffect(() => {
    const fetchData = async () => {
      /* istanbul ignore next */
      try {
        const { data: out } = await getEvents({
          variables: {
            authToken: localStorage.getItem('auth_token'),
          },
        });
        const { data: outAccepted } = await getAcceptedEvents({
          variables: {
            authToken: localStorage.getItem('auth_token'),
          },
        });

        let all = [...out.getEvents, ...outAccepted.getAcceptedEvents].map(
          (one: EventInput) => ({
            end: moment(one.end).format('YYYY-MM-DD'),
            start: moment(one.start).format('YYYY-MM-DD'),
            hostName: one.hostName,
            guests: one.guests,
            timeToStart: one.timeToStart,
            title: one.title,
            timeToFinish: one.timeToEnd,
          }),
        );
        setData(all);
        console.log('all', all);
      } catch (error) {
        console.log({ eventsError: data });
      }
    };
    fetchData();
  }, []);
  const { t } = useTranslation();
  /* istanbul ignore next */
  const handleEdit = (event: any) => {
    setSelectedEvent(event);
  };
  // handle open & close event
  /* istanbul ignore next */

  const handleOpenEvent = (e: any) => {
    setEventDetails(e);
    setSelectedEvent(e);
    setOpenEvent(!openEvent);
    console.log('guests', e.extendedProps.start);
    console.log('event', e._instance.range);
  };
  const handleCloseEvent = () => {
    setSelectedEvent(null);
    setOpenEvent(false);
  };
  // handle
  /* istanbul ignore next */
  const removeEvent = (e: any) => {
    e.preventDefault();
    const newState = !openEvent;
    setOpenEvent(newState);
  };
  // eslint-disable-next-line react/prop-types
  interface EventModalProps {
    event: any;
    onClose: () => void;
  }
  // eslint-disable-next-line react/prop-types
  const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
    console.log('hello ho are you.....', event);
    // useEffect(() => {
    //   return () => {
    //     console.log('CLOSE EVENT MODEL .....');
    //   };
    // });

    return (
      <div className="rounded-lg dark:bg-dark-bg">
        <Dialog
          open={openEvent}
          onClose={onClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
          className="rounded-lg"
          fullWidth
        >
          <DialogContent className="font-sans dark:bg-dark-bg">
            <DialogContentText className="font-sans dark:bg-dark-bg">
              <div className="font-sans text-sm font-bold text-center dark:text-white dark:bg-dark-bg">
                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginTop: '30px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>Title</b>{' '}
                  </h3>
                  <p>
                    <i> {event?.title}</i>
                  </p>
                </div>
                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginTop: '30px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>Hostname</b>
                  </h3>
                  <p>{event?.extendedProps.hostName}</p>
                </div>
                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>Guests</b>{' '}
                  </h3>
                  <p>
                    <i> {event?.extendedProps.guests.join('\n')}</i>
                  </p>
                </div>

                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>Start Date</b>{' '}
                  </h3>
                  <p>
                    <i>
                      {moment(event?._instance.range.start).format(
                        'YYYY-MM-DD',
                      )}
                    </i>
                  </p>
                </div>
                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b> End Date</b>{' '}
                  </h3>
                  <p>
                    <i>
                      {moment(event?._instance.range.end).format('YYYY-MM-DD')}
                    </i>
                  </p>
                </div>

                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginBottom: '20px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>Start Time</b>{' '}
                  </h3>
                  <p>
                    <i> {event?.extendedProps.timeToStart}</i>
                  </p>
                </div>
                <div
                  className="font-sans text-sm"
                  style={{
                    display: 'flex',
                    gap: '50px',
                    justifyContent: 'space-between',
                    paddingBlock: '10px',
                    marginBottom: '20px',
                    borderBottom: '0.5px solid #EAECEE',
                  }}
                >
                  {' '}
                  <h3>
                    <b>End Time</b>{' '}
                  </h3>
                  <p>
                    <i> {event?.extendedProps.timeToFinish}</i>
                  </p>
                </div>

                <Button
                  data-testid="removeInviteModel"
                  variant="info"
                  size="sm"
                  style="w-[20%] md:w-1/4 text-sm font-sans"
                  onClick={onClose}
                >
                  {t('Close')}
                </Button>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  };
  const renderEvent =
    /* istanbul ignore next */

    (e: EventContentArg) => (
      /* istanbul ignore next */
      <div
        onClick={() => handleOpenEvent(e.event)}
        data-html={true}
        data-tip={`<div>${e.event.title}<br> ${e.event.extendedProps.hostName} <br>${e.event.extendedProps.guests}  <br> ${e.event.extendedProps.timeToStart} - ${e.event.extendedProps.timeToFinish}  </div> `}
        className=" bg-primary text-white max-w-full min-w-full overflow-auto text-xs md:text-sm"
      >
        <p className="px-3 py-1 ">{e.event.title}</p>
        <p className="px-3 py-1 ">{e.event.extendedProps.hostName}</p>
        {/* <p className="px-3 py-1 ">{e.event.extendedProps.guests}</p> */}
        <p className="px-3 py-1 ">
          {e.event.extendedProps.timeToStart} -{' '}
          {e.event.extendedProps.timeToFinish}
        </p>
        <div className="absolute bottom-0 right-0 flex items-center"></div>
        <ReactTooltip ata-html={true} />
      </div>
    );
  /* istanbul ignore next */
  const removeModel = (e: any) => {
    e.preventDefault();
    const newState = !addEventModel;
    setAddEventModel(newState);
  };
  /* istanbul ignore next */
  const handleDateClick = () => {
    const newState = !addEventModel;
    setAddEventModel(newState);
  };

  /* istanbul ignore next */

  const handleAddEvent = (e: any) => {
    e.preventDefault();
    const updatedNewEvent = {
      ...newEvent,
      guests: selectedUsers,
    };
    createEvent({
      variables: {
        ...updatedNewEvent,
        authToken: localStorage.getItem('auth_token'),
      },
    })
      .then(() => {
        // Send invitation email to the selected guest
        selectedUsers.forEach((guestEmail: string) => {
          sendInvitationEmail(
            guestEmail,
            updatedNewEvent.title,
            updatedNewEvent.start,
            updatedNewEvent.hostName,
            updatedNewEvent.timeToStart,
            updatedNewEvent.timeToFinish,
          );
        });
      })

      .catch((error) => {
        console.log('errorrrr', error);
      });
    console.log(moment(updatedNewEvent.start).format('YYYY-MM-DD'));

    setData([...data, updatedNewEvent]);
    setNewEvent(newEventTemp);
    setSelectedUsers([]);
    setTimeout(() => {
      setAddEventModel(false);
    }, 1000);
    console.log('Iam new event', updatedNewEvent);
  };

  return (
    <>
      {/* =========================== Start::  RegisterTraineeModel =========================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
          addEventModel === true ? 'block' : 'hidden'
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
            {/* istanbul ignore next */}
            <form
              data-testid="handleAddEvent"
              className=" py-3 px-8"
              /* istanbul ignore next */
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

              <Select
                placeholder={t('Choose guest')}
                className="my-react-select-container"
                classNamePrefix="my-react-select"
                isSearchable
                styles={customStyles}
                isMulti
                options={traineeOptions}
                onChange={handleUserChange}
              />

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <DatePicker
                    className=" dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full"
                    placeholderText={t('Start Date')}
                    style={{ marginRight: '10px' }}
                    selected={newEvent.start}
                    minDate={new Date()}
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
                    minDate={newEvent.start}
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
                    name="starttime"
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
                    name="endtime"
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
                  className="py-2 w-[40%] md:w-1/3 bg-violet-400 rounded font-sans text-sm text-white"
                  onClick={(e) => removeModel(e)}
                >
                  {t('cancel')}
                </button>
                <button className="text-white py-2 w-[40%] md:w-1/3 bg-primary rounded">
                  {t('save')}
                </button>
              </div>
            </form>
            <div className="grouped-input flex items-center h-full w-full rounded-md"></div>
          </div>
        </div>
      </div>
      {/* =========================== End::  RegisterTraineeModel =============================== */}

      <div className="px-4 pb-10 md:pb-20 sm:pb-0 dark:bg-dark-frame-bg dark:text-white">
        <div className="w-full flex flex-col items-center text-xl md:text-4xl dark:text-primary mb-6 md:mb-10">
          <h2 className="mb-2 md:mb-4">{t('Calendar')}</h2>
          <button
            data-testid="handleDateClick"
            className="text-white py-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-primary rounded"
            onClick={handleDateClick}
          >
            {t('Add event')}
          </button>
        </div>

        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
          <FullCalendar
            eventContent={renderEvent}
            events={data}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
          />
        </div>
        {openEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseEvent} />
        )}
      </div>
    </>
  );
};

export default Calendar;
