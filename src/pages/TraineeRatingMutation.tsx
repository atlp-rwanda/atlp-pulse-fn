import { gql } from '@apollo/client';

const RATING_MUTATION = gql`
query Query {
  fetchRatings {
    user
    sprint
    quantity
    quality
    professional_Skills
  }
}`;
export default RATING_MUTATION;
