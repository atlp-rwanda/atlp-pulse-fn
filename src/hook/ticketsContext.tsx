/* eslint-disable */
import React, { createContext, ReactNode, useState } from 'react';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const initialState: Array<any> | null = null;

export const TicketsContext = createContext<any>(initialState);

export function TicketsProvider({ children }: Props) {
  const [tickets, setTickets] = useState<any>(initialState);
  /* istanbul ignore next */
  const setAllTickets = (tickets: Array<any>) => {
    setTickets(tickets);
  };
  /* istanbul ignore next */
  const updateTicketStatus = (ticketId: string, status: string) => {
    const newTickets = tickets.map((ticket: any) => {
      if (ticket.id === ticketId) return { ...ticket, status: status };
      return ticket;
    });
    setTickets(newTickets);
  };
  /* istanbul ignore next */
  const addReply = (ticketId: string, reply: any, status: string) => {
    const newTickets = tickets.map((ticket: any) => {
      if (ticket.id === ticketId) {
        return { ...ticket, status, replies: [reply, ...ticket.replies] };
      }
      return ticket;
    });

    setTickets(newTickets);
  };
  /* istanbul ignore next */
  const addTicket = (ticket: any) => {
    setTickets((tickets: Array<any>) => [ticket, ...tickets]);
  };

  return (
    <TicketsContext.Provider
      value={{
        tickets,
        setAllTickets,
        updateTicketStatus,
        addReply,
        addTicket,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

export default TicketsProvider;
