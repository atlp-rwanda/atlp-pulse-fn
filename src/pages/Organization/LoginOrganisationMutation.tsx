import { gql } from '@apollo/client';

const LOGIN_ORGANIZATION_MUTATION = gql`
  mutation LoginOrg($orgInput: OrgInput) {
    loginOrg(orgInput: $orgInput) {
      token
    }
  }
`;

export default LOGIN_ORGANIZATION_MUTATION;
