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

export const GET_ALL_TTL_USERS = gql`
  query GetAllTTLUsers($orgToken: String!) {
    getAllTTLUsers(orgToken: $orgToken) {
      profile {
        name
      }
      email
      team {
        name
        cohort {
          name
        }
      }
    }
  }
`;

export const GET_TTL_TRAINEES = gql`
  query GetTTLTrainees($orgToken: String) {
    getTTLTrainees(orgToken: $orgToken) {
      profile {
        githubUsername
        address
        name
        avatar
        resume
      }
      email
      role
      team {
        name
        cohort {
          name
        }
      }
      cohort {
        name
      }
      program {
        name
        manager {
          email
        }
      }
    }
  }
`;
export const DROP_TTL_USER = gql`
  mutation DropTTLUser($email: String!, $reason: String!) {
    dropTTLUser(email: $email, reason: $reason)
  }
`;
export default GET_PROFILE;
