// import { gql } from '@apollo/client';
import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

import GET_PROFILE from './User';

export const DROP_TRAINEE = gql`
  mutation DropTrainee(
    $traineeId: String!
    $reason: String!
    $date: DateTime!
  ) {
    dropTrainee(traineeId: $traineeId, reason: $reason, date: $date)
  }
`;
// Define the mutation
export const UNDROP_TRAINEE = gql`
  mutation UndropTrainee($traineeId: String!) {
    undropTrainee(traineeId: $traineeId)
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

export const ADD_MEMBER_TO_TEAM = gql`
  mutation Mutation($teamName: String!, $email: String!, $orgToken: String!) {
    addMemberToTeam(teamName: $teamName, email: $email, orgToken: $orgToken)
  }
`;
