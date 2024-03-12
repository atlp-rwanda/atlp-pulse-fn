import { gql } from '@apollo/client';

// Query to get a single session by ID
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

// Query to get a list of all sessions
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

// Mutation to create a new session
export const CREATE_SESSION = gql`
  mutation CreateSession($sessionInput: SessionInput) {
    createSession(sessionInput: $sessionInput) {
      id
      Sessionname
      description
      platform
      duration
      organizer
    }
  }
`;

// Mutation to delete a session by ID
export const DELETE_SESSION = gql`
  mutation DeleteSession($ID: ID!) {
    deleteSession(ID: $ID)
  }
`;

// Mutation to edit/update a session by ID
export const EDIT_SESSION = gql`
  mutation EditSession($ID: ID!, $editSessionInput: EditSessionInput) {
    editSession(id: $ID, editSessionInput: $editSessionInput)
  }
`;
