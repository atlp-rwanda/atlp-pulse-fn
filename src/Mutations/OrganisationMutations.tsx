import { gql } from '@apollo/client';

export const AddOrganization = gql`
  mutation AddOrganization(
    $organizationInput: OrganizationInput
    $action: String
  ) {
    addOrganization(organizationInput: $organizationInput, action: $action) {
      id
    }
  }
`;

// delete organisation
export const DeleteOrganization = gql`
  mutation DeleteOrganization($deleteOrganizationId: ID!) {
    deleteOrganization(id: $deleteOrganizationId) {
      id
      name
      description
    }
  }
`;

export const RegisterNewOrganization = gql`
  mutation RegisterNewOrganization(
    $organizationInput: OrganizationInput
    $action: String
  ) {
    RegisterNewOrganization(
      organizationInput: $organizationInput
      action: $action
    ) {
      name
      status
    }
  }
`;
