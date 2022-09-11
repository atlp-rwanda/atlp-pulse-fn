import { gql } from '@apollo/client';

export const GET_TRAINEES_QUERY = gql`
  query GetTrainees {
    getTrainees {
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

export const GET_ALL_COHORTS_QUERY = gql`
  query GetAllCohorts {
    getAllCohorts {
      name
      id
    }
  }
`;

export const ADD_MEMBER_TO_COHORT_MUTATION = gql`
  mutation AddMemberToCohort($cohortName: String!, $email: String!) {
    addMemberToCohort(cohortName: $cohortName, email: $email)
  }
`;

export const REMOVE_MEMBER_FROM_COHORT_MUTATION = gql`
  mutation RemoveMemberFromCohort($cohortName: String!, $email: String!) {
    removeMemberFromCohort(cohortName: $cohortName, email: $email)
  }
`;

export const EDIT_MEMBER_MUTATION = gql`
  mutation EditMember(
    $removedFromcohortName: String!
    $addedTocohortName: String!
    $email: String!
  ) {
    editMember(
      removedFromcohortName: $removedFromcohortName
      addedTocohortName: $addedTocohortName
      email: $email
    )
  }
`;
