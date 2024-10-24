import { gql } from "@apollo/client";


export const GET_ALL_INVITATIONS = gql`
  query AllInvitations($limit: Int, $offset: Int,$orgToken: String!) {
    getAllInvitations(limit: $limit, offset: $offset,orgToken: $orgToken) {
      invitations {
        invitees {
          email
          role
        }
        id
        status
      }
      totalInvitations
    }
  }
`;

export const GET_INVITATIONS = gql`
  query GetInvitations($query: String!, $limit: Int, $offset: Int,$orgToken: String!) {
    getInvitations(query: $query, limit: $limit, offset: $offset,orgToken: $orgToken) {
      invitations {
        invitees {
          email
          role
        }
        id
        status
      }
      totalInvitations
    }
  }
`;

export const GET_ROLES_AND_STATUSES = gql`
  query filterInvitations($limit: Int, $offset: Int, $role: String, $status: String, $orgToken: String!) {
    filterInvitations(limit: $limit, offset: $offset, role: $role, status: $status, orgToken: $orgToken) {
      invitations {
        invitees {
          email
          role
        }
        id
        status
      }
      totalInvitations
    }
  }
`;
