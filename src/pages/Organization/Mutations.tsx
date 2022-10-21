import { gql } from '@apollo/client';

export const SIGN_UP_MUTATION = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: DateTime!
    $gender: String!
    $email: String!
    $password: String!
    $orgToken: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      dateOfBirth: $dateOfBirth
      gender: $gender
      email: $email
      password: $password
      orgToken: $orgToken
    ) {
      user {
        profile {
          name
        }
      }
    }
  }
`;

export const GET_SIGNUP_ORGANIZATION = gql`
  query GetSignupOrganization($orgToken: String!) {
    getSignupOrganization(orgToken: $orgToken) {
      name
    }
  }
`;
