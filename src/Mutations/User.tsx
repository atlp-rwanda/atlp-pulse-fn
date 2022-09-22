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
      name
      biography
      avatar
    }
  }
`;

export default GET_PROFILE;
