import { gql } from '@apollo/client';

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

export const GET_TEAMS_BY_ROLE = gql`
  query getTeamsByRole($orgToken: String!) {
    getTeamsByRole(orgToken: $orgToken){
      id
      name
      members {
        email
        role
      }
    }
  }
`
