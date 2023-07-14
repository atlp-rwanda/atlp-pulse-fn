import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents($authToken: String) {
    getEvents(authToken: $authToken) {
      end
      hostName
      start
      timeToEnd
      timeToStart
      guests
      title
      guests
    }
  }
`;
export const GET_ACCEPTED_EVENTS = gql`
  query GetAcceptedEvents($authToken: String) {
    getAcceptedEvents(authToken: $authToken) {
      end
      hostName
      start
      timeToEnd
      timeToStart
      guests
      title
      guests
    }
  }
`;

export const ADD_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $end: String!
    $timeToStart: String!
    $timeToFinish: String!
    $hostName: String!
    $start: String!
    $guests: [String!]!
    $authToken: String
  ) {
    createEvent(
      title: $title
      end: $end
      timeToStart: $timeToStart
      timeToEnd: $timeToFinish
      hostName: $hostName
      start: $start
      guests: $guests
      authToken: $authToken
    ) {
      end
      hostName
      start
      timeToEnd
      title
      timeToStart
      guests
    }
  }
`;

export const SEND_INVITATION_EMAIL = gql`
  mutation SendInvitationEmail($email: String!, $title: String!) {
    sendInvitationEmail(email: $email, title: $title) {
      email
      title
    }
  }
`;

export const GET_ALL_COHORTS = gql`
  query($orgToken: String) {
    getAllCohorts(orgToken: $orgToken) {
      name
    }
  }
`;




