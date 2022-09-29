import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation Mutation($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      token
      user {
        id
        role
        email
        password
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
              coverImage
            }
          }
        }
      }
    }
  }
`;

export default LOGIN_MUTATION;
