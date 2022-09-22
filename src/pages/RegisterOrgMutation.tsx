import { gql } from '@apollo/client';

const REGISTER_ORGANIZATION_REQUEST = gql`
  mutation RequestOrganization($organizationInput: OrganizationInput!) {
    requestOrganization(organizationInput: $organizationInput)
  }
`;

export default REGISTER_ORGANIZATION_REQUEST;
