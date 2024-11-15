import { gql } from '@apollo/client';

export const GET_ORGANIZATIONS = gql`
  query GetOrganizations {
    getOrganizations {
      id
      name
      description
      admin {
        id
        email
      }
      status
    }
  }
`;
export const GET_ALL_ORG_USERS = gql`
  query GetAllOrgUsers {
    getAllOrgUsers {
      totalUsers
      organizations {
        organization {
          id
          name
          description
          admin {
            id
            email
            profile {
              name
              phoneNumber
            }
          }
          status
        }
        members {
          email
          profile {
            name
          }
        }
        monthPercentage
        loginsCount
        recentLocation
      }
    }
  }
`;
export const GET_REGISTRATION_STATS = gql`
  query GetRegistrationStats {
    getRegistrationStats {
      year
      stats {
        month
        users
        organizations
      }
    }
  }
`;
