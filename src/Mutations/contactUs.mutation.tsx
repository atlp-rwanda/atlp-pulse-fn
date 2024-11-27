import { gql } from '@apollo/client';

export const SEND_MESSAGE_MUTATION = gql`
  mutation sendMessage(
    $name: String!
    $email: String!
    $phone: String
    $message: String!
  ) {
    sendMessage(name: $name, email: $email, phone: $phone, message: $message)
  }
`;
