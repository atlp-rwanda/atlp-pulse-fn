import { gql } from '@apollo/client';

const CREATE_ROLE_MUTATION = gql`
  mutation Mutation($name: String!) {
    createUserRole(name: $name) {
      id
      name
    }
  }
`;

export default CREATE_ROLE_MUTATION;
