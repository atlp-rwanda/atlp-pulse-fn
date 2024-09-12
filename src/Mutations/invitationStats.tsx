import { gql } from '@apollo/client';

export const GET_INVITATIONS_STATISTICS_QUERY = gql`
  query GetInvitationStatistics($orgToken: String!) {
    getInvitationStatistics(orgToken: $orgToken) {
      totalInvitations
      pendingInvitationsCount
      getPendingInvitationsPercentsCount
      getAcceptedInvitationsPercentsCount
      acceptedInvitationsCount
    }
  }
`;
