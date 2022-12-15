import { gql } from '@apollo/client';

export const GET_TEAMS = gql`
query Query($orgToken: String) {
    getAllTeams(orgToken: $orgToken) {
      cohort {
        name
        coordinator {
          email
        }
      }
      name
    }
  }
`;
export default GET_TEAMS

export const ADD_TEAMS = gql`mutation Mutation($name: String!, $cohortName: String!, $orgToken: String!) {
  addTeam(name: $name, cohortName: $cohortName, orgToken: $orgToken) {
    name
    cohort {
      name
    }
  }
}

`;