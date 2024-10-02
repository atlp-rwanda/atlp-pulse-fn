import { gql } from '@apollo/client';

export const AddPhase = gql`
  mutation AddPhase($name: String!, $description: String!, $orgToken: String!) {
    addPhase(name: $name, description: $description, orgToken: $orgToken) {
      id
    }
  }
`;

export const DeletePhase = gql`
  mutation DeletePhase($deletePhaseId: ID!, $orgToken: String) {
    deletePhase(id: $deletePhaseId, orgToken: $orgToken) {
      id
    }
  }
`;
