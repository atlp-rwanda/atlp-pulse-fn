import { gql } from '@apollo/client';

const GRADING_SYSTEM_MUTATION = gql`
  mutation CreateRatingSystem(
    $name: String!
    $grade: [String]!
    $description: [String]!
    $percentage: [String]!
    $orgToken: String!
  ) {
    createRatingSystem(
      name: $name
      grade: $grade
      description: $description
      percentage: $percentage
      orgToken: $orgToken
    ) {
      id
      name
      grade
      description
      percentage
      defaultGrading
      userId
    }
  }
`;
export default GRADING_SYSTEM_MUTATION;
