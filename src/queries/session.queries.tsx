import { gql } from '@apollo/client';

export const GET_SESSION = gql`
  query GetSession($ID: ID!) {
    getSession(id: $ID) {
      id
      Sessionname
      description
      platform
      duration
      organizer
    }
  }
`;

export const GET_SESSIONS = gql`
  query GetSessions {
    getAllSessions {
      id
      Sessionname
      description
      platform
      duration
      organizer
    }
  }
`;
