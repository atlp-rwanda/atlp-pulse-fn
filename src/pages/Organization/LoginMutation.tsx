import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
      message
      user {
        id
        role
        email
        password
        twoFactorAuth
        profile {
          id
          firstName
          lastName
          user {
            id
            role
            email
            password
            profile {
              id
              firstName
              lastName
              name
              address
              city
              country
              phoneNumber
              biography
              avatar
              cover
            }
          }
        }
      }
    }
  }
`;
export default LOGIN_MUTATION;
