import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents($authToken: String) {
    getEvents(authToken: $authToken) {
      id
      user
      end
      hostName
      start
      timeToEnd
      timeToStart
      title
      invitees {
        email
      }
    }
  }
`;

export const GET_EVENT = gql`
  query GetEvent($eventId: String!, $authToken: String!) {
    getEvent(eventId: $eventId,authToken: $authToken) {
      id
      user
      end
      hostName
      start
      timeToEnd
      timeToStart
      title
      invitees {
        email
      }
    }
  }
`

