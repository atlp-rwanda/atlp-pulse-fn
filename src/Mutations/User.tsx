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
      user {
        organizations
        email
        role
        team {
          name
          cohort {
            name
            phase {
              name
            }
            program {
              name
            }
            startDate
          }
        }
        cohort {
          name
          program {
            name
          }
          phase {
            name
          }
        }
        program {
          name
        }
      }
    }
  }
`;

export default GET_PROFILE;
