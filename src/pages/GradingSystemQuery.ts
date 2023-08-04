import { gql } from '@apollo/client';

const GRADING_SYSTEM_QUERY = gql`
  query Query($orgToken: String!) {
    getRatingSystems(orgToken: $orgToken) {
      description
      grade
      id
      defaultGrading
      name
      percentage
      userId
    }
  }
`;
export default GRADING_SYSTEM_QUERY;
