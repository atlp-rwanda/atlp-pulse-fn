import { gql } from '@apollo/client';

const GRADING_SYSTEM_MUTATION = gql`
  mutation CreateRatingSystem(
    $name: String!
    $grade: [String]!
    $description: [String]!
    $percentage: [String]!
  ) {
    createRatingSystem(
      name: $name
      grade: $grade
      description: $description
      percentage: $percentage
    ) {
      id
      name
      grade
      description
      percentage
      userId
    }
  }
`;
export default GRADING_SYSTEM_MUTATION;
