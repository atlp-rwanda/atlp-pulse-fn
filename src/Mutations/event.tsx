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

export const ADD_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $end: String!
    $timeToStart: String!
    $timeToEnd: String!
    $hostName: String!
    $start: String!
    $authToken: String!
    $orgToken: String!
    $invitees: [String]!
  ) {
    createEvent(
      title: $title
      end: $end
      timeToStart: $timeToStart
      timeToEnd: $timeToEnd
      hostName: $hostName
      start: $start
      authToken: $authToken
      orgToken: $orgToken
      invitees: $invitees
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

export const EDIT_EVENT = gql`
mutation EditEvent(
    $eventId: String!
    $title: String!
    $end: String!
    $timeToStart: String!
    $timeToEnd: String!
    $hostName: String!
    $start: String!
    $authToken: String!
    $orgToken: String!
    $invitees: [String]!
  ) {
    editEvent(
      eventId: $eventId
      title: $title
      end: $end
      timeToStart: $timeToStart
      timeToEnd: $timeToEnd
      hostName: $hostName
      start: $start
      authToken: $authToken
      orgToken: $orgToken
      invitees: $invitees
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

export const CANCEL_EVENT = gql`
  mutation CancelEvent(
    $eventId: String!
    $authToken: String!
  ) {
    cancelEvent(
      eventId: $eventId
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
`

export const RESPOND_TO_EVENT_INVITATION = gql`
  mutation RespondToEventInvitation(
    $eventToken: String!
    $authToken: String!
  ) {
    respondToEventInvitation(
      eventToken: $eventToken,
      authToken: $authToken
    ) {
      end
      hostName
      start
      timeToEnd
      title
      timeToStart
      invitees {
        email,
        status
      }
    }
  }
`