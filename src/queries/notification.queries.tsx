import { gql } from '@apollo/client';

export const getAllNotification = gql`
  query Query {
    getAllNotification {
      message
      id
      receiver
      createdAt
      read
      type
      sender {
        profile {
          firstName
          lastName
          name
          cover
          country
          address
          phoneNumber
          id
          avatar
        }
      }
    }
  }
`;

export const updatedEmailNotifications = gql`
  query Query($getUpdatedEmailNotificationsId: ID!) {
    getUpdatedEmailNotifications(id: $getUpdatedEmailNotificationsId)
  }
`;

export const updatedPushNotifications = gql`
  query Query($getUpdatedPushNotificationsId: ID!) {
    getUpdatedPushNotifications(id: $getUpdatedPushNotificationsId)
  }
`;

export default getAllNotification;
