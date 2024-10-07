import { gql } from '@apollo/client';

const MAKE_DEFAULT_GRADING_SYSTEM = gql`
  mutation MakeRatingdefault($makeRatingdefaultId: ID) {
    makeRatingdefault(id: $makeRatingdefaultId)
  }
`;

export default MAKE_DEFAULT_GRADING_SYSTEM;
