import { gql } from '@apollo/client';

export const GET_TEAMS = gql`
  query Query($orgToken: String) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
    }
  }
`;

export const GET_TEAMS_CARDS = gql`
  query Query($orgToken: String!) {
    getAllTeams(orgToken: $orgToken) {
      name
      manager {
        email
        team {
          ttl {
            email
          }
        }
      }
      ttl {
        email
      }
      avgRatings {
        quantity
        quality
        attendance
      }
      members {
        profile {
          name
        }
      }
      active
      startingPhase
      cohort {
        name
        phase {
          name
          id
        }
        startDate
        endDate
        program {
          name
          manager {
            email
            profile {
              name
              lastName
              firstName
            }
          }
        }
      }
      id
    }
  }
`;

export const GET_ALL_TEAMS = gql`
  query Query($orgToken: String) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
      cohort {
        name
        phase {
          id
          name
        }
        coordinator {
          id
        }
      }
    }
  }
`;

export default GET_TEAMS;
