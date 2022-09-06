import { gql } from '@apollo/client';

export const GET_TRAINEES_QUERY = gql`
  query GetCoordinatorTrainees($orgToken: String) {
    getCoordinatorTrainees(orgToken: $orgToken) {
      profile {
        name
      }
      email
      cohort {
        name
        phase
      }
    }
  }
`;

export const GET_COORDINATOR_COHORTS_QUERY = gql`
  query GetCoordinatorCohorts($orgToken: String) {
    getCoordinatorCohorts(orgToken: $orgToken) {
      name
      id
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
