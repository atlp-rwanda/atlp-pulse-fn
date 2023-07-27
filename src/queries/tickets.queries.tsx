import { gql } from '@apollo/client';

const GET_TICKETS = gql`
  query GetAllTickets {
    getAllTickets {
      id
      message
      subject
      status
      createdAt
      user {
        id
        email
        profile {
          firstName
          lastName
        }
      }

      replies {
        id
        createdAt
        replyMessage
        sender {
          id
          profile {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const NEW_TICKET_SUBSCRIPTION = gql`
  subscription OnTicketCreated {
    ticketCreated {
      id
      message
      subject
      status
      createdAt
      user {
        id
        email
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;

export const NEW_REPLY_SUB = gql`
  subscription OnReplyAdded {
    replyAdded {
      id
      createdAt
      replyMessage
      ticket
      sender {
        id
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;
export default GET_TICKETS;
