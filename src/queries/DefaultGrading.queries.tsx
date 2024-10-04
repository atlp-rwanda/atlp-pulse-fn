import { gql } from '@apollo/client';

export const DEFAULT_GRADE = gql`
  query GetDefaultGrading {
    getDefaultGrading {
      id
      name
      grade
      description
      percentage
      userId
      defaultGrading
    }
  }
`;
