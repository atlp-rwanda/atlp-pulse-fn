import { gql } from '@apollo/client';
import GET_PROFILE from './User';

export const GET_USERS_QUERY = gql`
  query GetUsers($orgToken: String) {
    getUsers(orgToken: $orgToken) {
      email
      id
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
      name
      }
      email
      cohort {
        name
        program {
          name
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
    coverImage
    lastName
  }
}`;

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

export const REMOVE_MEMBER_FROM_COHORT_MUTATION = gql`
  mutation RemoveMemberFromCohort(
    $cohortName: String!
    $orgToken: String!
    $email: String!
  ) {
    removeMemberFromCohort(
      cohortName: $cohortName
      orgToken: $orgToken
      email: $email
    )
  }
`;

export const EDIT_MEMBER_MUTATION = gql`
  mutation EditMember(
    $removedFromcohortName: String!
    $addedTocohortName: String!
    $email: String!
    $orgToken: String!
  ) {
    editMember(
      removedFromcohortName: $removedFromcohortName
      addedTocohortName: $addedTocohortName
      email: $email
      orgToken: $orgToken
    )
  }
`;

export const INVITE_USER_MUTATION = gql`
  mutation InviteUser($email: String!, $orgToken: String!) {
    inviteUser(email: $email, orgToken: $orgToken)
  }
`;
