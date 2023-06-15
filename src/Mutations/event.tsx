import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents($authToken: String) {
    getEvents(authToken: $authToken) {
      end
      hostName
      start
      timeToEnd
      timeToStart
      title
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
    $authToken: String
  ) {
    createEvent(
      title: $title
      end: $end
      timeToStart: $timeToStart
      timeToEnd: $timeToFinish
      hostName: $hostName
      start: $start
      authToken: $authToken
    ) {
      end
      hostName
      start
      timeToEnd
      title
      timeToStart
    }
  }
`;
