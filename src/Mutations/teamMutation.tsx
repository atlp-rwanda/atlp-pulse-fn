import { gql } from '@apollo/client';

export const GET_TEAMS = gql`
  query Query($orgToken: String) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
    }
  }
`;
export default GET_TEAMS;

export const ADD_TEAMS = gql`
  mutation Mutation(
    $name: String!
    $cohortName: String!
    $orgToken: String!
    $startingPhase: DateTime!
    $managerEmail: String!
    $ttlEmail: String!
  ) {
    addTeam(
      name: $name
      cohortName: $cohortName
      orgToken: $orgToken
      startingPhase: $startingPhase
      managerEmail: $managerEmail
      ttlEmail: $ttlEmail
    ) {
      name
      cohort {
        name
      }
    }
  }
`;
export const AddTeam = gql`
  mutation Mutation(
    $name: String!
    $cohortName: String!
    $orgToken: String!
    $startingPhase: DateTime!
    $ttlEmail: String!
  ) {
    addTeam(
      name: $name
      cohortName: $cohortName
      orgToken: $orgToken
      startingPhase: $startingPhase
      ttlEmail: $ttlEmail
    ) {
      name
      cohort {
        name
      }
    }
  }
`;

export const DeleteTeam = gql`
  mutation Mutation($deleteTeamId: ID!) {
    deleteTeam(id: $deleteTeamId)
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
