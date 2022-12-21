import { gql } from '@apollo/client';

export const GetCoordinatorCohort = gql`
  query GetCoordinatorCohort($coordinatorId: String) {
    getCoordinatorCohort(coordinator_id: $coordinatorId) {
      program {
        name
      }
      name
    }
  }
`;
