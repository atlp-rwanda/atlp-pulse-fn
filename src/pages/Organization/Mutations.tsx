import { gql } from '@apollo/client';

const SIGN_UP_MUTATION = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: DateTime!
    $gender: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      dateOfBirth: $dateOfBirth
      gender: $gender
      email: $email
      password: $password
    ) {
      user {
        profile {
          name
        }
      }
    }
  }
`;
export default SIGN_UP_MUTATION;
