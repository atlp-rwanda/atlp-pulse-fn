import { gql } from '@apollo/client';

const CREATE_TICKET = gql`
  mutation CreateTicket($subject: String!, $message: String!) {
    createTicket(subject: $subject, message: $message) {
      responseMsg
    }
  }
`;

export const REPLY_TO_TICKET = gql`
  mutation ReplyToTicket($ticketId: String!, $replyMessage: String!) {
    replyToTicket(ticketId: $ticketId, replyMessage: $replyMessage) {
      replyMessage
      id
      createdAt
      sender {
        profile {
          firstName
          lastName
        }
      }
    }
  }
`;

export const CLOSE_TICKET = gql`
  mutation CloseTicket($ticketId: String!) {
    closeTicket(ticketId: $ticketId) {
      responseMsg
    }
  }
`;
export default CREATE_TICKET;
