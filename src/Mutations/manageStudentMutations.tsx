// import { gql } from '@apollo/client';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

import GET_PROFILE from './User';

export const GET_USERS_QUERY = gql`
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
    }
  }
`;

export const DROP_TRAINEE = gql`
  mutation DropTrainee(
    $traineeId: String!
    $reason: String!
    $date: DateTime!
  ) {
    dropTrainee(traineeId: $traineeId, reason: $reason, date: $date)
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

export const ADD_DOCUMENTATION = gql`
  mutation AddDocumentation(
    $title: String!
    $for: String!
    $description: String!
  ) {
    addDocumentation(title: $title, for: $for, description: $description) {
      title
      description
      id
      for
      subDocuments {
        description
        title
      }
    }
  }
`;

export const ADD_SUB_DOCUMENTATION = gql`
  mutation AddSubDocumentation(
    $id: ID!
    $title: String!
    $description: String!
  ) {
    addSubDocumentation(id: $id, title: $title, description: $description) {
      description
      id
      title
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

export const UPDATE_DOCUMENTATION = gql`
  mutation UpdateDocumentation(
    $id: ID!
    $title: String
    $for: String
    $description: String
  ) {
    updateDocumentation(
      id: $id
      title: $title
      for: $for
      description: $description
    ) {
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

export const DELETE_DOCUMENTATION = gql`
  mutation DeleteDocumentation($id: ID!) {
    deleteDocumentation(id: $id)
  }
`;

export const DELETE_SUB_DOCUMENTATION = gql`
  mutation DeleteSubDocumentation(
    $id: ID!
    $title: String!
    $description: String!
  ) {
    deleteSubDocumentation(id: $id, title: $title, description: $description) {
      id
      title
      for
      description
      subDocuments {
        description
        title
      }
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
    }
  }
`;

export const ADD_MEMBER_TO_COHORT_MUTATION = gql`
  mutation AddMemberToCohort(
    $cohortName: String!
    $email: String!
    $orgToken: String!
  ) {
    addMemberToCohort(
      cohortName: $cohortName
      email: $email
      orgToken: $orgToken
    )
  }
`;

export const ADD_REPO = gql`
  mutation addActiveRepostoOrganization($name: String!, $repoUrl: String!) {
    addActiveRepostoOrganization(name: $name, repoUrl: $repoUrl) {
      name
      activeRepos
    }
  }
`;

export const REMOVE_REPO = gql`
  mutation deleteActiveRepostoOrganization($name: String!, $repoUrl: String!) {
    deleteActiveRepostoOrganization(name: $name, repoUrl: $repoUrl) {
      name
    }
  }
`;

export const UPDATE_ORGANISATION_NAME = gql`
  mutation updateGithubOrganisation(
    $name: String!
    $gitHubOrganisation: String!
  ) {
    updateGithubOrganisation(
      name: $name
      gitHubOrganisation: $gitHubOrganisation
    ) {
      name
    }
  }
`;

export const REMOVE_MEMBER_FROM_COHORT_MUTATION = gql`
  mutation RemoveMemberFromCohort(
    $teamName: String!
    $orgToken: String!
    $email: String!
  ) {
    removeMemberFromCohort(
      teamName: $teamName
      orgToken: $orgToken
      email: $email
    )
  }
`;

export const EDIT_MEMBER_MUTATION = gql`
  mutation EditMember(
    $removedFromTeamName: String!
    $addedToTeamName: String!
    $email: String!
    $orgToken: String!
  ) {
    editMember(
      removedFromTeamName: $removedFromTeamName
      addedToTeamName: $addedToTeamName
      email: $email
      orgToken: $orgToken
    )
  }
`;

export const INVITE_USER_MUTATION = gql`
  mutation InviteUser($email: String!, $orgToken: String!, $type: String!) {
    inviteUser(email: $email, orgToken: $orgToken, type: $type)
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
export const ADD_MEMBER_TO_TEAM = gql`
  mutation Mutation($teamName: String!, $email: String!, $orgToken: String!) {
    addMemberToTeam(teamName: $teamName, email: $email, orgToken: $orgToken)
  }
`;
export const GET_TEAM_TRAINEE_QUERY = gql`
  query GetTeamTrainees($orgToken: String, $team: String) {
    getTeamTrainees(orgToken: $orgToken, team: $team) {
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
