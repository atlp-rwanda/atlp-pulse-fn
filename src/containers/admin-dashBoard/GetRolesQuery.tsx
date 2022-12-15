import { gql } from '@apollo/client';

const GET_ROLE_QUERY = gql`
  query GetAllRoles($orgToken: String) {
    getAllRoles {
      id
      name
    }
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
    }
  }
`;

export default GET_ROLE_QUERY;
