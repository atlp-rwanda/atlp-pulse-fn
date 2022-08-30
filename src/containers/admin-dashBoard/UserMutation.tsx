import { gql } from '@apollo/client';

const ROLE_QUERY = gql`
  query Query {
    getAllUsers {
      id
      role
      email
    }
  }
`;

export default ROLE_QUERY;
