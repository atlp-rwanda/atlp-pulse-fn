import React, { useEffect, useContext } from 'react';
import { useLazyQuery, useSubscription } from '@apollo/client';
import { Outlet } from 'react-router';
import { ToastContent, toast } from 'react-toastify';
import useDocumentTitle from '../hook/useDocumentTitle';
import { TicketsContext } from '../hook/ticketsContext';
import GET_TICKETS, {
  NEW_TICKET_SUBSCRIPTION,
} from '../queries/tickets.queries';
import { UserContext } from '../hook/useAuth';

function Tickets() {
  const { setAllTickets, addTicket } = useContext(TicketsContext);
  const { user } = useContext(UserContext);

  if (user.role === 'superAdmin')
    useSubscription(NEW_TICKET_SUBSCRIPTION, {
      onData(data: any) {
        const ticket = data.data.data.ticketCreated;
        ticket.replies = [];
        addTicket(ticket);
      },
    });

  useDocumentTitle('Tickets');

  const [getAllTickets] = useLazyQuery(GET_TICKETS, {
    fetchPolicy: 'cache-and-network',
  });

  const onload = async () => {
    await getAllTickets({
      onCompleted: async (data: any) => {
        setAllTickets(data.getAllTickets);
      },

      onError: async (error) => {
        toast.error(`${error.message}` as ToastContent<unknown>);
      },

      // TODO Handle Error
    });
  };

  useEffect(() => {
    onload();
  }, []);

  return <Outlet />;
}

export default Tickets;
