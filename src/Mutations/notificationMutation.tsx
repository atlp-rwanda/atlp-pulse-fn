import { gql, useSubscription } from '@apollo/client';

export const getAllNotification = gql`
  query Query {
    getAllNotification {
      message
      id
      receiver
      createdAt
      read
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
export default getAllNotification;

export const NotificationSubscription = gql`
  subscription Subscription($receiver: String!) {
    newRating(receiver: $receiver) {
      sender {
        profile {
          name
          avatar
        }
      }
      createdAt
      message
      read
      receiver
      id
    }
  }
`;
export const deleteNotification = gql`
  mutation Mutation($deleteNotificationsId: ID!) {
    deleteNotifications(id: $deleteNotificationsId)
  }
`;
export const markAsRead = gql`
  mutation Mutation($markAsReadId: ID!) {
    markAsRead(id: $markAsReadId)
  }
`;

export const markAllAsRead = gql`
  mutation Mutation {
    markAllAsRead
  }
`;

export const updatePushNotifications = gql`
  mutation Mutation($updatePushNotificationsId: ID!) {
    updatePushNotifications(id: $updatePushNotificationsId)
  }
`;

export const updateEmailNotifications = gql`
  mutation Mutation($updateEmailNotificationsId: ID!) {
    updateEmailNotifications(id: $updateEmailNotificationsId)
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