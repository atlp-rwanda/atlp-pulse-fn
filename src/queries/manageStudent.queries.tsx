import { gql } from '@apollo/client';

export const GET_USERS_QUERY = gql`
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
    }
  }
`;

export const GET_ALL_USERS_QUERY = gql`
  query GetUsers($orgToken: String) {
    getAllUsers(orgToken: $orgToken) {
      id
      email
      role
      profile{
        firstName
        lastName
      }
    }
  }
`;

export const GET_TRAINEES_QUERY = gql`
  query GetTrainees($orgToken: String) {
    getTrainees(orgToken: $orgToken) {
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
          role
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
      cohort {
        coordinator {
          profile {
            name
            firstName
            lastName
          }
        }
      }
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
    }
  }
`;

export const GET_COHORT_TRAINEES_QUERY = gql`
  query GetCohortTrainees($cohort: String, $orgToken: String) {
    getCohortTrainees(cohort: $cohort, orgToken: $orgToken) {
      profile {
        name
      }
      email
      id
      team {
        name
        cohort {
          name
          program {
            name
          }
        }
      }
    }
  }
`;

export const GET_COHORTS_QUERY = gql`
  query GetCohorts($orgToken: String) {
    getCohorts(orgToken: $orgToken) {
      name
      id
    }
  }
`;

export const GET_TRAINEE_PROFILE = gql`
  query GetProfile {
    getProfile {
      firstName
      name
      city
      country
      address
      phoneNumber
      biography
      avatar
      cover
      lastName
      resume
    }
  }
`;

export const GET_GITHUB_STATISTICS = gql`
  query GitHubActivity($organisation: String!, $username: String!) {
    gitHubActivity(organisation: $organisation, username: $username) {
      totalCommits
      pullRequest {
        closed
        merged
        opened
      }
    }
  }
`;

export const GET_DOCUMENTATION = gql`
  query GetDocumentations {
    getDocumentations {
      description
      for
      id
      subDocuments {
        description
        title
      }
      title
    }
  }
`;

export const GET_LOGIN_ACTIVITIES = gql`
  query Query {
    getProfile {
      activity {
        date
        country_code
        country_name
        city
        IPv4
        state
        latitude
        longitude
        postal
        failed
      }
    }
  }
`;

export const GET_ORGANISATION = gql`
  query GetOrganization($name: String!) {
    getOrganization(name: $name) {
      name
      activeRepos
      gitHubOrganisation
      description
      admin {
        email
      }
    }
  }
`;

export const GET_TEAM_QUERY = gql`
  query GetAllTeamInCohort($orgToken: String, $cohort: String) {
    getAllTeamInCohort(orgToken: $orgToken, cohort: $cohort) {
      cohort {
        name
      }
      name
    }
  }
`;

export const GET_TEAM_TRAINEE_QUERY = gql`
  query GetTeamTrainees($orgToken: String, $team: String) {
    getTeamTrainees(orgToken: $orgToken, team: $team) {
      id
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
      email
      team {
        name
        cohort {
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
    }
  }
`;
