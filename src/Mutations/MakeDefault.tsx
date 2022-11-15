
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
`

const MAKE_DEFAULT_GRADING_SYSTEM = gql`
mutation MakeRatingdefault($makeRatingdefaultId: ID) {
  makeRatingdefault(id: $makeRatingdefaultId)
}
`;
export default MAKE_DEFAULT_GRADING_SYSTEM;
