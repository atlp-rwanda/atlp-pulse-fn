import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation LoginUser($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
      user {
        id
        role
        email
        profile {
          firstName
          lastName
          name
        }
      }
    }
  }
`;

export default LOGIN_MUTATION;
