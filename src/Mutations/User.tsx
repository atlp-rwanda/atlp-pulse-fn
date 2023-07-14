import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query {
    getProfile {
      firstName
      lastName
      phoneNumber
      address
      city
      country
      avatar
      cover
      name
      biography
      githubUsername
    }
  }
`;

export const GET_USERS = gql`
query GetUserEmails {
  GetUserEmails {
    email
  }
}
`;

export default GET_PROFILE;

