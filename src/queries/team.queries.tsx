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

export const GET_ALL_TEAMS = gql`
  query Query($orgToken: String) {
    getAllTeams(orgToken: $orgToken) {
      id
      name
      isJobActive
      active
      phase {
        id
        name
      }
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
      members {
        id
        email
        role
        status {
          date
          reason
          status
        }
        profile {
          firstName
          lastName
          city
          country
          phoneNumber
          biography
          avatar
          id
          name
        }
      }
    }
  }
`;
export const GET_TTL_TEAMS = gql`
  query Query($orgToken: String) {
    getTTLTeams(orgToken: $orgToken) {
      id
      name
      isJobActive
      active
      phase {
        id
        name
      }
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
      members {
        id
        email
        role
        status {
          date
          reason
          status
        }
        profile {
          firstName
          lastName
          city
          country
          phoneNumber
          biography
          avatar
          id
          name
        }
      }
    }
  }
`;
