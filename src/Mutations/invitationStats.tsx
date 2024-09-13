import { gql } from '@apollo/client';

export const GET_INVITATIONS_STATISTICS_QUERY = gql`
  query GetInvitationStatistics(
    $orgToken: String!
    $startDate: String
    $endDate: String
    $daysRange: Int
  ) {
    getInvitationStatistics(
      orgToken: $orgToken
      startDate: $startDate
      endDate: $endDate
      daysRange: $daysRange
    ) {
      totalInvitations
      pendingInvitationsCount
      getPendingInvitationsPercentsCount
      getAcceptedInvitationsPercentsCount
      acceptedInvitationsCount
    }
  }
`;
