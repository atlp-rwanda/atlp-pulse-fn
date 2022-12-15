import { gql } from '@apollo/client';

const ASSIGN_ROLE_MUTATION = gql`
  mutation Mutation($updateUserRoleId: ID!, $name: String, $orgToken: String) {
    updateUserRole(id: $updateUserRoleId, name: $name, orgToken: $orgToken) {
      id
      role
      email
    }
  }
`;

export default ASSIGN_ROLE_MUTATION;
