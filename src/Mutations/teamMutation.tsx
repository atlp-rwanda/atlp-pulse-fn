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

