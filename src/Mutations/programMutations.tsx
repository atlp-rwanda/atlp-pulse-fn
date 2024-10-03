import { gql } from '@apollo/client';

export const AddProgram = gql`
  mutation AddProgram(
    $name: String!
    $description: String!
    $managerEmail: String!
    $orgToken: String!
  ) {
    addProgram(
      name: $name
      description: $description
      managerEmail: $managerEmail
      orgToken: $orgToken
    ) {
      id
    }
  }
`;

export const DeleteProgram = gql`
  mutation DeleteProgram($deleteProgramId: ID!, $orgToken: String) {
    deleteProgram(id: $deleteProgramId, orgToken: $orgToken) {
      id
    }
  }
`;
