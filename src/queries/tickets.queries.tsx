import { gql } from '@apollo/client';

// Query to fetch all tickets
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
        role
        profile {
          name
          firstName
          lastName
        }
        team {
          id
          name
        }
        cohort {
          id
          name
        }
      }
      assignee {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
        team {
          id
          name
        }
        cohort {
          id
          name
        }
      }
      replies {
        id
        createdAt
        replyMessage
        sender {
          id
          email
          role
          team {
            id
            name
          }
        }
        receiver {
          id
          email
          role
          team {
            id
            name
          }
        }
      }
    }
  }
`;

// Subscription for new ticket creation (real-time)
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
        role
        profile {
          name
          firstName
          lastName
        }
      }
      assignee {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
        team {
          name
          cohort {
            name
          }
        }
      }
    }
  }
`;

// Subscription for new reply addition (real-time)
export const NEW_REPLY_SUB = gql`
  subscription OnReplyAdded {
    replyAdded {
      id
      createdAt
      replyMessage
      ticket
      sender {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
      }
      receiver {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
      }
    }
  }
`;

// Mutation to delete a ticket
export const DELETE_TICKET_MUTATION = gql`
  mutation DeleteTicket($id: ID!) {
    deleteTicket(id: $id) {
      responseMsg
    }
  }
`;

// export const EDIT_TICKET_MUTATION = gql`
//   mutation EditTicket($id: ID!, $subject: String!) {
//     editTicket(id: $id, subject: $subject) {
//       success
//       ticket {
//         id
//         subject
//       }
//     }
//   }
// `;

// Mutation to close a ticket
export const CLOSE_TICKET_MUTATION = gql`
  mutation CloseTicket($ticketId: String!) {
    closeTicket(ticketId: $ticketId) {
      responseMsg
    }
  }
`;

// Mutation to add a reply to a ticket
export const ADD_REPLY_MUTATION = gql`
  mutation ReplyToTicket($ticketId: String!, $replyMessage: String!) {
    replyToTicket(ticketId: $ticketId, replyMessage: $replyMessage) {
      id
      createdAt
      replyMessage
      sender {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
      }
      receiver {
        id
        email
        role
        profile {
          name
          firstName
          lastName
        }
      }
    }
  }
`;

export default GET_TICKETS;

export const GET_USERS = gql`
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
      role
    }
  }
`;

export const GET_TRAINEES = gql`
  query GetTrainees($orgToken: String) {
    getTrainees(orgToken: $orgToken) {
      id
      role
      email
      password
      organizations
      pushNotifications
      emailNotifications
    }
  }
`;

export const UPDATE_TICKET = gql`
  mutation UpdateTicket($updateTicketId: ID!, $input: UpdateTicketInput!) {
    updateTicket(updateTicketId: $updateTicketId, input: $input) {
      responseMsg
    }
  }
`;

export const DELETE_TICKET = gql`
  mutation DeleteTicket($deleteTicketId: ID!) {
    deleteTicket(id: $deleteTicketId) {
      responseMsg
    }
  }
`;
