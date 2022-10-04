import { gql } from '@apollo/client';

const ROLE_MUTATION = gql`
  mutation UpdateUserRole($updateUserRoleId: ID!, $name: String) {
    updateUserRole(id: $updateUserRoleId, name: $name) {
      id
      role
    }
  }
`;

export default ROLE_MUTATION;
