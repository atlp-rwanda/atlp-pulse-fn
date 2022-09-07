import { gql } from '@apollo/client';

const GRADING_SYSTEM_QUERY = gql`
  query {
    getRatingSystems {
      id
      name
      grade
      description
      percentage
      userId
    }
  }
`;
export default GRADING_SYSTEM_QUERY;
