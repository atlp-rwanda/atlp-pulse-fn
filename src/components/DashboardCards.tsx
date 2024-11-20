import React, { useContext, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { MdOutlineEventBusy, MdOutlineEventAvailable } from 'react-icons/md';

import { RiTeamFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { format } from 'date-fns';
import Skeleton from 'react-loading-skeleton';
import { get } from 'http';
import { di } from '@fullcalendar/core/internal-common';
import { GET_TEAMS_CARDS } from './CoordinatorCard';
import { ThemeContext } from '../hook/ThemeProvider';
import { GET_ALL_INVITATIONS } from '../queries/invitation.queries';
import { GET_EVENTS } from '../queries/event.queries';
import GET_TICKETS from '../queries/tickets.queries';

ChartJS.register(ArcElement, Tooltip, Legend);

interface EventsInterface {
  id: string;
  title: string;
  start: string;
  end: string;
  timeToStart: string;
  timeToEnd: string;
  hostName: string;
}

function DashboardCards() {
  const navigate = useNavigate();
  const { colorTheme } = useContext(ThemeContext);
  const [upcomingEvents, setUpcomingEvents] = useState<EventsInterface[]>([]);
  const [TeamsData, setTeamsData] = useState<any | null>(null);
  const [ticketsData, setTicketsData] = useState<any[]>([]);
  const [activeTicketsCount, setActiveTicketsCount] = useState(0);
  const [closedTicketsCount, setClosedTicketsCount] = useState(0);
  const [InvitationData, setInvitationData] = useState<any | null>(null);
  const [acceptedInvitationsCount, setAcceptedTicketsCount] = useState(0);
  const [pendingInvitationsCount, setPendingTicketsCount] = useState(0);
  const [declinedInvitationsCount, setDeclinedTicketsCount] = useState(0);

  const [getEvents, { loading: getEventsDataLoading }] =
    useLazyQuery(GET_EVENTS);

  const [getAllTeams, { loading: getAllTeamsDataLoading }] =
    useLazyQuery(GET_TEAMS_CARDS);

  const { loading: getTicketsDataLoading } = useQuery(GET_TICKETS, {
    onCompleted: (data) => {
      const tickets = data.getAllTickets || [];
      setTicketsData(tickets);
      // Count active and closed tickets
      const activeCount = tickets.filter(
        (ticket: { status: string }) => ticket.status !== 'closed',
      ).length;
      const closedCount = tickets.filter(
        (ticket: { status: string }) => ticket.status === 'closed',
      ).length;
      setActiveTicketsCount(activeCount);
      setClosedTicketsCount(closedCount);
    },
    fetchPolicy: 'network-only',
  });

  const { loading: getInvitationsDataLoading } = useQuery(GET_ALL_INVITATIONS, {
    variables: {
      orgToken: localStorage.getItem('orgToken'),
    },
    onCompleted: (data) => {
      const invitations = data.getAllInvitations?.invitations || [];
      setInvitationData(invitations);
      // Count active and closed tickets
      const acceptedInvitationsCount = invitations.filter(
        (invitees: { status: string }) => invitees.status === 'accepted',
      ).length;
      const pendingInvitationsCount = invitations.filter(
        (invitees: { status: string }) => invitees.status === 'pending',
      ).length;
      const declinedInvitationsCount = invitations.filter(
        (invitees: { status: string }) => invitees.status === 'cancelled',
      ).length;
      setAcceptedTicketsCount(acceptedInvitationsCount);
      setPendingTicketsCount(pendingInvitationsCount);
      setDeclinedTicketsCount(declinedInvitationsCount);
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    getEvents({
      variables: {
        authToken: localStorage.getItem('auth_token'),
      },
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setUpcomingEvents((prevData) => {
          const events: EventsInterface[] = data.getEvents;
          return events
            .filter((event) => new Date(event.start).getTime() >= Date.now())
            .sort(
              (a, b) =>
                new Date(a.start).getTime() - new Date(b.start).getTime(),
            )
            .slice(0, 3);
        });
      },
    });
  }, [getEvents]);

  useEffect(() => {
    getAllTeams({
      variables: {
        orgToken: localStorage.getItem('orgToken'),
      },
      fetchPolicy: 'network-only',
      onCompleted: (data: any) => {
        setTeamsData(data.getAllTeams);
      },
    });
  }, [getAllTeams]);

  const totalTeams = TeamsData ? TeamsData.length : 0;

  const statsSkeleton = (
    <div className="w-full">
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        width="1.25rem"
        className="h-5 mb-2 mr-5"
        circle
        inline
      />
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        width="calc(100% - 2.6rem)"
        className="h-5 mb-2"
        inline
      />
      <Skeleton
        baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
        highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
        className="h-12 mt-2"
      />
    </div>
  );

  const chartData = {
    labels: ['Active Tickets', 'Closed Tickets'],
    datasets: [
      {
        label: 'Tickets',
        data: [activeTicketsCount, closedTicketsCount],
        backgroundColor: ['#7758b0', '#FF6384'],
        hoverBackgroundColor: ['#7758b0', '#FF6384'],
        hoveroffset: 3,
      },
    ],
  };

  const InvitationChartData = {
    labels: [
      'Accepted Invitations',
      'Pending Invitations',
      'Declined Invitations',
    ],
    datasets: [
      {
        label: 'Invitations',
        data: [
          acceptedInvitationsCount,
          pendingInvitationsCount,
          declinedInvitationsCount,
        ],
        backgroundColor: ['#7758b0', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#7758b0', '#FFCE56', '#FF6384'],
        hoveroffset: 3,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-5 lg:gap-8 text-[.92rem] xmd:text-[.95rem]">
      <div className="flex flex-wrap justify-center gap-7 items-start rounded-md px-9 py-10">
        {/* Tickets Overview */}
        <div className="w-full md:w-[40%] flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6 shadow-md">
          <h2 className="font-semibold text-lg">Tickets Overview</h2>
          {getTicketsDataLoading ? (
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              count={1}
              className="h-[20rem] mt-3"
            />
          ) : (
            <div className="flex justify-center">
              <Doughnut data={chartData} />
            </div>
          )}
        </div>

        {/* Invitations Overview */}
        <div className="w-full md:w-[40%] flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6 shadow-md">
          <h2 className="font-semibold text-lg">Invitations Overview</h2>
          {getInvitationsDataLoading ? (
            <Skeleton
              baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
              highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
              count={1}
              className="h-[20rem] mt-3"
            />
          ) : (
            <div className="flex justify-center">
              <Doughnut data={InvitationChartData} />
            </div>
          )}
        </div>

        {/* Teams Card */}
        <div className="h-[7rem] xmd:h-[7.6rem] w-full md:w-[15rem] lg:w-[18rem] flex flex-col items-center gap-2 bg-tertiary dark:bg-[#262627] py-4 xmd:py-4 px-6 shadow-md rounded-sm">
          {!getAllTeamsDataLoading && (
            <>
              <div className="flex items-end xmd:items-center gap-1 xmd:gap-2">
                <RiTeamFill className="w-8 h-8 text-primary" />{' '}
                {/* Increased icon size */}
                <p className="uppercase font-semibold text-[1rem] xmd:text-lg">
                  TEAMS
                </p>
              </div>
              <div>
                <span className="text-[2.5rem] xmd:text-[2.8rem] md:text-5xl font-bold">
                  {totalTeams}
                </span>
              </div>
            </>
          )}
          {getAllTeamsDataLoading && statsSkeleton}
        </div>

        {/* Upcoming Events */}
        <div className="w-full md:w-[40%] flex flex-col gap-5 bg-tertiary dark:bg-dark-bg rounded-md p-5 xmd:p-6 shadow-md">
          <h2 className="font-semibold text-lg">Upcoming Events</h2>
          <div
            className={`${
              upcomingEvents.length ? 'justify-start' : 'justify-center'
            } flex flex-col gap-y-3 items-center min-h-[18rem]`}
          >
            {upcomingEvents.length ? (
              upcomingEvents.map((event) => (
                <Link key={event.id} to="/calendar" className="w-full">
                  <div className="flex items-center gap-1 p-2 lg:p-3 text-[.85rem] lg:text-[.9rem] capitalize bg-tertiary dark:bg-[#262627] hover:bg-[#c9cee0ea] hover:dark:bg-[#19191aea] shadow-md cursor-pointer">
                    <MdOutlineEventAvailable className="text-[3.9rem]" />
                    <div>
                      <div className="flex flex-wrap items-center gap-1 font-semibold leading-3">
                        <span>{event.title} -</span>
                        <p className="flex items-center">
                          <span>By {event.hostName}</span>
                        </p>
                      </div>
                      <div className="text-[.73rem] md:text-[.78rem] lg:text-[.83rem] leading-4 dark:text-[#B3B3B3] text-[#3c3c3c] mt-1">
                        <p>
                          {event.timeToStart}
                          {event.timeToEnd && ` - ${event.timeToEnd}`}
                        </p>
                        <p className="flex items-center flex-wrap italic leading-3">
                          <span>
                            {format(new Date(event.start), 'dd, MMM yyyy')}
                          </span>
                          <span>&nbsp;-&nbsp;</span>
                          <span>
                            {format(new Date(event.end), 'dd, MMM yyyy')}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center">
                <MdOutlineEventBusy className="text-[3.9rem]" />
                <p className="text-[.83rem] md:text-[.88rem] lg:text-[.92rem] text-center leading-4">
                  Oops! No upcoming events scheduled
                </p>
              </div>
            )}
          </div>
          {getEventsDataLoading && (
            <div>
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                width="50%"
                className="h-8 mb-4"
              />
              <Skeleton
                baseColor={colorTheme === 'dark' ? '#4b4b4e' : '#ccd2e3'}
                highlightColor={colorTheme === 'dark' ? '#646468' : '#bdc5db'}
                count={3}
                className="h-[5.3rem] mt-3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
