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
        id
      }
      email
      role
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
        firstName
        lastName
        city
        country
        phoneNumber
        biography
        avatar
        id
        user {
          id
          status {
            status
            date
            reason
          }
        }
        name
        githubUsername
        resume
      }
      email
      role
      team {
        name
        cohort {
          id
          startDate
          program {
            name
            manager {
              profile {
                name
              }
              email
            }
          }
          name
          phase {
            name
          }
        }
      }
      ratings {
        average
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
