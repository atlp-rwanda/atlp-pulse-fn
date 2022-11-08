import { gql } from '@apollo/client';

const DELETE_GRADING_SYSTEM = gql`
  mutation DeleteRatingSystem($deleteRatingSystemId: ID!) {
    deleteRatingSystem(id: $deleteRatingSystemId)
  }
`;
export default DELETE_GRADING_SYSTEM;
