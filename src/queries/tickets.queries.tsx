import { gql } from '@apollo/client';

const GET_TICKETS = gql`
  query GetAllTickets {
    getAllTickets {
      _id
      message
      subject
      status
      createdAt
      user {
        firstName
        lastName
        email
      }
    }
  }
`;

export default GET_TICKETS;
