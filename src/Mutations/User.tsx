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
    }
  }
`;

export default GET_PROFILE;
