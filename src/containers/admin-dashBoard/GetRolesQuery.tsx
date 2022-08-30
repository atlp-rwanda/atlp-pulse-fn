import { gql } from '@apollo/client';

const GET_ROLE_QUERY = gql`
  query GetAllRoles {
    getAllRoles {
      id
      name
    }
    getAllUsers {
      id
      role
      email
    }
  }
`;

export default GET_ROLE_QUERY;
