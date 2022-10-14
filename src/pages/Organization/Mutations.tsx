import { gql } from '@apollo/client';

const SIGN_UP_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!, $role: String) {
    createUser(email: $email, password: $password, role: $role) {
      token
    }
  }
`;
export default SIGN_UP_MUTATION;
