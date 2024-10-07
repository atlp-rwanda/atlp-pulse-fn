import { gql, useSubscription } from '@apollo/client';

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
      type
      receiver
      id
    }
  }
`;

export const PUSH_NOTIFICATION_SUB = gql`
  subscription PushNotificationSub($receiverId: String!) {
    pushNotification(receiverId: $receiverId) {
      sender {
        profile {
          firstName
          lastName
          name
          avatar
        }
      }
      createdAt
      message
      read
      type
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
