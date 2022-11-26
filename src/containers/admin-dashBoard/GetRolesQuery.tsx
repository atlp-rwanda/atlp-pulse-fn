import { gql } from '@apollo/client';

const GET_ROLE_QUERY = gql`
  query GetAllRoles {
    getAllRoles {
      id
      name
    }
    getAllUsers {
      id
      role
      email
      cohort {
      startDate
      phase
      name
      endDate
      program {
        name
        manager {
          email
          role
          profile {
            phoneNumber
            name
            lastName
            firstName
          }
        }
        organization {
          name
        }
      }
    }
    }
  }
`;

export default GET_ROLE_QUERY;
