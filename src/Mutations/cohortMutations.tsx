import { gql } from '@apollo/client';

export const AddCohort = gql`
  mutation AddCohort(
    $name: String!
    $phaseName: String!
    $coordinatorEmail: String!
    $programName: String!
    $startDate: DateTime!
    $endDate: DateTime
    $orgToken: String!
  ) {
    addCohort(
      name: $name
      phaseName: $phaseName
      coordinatorEmail: $coordinatorEmail
      programName: $programName
      startDate: $startDate
      endDate: $endDate
      orgToken: $orgToken
    ) {
      id
      name
      phase {
        name
      }
      coordinator {
        email
      }
      program {
        name
      }
      startDate
      endDate
    }
  }
`;

export const DeleteCohort = gql`
  mutation DeleteCohort($deleteCohortId: ID!, $orgToken: String) {
    deleteCohort(id: $deleteCohortId, orgToken: $orgToken) {
      id
    }
  }
`;
