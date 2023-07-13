import { gql } from '@apollo/client';

const CREATE_TICKET = gql`
  mutation CreateTicket($subject: String!, $message: String!) {
    createTicket(subject: $subject, message: $message) {
      responseMsg
    }
  }
`;
export default CREATE_TICKET;
