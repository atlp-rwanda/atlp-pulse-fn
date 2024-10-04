import { gql } from '@apollo/client';

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
